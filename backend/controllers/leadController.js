import mongoose from 'mongoose';
import Lead from '../models/Lead.js';

// In-memory fallback cache for development/review if local MongoDB server is offline
let memoryLeads = [];

const isDbConnected = () => mongoose.connection.readyState === 1;

/**
 * Create a new lead from contact form
 * POST /api/leads
 * Public with honeypot spam protection
 */
export const createLead = async (req, res) => {
  try {
    const { name, email, phone, company, service, message, honeypot } = req.body;

    // Honeypot spam defense: bots usually fill hidden input fields
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Enquiry submitted successfully.'
      });
    }

    // Basic server-side field presence validation
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Phone, Service, and Message).'
      });
    }

    // Email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Phone format basic check
    const cleanedPhone = phone.trim().replace(/[\s\-()]/g, '');
    if (cleanedPhone.length < 7 || cleanedPhone.length > 15) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number.'
      });
    }

    const leadPayload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company ? company.trim() : '',
      service: service.trim(),
      message: message.trim(),
      status: 'New'
    };

    let savedLead;

    if (isDbConnected()) {
      // Primary: Save directly to MongoDB via Mongoose model
      const newLead = new Lead(leadPayload);
      savedLead = await newLead.save();
    } else {
      // Fallback: Store in memory with generated ID & timestamps if MongoDB is offline
      savedLead = {
        _id: 'lead_' + Date.now() + Math.random().toString(36).substring(2, 7),
        ...leadPayload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      memoryLeads.unshift(savedLead);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. We’ll get back to you soon.',
      leadId: savedLead._id
    });
  } catch (error) {
    console.error('[Lead Controller] Error creating lead:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while submitting your enquiry. Please try again later.'
    });
  }
};

/**
 * Get all leads (sorted descending by creation time)
 * GET /api/leads
 * Protected
 */
export const getAllLeads = async (req, res) => {
  try {
    let leads;
    if (isDbConnected()) {
      leads = await Lead.find().sort({ createdAt: -1 });
    } else {
      leads = memoryLeads;
    }

    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('[Lead Controller] Error fetching leads:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiries.'
    });
  }
};

/**
 * Get single lead by ID
 * GET /api/leads/:id
 * Protected
 */
export const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    let lead;

    if (isDbConnected()) {
      lead = await Lead.findById(id);
    } else {
      lead = memoryLeads.find((l) => l._id === id);
    }

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry lead not found.'
      });
    }

    return res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiry details.'
    });
  }
};

/**
 * Update lead status
 * PATCH /api/leads/:id
 * Protected
 */
export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['New', 'Contacted', 'Converted', 'Closed'];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`
      });
    }

    let updatedLead;

    if (isDbConnected()) {
      updatedLead = await Lead.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
      );
    } else {
      const idx = memoryLeads.findIndex((l) => l._id === id);
      if (idx !== -1) {
        memoryLeads[idx].status = status;
        memoryLeads[idx].updatedAt = new Date().toISOString();
        updatedLead = memoryLeads[idx];
      }
    }

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry lead not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: `Lead status updated to ${status}.`,
      data: updatedLead
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update lead status.'
    });
  }
};

/**
 * Delete a lead
 * DELETE /api/leads/:id
 * Protected
 */
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    let deletedLead;

    if (isDbConnected()) {
      deletedLead = await Lead.findByIdAndDelete(id);
    } else {
      const idx = memoryLeads.findIndex((l) => l._id === id);
      if (idx !== -1) {
        deletedLead = memoryLeads.splice(idx, 1)[0];
      }
    }

    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry lead not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry lead deleted successfully.'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete lead.'
    });
  }
};
