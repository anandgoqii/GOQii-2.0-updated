import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img 
            src="https://appcdn.goqii.com/storeimg/21868_1774952258.png" 
            alt="GOQii" 
            style={{ height: '32px', width: 'auto', marginBottom: '20px', display: 'block' }} 
            referrerPolicy="no-referrer" 
          />
          <p className="footer-tagline">The Operating System for Human Longevity. Redefining healthspan with AI-driven precision medicine and behavioral science.</p>
          <div className="footer-pppp">
            <span>Predict</span>
            <span>Personalize</span>
            <span>Prevent</span>
            <span>Prosper</span>
          </div>
          <div className="footer-socials" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <a href="https://www.facebook.com/GOQiiLife" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/goqiilife" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Instagram size={20} />
            </a>
            <a href="https://x.com/goqii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/user/GOQii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/goqii/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Linkedin size={20} />
            </a>
          </div>
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
            <li><button onClick={() => onNavigate('about')} className="footer-btn">About Us</button></li>
            <li><button onClick={() => onNavigate('contact')} className="footer-btn">Contact Us</button></li>
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
  );
};

export default Footer;
