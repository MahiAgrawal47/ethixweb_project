import {
  ArrowRight,
  Code2,
  Layout,
  ShoppingBag,
  Smartphone,
  Cpu,
  Wrench,
  CheckCircle2,
  Zap,
  Mail
} from 'lucide-react';

const services = [
  {
    icon: <Layout size={26} />,
    title: 'Website Development',
    desc: 'Blazing fast, SEO-ready corporate websites designed to convert visitors and establish brand authority.'
  },
  {
    icon: <Code2 size={26} />,
    title: 'Web Applications',
    desc: 'Full-stack MERN web applications engineered for seamless scalability, security, and responsive workflows.'
  },
  {
    icon: <ShoppingBag size={26} />,
    title: 'E-commerce Solutions',
    desc: 'Conversion-driven online stores integrated with UPI, Razorpay, cart optimisations, and inventory sync.'
  },
  {
    icon: <Smartphone size={26} />,
    title: 'UI/UX Product Design',
    desc: 'Intuitive, mobile-first design systems crafted for the diverse behavioural patterns of Indian consumers.'
  },
  {
    icon: <Cpu size={26} />,
    title: 'Business Automation',
    desc: 'Custom internal tools, dashboards, and portals that automate manual paperwork and reduce operational costs.'
  },
  {
    icon: <Wrench size={26} />,
    title: 'Website Maintenance',
    desc: 'Ongoing security patching, cloud monitoring, speed enhancements, and hassle-free regular updates.'
  }
];

const featuredProjects = [
  {
    name: 'BharatFin MSME Portal',
    category: 'Fintech Web Application',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    desc: 'A secure loan and working capital portal enabling Tier-2 & Tier-3 Indian MSMEs to apply for credit in under 3 minutes.',
    metrics: '3x Faster Processing'
  },
  {
    name: 'AyurVeda Organics Store',
    category: 'E-commerce Platform',
    stack: ['React', 'Express', 'Razorpay', 'Tailored CSS'],
    desc: 'D2C organic wellness store optimised for mobile browsers, instant UPI one-click checkouts, and high load during festive sales.',
    metrics: '99+ PageSpeed Score'
  },
  {
    name: 'Kavach Fleet & Logistics',
    category: 'Operations Management',
    stack: ['MERN Stack', 'REST APIs', 'Cloud DB'],
    desc: 'End-to-end consignment tracking and dispatch automation reducing manual data entry for a regional transport network.',
    metrics: '65% Time Saved'
  }
];

