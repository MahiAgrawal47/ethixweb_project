import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Users2, 
  Smartphone, 
  Coins, 
  Gauge
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First by Default',
      desc: 'Over 85% of Indian internet consumption occurs on mobile devices across 4G and 5G networks. We architect every pixel and asset to load instantly on budget smartphones and flagship devices alike.'
    },
    {
      icon: <Coins size={24} />,
      title: 'Practical, High-ROI Value',
      desc: 'Indian business founders care about tangible business outcomes, not bloated vanity features. We prioritize features that generate leads, automate paperwork, and drive measurable revenue.'
    },
    {
      icon: <Gauge size={24} />,
      title: 'Performance Without Bloat',
      desc: 'By avoiding unnecessary third-party libraries and overly complex microservice architectures, our solutions remain fast, reliable, and easily maintainable by any modern software team.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Engineering Ethics & Transparency',
      desc: 'True to the name Ethixweb, we operate with transparent fixed quotations, clear deliverables, clean git version control, and 100% intellectual property handover to our clients.'
    }
  ];

  const clientSegments = [
    {
      title: 'Indian Startups',
      desc: 'Seed to Series-A startups that need high-velocity MVPs, scalable customer onboarding flows, and product landing pages that appeal to investors and early adopters.'
    },
    {
      title: 'MSMEs & Manufacturers',
      desc: 'Family-owned manufacturing hubs, regional distributors, and traditional businesses modernizing their presence and automating B2B customer enquiries.'
    },
    {
      title: 'D2C & Retail Brands',
      desc: 'Emerging consumer brands looking to sell directly to Indian buyers with seamless UPI QR code checkout experiences and integrated shipping partner tools.'
    },
    {
      title: 'Service Providers & Consultancies',
      desc: 'Law firms, financial advisors, healthcare clinics, and logistics providers seeking credible, professional digital authority and consistent inbound leads.'
    }
  ];

  return (
    <div>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 0 3.5rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge-tag">The Ethixweb Story</div>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Engineering Practical Digital Success for Indian Enterprises
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>
            Ethixweb was founded on a simple conviction: Indian businesses deserve modern, world-class web engineering without inflated corporate agency premiums or needless architectural over-engineering.
          </p>
        </div>
      </section>

      {/* The India Story Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
            
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
                Why We Focus on India
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                India’s Digital Transformation Demands Practical Solutions
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                India is experiencing one of the fastest digital revolutions in modern history. From Tier-1 tech hubs to Tier-3 industrial corridors, millions of businesses are transitioning online to reach customers who interact primarily through smartphones, UPI, and instant digital interfaces.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-700)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Yet too many Indian businesses find themselves caught between two extremes: cheap, cookie-cutter templates that break easily, or massive IT agencies that charge exorbitant fees for over-engineered software. Ethixweb sits right in the sweet spot—providing disciplined, production-grade engineering tailored to the actual budget and pace of Indian business owners.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  Partner With Us
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            {/* India Metrics & Highlights Card */}
            <div>
              <div className="card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', border: '1px solid var(--color-gray-300)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--color-gray-900)' }}>
                  Our Understanding of Indian Business Realities
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Mobile-First Demographics</h4>
                      <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--color-gray-600)' }}>
                        Optimized touch targets, compact navigation, and sub-second asset hydration for users on 4G networks across India.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                      <Coins size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>UPI & Regional Digital Ecosystem</h4>
                      <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--color-gray-600)' }}>
                        Seamless support for instant payment protocols and Indian compliance expectations.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                      <Users2 size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Direct Founder Collaboration</h4>
                      <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--color-gray-600)' }}>
                        No layers of junior account coordinators. You brainstorm directly with skilled engineers who understand business dynamics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .about-grid {
              grid-template-columns: 1.1fr 0.9fr !important;
            }
          }
        `}</style>
      </section>

      {/* Mission & Vision Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="grid-2">
            
            <div style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--color-primary)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-gray-900)' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray-700)', lineHeight: 1.65, margin: 0 }}>
                To empower Indian startups and MSMEs with modern, reliable, and high-performance digital tools that drive measurable business expansion, without compromising on engineering standards or budgetary discipline.
              </p>
            </div>

            <div style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--color-dark)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-gray-900)' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray-700)', lineHeight: 1.65, margin: 0 }}>
                To become India’s most trusted practical web development partner, recognized for clean code, honest relationships, and digital solutions that stand the test of time as businesses expand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Client Segments</div>
            <h2 className="section-title">Who We Partner With</h2>
            <p className="section-subtitle">
              We tailor our engagement models to match the operational pace of diverse Indian business categories.
            </p>
          </div>

          <div className="grid-2">
            {clientSegments.map((seg, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                  {seg.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-700)', lineHeight: 1.6, margin: 0 }}>
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Ethical Engineering</div>
            <h2 className="section-title">The Ethixweb Principles</h2>
            <p className="section-subtitle">
              The foundational values that guide every line of code and customer commitment we make.
            </p>
          </div>

          <div className="grid-2">
            {pillars.map((pil, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {pil.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-gray-900)' }}>
                    {pil.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6 }}>
                    {pil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-dark)', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Let’s Discuss Your Next Digital Leap
          </h2>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Get in touch with our team today and let’s explore how we can engineer a digital presence that delivers real commercial growth.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
