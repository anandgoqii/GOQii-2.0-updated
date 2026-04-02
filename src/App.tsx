/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import CareersPage from './CareersPage';
import TermsPage from './TermsPage';
import PrivacyPage from './PrivacyPage';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Activity, 
  MessageSquare, 
  Watch, 
  Gamepad2, 
  Stethoscope, 
  Trophy,
  ChevronRight,
  Play,
  ShieldCheck,
  Zap,
  Link,
  BarChart3,
  Database,
  Users,
  Layout,
  ClipboardList,
  Bell,
  Gift,
  Smartphone,
  Dna,
  Cpu,
  User,
  Microscope,
  Sun,
  Moon,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('predict');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // NAV SCROLL
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
      
      if (currentPage === 'home') {
        // PARALLAX HERO (Only on desktop)
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero-content') as HTMLElement;
        if (heroContent && scrollY < window.innerHeight && window.innerWidth > 768) {
          heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
          heroContent.style.opacity = String(1 - (scrollY / (window.innerHeight * 0.7)));
        } else if (heroContent) {
          heroContent.style.transform = 'none';
          heroContent.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    // INTERSECTION OBSERVER — reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));

    // COUNTER ANIMATION
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || '0');
      let current = 0;
      const step = target / 60;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = String(Math.floor(current));
      }, 20);
    };

    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target as HTMLElement);
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

    // Bio bar animation on load
    if (currentPage === 'home') {
      setTimeout(() => {
        const bar = document.querySelector('.bio-bar') as HTMLElement;
        if (bar) bar.style.width = '70%';
      }, 800);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      counterObs.disconnect();
    };
  }, [currentPage]);

  useEffect(() => {
    // animate bio bar on predict tab change
    if (activeTab === 'predict' && currentPage === 'home') {
      setTimeout(() => {
        const bar = document.querySelector('.bio-bar') as HTMLElement;
        if (bar) bar.style.width = '70%';
      }, 300);
    }
  }, [activeTab, currentPage]);

  const navigateToHomeSection = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (currentPage === 'about') {
    return (
      <>
        {/* NAV */}
        <nav id="navbar">
          <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
              alt="GOQii" 
              style={{ height: '28px', width: 'auto', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('about')} className="nav-btn active">About Us</button></li>
            <li><button onClick={() => navigateToHomeSection('healthengage')} className="nav-btn">Enterprise Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('app')} className="nav-btn">Personal Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('case-studies')} className="nav-btn">Resources</button></li>
            <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer" className="nav-btn">Blog</a></li>
            <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="nav-btn">Store</a></li>
            <li><button onClick={() => setCurrentPage('contact')} className="nav-btn">Contact Us</button></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
          </div>
        </nav>
        <AboutPage onBack={() => setCurrentPage('home')} onNavigate={(page) => setCurrentPage(page)} theme={theme} />
      </>
    );
  }

  if (currentPage === 'careers') {
    return (
      <>
        {/* NAV */}
        <nav id="navbar">
          <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
              alt="GOQii" 
              style={{ height: '28px', width: 'auto', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('about')} className="nav-btn">About Us</button></li>
            <li><button onClick={() => navigateToHomeSection('healthengage')} className="nav-btn">Enterprise Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('app')} className="nav-btn">Personal Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('case-studies')} className="nav-btn">Resources</button></li>
            <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer" className="nav-btn">Blog</a></li>
            <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="nav-btn">Store</a></li>
            <li><button onClick={() => setCurrentPage('contact')} className="nav-btn">Contact Us</button></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
          </div>
        </nav>
        <CareersPage onBack={() => setCurrentPage('home')} onNavigate={(page) => setCurrentPage(page)} />
        
        {/* FOOTER */}
        <Footer onNavigate={(page) => setCurrentPage(page)} />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        {/* NAV */}
        <nav id="navbar">
          <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
              alt="GOQii" 
              style={{ height: '28px', width: 'auto', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('about')} className="nav-btn">About Us</button></li>
            <li><button onClick={() => navigateToHomeSection('healthengage')} className="nav-btn">Enterprise Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('app')} className="nav-btn">Personal Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('case-studies')} className="nav-btn">Resources</button></li>
            <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer" className="nav-btn">Blog</a></li>
            <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="nav-btn">Store</a></li>
            <li><button onClick={() => setCurrentPage('contact')} className="nav-btn">Contact Us</button></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
          </div>
        </nav>
        <TermsPage onBack={() => setCurrentPage('home')} />
        
        {/* FOOTER */}
        <Footer onNavigate={(page) => setCurrentPage(page)} />
      </>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <>
        {/* NAV */}
        <nav id="navbar">
          <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
              alt="GOQii" 
              style={{ height: '28px', width: 'auto', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('about')} className="nav-btn">About Us</button></li>
            <li><button onClick={() => navigateToHomeSection('healthengage')} className="nav-btn">Enterprise Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('app')} className="nav-btn">Personal Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('case-studies')} className="nav-btn">Resources</button></li>
            <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer" className="nav-btn">Blog</a></li>
            <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="nav-btn">Store</a></li>
            <li><button onClick={() => setCurrentPage('contact')} className="nav-btn">Contact Us</button></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
          </div>
        </nav>
        <PrivacyPage onBack={() => setCurrentPage('home')} />
        
        {/* FOOTER */}
        <Footer onNavigate={(page) => setCurrentPage(page)} />
      </>
    );
  }

  if (currentPage === 'contact') {
    return (
      <>
        {/* NAV */}
        <nav id="navbar">
          <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
              alt="GOQii" 
              style={{ height: '28px', width: 'auto', display: 'block' }} 
              referrerPolicy="no-referrer" 
            />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('about')} className="nav-btn">About Us</button></li>
            <li><button onClick={() => navigateToHomeSection('healthengage')} className="nav-btn">Enterprise Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('app')} className="nav-btn">Personal Solutions</button></li>
            <li><button onClick={() => navigateToHomeSection('case-studies')} className="nav-btn">Resources</button></li>
            <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer" className="nav-btn">Blog</a></li>
            <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="nav-btn">Store</a></li>
            <li><button onClick={() => setCurrentPage('contact')} className="nav-btn active">Contact Us</button></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
          </div>
        </nav>
        <ContactPage onBack={() => setCurrentPage('home')} onNavigate={(page) => setCurrentPage(page)} theme={theme} />
        
        {/* FOOTER */}
        <Footer onNavigate={(page) => setCurrentPage(page)} />
      </>
    );
  }

  return (
    <>
      {/* NAV */}
      <nav id="navbar">
        <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          <img 
            src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/8363_1775122686.png" : "https://appcdn.goqii.com/storeimg/21868_1774952258.png"} 
            alt="GOQii" 
            style={{ height: '28px', width: 'auto', display: 'block' }} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <ul className="nav-links">
          <li><button onClick={() => setCurrentPage('about')} className="nav-btn">About Us</button></li>
          <li><a href="#healthengage">Enterprise Solutions</a></li>
          <li><a href="#app">Personal Solutions</a></li>
          <li><a href="#case-studies">Resources</a></li>
          <li><a href="https://goqii.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer">Store</a></li>
          <li><button onClick={() => setCurrentPage('contact')} className="nav-btn">Contact Us</button></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            className="theme-toggle" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setShowDemoForm(true)} className="nav-cta">Request Demo</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="grid-bg"></div>

        <div className="hero-container">
          <div className="hero-content">
            <h1>The Operating System<br />for <span className="grad">Human Longevity</span></h1>
            <div className="hero-pppp">
              <div className="hero-ppp-item predict">Predict</div>
              <div className="hero-ppp-item personalize">Personalize</div>
              <div className="hero-ppp-item prevent">Prevent</div>
              <div className="hero-ppp-item prosper">Prosper</div>
            </div>
            <p className="hero-sub">We are redefining healthspan with an AI-driven system that combines genomics, real-time data and neuroadaptive technology to rejuvenate aging and boost vitality.</p>
            <div className="hero-btns">
              <button onClick={() => setSelectedVideo('https://www.youtube.com/embed/GFIaNaZRhGU?autoplay=1')} className="btn-ghost">
                <span className="play-icon">▶</span> Watch How GOQii Works
              </button>
              <button onClick={() => setShowDemoForm(true)} className="btn-ghost">Request a Demo</button>
            </div>
          </div>

          {/* Hero Visual Orb */}
          <div className="hero-visual">
            <svg className="hero-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Rings */}
              <circle cx="300" cy="300" r="130" fill="none" stroke="var(--blue)" strokeOpacity="0.15" strokeWidth="1" />
              <circle cx="300" cy="300" r="200" fill="none" stroke="var(--green)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4,8" />
              <circle cx="300" cy="300" r="265" fill="none" stroke="var(--blue)" strokeOpacity="0.06" strokeWidth="1" />
              {/* Center pulse */}
              <circle cx="300" cy="300" r="60" fill="url(#centerGrad)" opacity="0.3">
                <animate attributeName="r" values="55;70;55" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <defs>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--green)" />
                  <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* GOQii text center */}
              <text x="300" y="290" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="22" fill="var(--green)" filter="url(#glow)">GOQii</text>
              <text x="300" y="312" textAnchor="middle" fontFamily="Poppins" fontWeight="400" fontSize="9" fill="var(--text-muted)" letterSpacing="3">HEALTH OS</text>

              {/* Orbiting dots */}
              <g filter="url(#glow)">
                <circle cx="300" cy="100" r="6" fill="var(--green)">
                  <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="470" cy="220" r="5" fill="var(--blue)">
                  <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="400" r="4" fill="var(--green)">
                  <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="10s" repeatCount="indefinite" additive="sum" />
                </circle>
                <circle cx="150" cy="450" r="6" fill="var(--blue)">
                  <animateTransform attributeName="transform" type="rotate" from="120 300 300" to="480 300 300" dur="9s" repeatCount="indefinite" />
                </circle>
                <circle cx="130" cy="200" r="4" fill="var(--green)">
                  <animateTransform attributeName="transform" type="rotate" from="60 300 300" to="420 300 300" dur="14s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Data flow lines */}
              <line x1="300" y1="240" x2="300" y2="100" stroke="var(--green)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,6">
                <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="360" x2="300" y2="500" stroke="var(--blue)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,6">
                <animate attributeName="stroke-dashoffset" values="0;20" dur="1.5s" repeatCount="indefinite" />
              </line>
            </svg>

            {/* HTML Overlay Nodes for better visibility and icons */}
            <div className="hero-node node-genomics" style={{ top: '22%', left: '65%' }}>
              <div className="hero-node-icon"><Dna size={16} /></div>
              <span>GENOMICS</span>
            </div>
            <div className="hero-node node-ai" style={{ top: '48%', left: '75%' }}>
              <div className="hero-node-icon"><Cpu size={16} /></div>
              <span>AI ENGINE</span>
            </div>
            <div className="hero-node node-wearables" style={{ top: '74%', left: '62%' }}>
              <div className="hero-node-icon"><Watch size={16} /></div>
              <span>WEARABLES</span>
            </div>
            <div className="hero-node node-twin" style={{ top: '55%', left: '18%' }}>
              <div className="hero-node-icon"><User size={16} /></div>
              <span>DIGITAL TWIN</span>
            </div>
            <div className="hero-node node-biomarkers" style={{ top: '28%', left: '20%' }}>
              <div className="hero-node-icon"><Microscope size={16} /></div>
              <span>BIOMARKERS</span>
            </div>
          </div>
        </div>
      </section>


      {/* PPP FRAMEWORK */}
      <section className="ppp-section" id="framework">
        <div className="section-header-container">
          <div className="section-label">Core System</div>
          <h2 className="section-title reveal">A System Built on<br /><span style={{ background: 'linear-gradient(135deg, var(--green), var(--blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Four Core Pillars</span></h2>
          <p className="section-desc reveal">Each pillar feeds the next — creating a continuous cycle of prediction, personalization, prevention, and progress.</p>
        </div>

        <div className="ppp-tabs">
          <button className={`ppp-tab ${activeTab === 'predict' ? 'active' : ''}`} onClick={() => setActiveTab('predict')}>🔬 Predict</button>
          <button className={`ppp-tab ${activeTab === 'personalize' ? 'active' : ''}`} onClick={() => setActiveTab('personalize')}>🧬 Personalize</button>
          <button className={`ppp-tab ${activeTab === 'prevent' ? 'active' : ''}`} onClick={() => setActiveTab('prevent')}>🛡️ Prevent</button>
          <button className={`ppp-tab ${activeTab === 'prosper' ? 'active' : ''}`} onClick={() => setActiveTab('prosper')}>🚀 Prosper</button>
        </div>

        {/* PREDICT */}
        <div className={`ppp-content ${activeTab === 'predict' ? 'active' : ''}`} id="tab-predict">
          <div className="flex flex-col items-center text-center mb-8 col-span-full" style={{ gridColumn: '1 / -1' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">PREDICT Your Biological Destiny</h3>
            <p className="text-gray-400 text-lg max-w-[800px] mx-auto text-center">We assess every variable to optimize your biological and cognitive aging through advanced diagnostics and longevity intelligence.</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10 relative">
              <img 
                src="https://appcdn.goqii.com/storeimg/46208_1774962344.png" 
                alt="Genomics Research" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 bg-black/30 backdrop-blur-sm p-1.5 rounded border border-white/10">
                <img 
                  src="https://appcdn.goqii.com/storeimg/60717_1775124697.png" 
                  alt="XPRIZE Award" 
                  style={{ height: 'auto', width: '280px', maxWidth: '100%' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <h3>GOQii Sanjeevini</h3>
            <p>Decode your organ-specific lifespan using predictive genomics, liquid biopsy, and cfDNA bio-signals. Backed by clinical rigor, Team Sanjeevini is the only Top 40 Milestone Award Winning Team from India in the $101M XPRIZE Healthspan competition.</p>
            <a href="https://goqii.com/sanjeevini" target="_blank" rel="noopener noreferrer" className="card-link">Learn More →</a>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/81527_1775023910.png" 
                alt="Human Longevity" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>GOQii SuperLife</h3>
            <p>Combine elite science with holistic health practices to preserve mobility, cognitive function, and emotional resilience. A comprehensive longevity intelligence system tailored to your biological destiny.</p>
            <a href="https://goqii.com/superlife/" target="_blank" rel="noopener noreferrer" className="card-link">Optimize your healthspan →</a>
          </div>
          {/* MINI INFOGRAPHIC: Biological Age Reduction */}
          <div className="longevity-map-container">
            <div className="longevity-map-card">
              <div className="card-accent"></div>
              <div className="longevity-map-label">LONGEVITY INTELLIGENCE MAP</div>
              <div className="longevity-map-grid">
                <div className="longevity-map-item genomics">
                  <div className="longevity-map-icon">🧬</div>
                  <div className="longevity-map-item-title">Genomics</div>
                  <div className="longevity-map-item-desc">Predictive DNA & cfDNA signals</div>
                </div>
                <div className="longevity-map-item liquid">
                  <div className="longevity-map-icon">🩸</div>
                  <div className="longevity-map-item-title">Liquid Biopsy</div>
                  <div className="longevity-map-item-desc">Real-time biomarker analysis</div>
                </div>
                <div className="longevity-map-item cognitive">
                  <div className="longevity-map-icon">🧠</div>
                  <div className="longevity-map-item-title">Cognitive AI</div>
                  <div className="longevity-map-item-desc">Neuroadaptive intelligence</div>
                </div>
                <div className="longevity-map-item age">
                  <div className="longevity-map-icon">⏳</div>
                  <div className="longevity-map-item-title">Age Reduction</div>
                  <div className="longevity-map-item-desc">10–20 years biological reversal</div>
                </div>
              </div>
              {/* Age bar infographic */}
              <div className="age-bar-section">
                <div className="age-bar-label-row">
                  <span className="age-bar-label">Chronological Age</span>
                  <span className="age-bar-value">60</span>
                </div>
                <div className="age-bar-track">
                  <div className="age-bar-fill-bg"></div>
                </div>
                <div className="age-bar-label-row highlight">
                  <span className="age-bar-label-green">Biological Age (GOQii)</span>
                  <span className="age-bar-value-green">40–45</span>
                </div>
                <div className="age-bar-track-green">
                  <div className="bio-bar"></div>
                </div>
                <div className="age-bar-footer">
                  GOQii targets a <strong className="text-green">10–20 year</strong> reduction in biological age through precision health protocols
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERSONALIZE */}
        <div className={`ppp-content ${activeTab === 'personalize' ? 'active' : ''}`} id="tab-personalize">
          <div className="flex flex-col items-center text-center mb-8 col-span-full" style={{ gridColumn: '1 / -1' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">PERSONALIZE Your Health Architecture with Adaptive Intelligence</h3>
            <p className="text-gray-400 text-lg max-w-[800px] mx-auto text-center">We combine sentient wearables, AI digital twins, and expert human coaching to map a dynamic pathway just for you.</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/59295_1775025408.png" 
                alt="GOQii Wearables" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>Sentient Devices & Wearables</h3>
            <p>Track real-time physiological data using GOQii Smart Devices integrated with advanced health intelligence. Continuous monitoring of heart rate, SpO2, sleep, stress, and movement patterns.</p>
            <a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="card-link">Shop Devices & Plans →</a>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/57691_1775022642.png" 
                alt="Health Coaching" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>Expert Coaching Ecosystem</h3>
            <p>Work with certified doctors, physiotherapists, and nutritionists to build sustainable, personalized health habits. Human intelligence amplified by AI to deliver truly bespoke care.</p>
            <a href="https://consult.goqii.com/" target="_blank" rel="noopener noreferrer" className="card-link">Book a Free Consultation →</a>
          </div>
          {/* Digital Twin infographic */}
          <div className="digital-twin-container">
            <div className="digital-twin-card">
              <div className="card-accent blue-green"></div>
              <div className="digital-twin-label">AI DIGITAL TWIN ARCHITECTURE</div>
              <div className="digital-twin-content">
                <div className="twin-node user">
                  <div className="twin-icon">👤</div>
                  <div className="twin-name">You</div>
                </div>
                <div className="twin-sync">
                  <div className="sync-line blue-green"></div>
                  <div className="sync-text">Real-time sync</div>
                  <div className="sync-line green-blue"></div>
                </div>
                <div className="twin-node ai">
                  <div className="twin-icon glow">🤖</div>
                  <div className="twin-name highlight">AI Twin</div>
                </div>
                <div className="twin-sync">
                  <div className="sync-line green-blue"></div>
                  <div className="sync-text">Insights</div>
                  <div className="sync-line blue-green"></div>
                </div>
                <div className="twin-data-grid">
                  <div className="data-item wearable">Wearable<br />Data</div>
                  <div className="data-item lab">Lab<br />Results</div>
                  <div className="data-item genomic">Genomic<br />Profile</div>
                  <div className="data-item lifestyle">Lifestyle<br />Signals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREVENT */}
        <div className={`ppp-content ${activeTab === 'prevent' ? 'active' : ''}`} id="tab-prevent">
          <div className="flex flex-col items-center text-center mb-8 col-span-full" style={{ gridColumn: '1 / -1' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">PREVENT Chronic Decline Before It Starts with Clinically Led Care.</h3>
            <p className="text-gray-400 text-lg max-w-[800px] mx-auto text-center">From doctor-supervised weight loss to specialized chronic care, we bridge the gap between intent and action to deliver evidence-based interventions and reverse the silent biological drift.</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/22902_1775023809.png" 
                alt="SmartRx" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>GOQii SmartRx</h3>
            <p>Doctor-supervised weight management combining medical protocols with strength-first coaching to ensure sustainable, long-term outcomes. Evidence-based protocols with real human oversight.</p>
            <a href="https://smartrx.goqii.com/" target="_blank" rel="noopener noreferrer" className="card-link">Take Eligibility Assessment →</a>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/45683_1775023878.png" 
                alt="Health Protect" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>Health Protect</h3>
            <p>Proactive outpatient care including full-body screening, lab benefits, and teleconsultations across specialties. Your comprehensive health safety net.</p>
            <a href="https://store.goqii.com/healthprotect" target="_blank" rel="noopener noreferrer" className="card-link">Book a Free Consultation →</a>
          </div>
          {/* Condition infographic */}
          <div className="chronic-conditions-container">
            <div className="chronic-conditions-card">
              <div className="card-accent purple-blue"></div>
              <div className="chronic-conditions-label">CHRONIC CONDITIONS WE MANAGE</div>
              <div className="chronic-conditions-list">
                <div className="condition-item">
                  <span className="condition-icon">🩺</span>
                  <div className="condition-details">
                    <div className="condition-header">
                      <span className="condition-name">Diabetes</span>
                      <span className="condition-stat green">20% HbA1c reduction</span>
                    </div>
                    <div className="condition-bar-bg">
                      <div className="condition-bar green-blue" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">❤️</span>
                  <div className="condition-details">
                    <div className="condition-header">
                      <span className="condition-name">Hypertension</span>
                      <span className="condition-stat blue">Clinically validated</span>
                    </div>
                    <div className="condition-bar-bg">
                      <div className="condition-bar blue-green" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">⚖️</span>
                  <div className="condition-details">
                    <div className="condition-header">
                      <span className="condition-name">Weight Management</span>
                      <span className="condition-stat purple">10% weight reduction</span>
                    </div>
                    <div className="condition-bar-bg">
                      <div className="condition-bar purple-blue" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">🧪</span>
                  <div className="condition-details">
                    <div className="condition-header">
                      <span className="condition-name">Cholesterol</span>
                      <span className="condition-stat yellow">7% reduction</span>
                    </div>
                    <div className="condition-bar-bg">
                      <div className="condition-bar yellow-green" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROSPER */}
        <div className={`ppp-content ${activeTab === 'prosper' ? 'active' : ''}`} id="tab-prosper">
          <div className="flex flex-col items-center text-center mb-8 col-span-full" style={{ gridColumn: '1 / -1' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">PROSPER Through AI-Driven Proof-of-Health Solutions at Scale</h3>
            <p className="text-gray-400 text-lg max-w-[800px] mx-auto text-center">Delivering Dynamic Motivation through value-based care solutions for global organizations.</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/63634_1775026494.png" 
                alt="Payers & Insurers" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>For Payers & Insurers</h3>
            <p>AI-driven risk quantification and dynamic premium models to reduce claims. Transform reactive health insurance into proactive health assurance.</p>
            <a href="https://goqii.com/healthengage-insurance" target="_blank" rel="noopener noreferrer" className="card-link">Learn More →</a>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/78472_1775026507.png" 
                alt="Pharma & Life Sciences" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>For Pharma & Life Sciences</h3>
            <p>Digital care pathways and clinical triage systems validated in large-scale deployments. Evidence-based interventions at population scale.</p>
            <a href="https://goqii.com/healthengage-pharma" target="_blank" rel="noopener noreferrer" className="card-link">Learn More →</a>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/22598_1775026521.png" 
                alt="Employers" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>For Employers</h3>
            <p>Gamified, AI-driven workforce health programs improving engagement and productivity. Turn health into a measurable business KPI.</p>
            <a href="https://goqii.com/healthengage-corporate" target="_blank" rel="noopener noreferrer" className="card-link">Learn More →</a>
          </div>
          <div className="card future-layer">
            <div className="card-accent yellow-green"></div>
            <div className="card-icon yellow">🌐</div>
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
              <img 
                src="https://appcdn.goqii.com/storeimg/19462_1775025141.png" 
                alt="Future Layer" 
                className="w-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3>Future Layer: UHT (Web3 Health Economy)</h3>
            <p>Earn rewards through healthy behavior while contributing anonymized data to global health research. The future of incentivized wellness.</p>
            <a href="https://uht.xyz/homepage" target="_blank" rel="noopener noreferrer" className="card-link yellow">Explore the future →</a>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="ecosystem-section" id="ecosystem">
        <div className="section-header-container">
          <div className="section-label">One Connected Platform</div>
          <h2 className="section-title reveal">One Connected<br /><span style={{ background: 'linear-gradient(135deg, var(--green), var(--blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Health Ecosystem</span></h2>
          <p className="section-desc reveal">GOQii combines AI, behavioral science, real-world data, and human coaching into a unified platform that learns and evolves with you.</p>
        </div>

        <div className="ecosystem-viz">
          {/* SVG lines connecting nodes to center */}
          <svg className="eco-svg" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="ecoGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Center to each node lines with animated dashes */}
            <line x1="350" y1="350" x2="350.1" y2="100" stroke="var(--green)" strokeOpacity="0.5" strokeWidth="2.5" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <line x1="350" y1="350" x2="566.5" y2="225" stroke="var(--blue)" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="350" y1="350" x2="566.5" y2="475" stroke="var(--green)" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
            </line>
            <line x1="350" y1="350" x2="349.9" y2="600" stroke="var(--blue)" strokeOpacity="0.5" strokeWidth="2.5" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="350" y1="350" x2="133.5" y2="475" stroke="#a78bfa" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.3s" repeatCount="indefinite" />
            </line>
            <line x1="350" y1="350" x2="133.5" y2="225" stroke="#fbbf24" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6,4" filter="url(#ecoGlow)">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
            </line>

            {/* Orbiting rings */}
            <circle cx="350" cy="350" r="180" fill="none" stroke="rgba(0, 255, 136, 0.06)" strokeWidth="1" />
            <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(0, 200, 255, 0.04)" strokeWidth="80" opacity="0.5" />

            {/* Animated particles on lines */}
            <circle r="4" fill="var(--green)" filter="url(#ecoGlow)">
              <animateMotion dur="2s" repeatCount="indefinite" path="M350,350 L350.1,100" />
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="var(--blue)" filter="url(#ecoGlow)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M350,350 L566.5,225" />
              <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="var(--green)" filter="url(#ecoGlow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M350,350 L566.5,475" />
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="var(--blue)" filter="url(#ecoGlow)">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M350,350 L349.9,600" />
              <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#a78bfa" filter="url(#ecoGlow)">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M350,350 L133.5,475" />
              <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#fbbf24" filter="url(#ecoGlow)">
              <animateMotion dur="1.8s" repeatCount="indefinite" path="M350,350 L133.5,225" />
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Center Node */}
          <div className="eco-center">
            <div className="center-icon-wrapper">
              <Brain size={48} color="var(--green)" />
            </div>
            <div className="eco-center-label">Core</div>
            <div className="eco-center-title">AI Engine</div>
          </div>

          {/* Surrounding Nodes */}
          <div className="eco-node eco-node-1">
            <div className="node-icon">
              <Activity size={32} color="var(--green)" />
            </div>
            <div className="node-label">Data Intelligence</div>
          </div>
          <div className="eco-node eco-node-2" style={{ borderColor: 'rgba(0, 200, 255, .2)' }}>
            <div className="node-icon">
              <MessageSquare size={32} color="var(--blue)" />
            </div>
            <div className="node-label">Coaching Layer</div>
          </div>
          <div className="eco-node eco-node-3">
            <div className="node-icon">
              <Watch size={32} color="var(--green)" />
            </div>
            <div className="node-label">Wearables & Devices</div>
          </div>
          <div className="eco-node eco-node-4" style={{ borderColor: 'rgba(0, 200, 255, .2)' }}>
            <div className="node-icon">
              <Gamepad2 size={32} color="var(--blue)" />
            </div>
            <div className="node-label">Engagement Engine</div>
          </div>
          <div className="eco-node eco-node-5" style={{ borderColor: 'rgba(120, 80, 255, .2)' }}>
            <div className="node-icon">
              <Stethoscope size={32} color="#a78bfa" />
            </div>
            <div className="node-label">Clinical Integration</div>
          </div>
          <div className="eco-node eco-node-6" style={{ borderColor: 'rgba(251, 191, 36, .2)' }}>
            <div className="node-icon">
              <Trophy size={32} color="#fbbf24" />
            </div>
            <div className="node-label">Rewards System</div>
          </div>
        </div>
      </section>

      {/* HEALTHENGAGE */}
      <section className="health-engage-section" id="healthengage">
        <div className="section-header-container">
          <div className="section-label">Enterprise Platform</div>
          <h2 className="section-title reveal">GOQii HealthEngage<br />Proof-of-Health at Scale</h2>
          <p className="section-desc reveal">A comprehensive, customizable platform designed to streamline preventive care programs and enhance patient and member engagement across insurers, providers, and enterprises.</p>
        </div>

        <div className="he-key-value reveal">
          <div className="key-value-card">
            <div className="key-value-icon">
              <Zap size={32} color="var(--blue)" />
            </div>
            <p>GOQii HealthEngage enables organizations to manage care programs, automate workflows, and engage members through a fully integrated digital ecosystem.</p>
          </div>
        </div>

        <div className="core-capabilities-grid">
          <div className="capability-item reveal">
            <div className="cap-icon"><ShieldCheck size={28} /></div>
            <h3>End-to-End Preventive Care</h3>
            <p>Design, manage, and monitor personalized care programs with continuous engagement and real-time tracking.</p>
          </div>
          <div className="capability-item reveal">
            <div className="cap-icon"><MessageSquare size={28} /></div>
            <h3>Member & Patient Engagement</h3>
            <p>Engage users across WhatsApp, SMS, email, and app with automated workflows and real-time updates.</p>
          </div>
          <div className="capability-item reveal">
            <div className="cap-icon"><Link size={28} /></div>
            <h3>Seamless Integration</h3>
            <p>Integrates with existing systems including EHR, claims, billing, and provider networks.</p>
          </div>
          <div className="capability-item reveal">
            <div className="cap-icon"><BarChart3 size={28} /></div>
            <h3>Real-Time Analytics</h3>
            <p>Track engagement, outcomes, and program performance through actionable dashboards.</p>
          </div>
        </div>

        <div className="platform-modules-container">
          <h3 className="modules-title reveal">Platform Modules</h3>
          <div className="modules-scroll-wrapper">
            <motion.div 
              className="modules-track"
              animate={{ x: [0, -1400] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "DataMigrate", desc: "Secure data migration across systems", icon: <Database size={24} /> },
                { name: "MemberConnect", desc: "Multi-channel engagement engine", icon: <Users size={24} /> },
                { name: "MedicareManage", desc: "Care program creation & management", icon: <ClipboardList size={24} /> },
                { name: "NavigateHealth", desc: "Doctor-led care and EHR workflows", icon: <Stethoscope size={24} /> },
                { name: "MedEngage", desc: "Care team coordination and task management", icon: <Layout size={24} /> },
                { name: "RemoteVital Monitoring", desc: "Real-time health tracking with AI alerts", icon: <Bell size={24} /> },
                { name: "RewardsCentral", desc: "Gamified engagement and incentives", icon: <Gift size={24} /> },
                // Duplicate for infinite scroll
                { name: "DataMigrate", desc: "Secure data migration across systems", icon: <Database size={24} /> },
                { name: "MemberConnect", desc: "Multi-channel engagement engine", icon: <Users size={24} /> },
                { name: "MedicareManage", desc: "Care program creation & management", icon: <ClipboardList size={24} /> },
                { name: "NavigateHealth", desc: "Doctor-led care and EHR workflows", icon: <Stethoscope size={24} /> },
                { name: "MedEngage", desc: "Care team coordination and task management", icon: <Layout size={24} /> },
                { name: "RemoteVital Monitoring", desc: "Real-time health tracking with AI alerts", icon: <Bell size={24} /> },
                { name: "RewardsCentral", desc: "Gamified engagement and incentives", icon: <Gift size={24} /> },
              ].map((m, i) => (
                <div key={i} className="module-card">
                  <div className="module-icon">{m.icon}</div>
                  <div className="module-name">{m.name}</div>
                  <div className="module-desc">{m.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


        <div className="he-solutions-grid">
          <div className="he-solution-card reveal">
            <div className="he-card-image-container">
              <img src="https://appcdn.goqii.com/storeimg/60552_1775040924.png" alt="Insurers & Payers" referrerPolicy="no-referrer" />
            </div>
            <h3 className="he-card-title">For Insurers & Payers</h3>
            <p className="he-card-desc">Shift from reactive claims to proactive risk prevention.</p>
            <ul className="he-card-bullets">
              <li><span>→</span> Reduce claims significantly</li>
              <li><span>→</span> Improve member engagement</li>
              <li><span>→</span> Enable predictive underwriting</li>
            </ul>
            <a href="https://goqii.com/healthengage-insurance" target="_blank" rel="noopener noreferrer" className="he-card-link">Explore Insurance Solutions →</a>
          </div>

          <div className="he-solution-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="he-card-image-container">
              <img src="https://appcdn.goqii.com/storeimg/62451_1775040945.png" alt="Pharma & Life Sciences" referrerPolicy="no-referrer" />
            </div>
            <h3 className="he-card-title">For Pharma & Life Sciences</h3>
            <p className="he-card-desc">Drive adherence and real-world outcomes with intelligent engagement.</p>
            <ul className="he-card-bullets">
              <li><span>→</span> Improve therapy adherence</li>
              <li><span>→</span> Generate real-world evidence</li>
              <li><span>→</span> Enhance patient engagement</li>
            </ul>
            <a href="https://goqii.com/healthengage-pharma" target="_blank" rel="noopener noreferrer" className="he-card-link">Explore Pharma Solutions →</a>
          </div>

          <div className="he-solution-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="he-card-image-container">
              <img src="https://appcdn.goqii.com/storeimg/53633_1775040958.png" alt="Employers & Corporates" referrerPolicy="no-referrer" />
            </div>
            <h3 className="he-card-title">For Employers & Corporates</h3>
            <p className="he-card-desc">Transform workforce health into a measurable business KPI.</p>
            <ul className="he-card-bullets">
              <li><span>→</span> Reduce absenteeism & sick days</li>
              <li><span>→</span> Increase productivity metrics</li>
              <li><span>→</span> Improve team engagement</li>
            </ul>
            <a href="https://goqii.com/healthengage-corporate" target="_blank" rel="noopener noreferrer" className="he-card-link">Explore Corporate Solutions →</a>
          </div>
        </div>

        <div className="outcome-statement reveal">
          <p>Improve engagement, enhance adherence, and deliver measurable health outcomes—while reducing operational complexity and costs.</p>
          <div style={{ marginTop: '40px' }}>
            <a href="https://goqii.com/healthengage" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore HealthEngage Platform</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-works" id="works">
        <div className="section-header-container">
          <div className="section-label">The GOQii Process</div>
          <h2 className="section-title reveal">How It Works</h2>
          <p className="section-desc reveal">A seamless, four-stage intelligence loop that continuously improves your health outcomes.</p>
        </div>

        <div className="steps-container" style={{ marginTop: '70px' }}>
          <div className="steps-line"></div>
          <div className="step-item reveal">
            <div className="step-num"><span className="step-icon">📡</span></div>
            <h3 className="step-title">Capture</h3>
            <p className="step-desc">Real-time health data from wearables, labs, genomics, and behavioral signals — continuously streaming to the AI core.</p>
            <div className="step-arrow">→</div>
          </div>
          <div className="step-item reveal" style={{ transitionDelay: '.15s' }}>
            <div className="step-num"><span className="step-icon">🧠</span></div>
            <h3 className="step-title">Understand</h3>
            <p className="step-desc">AI identifies hidden risk patterns, biological age signals, and optimization opportunities across your complete health profile.</p>
            <div className="step-arrow">→</div>
          </div>
          <div className="step-item reveal" style={{ transitionDelay: '.3s' }}>
            <div className="step-num"><span className="step-icon">💬</span></div>
            <h3 className="step-title">Engage</h3>
            <p className="step-desc">Personalized coaching, nudges, and clinical interventions delivered by AI and human experts in perfect synchrony.</p>
            <div className="step-arrow">→</div>
          </div>
          <div className="step-item reveal" style={{ transitionDelay: '.45s' }}>
            <div className="step-num" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}><span className="step-icon">📈</span></div>
            <h3 className="step-title">Improve</h3>
            <p className="step-desc">Measurable, continuous health outcome improvement validated through clinical metrics and real-world data evidence.</p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="diff-section" id="platform">
        <div className="section-header-container">
          <div className="section-label">Why GOQii</div>
          <h2 className="section-title reveal">More Than a Platform.<br /><span style={{ background: 'linear-gradient(135deg, var(--green), var(--blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A Health Operating System.</span></h2>
        </div>

        <div className="diff-grid" style={{ marginTop: '60px' }}>
          <div className="diff-item reveal">
            <div className="diff-item-num">01</div>
            <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>🤖</div>
            <h3>AI-Driven Predictive Intelligence</h3>
            <p>Continuously learning models trained on millions of health data points to anticipate risk before it manifests — not just react to it.</p>
          </div>
          <div className="diff-item reveal" style={{ transitionDelay: '.1s' }}>
            <div className="diff-item-num">02</div>
            <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>🔄</div>
            <h3>Continuous Engagement Layer</h3>
            <p>Behavioral science-backed nudge engine that maintains motivation and habit formation across the entire health journey.</p>
          </div>
          <div className="diff-item reveal" style={{ transitionDelay: '.2s' }}>
            <div className="diff-item-num">03</div>
            <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>🏥</div>
            <h3>Managed Healthcare Operations</h3>
            <p>End-to-end care pathway management from screening and diagnosis through treatment and long-term monitoring.</p>
          </div>
          <div className="diff-item reveal" style={{ transitionDelay: '.3s' }}>
            <div className="diff-item-num">04</div>
            <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>📊</div>
            <h3>Enterprise-Grade Analytics</h3>
            <p>Population health dashboards, risk stratification, and ROI measurement tools built for payers, providers, and employers.</p>
          </div>
        </div>
      </section>

      {/* APP INTELLIGENCE */}
      <section className="app-section" id="app">
        <div className="container">
          <div className="section-header-container">
            <div className="section-label">The GOQii App</div>
            <h2 className="section-title reveal">Purpose-Driven Intelligence</h2>
            <p className="section-desc reveal">Connect your biological signals to daily behavioral action.</p>
          </div>

          <div className="app-grid">
            <div className="app-card reveal" style={{ '--bg-img': 'url(https://appcdn.goqii.com/storeimg/4859_1775038859.jpg)' } as React.CSSProperties}>
              <div className="app-card-badge">AI Powered</div>
              <h3 className="app-card-title">NutriGenius AI</h3>
              <p className="app-card-desc" style={{ marginBottom: '24px' }}>Snap a photo of your meal and let AI Image Recognition instantly identify ingredients, track daily calories, and calculate macronutrients with precision to help you achieve weight loss or muscle gain.</p>
              <a href="https://goqii.com/nutrigenius" target="_blank" rel="noopener noreferrer" className="app-card-btn">Explore NutriGenius</a>
            </div>

            <div className="app-card reveal" style={{ '--bg-img': 'url(https://appcdn.goqii.com/storeimg/1781_1775038942.jpg)', transitionDelay: '.15s' } as React.CSSProperties}>
              <div className="app-card-badge">Dynamic</div>
              <h3 className="app-card-title">S.A.F.E. Score</h3>
              <p className="app-card-desc">Sedentary, Active, Fit, or Elite. Using AI and your health data, we evaluate your lifestyle to reveal your pace of ageing. Engage on the app to improve your SAFE score and dynamically increase your GOQii Insure+ health cover up to ₹5 Lakhs.</p>
            </div>

            <div className="app-card reveal" style={{ '--bg-img': 'url(https://appcdn.goqii.com/storeimg/7613_1775038974.jpg)', transitionDelay: '.3s' } as React.CSSProperties}>
              <div className="app-card-badge">Secure</div>
              <h3 className="app-card-title">Complete Health Analysis & Locker</h3>
              <p className="app-card-desc">Visualize your health journey through advanced analytics and trends. Securely store medical records and prescriptions in your Digital Health Locker, while seamlessly syncing with your fitness trackers to monitor vital metrics like BMI, SpO2, heart rate, and body fat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="science-section" id="science">
        <div className="science-container">
          <div className="section-header-container">
            <div className="section-label">Clinical Validation</div>
            <h2 className="section-title reveal">Science & Global Validation</h2>
          </div>

          <div className="science-hero-card reveal">
            <div className="science-hero-content">
              <div className="xprize-badge">
                <h3>XPRIZE Healthspan Milestone Award</h3>
                <p>GOQii's Team Sanjeevini is among the Top 40 milestone award-winning teams globally in the $101M XPRIZE Healthspan competition — the only Indian team at this level — working to reduce biological age by 10–20 years through precision health science.</p>
                <a 
                  href="https://www.xprize.org/competitions/healthspan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}
                >
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            </div>
            <div className="science-hero-image">
              <img 
                src={theme === 'light' ? "https://appcdn.goqii.com/storeimg/32592_1775124472.png" : "https://appcdn.goqii.com/storeimg/55929_1775123693.png"} 
                alt="XPRIZE Award" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="science-grid">
            <div className="reveal">
              <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src="https://appcdn.goqii.com/storeimg/83003_1775036135.png" 
                  alt="Real Clinical Results" 
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Real Clinical Outcomes</h3>
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Verified Data</span>
              </div>
              <div className="science-metrics">
                <div className="sci-metric">
                  <div className="sci-metric-val">85%</div>
                  <div className="sci-metric-label">Reduction in medication dependency</div>
                </div>
                <div className="sci-metric">
                  <div className="sci-metric-val">20%</div>
                  <div className="sci-metric-label">Reduction in HbA1c levels</div>
                </div>
                <div className="sci-metric">
                  <div className="sci-metric-val">10%</div>
                  <div className="sci-metric-label">Weight reduction achieved</div>
                </div>
                <div className="sci-metric">
                  <div className="sci-metric-val">7%</div>
                  <div className="sci-metric-label">Cholesterol reduction</div>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="research-hub-card">
                <div className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-8">RESEARCH & INSIGHTS HUB</div>
                
                <a href="https://indiafit.org/" target="_blank" rel="noopener noreferrer" className="research-link-card">
                  <div className="research-icon-box">📊</div>
                  <div>
                    <div className="font-bold text-sm mb-1">India Fit Report</div>
                    <div className="text-xs text-muted-foreground">Annual health & fitness insights across 1M+ users</div>
                  </div>
                  <div className="ml-auto text-blue-400">→</div>
                </a>

                <div className="mt-auto overflow-hidden rounded-xl border border-white/5">
                  <img 
                    src="https://appcdn.goqii.com/storeimg/34706_1775039689.png" 
                    alt="India Fit Report" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-studies-section" id="case-studies">
        <div className="container">
          <div className="section-header-container">
            <div className="section-label">Case Studies</div>
            <h2 className="section-title reveal">Real Case Studies, Real Results.</h2>
            <p className="section-desc reveal">From improving chronic disease management to scaling public health initiatives, our dynamic motivation model delivers measurable clinical outcomes today, driving toward the ultimate goal of human longevity.</p>
          </div>

          <div className="case-studies-grid">
            <div className="case-study-card reveal">
              <div className="case-study-img-wrapper">
                <img src="https://picsum.photos/seed/chronic/300/300" alt="Chronic Disease Management" className="case-study-img" referrerPolicy="no-referrer" />
              </div>
              <h3 className="case-study-title">Chronic Disease Management</h3>
              <p className="case-study-desc">From improving chronic disease management to scaling public health initiatives, our dynamic motivation model delivers measurable clinical outcomes today, driving toward the ultimate goal of human longevity.</p>
              <button 
                className="case-study-cta" 
                onClick={() => setSelectedVideo('https://www.youtube.com/embed/wfUk6-A891k?autoplay=1')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                MORE →
              </button>
            </div>

            <div className="case-study-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="case-study-img-wrapper">
                <img src="https://picsum.photos/seed/partnership/300/300" alt="Public Health Initiatives" className="case-study-img" referrerPolicy="no-referrer" />
              </div>
              <h3 className="case-study-title">Public Health Initiatives</h3>
              <p className="case-study-desc">From improving chronic disease management to scaling public health initiatives, our dynamic motivation model delivers measurable clinical outcomes today, driving toward the ultimate goal of human longevity.</p>
              <button 
                className="case-study-cta" 
                onClick={() => setSelectedVideo('https://www.youtube.com/embed/jMxC0WCxNYA?autoplay=1&start=6')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                MORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="demo">
        <div className="final-cta-bg"></div>
        <div className="section-header-container" style={{ position: 'relative', marginBottom: '48px' }}>
          <div className="section-label">Get Started</div>
          <h2 className="section-title reveal">Start Your Preventive<br /><span style={{ background: 'linear-gradient(135deg, var(--green), var(--blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Health Transformation</span></h2>
          <p className="section-desc reveal">Join enterprises, insurers, and governments using GOQii to drive measurable, clinically validated outcomes at scale.</p>
        </div>
        <div className="final-cta-btns">
          <button onClick={() => setShowDemoForm(true)} className="btn-primary">Request a Demo</button>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} className="text-white" />
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* DEMO FORM MODAL */}
      <AnimatePresence>
        {showDemoForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setShowDemoForm(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg demo-form-modal shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 rounded-full demo-form-close flex items-center justify-center z-20"
                onClick={() => setShowDemoForm(false)}
              >
                <X size={16} />
              </button>
              
              <div className="demo-form-scroll-area overflow-y-auto p-8 md:p-12">
                <div className="relative z-10 mb-10 text-left">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-2 opacity-50">Request a Demo</div>
                  <h3 className="font-bold mb-2 demo-form-title">See GOQii in Action</h3>
                  <p className="text-sm opacity-70 leading-relaxed demo-form-label">Discover how GOQii can help your organization drive preventive healthcare outcomes at scale.</p>
                </div>

                <form className="relative z-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Demo request submitted! Our team will get in touch within 24–48 hours.'); setShowDemoForm(false); }}>
                  <div className="space-y-2">
                    <label className="demo-form-label uppercase tracking-widest">Full Name</label>
                    <input type="text" required className="w-full demo-form-input px-5 focus:outline-none" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="demo-form-label uppercase tracking-widest">Work Email</label>
                      <input type="email" required className="w-full demo-form-input px-5 focus:outline-none" placeholder="email@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="demo-form-label uppercase tracking-widest">Phone Number</label>
                      <input type="tel" required className="w-full demo-form-input px-5 focus:outline-none" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="demo-form-label uppercase tracking-widest">Company Name</label>
                    <input type="text" required className="w-full demo-form-input px-5 focus:outline-none" placeholder="Your organization name" />
                  </div>

                  <div className="space-y-2">
                    <label className="demo-form-label uppercase tracking-widest">Organization Type</label>
                    <div className="relative">
                      <select className="w-full demo-form-input px-5 focus:outline-none appearance-none cursor-pointer">
                        <option className="bg-[#0a0c10] light:bg-white">Employer / Corporate</option>
                        <option className="bg-[#0a0c10] light:bg-white">Insurer / Payer</option>
                        <option className="bg-[#0a0c10] light:bg-white">Hospital / Provider</option>
                        <option className="bg-[#0a0c10] light:bg-white">Pharma / Life Sciences</option>
                        <option className="bg-[#0a0c10] light:bg-white">Government / Public Health</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="demo-form-label uppercase tracking-widest">Message (Optional)</label>
                    <textarea className="w-full demo-form-input px-5 py-4 focus:outline-none h-32 resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit" 
                      className="w-full btn-primary demo-form-cta"
                    >
                      Request Demo
                    </motion.button>
                  </div>

                  <p className="text-[10px] text-center demo-form-label opacity-50 mt-6">
                    Our team will get in touch within 24–48 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer onNavigate={(page) => setCurrentPage(page)} />
    </>
  );
}
