import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronDown, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Globe, 
  Smartphone,
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

const sections = [
  {
    id: 'info-collect',
    title: 'Information We Collect',
    lastUpdated: '1 Oct 2025',
    icon: <Info size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and its affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.</p>
        <p>While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the “GOQii App” (available on iOS and Android) and a wearable GOQii fitness band ("GOQii Tracker").</p>
        <p>You can read more about GOQii and our product at website goqii.com (together with the GOQii App is hereby referred to as the "Platform").</p>
        
        <div className="privacy-sub-section">
          <h3>Personal Data</h3>
          <p>We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, respond to one of our surveys, register for access to the Services or use certain Services.</p>
        </div>

        <div className="privacy-sub-section">
          <h3>Non-Identifiable Data</h3>
          <p>When you interact with GOQii through the Platform, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently be used to specifically identify you.</p>
        </div>

        <div className="privacy-sub-section">
          <h3>Aggregated Personal Data</h3>
          <p>GOQii may conduct research on customer demographics and behavior based on the Personal Data and other information provided to us. This research may be compiled and analyzed on an aggregate basis.</p>
        </div>

        <div className="privacy-sub-section">
          <h3>Location Information</h3>
          <p>Our Service may collect and use your location information (for example, by using the GPS on your mobile device) to provide certain functionality of our Service.</p>
        </div>
      </div>
    )
  },
  {
    id: 'truedepth',
    title: 'Use of TrueDepth API for AI Skin Analysis',
    lastUpdated: '1 Oct 2025',
    icon: <Smartphone size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>Our Skin Wellness Assessment (Skinalyze) feature uses your device's TrueDepth camera API. We handle this data with the following principles:</p>
        <ul>
          <li><strong>On-Device Processing:</strong> All TrueDepth camera data is processed in real time on your device only. It never leaves your device and is not collected, stored, or shared by us.</li>
          <li><strong>Purpose of Use:</strong> This data is used exclusively to power our AI Skin Analysis and augmented reality features to provide real-time skin health insights.</li>
          <li><strong>No Identification or Advertising:</strong> We do not use TrueDepth data for facial recognition, authentication, user identification, advertising, or marketing.</li>
          <li><strong>AI Skin Analysis Results and User Data:</strong> While TrueDepth camera data itself is never stored, you may choose to save your skin analysis results or photos to your profile. These results are stored securely, never shared with third parties without your consent.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'healthkit',
    title: 'Use of HealthKit Data',
    lastUpdated: '1 Oct 2025',
    icon: <Smartphone size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>GOQii uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided.</p>
        <p>For HealthKit data, we strictly adhere to Apple's guidelines, ensuring that your health information is used only to provide health and fitness services and is never shared with third parties for advertising or other data mining purposes.</p>
      </div>
    )
  },
  {
    id: 'how-use',
    title: 'How We Use Collected Data',
    lastUpdated: '1 Oct 2025',
    icon: <Eye size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>GOQii is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you.</p>
        <div className="privacy-sub-section">
          <h3>Includes:</h3>
          <ul>
            <li><strong>Business Transfers:</strong> As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets.</li>
            <li><strong>Related Companies:</strong> We may also share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.</li>
            <li><strong>Agents, Consultants:</strong> GOQii, like many businesses, sometimes hires other companies to perform certain business-related functions.</li>
            <li><strong>Legal Requirements:</strong> GOQii may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary.</li>
            <li><strong>Other Third Parties:</strong> We may share non-personally identifiable information with other third parties for research and analysis purposes.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    lastUpdated: '1 Oct 2025',
    icon: <Globe size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>You can use the Platform without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain Services.</p>
        <p>The Platform may contain links to other web sites not operated or controlled by GOQii. The policies and procedures we described here do not apply to the Third Party Sites.</p>
      </div>
    )
  },
  {
    id: 'retention',
    title: 'Data Retention & Deletion',
    lastUpdated: '1 Oct 2025',
    icon: <Database size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>This Privacy Policy does not apply to any Personal Data collected by GOQii other than through Services. This Privacy Policy shall not apply to any unsolicited information you provide to GOQii through the Services or through any other means.</p>
        <p>We retain your Personal Data for as long as necessary to provide the services you have requested, or for other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our policies.</p>
      </div>
    )
  },
  {
    id: 'consent',
    title: 'User Consent & Control',
    lastUpdated: '1 Oct 2025',
    icon: <UserCheck size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>This Privacy Policy applies only to the Platform. GOQii does not exercise control over the sites displayed as search results or links from within our various services. These other sites may place their own cookies or other files on your computer, collect data or solicit personal information from you.</p>
      </div>
    )
  },
  {
    id: 'children',
    title: "Children's Privacy",
    lastUpdated: '1 Oct 2025',
    icon: <Shield size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>GOQii may allow access to social media platforms. We do not knowingly collect personal information from children under the age of 13. If we learn that we have collected personal information from a child under age 13, we will take steps to delete the information as soon as possible.</p>
      </div>
    )
  },
  {
    id: 'security',
    title: 'Security',
    lastUpdated: '1 Oct 2025',
    icon: <Lock size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>GOQii takes reasonable steps to protect Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error-free.</p>
      </div>
    )
  },
  {
    id: 'changes',
    title: 'Changes to Privacy Policy',
    lastUpdated: '1 Oct 2025',
    icon: <Clock size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>Your information may be transferred and maintained on servers outside your region. GOQii reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any Personal Data.</p>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'Contact Information',
    lastUpdated: '1 Oct 2025',
    icon: <ArrowRight size={20} />,
    content: (
      <div className="privacy-content-text">
        <p>Your access to and use of this Platform is subject to the Terms of Service. If you have any questions about GOQii’s Privacy Policy or the information practices of this site, please feel free to contact us.</p>
        <div className="contact-info-box">
          <p><strong>Email:</strong> privacy@goqii.com</p>
          <p><strong>Address:</strong> GOQii Technologies Pvt. Ltd., Mumbai, India</p>
        </div>
      </div>
    )
  }
];

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="privacy-header"
          >
            <div className="section-label">LEGAL</div>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="section-desc">How we handle your data and protect your privacy at GOQii.</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="privacy-layout">
          {/* DESKTOP TABS */}
          <aside className="privacy-sidebar desktop-only">
            <nav className="privacy-nav">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className={`privacy-nav-item ${activeTab === section.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(section.id)}
                >
                  <span className="nav-text">{section.title}</span>
                  <span className="nav-arrow">
                    <ArrowRight size={20} />
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* DESKTOP CONTENT */}
          <main className="privacy-main desktop-only" ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="privacy-section-card"
              >
                <div className="section-meta">
                  <div className="last-updated">
                    <Clock size={14} />
                    <span>Last Updated: {sections.find(s => s.id === activeTab)?.lastUpdated}</span>
                  </div>
                </div>
                <h2 className="section-heading">
                  <span className="section-number">{(sections.findIndex(s => s.id === activeTab) + 1)}. </span>
                  {sections.find(s => s.id === activeTab)?.title.toUpperCase()}
                </h2>
                <div className="section-body">
                  {sections.find(s => s.id === activeTab)?.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* MOBILE ACCORDION */}
          <div className="mobile-only privacy-accordion">
            {sections.map((section, index) => (
              <div key={section.id} className="accordion-item">
                <button 
                  className={`accordion-trigger ${expandedAccordion === section.id ? 'active' : ''}`}
                  onClick={() => toggleAccordion(section.id)}
                >
                  <div className="trigger-left">
                    <span className="trigger-number">{(index + 1)}. </span>
                    <span className="trigger-title">{section.title}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`chevron ${expandedAccordion === section.id ? 'rotate' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {expandedAccordion === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="accordion-content"
                    >
                      <div className="section-meta">
                        <div className="last-updated">
                          <Clock size={14} />
                          <span>Last Updated: {section.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="section-body">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .privacy-page {
          padding-top: 80px;
          min-height: 100vh;
          background: var(--bg);
          display: block;
          width: 100%;
          text-align: left;
        }

        .privacy-hero {
          padding: 80px 0 60px;
          background: linear-gradient(to bottom, rgba(0, 255, 149, 0.05), transparent);
          border-bottom: 1px solid var(--border);
          margin-bottom: 60px;
        }

        .privacy-header {
          max-width: 800px;
          text-align: left;
        }

        .privacy-page .container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
        }

        .privacy-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          grid-template-areas: "sidebar main";
          gap: 30px;
          margin-bottom: 120px;
          align-items: start;
          width: 100%;
        }

        .privacy-sidebar {
          grid-area: sidebar;
          position: sticky;
          top: 120px;
          height: fit-content;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .privacy-main {
          grid-area: main;
          width: 100%;
          max-width: 800px;
        }

        .privacy-nav {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          border-top: 1px solid var(--border);
        }

        .privacy-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          color: var(--text);
          font-size: 0.95rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          border-radius: 0;
          transition: all 0.2s ease;
          position: relative;
          width: 100%;
        }

        .privacy-nav-item:hover {
          background: transparent;
          color: var(--green);
        }

        .privacy-nav-item.active {
          background: transparent;
          color: var(--green);
        }

        .nav-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .privacy-nav-item:hover .nav-arrow,
        .privacy-nav-item.active .nav-arrow {
          color: var(--green);
          transform: translateX(5px);
        }

        .nav-text {
          flex: 1;
          line-height: 1.3;
        }

        .privacy-section-card {
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          min-height: auto;
        }

        .section-number {
          color: var(--green);
          margin-right: 8px;
        }

        .section-heading {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 32px;
          letter-spacing: -0.01em;
          color: var(--text);
          line-height: 1.2;
        }

        .privacy-content-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .privacy-sub-section {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }

        .privacy-sub-section h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text);
        }

        .privacy-sub-section ul {
          list-style: none;
          padding: 0;
        }

        .privacy-sub-section li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 16px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .privacy-sub-section li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background: var(--green);
          border-radius: 50%;
        }

        .contact-info-box {
          background: rgba(0, 255, 149, 0.05);
          border: 1px solid rgba(0, 255, 149, 0.1);
          padding: 24px;
          border-radius: 16px;
          margin-top: 24px;
        }

        .contact-info-box p {
          margin-bottom: 12px;
          color: var(--text);
        }

        .contact-info-box p:last-child {
          margin-bottom: 0;
        }

        /* MOBILE STYLES */
        .mobile-only {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: block;
          }
          .privacy-page {
            padding-top: 60px;
          }
          .privacy-hero {
            padding: 40px 0;
            margin-bottom: 40px;
          }

          .privacy-page .container {
            padding: 0 20px;
          }

          .privacy-layout {
            grid-template-columns: 1fr;
            grid-template-areas: none;
            gap: 30px;
          }
          .section-heading {
            font-size: 1.75rem;
            margin-bottom: 24px;
          }

          .privacy-content-text p {
            font-size: 1rem;
            line-height: 1.6;
          }

          .privacy-sub-section {
            margin-top: 24px;
            padding-top: 24px;
          }

          .privacy-sub-section h3 {
            font-size: 1.1rem;
          }

          .contact-info-box {
            padding: 16px;
          }

          .privacy-section-card {
            padding: 30px;
            min-height: auto;
          }

          .privacy-accordion {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .accordion-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
          }
          .accordion-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--text);
            text-align: left;
          }
          .trigger-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .trigger-number {
            color: var(--green);
            font-weight: 800;
          }
          .trigger-title {
            font-weight: 600;
            font-size: 1rem;
          }
          .chevron {
            transition: transform 0.3s ease;
            color: var(--text-muted);
          }
          .chevron.rotate {
            transform: rotate(180deg);
          }
          .accordion-content {
            padding: 0 20px 24px;
          }
          .section-body {
            margin-top: 20px;
          }
          .section-heading {
            font-size: 1.75rem;
            color: var(--green);
          }
          .section-number {
            color: var(--green);
          }
        }
      `}</style>
    </div>
  );
}
