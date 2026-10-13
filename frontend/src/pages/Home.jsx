import { Link } from 'react-router-dom';
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
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Users,
  Compass,
  FileCode2,
  Rocket,
  Check
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Layout size={26} />,
      title: 'Website Development',
      desc: 'Blazing fast, SEO-ready corporate websites designed to convert visitors and establish brand authority.',
      slug: '/services#web-dev'
    },
    {
      icon: <Code2 size={26} />,
      title: 'Web Applications',
      desc: 'Full-stack MERN web applications engineered for seamless scalability, security, and responsive workflows.',
      slug: '/services#web-apps'
    },
    {
      icon: <ShoppingBag size={26} />,
      title: 'E-commerce Solutions',
      desc: 'Conversion-driven online stores integrated with UPI, Razorpay, cart optimizations, and inventory sync.',
      slug: '/services#ecommerce'
    },
    {
      icon: <Smartphone size={26} />,
      title: 'UI/UX Product Design',
      desc: 'Intuitive, mobile-first design systems crafted for the diverse behavioral patterns of Indian consumers.',
      slug: '/services#ui-ux'
    },
    {
      icon: <Cpu size={26} />,
      title: 'Business Automation',
      desc: 'Custom internal tools, dashboards, and portals that automate manual paperwork and reduce operational costs.',
      slug: '/services#automation'
    },
    {
      icon: <Wrench size={26} />,
      title: 'Website Maintenance',
      desc: 'Ongoing security patching, cloud monitoring, speed enhancements, and hassle-free regular updates.',
      slug: '/services#maintenance'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We study your business goals, target Indian customer segment, and operational challenges to identify the exact scope.'
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We craft clear wireframes, architectural blueprints, and milestone delivery schedules with zero hidden surprises.'
    },
    {
      step: '03',
      title: 'Build',
      desc: 'We write clean, modular, maintainable code using modern JavaScript, optimized CSS, and reliable backend APIs.'
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'Thorough cross-device testing, SEO checks, domain launch, and continuous handover support for sustainable growth.'
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
      desc: 'D2C organic wellness store optimized for mobile browsers, instant UPI one-click checkouts, and high load during festive sales.',
      metrics: '99+ PageSpeed Score'
    },
    {
      name: 'Kavach Fleet & Logistics',
      category: 'Operations Management',
      stack: ['MERN Stack', 'REST APIs', 'Cloud DB'],
      desc: 'End-to-end consignment tracking and dispatch automation software reducing manual data entry for a regional transport network.',
      metrics: '65% Time Saved'
    }
  ];

  const reasons = [
    {
      title: 'India-Focused Understanding',
      desc: 'We understand the unique dynamics of the Indian digital ecosystem—from mobile-first users to UPI payment habits and varying network speeds.'
    },
    {
      title: 'Transparent Communication',
      desc: 'No technical jargon or ambiguous quotes. You receive direct status updates, honest delivery timelines, and full ownership of your code.'
    },
    {
      title: 'Practical, No-Bloat Solutions',
      desc: 'We avoid over-engineering. We pick the right tools for your actual business scale rather than imposing unnecessary microservices or costs.'
    },
    {
      title: 'Modern Technology Stack',
      desc: 'Leveraging production-tested MERN architecture (React, Node, Express, MongoDB) for agility, robust security, and developer clarity.'
    },
    {
      title: 'Performance & SEO First',
      desc: 'Targeting 90+ PageSpeed benchmarks so your site ranks well on Google and loads in under a second across 4G and 5G connections.'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We stay with you beyond launch day with maintenance support, feature upgrades, and technical advice as your business scales.'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          paddingTop: '4.5rem',
          paddingBottom: '5.5rem',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-gray-200)'
        }}
      >
        {/* Subtle background radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
            
            {/* Left Content */}
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
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  Explore Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.75rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-gray-200)',
                  fontSize: '0.875rem',
                  color: 'var(--color-gray-600)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Mobile-First Performance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Transparent Fixed Timelines</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Full Source Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div>
              <div
                className="card"
                style={{
                  padding: '2.5rem',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid var(--color-gray-300)',
                  boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 20px rgba(220, 38, 38, 0.06)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-500)', letterSpacing: '0.05em' }}>
                    ETHIXWEB TECH STACK
                  </span>
                </div>

                {/* Performance Metric Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-dark)',
                    color: '#ffffff',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
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

                {/* Key Pillars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--color-gray-200)' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Clean MERN Architecture</span>
                    <span className="badge badge-converted">Production Grade</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--color-gray-200)' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>India Digital Ecosystem Ready</span>
                    <span className="badge badge-new">UPI & Mobile 1st</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--color-gray-200)' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>Zero Unnecessary Dependencies</span>
                    <span className="badge badge-contacted">High Efficiency</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .hero-grid {
              grid-template-columns: 1.15fr 0.85fr !important;
            }
          }
        `}</style>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Tailored Offerings</div>
            <h2 className="section-title">Core Services Built for Growth</h2>
            <p className="section-subtitle">
              From marketing websites that win client trust to robust internal applications that streamline operations.
            </p>
          </div>

          <div className="grid-3">
            {services.map((item, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box">
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.925rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {item.desc}
                </p>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)'
                  }}
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-secondary">
              View Detailed Services & Technology Stacks
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Our Approach</div>
            <h2 className="section-title">A Simple, Disciplined 4-Step Process</h2>
            <p className="section-subtitle">
              We eliminate confusion with a predictable workflow that keeps you informed from day one.
            </p>
          </div>

          <div className="grid-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--color-gray-50)',
                  border: '1px solid var(--color-gray-200)',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'rgba(220, 38, 38, 0.15)',
                    display: 'block',
                    marginBottom: '0.5rem',
                    lineHeight: 1
                  }}
                >
                  {step.step}
                </span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-gray-900)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Proven Results</div>
            <h2 className="section-title">Featured Client Work</h2>
            <p className="section-subtitle">
              Realistic digital solutions deployed for Indian business contexts and operational demands.
            </p>
          </div>

          <div className="grid-3">
            {featuredProjects.map((proj, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    height: '180px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-dark)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    border: '1px solid var(--color-gray-700)',
                    position: 'relative'
                  }}
                >
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.15rem', textAlign: 'center' }}>
                    {proj.name}
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(220, 38, 38, 0.9)',
                      color: '#ffffff',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {proj.metrics}
                  </div>
                </div>

                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  {proj.category}
                </span>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {proj.name}
                </h3>

                <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {proj.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-gray-100)',
                        color: 'var(--color-gray-700)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                  Discuss Similar Project
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY ETHIXWEB */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Why Choose Us</div>
            <h2 className="section-title">Built for Indian Realities, Built to Perform</h2>
            <p className="section-subtitle">
              We combine enterprise engineering hygiene with the agility and affordability required by Indian enterprises.
            </p>
          </div>

          <div className="grid-3">
            {reasons.map((r, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)',
                  backgroundColor: 'var(--color-gray-50)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', margin: 0 }}>
                    {r.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRONG CTA BANNER */}
      <section
        style={{
          backgroundColor: 'var(--color-dark)',
          color: '#ffffff',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)'
          }}
        />

        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
            Ready to Take the Next Step?
          </span>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Have a project in mind? Let’s build something that works for your business.
          </h2>
          <p style={{ color: 'var(--color-gray-400)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Reach out today for a practical discussion, honest feasibility review, and clear quotation tailored to your requirements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'transparent', color: '#ffffff', borderColor: 'var(--color-gray-600)' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
