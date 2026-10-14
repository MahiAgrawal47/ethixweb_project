import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
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

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
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
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-gray-700)', textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="mailto:hello@ethixweb.com" className="btn btn-primary btn-sm">
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-toggle">
          <a href="mailto:hello@ethixweb.com" className="btn btn-primary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
            Enquire
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: 'var(--color-gray-800)', display: 'flex', alignItems: 'center' }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-gray-200)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-gray-800)', padding: '0.5rem 0', borderBottom: '1px solid var(--color-gray-100)', textDecoration: 'none' }}
            >
              {link.name}
            </a>
          ))}
          <a href="mailto:hello@ethixweb.com" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
