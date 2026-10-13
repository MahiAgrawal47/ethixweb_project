import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { submitLead } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    honeypot: '' // spam trap
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const services = [
    'Website Development',
    'Web Application Development',
    'E-commerce Development',
    'UI/UX Design',
    'Business Automation',
    'Website Maintenance'
  ];

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim()) {
      errs.email = 'Valid email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    const cleanPhone = formData.phone.trim().replace(/[\s\-()]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      errs.phone = 'Please provide a valid phone number (7-15 digits).';
    }

    if (!formData.service) {
      errs.service = 'Please select a service of interest.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief project message or requirements.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError('');

    try {
      const res = await submitLead(formData);

      if (res.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          honeypot: ''
        });
      } else {
        setServerError(res.message || 'Something went wrong. Please check your details and try again.');
      }
    } catch (err) {
      setServerError('An unexpected error occurred while communicating with the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 0 3rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <div className="badge-tag">Get In Touch</div>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Start a Conversation With Ethixweb
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>
            Tell us about your digital goals, timeline, or current technical bottlenecks. We respond promptly with practical recommendations and clear pricing.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }} className="contact-grid">
            
            {/* Left: Contact Form Card */}
            <div>
              <div className="card" style={{ padding: '2.5rem' }}>
                
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: '#dcfce7',
                        color: '#15803d',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--color-gray-900)', marginBottom: '1rem' }}>
                      Enquiry Received!
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-600)', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                      Thank you! Your enquiry has been received. We’ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: '1.75rem' }}>
                      <h2 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>
                        Project Enquiry Form
                      </h2>
                      <p style={{ fontSize: '0.925rem', color: 'var(--color-gray-500)', margin: 0 }}>
                        All fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    {serverError && (
                      <div className="alert alert-error">
                        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Honeypot field for bot spam trap */}
                    <div className="hidden-honeypot" aria-hidden="true">
                      <label htmlFor="honeypot">Leave this blank</label>
                      <input
                        type="text"
                        id="honeypot"
                        name="honeypot"
                        tabIndex="-1"
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={handleChange}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-row-2">
                      {/* Name */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                        />
                        {errors.name && <div className="form-error">{errors.name}</div>}
                      </div>

                      {/* Email */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="email">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="e.g. rahul@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="form-error">{errors.email}</div>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '1.25rem' }} className="form-row-2">
                      {/* Phone */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="phone">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
                        />
                        {errors.phone && <div className="form-error">{errors.phone}</div>}
                      </div>

                      {/* Company (Optional) */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="company">
                          Company / Business Name <span style={{ fontWeight: 400, color: 'var(--color-gray-500)' }}>(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="e.g. Sharma Enterprises"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="form-group" style={{ marginTop: '1.25rem' }}>
                      <label className="form-label" htmlFor="service">
                        Select Required Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                      >
                        <option value="">-- Choose a Service --</option>
                        {services.map((srv, i) => (
                          <option key={i} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.service && <div className="form-error">{errors.service}</div>}
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Project Overview & Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project goals, desired features, timeline expectations, or current bottlenecks..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
                      />
                      {errors.message && <div className="form-error">{errors.message}</div>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', marginTop: '0.5rem' }}
                    >
                      {loading ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1.25rem', color: 'var(--color-gray-500)', fontSize: '0.825rem' }}>
                      <ShieldCheck size={16} color="var(--color-success)" />
                      <span>Your information is strictly confidential. Zero spam guarantee.</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right: Contact Information & Direct Channels */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                <div className="card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)' }}>
                    Direct Contact Channels
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="icon-box" style={{ width: '42px', height: '42px', margin: 0, flexShrink: 0 }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Email Us Directly
                        </span>
                        <p style={{ margin: '0.2rem 0 0 0', fontWeight: 600, fontSize: '1rem', color: 'var(--color-gray-900)' }}>
                          <a href="mailto:hello@ethixweb.com" style={{ color: 'var(--color-primary)' }}>
                            hello@ethixweb.com
                          </a>
                        </p>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>Average response within 4 hours</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="icon-box" style={{ width: '42px', height: '42px', margin: 0, flexShrink: 0 }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Phone & WhatsApp
                        </span>
                        <p style={{ margin: '0.2rem 0 0 0', fontWeight: 600, fontSize: '1rem', color: 'var(--color-gray-900)' }}>
                          <a href="tel:+919876543210" style={{ color: 'var(--color-gray-900)' }}>
                            +91 98765 43210
                          </a>
                        </p>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>Mon - Sat, 9:30 AM to 7:00 PM IST</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="icon-box" style={{ width: '42px', height: '42px', margin: 0, flexShrink: 0 }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Operating Hubs
                        </span>
                        <p style={{ margin: '0.2rem 0 0 0', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-gray-900)' }}>
                          Bengaluru & Mumbai
                        </p>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>Serving businesses across India & globally</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* What Happens Next Card */}
                <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: '#ffffff', border: '1px solid var(--color-gray-200)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--color-gray-900)' }}>
                    What Happens After You Submit?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--color-gray-700)' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>1.</span>
                      <span>We review your requirements and perform an initial technical feasibility check.</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>2.</span>
                      <span>An engineer contacts you with relevant questions and a suggested timeline.</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>3.</span>
                      <span>We provide a transparent, fixed-price proposal with no hidden surprises.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .contact-grid {
              grid-template-columns: 1.25fr 0.75fr !important;
            }
          }
          @media (min-width: 640px) {
            .form-row-2 {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