export default function LandingPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          position: 'relative',
          paddingTop: '4.5rem',
          paddingBottom: '5.5rem',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-gray-200)'
        }}
      >
        {/* subtle radial glow */}
        <div
          style={{
            position: 'absolute', top: '-20%', right: '-10%',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">

            {/* Left */}
            <div style={{ maxWidth: '640px' }}>
              <div className="badge-tag">
                <span>🇮🇳</span>
                <span>India-Focused Web Engineering</span>
              </div>

              <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Building Digital Experiences That Move{' '}
                <span style={{ color: 'var(--color-primary)' }}>Businesses Forward</span>
              </h1>

              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-gray-600)', marginBottom: '2.5rem' }}>
                We partner with Indian startups, MSMEs, and digital brands to craft fast, reliable, and high-converting websites and web applications with practical technology.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                <a href="mailto:hello@ethixweb.com" className="btn btn-primary btn-lg">
                  Start a Project
                  <ArrowRight size={18} />
                </a>
                <a href="#services" className="btn btn-secondary btn-lg">
                  Explore Services
                </a>
              </div>

              {/* Trust indicators */}
              <div
                style={{
                  display: 'flex', flexWrap: 'wrap', gap: '1.75rem',
                  paddingTop: '1.5rem', borderTop: '1px solid var(--color-gray-200)',
                  fontSize: '0.875rem', color: 'var(--color-gray-600)'
                }}
              >
                {['Mobile-First Performance', 'Transparent Fixed Timelines', 'Full Source Code Ownership'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} color="var(--color-primary)" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual card */}
            <div>
              <div
                className="card"
                style={{
                  padding: '2.5rem',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid var(--color-gray-300)',
                  boxShadow: '0 20px 40px -15px rgba(15,23,42,0.08), 0 0 20px rgba(220,38,38,0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {['#ef4444', '#f59e0b', '#10b981'].map((c) => (
                      <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c }} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-500)', letterSpacing: '0.05em' }}>
                    ETHIXWEB TECH STACK
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-dark)', color: '#ffffff',
                    padding: '1.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                      Speed Score
                    </span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#10b981' }}>
                      98<span style={{ fontSize: '1.2rem', color: 'var(--color-gray-400)' }}>/100</span>
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>
                      <Zap size={15} /> Sub-Second Load
                    </span>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>
                      Core Web Vitals Verified
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Clean MERN Architecture', badge: 'Production Grade', badgeClass: 'badge-converted' },
                    { label: 'India Digital Ecosystem Ready', badge: 'UPI & Mobile 1st', badgeClass: 'badge-new' },
                    { label: 'Zero Unnecessary Dependencies', badge: 'High Efficiency', badgeClass: 'badge-contacted' }
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.85rem 1rem', backgroundColor: '#ffffff',
                        borderRadius: '8px', border: '1px solid var(--color-gray-200)'
                      }}
                    >
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>{item.label}</span>
                      <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Tailored Offerings</div>
            <h2 className="section-title">Core Services Built for Growth</h2>
            <p className="section-subtitle">
              From marketing websites that win client trust to robust internal applications that streamline operations.
            </p>
          </div>

          <div className="grid-3">
            {services.map((item) => (
              <div key={item.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box">{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.925rem', flexGrow: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section id="work" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Proven Results</div>
            <h2 className="section-title">Featured Client Work</h2>
            <p className="section-subtitle">
              Realistic digital solutions deployed for Indian business contexts and operational demands.
            </p>
          </div>

          <div className="grid-3">
            {featuredProjects.map((proj) => (
              <div key={proj.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    height: '180px', borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    marginBottom: '1.5rem', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', padding: '1.5rem',
                    border: '1px solid var(--color-gray-700)', position: 'relative'
                  }}
                >
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.15rem', textAlign: 'center' }}>{proj.name}</span>
                  <div
                    style={{
                      position: 'absolute', top: '12px', right: '12px',
                      backgroundColor: 'rgba(220,38,38,0.9)', color: '#ffffff',
                      padding: '0.2rem 0.6rem', borderRadius: '4px',
                      fontSize: '0.75rem', fontWeight: 700
                    }}
                  >
                    {proj.metrics}
                  </div>
                </div>

                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  {proj.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{proj.name}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1 }}>{proj.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem', fontWeight: 600,
                        backgroundColor: 'var(--color-gray-100)', color: 'var(--color-gray-700)',
                        padding: '0.2rem 0.55rem', borderRadius: '4px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / WHY US ── */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Why Choose Us</div>
            <h2 className="section-title">Built for Indian Realities, Built to Perform</h2>
            <p className="section-subtitle">
              We combine enterprise engineering hygiene with the agility and affordability required by Indian enterprises.
            </p>
          </div>

          <div className="grid-3">
            {[
              { title: 'India-Focused Understanding', desc: 'We understand the unique dynamics of the Indian digital ecosystem—from mobile-first users to UPI payment habits and varying network speeds.' },
              { title: 'Transparent Communication', desc: 'No technical jargon or ambiguous quotes. You receive direct status updates, honest delivery timelines, and full ownership of your code.' },
              { title: 'Practical, No-Bloat Solutions', desc: 'We avoid over-engineering. We pick the right tools for your actual business scale rather than imposing unnecessary microservices or costs.' },
              { title: 'Modern Technology Stack', desc: 'Leveraging production-tested MERN architecture (React, Node, Express, MongoDB) for agility, robust security, and developer clarity.' },
              { title: 'Performance & SEO First', desc: 'Targeting 90+ PageSpeed benchmarks so your site ranks well on Google and loads in under a second across 4G and 5G connections.' },
              { title: 'Long-Term Partnership', desc: 'We stay with you beyond launch day with maintenance support, feature upgrades, and technical advice as your business scales.' }
            ].map((r) => (
              <div key={r.title} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)', backgroundColor: '#ffffff' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-dark)', color: '#ffffff', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)' }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
            Ready to Take the Next Step?
          </span>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Have a project in mind? Let's build something that works for your business.
          </h2>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Reach out today for a practical discussion, honest feasibility review, and clear quotation tailored to your requirements.
          </p>
          <a href="mailto:hello@ethixweb.com" className="btn btn-primary btn-lg">
            <Mail size={18} />
            Start a Conversation
          </a>
        </div>
      </section>

    </div>
  );
}
