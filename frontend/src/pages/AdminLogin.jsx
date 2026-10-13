import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, AlertCircle, ArrowRight } from 'lucide-react';
import { adminLogin, setAuthToken, setAdminUser } from '../services/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter both admin email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await adminLogin({ email: email.trim(), password });

      if (res.success && res.token) {
        setAuthToken(res.token);
        if (res.admin) {
          setAdminUser(res.admin);
        }
        navigate(from, { replace: true });
      } else {
        setError(res.message || 'Invalid email or password.');
      }
    } catch (err) {
      setError('Authentication request failed. Please check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.25rem', backgroundColor: 'var(--color-gray-50)' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'var(--color-dark)',
              color: 'var(--color-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
              border: '2px solid var(--color-primary)'
            }}
          >
            <ShieldCheck size={30} />
          </div>
          <h1 style={{ fontSize: '1.8rem', color: 'var(--color-gray-900)', marginBottom: '0.4rem' }}>
            Admin Portal
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--color-gray-600)', margin: 0 }}>
            Sign in with authorized administrator credentials
          </p>
        </div>

        {/* Login Card */}
        <div className="card" style={{ padding: '2.5rem' }}>
          {error && (
            <div className="alert alert-error" style={{ marginBottom: '1.5rem' }}>
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <span style={{ fontSize: '0.875rem' }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="admin-email">
                Admin Email
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  id="admin-email"
                  placeholder="admin@ethixweb.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label" htmlFor="admin-password">
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  id="admin-password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Development credentials helper hint */}
          <div
            style={{
              marginTop: '1.75rem',
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-gray-100)',
              fontSize: '0.8rem',
              color: 'var(--color-gray-600)',
              border: '1px dashed var(--color-gray-300)'
            }}
          >
            <div style={{ fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: '0.2rem' }}>
              Default Local Demo Credentials:
            </div>
            <div>Email: <code style={{ color: 'var(--color-primary)' }}>admin@ethixweb.com</code></div>
            <div>Password: <code style={{ color: 'var(--color-primary)' }}>Admin@Ethix2026</code></div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', textDecoration: 'none' }}>
            ← Return to Ethixweb Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
