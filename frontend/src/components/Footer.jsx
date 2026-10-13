import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-gray-400)', marginTop: 'auto' }}>
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                  border: '1.5px solid #dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                  E<span style={{ color: '#dc2626' }}>.</span>
                </span>
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                Ethix<span style={{ color: '#dc2626' }}>web</span>
              </span>
            </div>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Engineering high-performance web applications and digital experiences tailored for ambitious Indian startups, MSMEs, and enterprises.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.75rem', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: '#ffffff' }}>
              <span>🇮🇳</span>
              <span>Empowering India’s Digital Economy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-400)'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-400)'}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-400)'}>
                  About Us & The India Story
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-400)'}>
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/admin" style={{ color: 'var(--color-gray-400)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-400)'}>
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>Website Development</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>Web Applications (MERN)</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>E-commerce Solutions</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>UI/UX Product Design</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>Business Automation</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray-400)' }}>Performance & Maintenance</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Connect With Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="#dc2626" />
                <a href="mailto:hello@ethixweb.com" style={{ color: '#ffffff' }}>hello@ethixweb.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} color="#dc2626" />
                <a href="tel:+919876543210" style={{ color: '#ffffff' }}>+91 98765 43210</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#dc2626" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>Bengaluru & Mumbai, India<br />(Serving pan-India clients)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.875rem'
          }}
        >
          <p style={{ color: 'var(--color-gray-500)', margin: 0 }}>
            © {new Date().getFullYear()} Ethixweb Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-gray-500)' }}>
            <span>Built with precision for Indian business growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
