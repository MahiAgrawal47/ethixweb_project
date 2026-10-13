import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getLeads, 
  updateLeadStatus, 
  deleteLead, 
  removeAuthToken, 
  getAdminUser 
} from '../services/api';
import { 
  LogOut, 
  RefreshCw, 
  Search, 
  Filter, 
  Trash2, 
  Eye, 
  X, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modals state
  const [activeLead, setActiveLead] = useState(null);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  const navigate = useNavigate();
  const adminUser = getAdminUser();

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getLeads();
      if (res.success && Array.isArray(res.data)) {
        setLeads(res.data);
      } else {
        if (res.status === 401) {
          removeAuthToken();
          navigate('/admin/login');
          return;
        }
        setError(res.message || 'Failed to retrieve enquiries.');
      }
    } catch (err) {
      setError('Network communication failed while fetching leads.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleLogout = () => {
    removeAuthToken();
    navigate('/admin/login');
  };

  const handleStatusChange = async (id, newStatus) => {
    setActionLoading(true);
    try {
      const res = await updateLeadStatus(id, newStatus);
      if (res.success) {
        setLeads((prev) =>
          prev.map((lead) => (lead._id === id ? { ...lead, status: newStatus } : lead))
        );
        if (activeLead && activeLead._id === id) {
          setActiveLead((prev) => ({ ...prev, status: newStatus }));
        }
        setFeedback({ type: 'success', text: `Lead status updated to ${newStatus}.` });
      } else {
        setFeedback({ type: 'error', text: res.message || 'Failed to update status.' });
      }
    } catch {
      setFeedback({ type: 'error', text: 'Error updating lead status.' });
    } finally {
      setActionLoading(false);
      setTimeout(() => setFeedback({ type: '', text: '' }), 4000);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTargetId) return;
    setActionLoading(true);
    try {
      const res = await deleteLead(deleteTargetId);
      if (res.success) {
        setLeads((prev) => prev.filter((lead) => lead._id !== deleteTargetId));
        if (activeLead && activeLead._id === deleteTargetId) {
          setActiveLead(null);
        }
        setFeedback({ type: 'success', text: 'Lead enquiry deleted successfully.' });
      } else {
        setFeedback({ type: 'error', text: res.message || 'Failed to delete lead.' });
      }
    } catch {
      setFeedback({ type: 'error', text: 'Error deleting lead.' });
    } finally {
      setActionLoading(false);
      setDeleteTargetId(null);
      setTimeout(() => setFeedback({ type: '', text: '' }), 4000);
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      lead.name.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.phone.toLowerCase().includes(q) ||
      (lead.company && lead.company.toLowerCase().includes(q)) ||
      lead.service.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // Simple KPI metrics
  const counts = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'New').length,
    contacted: leads.filter((l) => l.status === 'Contacted').length,
    converted: leads.filter((l) => l.status === 'Converted').length,
    closed: leads.filter((l) => l.status === 'Closed').length
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return <span className="badge badge-new">New</span>;
      case 'Contacted':
        return <span className="badge badge-contacted">Contacted</span>;
      case 'Converted':
        return <span className="badge badge-converted">Converted</span>;
      case 'Closed':
        return <span className="badge badge-closed">Closed</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-gray-50)', minHeight: '85vh', paddingBottom: '4rem' }}>
      
      {/* Top Header Bar */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-gray-200)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', margin: 0, color: 'var(--color-gray-900)' }}>
              Enquiries & Leads Dashboard
            </h1>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
              Logged in as <strong style={{ color: 'var(--color-gray-800)' }}>{adminUser?.email || 'admin@ethixweb.com'}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="btn btn-secondary btn-sm"
              title="Refresh leads list"
            >
              <RefreshCw size={15} className={loading ? 'spin-anim' : ''} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-dark btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2rem' }}>
        
        {/* Feedback message banner */}
        {feedback.text && (
          <div className={`alert ${feedback.type === 'success' ? 'alert-success' : 'alert-error'}`}>
            {feedback.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* Metrics Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', fontWeight: 600, textTransform: 'uppercase' }}>Total Enquiries</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-gray-900)', marginTop: '0.2rem' }}>{counts.total}</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600, textTransform: 'uppercase' }}>New Leads</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2563eb', marginTop: '0.2rem' }}>{counts.new}</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <span style={{ fontSize: '0.8rem', color: '#c2410c', fontWeight: 600, textTransform: 'uppercase' }}>Contacted</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c2410c', marginTop: '0.2rem' }}>{counts.contacted}</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600, textTransform: 'uppercase' }}>Converted</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#15803d', marginTop: '0.2rem' }}>{counts.converted}</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Closed</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#64748b', marginTop: '0.2rem' }}>{counts.closed}</div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-gray-200)',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flexGrow: 1, minWidth: '240px', maxWidth: '420px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)' }} />
            <input
              type="text"
              placeholder="Search by client, email, phone, company, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.5rem', fontSize: '0.9rem' }}
            />
          </div>

          {/* Status Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={16} color="var(--color-gray-500)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-700)' }}>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
            >
              <option value="All">All Statuses ({leads.length})</option>
              <option value="New">New ({counts.new})</option>
              <option value="Contacted">Contacted ({counts.contacted})</option>
              <option value="Converted">Converted ({counts.converted})</option>
              <option value="Closed">Closed ({counts.closed})</option>
            </select>
          </div>
        </div>

        {/* Leads Content Area */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)' }}>
            <RefreshCw size={28} className="spin-anim" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
            <p style={{ margin: 0, color: 'var(--color-gray-500)' }}>Loading enquiries from database...</p>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-gray-800)' }}>
              No enquiries match your criteria
            </h3>
            <p style={{ color: 'var(--color-gray-500)', margin: 0, fontSize: '0.9rem' }}>
              {searchQuery || statusFilter !== 'All' ? 'Try adjusting your search terms or filters.' : 'Submit a test enquiry from the Contact page to see it appear here.'}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="table-container desktop-table-view">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Contact Info</th>
                    <th>Company</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Received Date</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td style={{ fontWeight: 600, color: 'var(--color-gray-900)' }}>
                        {lead.name}
                      </td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-700)' }}>{lead.email}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>{lead.phone}</span>
                        </div>
                      </td>
                      <td style={{ color: 'var(--color-gray-600)' }}>
                        {lead.company || '—'}
                      </td>
                      <td>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                          {lead.service}
                        </span>
                      </td>
                      <td>
                        <select
                          value={lead.status}
                          disabled={actionLoading}
                          onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                          className="form-select"
                          style={{
                            padding: '0.35rem 0.6rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            width: 'auto',
                            borderRadius: '6px'
                          }}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Converted">Converted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                        {formatDate(lead.createdAt)}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => setActiveLead(lead)}
                            className="btn btn-secondary btn-sm"
                            style={{ padding: '0.35rem 0.65rem' }}
                            title="View Full Enquiry"
                          >
                            <Eye size={15} />
                            <span>View</span>
                          </button>
                          <button
                            onClick={() => setDeleteTargetId(lead._id)}
                            className="btn btn-sm"
                            style={{ padding: '0.35rem 0.65rem', backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' }}
                            title="Delete Lead"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout View */}
            <div className="mobile-cards-view" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredLeads.map((lead) => (
                <div key={lead._id} className="card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{lead.name}</h3>
                      {lead.company && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>
                          {lead.company}
                        </span>
                      )}
                    </div>
                    {getStatusBadge(lead.status)}
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
                    <div><strong>Email:</strong> {lead.email}</div>
                    <div><strong>Phone:</strong> {lead.phone}</div>
                    <div><strong>Service:</strong> {lead.service}</div>
                    <div><strong>Date:</strong> {formatDate(lead.createdAt)}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', borderTop: '1px solid var(--color-gray-100)', paddingTop: '0.75rem' }}>
                    <select
                      value={lead.status}
                      disabled={actionLoading}
                      onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                      className="form-select"
                      style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem', width: 'auto' }}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Converted">Converted</option>
                      <option value="Closed">Closed</option>
                    </select>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => setActiveLead(lead)}
                        className="btn btn-secondary btn-sm"
                      >
                        <Eye size={14} />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => setDeleteTargetId(lead._id)}
                        className="btn btn-sm"
                        style={{ backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>

      {/* VIEW LEAD MODAL */}
      {activeLead && (
        <div className="modal-overlay" onClick={() => setActiveLead(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-gray-200)', paddingBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Enquiry Details
                </span>
                <h2 style={{ fontSize: '1.4rem', margin: '0.2rem 0 0 0' }}>{activeLead.name}</h2>
              </div>
              <button
                onClick={() => setActiveLead(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-500)', padding: '0.2rem' }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Email Address</span>
                <a href={`mailto:${activeLead.email}`} style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                  {activeLead.email}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Phone Number</span>
                <a href={`tel:${activeLead.phone}`} style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>
                  {activeLead.phone}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Company</span>
                <span style={{ fontWeight: 600 }}>{activeLead.company || 'Not Specified'}</span>
              </div>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Requested Service</span>
                <span style={{ fontWeight: 600 }}>{activeLead.service}</span>
              </div>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Submission Date</span>
                <span>{formatDate(activeLead.createdAt)}</span>
              </div>
              <div>
                <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.8rem' }}>Status</span>
                <select
                  value={activeLead.status}
                  onChange={(e) => handleStatusChange(activeLead._id, e.target.value)}
                  className="form-select"
                  style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem', width: 'auto', marginTop: '0.2rem' }}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--color-gray-500)', display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Client Message & Requirements:
              </span>
              <div
                style={{
                  backgroundColor: 'var(--color-gray-50)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-gray-200)',
                  whiteSpace: 'pre-wrap',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  color: 'var(--color-gray-800)'
                }}
              >
                {activeLead.message}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setActiveLead(null)} className="btn btn-secondary">
                Close
              </button>
              <a href={`mailto:${activeLead.email}?subject=Regarding your enquiry with Ethixweb`} className="btn btn-primary">
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteTargetId && (
        <div className="modal-overlay" onClick={() => setDeleteTargetId(null)}>
          <div className="modal-content" style={{ maxWidth: '440px' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#991b1b' }}>
              Delete Enquiry?
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>
              Are you sure you want to delete this enquiry? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => setDeleteTargetId(null)}
                className="btn btn-secondary"
                disabled={actionLoading}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="btn btn-primary"
                style={{ backgroundColor: '#dc2626' }}
                disabled={actionLoading}
              >
                {actionLoading ? 'Deleting...' : 'Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .spin-anim {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .mobile-cards-view {
          display: none;
        }
        @media (max-width: 860px) {
          .desktop-table-view {
            display: none !important;
          }
          .mobile-cards-view {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
