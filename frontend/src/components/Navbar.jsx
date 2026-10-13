import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { isAuthenticated } from '../services/api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdmin = isAuthenticated();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-gray-200)' : 'transparent'}`,
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all 0.25s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        
        {/* Ethixweb Logo Treatment */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }} aria-label="Ethixweb Home">
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #111827 0%, #0f172a 100%)',
              border: '1.5px solid #dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(220, 38, 38, 0.2)'
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>
              E<span style={{ color: '#dc2626' }}>.</span>
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              <span style={{ color: 'var(--color-gray-900)' }}>Ethix</span>
              <span style={{ color: 'var(--color-primary)' }}>web</span>
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--color-gray-500)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-gray-700)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  textDecoration: 'none'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {isAdmin ? (
              <Link to="/admin" className="btn btn-sm btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                Admin Panel
              </Link>
            ) : (
              <Link to="/admin/login" style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', textDecoration: 'none' }}>
                Admin
              </Link>
            )}

            <Link to="/contact" className="btn btn-primary btn-sm">
              Start a Project
              <ArrowRight size={15} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-toggle">
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
            Enquire
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              color: 'var(--color-gray-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--color-gray-200)',
            padding: '1.25rem 1.5rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-gray-800)',
                padding: '0.5rem 0',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-gray-100)'
              })}
            >
              {link.name}
            </NavLink>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
              Start a Project
              <ArrowRight size={16} />
            </Link>
            {isAdmin ? (
              <Link to="/admin" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                Admin Dashboard
              </Link>
            ) : (
              <Link to="/admin/login" style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gray-500)', padding: '0.4rem' }}>
                Admin Portal Login
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Style overrides for responsive navigation */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
