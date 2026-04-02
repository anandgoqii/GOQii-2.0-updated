import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  ArrowRight,
  Globe,
  Building2
} from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  theme: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack, onNavigate, theme }) => {
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
    <div className="contact-page" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* HERO */}
      <section className="contact-hero" style={{ padding: '100px 20px 60px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-label reveal" style={{ justifyContent: 'center', marginBottom: '24px', width: '100%' }}>Contact Us</div>
        <h1 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-2px' }}>
          Connect with <span className="grad">GOQii</span>
        </h1>
        <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          We’re here to support individuals, enterprises, and partners across the globe.
        </p>
      </section>

      {/* OFFICES */}
      <section className="offices-section" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header-container reveal" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>Global Presence</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Our <span className="grad">Offices</span></h2>
        </div>
        
        <div className="offices-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginTop: '40px'
        }}>
          {/* USA */}
          <div className="card reveal" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-accent" style={{ background: 'var(--blue)' }}></div>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img 
                src="https://picsum.photos/seed/office-usa/800/400" 
                alt="USA Office" 
                style={{ width: '100%', height: '100%', objectCover: 'cover', transition: 'transform 0.5s' }}
                referrerPolicy="no-referrer"
                className="hover-zoom"
              />
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 200, 255, 0.1)', color: 'var(--blue)' }}>
                  <Globe size={24} />
                </div>
                <h3 style={{ margin: 0 }}>United States</h3>
              </div>
              <div style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--blue)' }} />
                <p style={{ margin: 0, lineHeight: '1.6' }}>
                  <strong>GOQii Inc</strong><br />
                  120, Wood Avenue South, Suite 300,<br />
                  Iselin, NJ 08830
                </p>
              </div>
            </div>
          </div>

          {/* UK */}
          <div className="card reveal" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-accent" style={{ background: 'var(--green)' }}></div>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img 
                src="https://picsum.photos/seed/office-uk/800/400" 
                alt="UK Office" 
                style={{ width: '100%', height: '100%', objectCover: 'cover', transition: 'transform 0.5s' }}
                referrerPolicy="no-referrer"
                className="hover-zoom"
              />
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--green)' }}>
                  <Building2 size={24} />
                </div>
                <h3 style={{ margin: 0 }}>United Kingdom</h3>
              </div>
              <div style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--green)' }} />
                <p style={{ margin: 0, lineHeight: '1.6' }}>
                  <strong>GOQii UK Limited</strong><br />
                  29 West Way, Hove, England, BN3 8LS
                </p>
              </div>
            </div>
          </div>

          {/* INDIA */}
          <div className="card reveal" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="card-accent" style={{ background: 'var(--blue)' }}></div>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img 
                src="https://picsum.photos/seed/office-india/800/400" 
                alt="India Office" 
                style={{ width: '100%', height: '100%', objectCover: 'cover', transition: 'transform 0.5s' }}
                referrerPolicy="no-referrer"
                className="hover-zoom"
              />
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 200, 255, 0.1)', color: 'var(--blue)' }}>
                  <MapPin size={24} />
                </div>
                <h3 style={{ margin: 0 }}>India</h3>
              </div>
              <div style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--blue)' }} />
                <p style={{ margin: 0, lineHeight: '1.6' }}>
                  <strong>GOQii Technologies Pvt. Ltd.</strong><br />
                  101 Satyam Tower, Govandi East,<br />
                  Mumbai 400088, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUERIES & CORPORATE */}
      <section className="queries-section" style={{ padding: '100px 20px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
          
          <div className="reveal">
            <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', fontWeight: 800 }}>For Any <span className="grad">Queries</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--green)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>+91 8419940404</p>
                  <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>General Support Line</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 200, 255, 0.1)', color: 'var(--blue)' }}>
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>In-App Chat Support</p>
                  <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>Reach out via chat support on the GOQii App</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="card-icon" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Support Hours</p>
                  <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>Monday to Saturday<br />10:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', fontWeight: 800 }}>Corporate <span className="grad">Enquiries</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.6' }}>
              For partnerships, enterprise solutions, and corporate programs:
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
              <div className="card-icon" style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--green)' }}>
                <Mail size={24} />
              </div>
              <a href="mailto:corporatewellness@goqii.com" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}>
                corporatewellness@goqii.com
              </a>
            </div>
            <a href="https://goqii.com/healthengage" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Explore Corporate Solutions <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="contact-cta reveal" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '20px' }}>
            Let’s Build <span className="grad">Healthier Populations</span> Together
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
            Whether you're an insurer, enterprise, healthcare provider, or government body —<br />
            GOQii can help you drive measurable health outcomes.
          </p>
          <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Request a Demo
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#030508', borderTop: '1px solid var(--border)', padding: '80px 60px 40px' }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <img 
              src="https://appcdn.goqii.com/storeimg/21868_1774952258.png" 
              alt="GOQii" 
              style={{ height: '32px', width: 'auto', marginBottom: '20px', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
            <p className="footer-tagline">The Operating System for Human Longevity. Redefining healthspan with AI-driven precision medicine and behavioral science.</p>
          </div>
          <div className="footer-col">
            <h4>Consumer</h4>
            <ul>
              <li><a href="https://goqii.com/sanjeevini" target="_blank" rel="noopener noreferrer">Sanjeevini</a></li>
              <li><a href="https://goqii.com/superlife/" target="_blank" rel="noopener noreferrer">SuperLife</a></li>
              <li><a href="https://smartrx.goqii.com/" target="_blank" rel="noopener noreferrer">SmartRx</a></li>
              <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer">Wearables</a></li>
              <li><a href="https://store.goqii.com/healthprotect" target="_blank" rel="noopener noreferrer">Health Protect</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Enterprise</h4>
            <ul>
              <li><a href="https://goqii.com/healthengage" target="_blank" rel="noopener noreferrer">HealthEngage</a></li>
              <li><a href="https://goqii.com/healthengage-insurance" target="_blank" rel="noopener noreferrer">Insurance</a></li>
              <li><a href="https://goqii.com/healthengage-pharma" target="_blank" rel="noopener noreferrer">Pharma</a></li>
              <li><a href="https://goqii.com/healthengage-corporate" target="_blank" rel="noopener noreferrer">Corporate</a></li>
              <li><a href="https://indiafit.org/" target="_blank" rel="noopener noreferrer">India Fit Report</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><button onClick={onBack} className="footer-btn">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="footer-btn">About Us</button></li>
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="footer-btn">Contact Us</button></li>
              <li><a href="#">Leadership</a></li>
              <li><button onClick={() => onNavigate('careers')} className="footer-btn">Careers</button></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://indiafit.org/" target="_blank" rel="noopener noreferrer">India Fit Report</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="#">Support</a></li>
              <li><button onClick={() => onNavigate('privacy')} className="footer-btn">Privacy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="footer-btn">Terms</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 GOQii Inc. All rights reserved.</p>
          <p style={{ color: 'var(--green)', opacity: 0.4, fontSize: '.72rem', letterSpacing: '1px' }}>PREDICT · PERSONALIZE · PREVENT · PROSPER</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
