import { Link } from 'react-router-dom';
import { 
  Layout, 
  Code2, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  Wrench, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Layers
} from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: 'web-dev',
      title: 'Website Development',
      badge: 'Brand Presence & SEO',
      icon: <Layout size={28} />,
      desc: 'High-performance, beautifully styled corporate and marketing websites built to position Indian businesses as credible market leaders. Optimized for speed, mobile readability, and search engine visibility.',
      benefits: [
        '90+ PageSpeed score on mobile and desktop',
        'Clean semantic HTML and dynamic SEO metadata',
        'Mobile-first responsive layouts across all screen resolutions',
        'Easy content updates without complicated CMS overhead'
      ],
      technologies: ['React', 'Vite', 'HTML5 & CSS3', 'Semantic SEO', 'Modern CDN']
    },
    {
      id: 'web-apps',
      title: 'Web Application Development',
      badge: 'Full-Stack MERN',
      icon: <Code2 size={28} />,
      desc: 'Custom, scalable web applications built from scratch with the MERN stack. Designed to support complex user journeys, role-based workflows, real-time validations, and enterprise data persistence.',
      benefits: [
        'Scalable REST APIs powered by Node.js & Express',
        'Secure database architecture with MongoDB and Mongoose',
        'Clean, predictable state management without bloat',
        'Strict token-based JWT and bcrypt authentication safeguards'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Development',
      badge: 'Conversion & Indian Payments',
      icon: <ShoppingBag size={28} />,
      desc: 'Frictionless digital storefronts built specifically for Indian consumers. Engineered for instant mobile checkout flows, UPI QR codes, Razorpay/Cashfree gateways, and reliable inventory management.',
      benefits: [
        'One-click UPI, Cards, NetBanking, and COD payment integration',
        'Lightning-fast cart and checkout experiences to minimize drop-offs',
        'Automated order enquiry notifications and customer logging',
        'Secure transaction handling and client-side data protection'
      ],
      technologies: ['React', 'Express', 'Payment Gateways (Razorpay/UPI)', 'MongoDB', 'Node.js']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      badge: 'User Experience & Conversion',
      icon: <Smartphone size={28} />,
      desc: 'Product design that prioritizes clarity, intuitive hierarchy, and high accessibility. Tailored for India’s diverse digital populace, including first-time smartphone shoppers and regional business owners.',
      benefits: [
        'Clear typography hierarchy using modern sans-serif fonts',
        'Contrast-compliant accessible color palettes',
        'Interactive Figma prototypes and design token systems',
        'Streamlined user flows that reduce cognitive fatigue'
      ],
      technologies: ['Design Systems', 'Figma', 'Wireframing', 'WCAG Accessibility']
    },
    {
      id: 'automation',
      title: 'Business Automation',
      badge: 'Operational Efficiency',
      icon: <Cpu size={28} />,
      desc: 'Custom internal tools, workflow automation engines, and admin management dashboards that replace chaotic spreadsheets and manual WhatsApp data coordination.',
      benefits: [
        'Centralized lead, inventory, and customer enquiry tracking',
        'Elimination of human error in status management and logging',
        'Custom analytics dashboards tailored to your exact business KPIs',
        'Seamless integration with third-party webhooks and communication tools'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB Aggregations', 'Automation Scripts']
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance & Support',
      badge: 'Reliability & Uptime',
      icon: <Wrench size={28} />,
      desc: 'Proactive support packages ensuring your web assets stay online, up to date, and resilient against security vulnerabilities. You focus on growing your business while we handle technical upkeep.',
      benefits: [
        'Regular security patching, dependency auditing, and backups',
        'Performance audits to prevent speed degradation over time',
        'Fast response turnaround for content changes and feature fixes',
        'Domain, SSL, and DNS configuration management'
      ],
      technologies: ['Monitoring', 'SSL/TLS', 'Security Audits', 'Cloud Hosting Support']
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 0 3.5rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="badge-tag">End-to-End Capabilities</div>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Practical Web Engineering Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>
            Every solution we build is grounded in real Indian business needs: high mobile speed, clean maintainable code, transparent costs, and dependable long-term support.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {serviceList.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className="card service-card-grid"
                style={{
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2.5rem'
                }}
              >
                {/* Left Overview */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div className="icon-box" style={{ margin: 0 }}>
                      {srv.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {srv.badge}
                      </span>
                      <h2 style={{ fontSize: '1.75rem', margin: 0 }}>
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {srv.desc}
                  </p>

                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-gray-500)', marginBottom: '0.75rem' }}>
                      Technologies Utilized
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                      {srv.technologies.map((t, ti) => (
                        <span
                          key={ti}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            backgroundColor: 'var(--color-gray-100)',
                            color: 'var(--color-gray-800)',
                            border: '1px solid var(--color-gray-200)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn btn-primary">
                    Enquire About {srv.title}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Right Key Benefits Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-gray-50)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gray-200)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--color-gray-900)' }}>
                    Key Deliverables & Benefits
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {srv.benefits.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-primary-light)',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '0.15rem'
                          }}
                        >
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .service-card-grid {
              grid-template-columns: 1.2fr 0.8fr !important;
            }
          }
        `}</style>
      </section>

      {/* Services Bottom CTA */}
      <section style={{ backgroundColor: 'var(--color-dark)', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Need a Custom Combination of Services?
          </h2>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Whether you need a full turnkey product build or optimization of your existing web assets, we create custom scopes tailored to your budget.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Schedule a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
