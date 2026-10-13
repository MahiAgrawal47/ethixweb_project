import express from 'express';
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead
} from '../controllers/leadController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route to submit enquiry / lead
router.post('/', createLead);

// Protected admin routes
router.get('/', protectAdmin, getAllLeads);
router.get('/:id', protectAdmin, getLeadById);
router.patch('/:id', protectAdmin, updateLeadStatus);
router.delete('/:id', protectAdmin, deleteLead);

export default router;
