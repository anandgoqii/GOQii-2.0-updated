import React, { useEffect } from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export default function TermsPage({ onBack }: TermsPageProps) {
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
    <div className="terms-page">
      {/* HERO SECTION */}
      <section className="terms-hero">
        <div className="hero-bg"></div>
        <div className="grid-bg"></div>
        <div className="container reveal" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div className="section-label" style={{ marginBottom: '24px' }}>Legal & Privacy</div>
          <h1 className="section-title" style={{ textAlign: 'left', marginLeft: 0, fontSize: '3rem', marginBottom: '16px' }}>Terms of Service & Privacy</h1>
          <p className="text-muted" style={{ marginBottom: '40px', fontWeight: 600 }}>Last Updated: 26th Oct 2023</p>
          
          <div className="terms-content" style={{ textAlign: 'left', color: 'var(--text)', lineHeight: '1.8' }}>
            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px' }}>Introduction</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and/or its subsidiaries, affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this, by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the “GOQii App” (available on iOS and Android platforms) and a wearable GOQii fitness band (“GOQii Tracker”).
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You can read more about GOQii and our product on the website “goqii.com” (together with the GOQii App is hereby referred to as the "Platform").
              </p>
            </div>

            <hr style={{ borderColor: 'var(--border)', margin: '40px 0', opacity: 0.3 }} />

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Terms of Use</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                These Terms of Service along with the Privacy Policy ("Terms") govern your access to and use of the Services, so please read them carefully before using the Services.
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                By accessing and using any of the Services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Your Use of Services</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You must be 18 years of age to access and use the Services and should be able to contract as per the laws of your jurisdiction.
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You may use the Services only in compliance with these Terms and all laws applicable to you.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Account & Registration</h2>
              <p style={{ marginBottom: '10px', opacity: 0.9 }}>In order to register an account and access or use the Services, you may be required to provide certain information including:</p>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Full name</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Email address</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Password</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Contact details</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Medical and fitness information</li>
              </ul>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>You are responsible for maintaining the accuracy and confidentiality of your account.</p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>We Do Not Provide Medical Advice</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9, fontWeight: 700 }}>
                GOQii DOES NOT PROVIDE MEDICAL ADVICE. DO NOT USE THE SITE OR THE SERVICES FOR ANY MEDICAL OR MENTAL HEALTH NEEDS.
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You should consult with your physician before making any changes to your diet or exercise program.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Modifications to Services</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                The Services may change over time as we add more features. We may modify, suspend or discontinue the Services at any time without prior notice.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>User Content</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You are solely responsible for all content you upload, post, or transmit via the Services. GOQii reserves the right to remove any content that violates these Terms.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Services Content</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                All content, including data, text, images, and software, is owned exclusively by GOQii and protected under applicable laws. You may use the content only for personal, non-commercial use.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Third Party Content & Services</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii may provide links to third-party websites and services. We are not responsible for the content, policies, or practices of third-party providers.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Doctor Policy</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii connects users with doctors for general guidance only. No formal diagnosis, treatment, or prescriptions are provided.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Health Locker & Data Usage</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                Your medical records and health data may be stored and shared with GOQii coaches, doctors, or third-party providers as required. All reasonable measures are taken to safeguard your data.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Indemnity</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                You agree to indemnify and hold GOQii harmless from any claims, damages, or liabilities arising from your use of the Services.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Purchases & Warranty</h2>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> No cash refunds on purchases</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Products may be exchanged under warranty conditions</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Warranty applies only to manufacturing defects</li>
              </ul>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Disclaimer of Warranties</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9, fontWeight: 700 }}>
                YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.
              </p>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                All services are provided "AS IS" without warranties of any kind.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Limitation of Liability</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii shall not be liable for any direct or indirect damages arising from the use of the Services. Total liability is limited to the subscription fees paid.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Suspension / Termination</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii may suspend or terminate your account at its sole discretion without prior notice.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Subscription & Plans</h2>
              <p style={{ marginBottom: '10px', opacity: 0.9 }}>Subscriptions may be handled via Apple ID and auto-renew unless canceled. Plans include:</p>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> GOQii Personal Care – Annual</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Half Yearly</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Quarterly</li>
              </ul>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Reward Points & Third-Party Integration</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii may integrate third-party reward systems. Users are responsible for understanding third-party terms and policies.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Insurance Disclaimer</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                GOQii facilitates access to insurance services but is not responsible for claims, disputes, or outcomes.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Return Policy</h2>
              <p style={{ marginBottom: '10px', opacity: 0.9 }}>Products may be replaced under specific conditions such as:</p>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Request within 48 hours</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Original packaging maintained</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Manufacturing defects only</li>
              </ul>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Miscellaneous</h2>
              <p style={{ marginBottom: '20px', opacity: 0.9 }}>
                These Terms are governed by the laws of India. Jurisdiction: Mumbai, India.
              </p>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Complaints / Grievances</h2>
              <p style={{ marginBottom: '10px', opacity: 0.9 }}>For any concerns, please contact us via:</p>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Live chat on GOQii App</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> GOQii Website</li>
              </ul>
            </div>

            <div className="terms-section reveal">
              <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '20px' }}>Additional Terms</h2>
              <p style={{ marginBottom: '10px', opacity: 0.9 }}>By using GOQii Services, you agree to all applicable terms including:</p>
              <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', opacity: 0.9 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Terms of Service</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Terms of Sales</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}><ChevronRight size={14} className="text-green" /> Reward Terms (if applicable)</li>
              </ul>
            </div>
          </div>
          
          <div className="reveal" style={{ marginTop: '80px', textAlign: 'center' }}>
            <button onClick={onBack} className="btn-primary">Back to Home</button>
          </div>
        </div>
      </section>
    </div>
  );
}
