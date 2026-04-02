import React, { useEffect } from 'react';
import { 
  Briefcase, 
  Users, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Cpu, 
  Smartphone, 
  Stethoscope, 
  Award,
  ChevronRight,
  CheckCircle2,
  Activity,
  MessageSquare,
  Brain,
  X
} from 'lucide-react';

interface CareersPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export default function CareersPage({ onBack, onNavigate }: CareersPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="careers-page">
      {/* HERO SECTION */}
      <section className="careers-hero">
        <div className="hero-bg"></div>
        <div className="grid-bg"></div>
        <div className="hero-content reveal" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
          <div className="section-header-container" style={{ marginBottom: '0' }}>
            <div className="section-label" style={{ marginBottom: '24px' }}>Careers at GOQii</div>
          </div>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Build the Future of <br/><span className="grad">Preventive Healthcare</span></h1>
          <p className="hero-sub" style={{ maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.25rem', opacity: 0.8 }}>Join us in transforming how the world approaches health — from reactive treatment to continuous, AI-driven prevention.</p>
          <a href="#open-roles" className="btn-primary">View Open Roles</a>
        </div>
      </section>

      {/* WHY GOQii */}
      <section className="careers-why">
        <div className="container">
          <div className="section-header-container reveal">
            <div className="section-label">WHY GOQii</div>
            <h2 className="section-title">Work on What Truly Matters</h2>
            <p className="section-desc">
              At GOQii, we are building an ecosystem that impacts millions of lives by combining AI, behavioral science, and human coaching. We don’t just build products — we drive real-world health outcomes.
            </p>
          </div>

          <div className="careers-grid reveal">
            {[
              { icon: <Brain size={32} />, title: "AI-powered health platforms", desc: "Building the next generation of predictive health models." },
              { icon: <Activity size={32} />, title: "Preventive healthcare at scale", desc: "Impacting millions through proactive health management." },
              { icon: <Smartphone size={32} />, title: "Consumer & Enterprise solutions", desc: "Creating seamless health experiences for everyone." },
              { icon: <Zap size={32} />, title: "Behavior change systems", desc: "Leveraging science to drive lasting healthy habits." }
            ].map((item, i) => (
              <div key={i} className="careers-card">
                <div className="careers-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CULTURE */}
      <section className="careers-culture">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text reveal">
              <div className="section-label">OUR CULTURE</div>
              <h2 className="section-title">Driven by Purpose.<br/>Powered by People.</h2>
              <p className="section-desc">We are a team of technologists, health experts, designers, and innovators who believe in building meaningful impact.</p>
              
              <div className="culture-list">
                {[
                  "Mission-first thinking",
                  "Ownership and accountability",
                  "Fast execution and experimentation",
                  "Continuous learning"
                ].map((item, i) => (
                  <div key={i} className="culture-item">
                    <CheckCircle2 size={20} className="text-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="culture-visual reveal">
              <div className="culture-img-wrapper">
                <img src="https://picsum.photos/seed/culture/800/600" alt="GOQii Culture" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT GOQii */}
      <section className="careers-life">
        <div className="container">
          <div className="section-header-container reveal">
            <div className="section-label">LIFE AT GOQii</div>
            <h2 className="section-title">A Culture of Health and Performance</h2>
            <p className="section-desc">We believe in practicing what we build.</p>
          </div>

          <div className="life-grid reveal">
            {[
              { title: "Health Ecosystem", desc: "Full access to the GOQii health ecosystem for you and your family." },
              { title: "Wellness Programs", desc: "Personalized coaching, wellness programs, and fitness challenges." },
              { title: "Flexible Work", desc: "A collaborative environment that respects work-life harmony." },
              { title: "Growth Opportunities", desc: "Continuous learning and opportunities to grow across functions." }
            ].map((item, i) => (
              <div key={i} className="life-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL TEAM */}
      <section className="careers-global">
        <div className="container reveal">
          <div className="global-content section-header-container">
            <div className="section-label">GLOBAL TEAM</div>
            <h2 className="section-title">Built Across Borders</h2>
            <p className="section-desc">With teams across India, UK, and global markets, GOQii brings together diverse perspectives to solve complex health challenges.</p>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="careers-roles" id="open-roles">
        <div className="container">
          <div className="section-header-container reveal">
            <div className="section-label">OPEN ROLES</div>
            <h2 className="section-title">Join Our Team</h2>
            <p className="section-desc">Explore opportunities across our core functions.</p>
          </div>

          <div className="roles-grid reveal">
            {[
              "Engineering & AI",
              "Product & Design",
              "Health & Coaching",
              "Marketing & Growth",
              "Sales & Partnerships"
            ].map((role, i) => (
              <div key={i} className="role-item">
                <span>{role}</span>
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
            <button className="btn-primary">View All Open Positions</button>
          </div>
        </div>
      </section>

      {/* HIRING CTA */}
      <section className="hiring-cta">
        <div className="container reveal">
          <div className="hiring-card">
            <h2 className="section-title">Ready to Make an Impact?</h2>
            <p className="section-desc">If you’re passionate about health, technology, and building for scale — we’d love to hear from you.</p>
            <div className="hiring-btns">
              <button className="btn-primary">Apply Now</button>
              <button className="btn-ghost">Contact Recruitment Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
