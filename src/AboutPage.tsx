import React, { useEffect, useState } from 'react';
import { 
  Globe, 
  Target, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Cpu, 
  Smartphone, 
  Stethoscope, 
  Award,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Watch,
  Briefcase,
  Play,
  Activity,
  X
} from 'lucide-react';
import Footer from './components/Footer';

interface Leader {
  name: string;
  role: string;
  img: string;
  bio?: string;
}

interface AboutPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  theme: string;
}

export default function AboutPage({ onBack, onNavigate, theme }: AboutPageProps) {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

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
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="grid-bg"></div>
        <div className="hero-content reveal" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>About GOQii</div>
          
          <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto 20px', fontSize: '1.15rem', opacity: 0.8, textAlign: 'center' }}>Founded in 2014 by visionary entrepreneur Vishal Gondal, GOQii is transforming preventive healthcare on a global scale. Our unique Smart Health Ecosystem integrates advanced technology with expert human coaching, creating a holistic approach to health and wellness.</p>
          <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.15rem', opacity: 0.8, textAlign: 'center' }}>Headquartered in Menlo Park, California, with offices in Mumbai, India, GOQii is on a mission to shift the focus from reactive "sick care" to proactive preventive healthcare. Backed by marquee investors such as Sumeru Ventures, Animoca Brands, Mitsui, and NEA, GOQii’s innovative platform empowers individuals to take charge of their health while contributing to a healthier global community. As an official partner of India’s 'Fit India Movement,' we are proud to support national and international efforts to promote healthy living.</p>
        </div>
        

      </section>



      {/* LEADERSHIP & TRUST */}
      <section className="about-leadership">
        <div className="container">
          <div className="section-header-container reveal">
            <div className="section-label">Leadership & Trust</div>
            <h2 className="section-title">Built by Experts. Trusted Globally.</h2>
            <p className="section-desc">
              GOQii is led by a team with deep expertise in healthcare, technology, and behavioral science.
              Supported by global investors and partners.
            </p>
          </div>
          
          <div className="leadership-grid reveal">
            {[
              { name: "Vishal Gondal", role: "CEO & Founder", img: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png", bio: "Vishal Gondal, often regarded as the pioneer of the Indian gaming industry, is now leading innovation in preventive healthcare and the emerging Health Metaverse. As the founder of GOQii, he combines technology, fitness, and behavioral science to build a platform focused on healthier lifestyles and long-term well-being.\n\nPreviously, Vishal founded Indiagames, which was acquired by Walt Disney, and has been recognized among the top global executives in mobile content alongside industry leaders like Steve Jobs. He continues to contribute to the tech ecosystem as a member of the Tech Entrepreneurs Association of Mumbai (TEAM) and the Academic Advisory Board at the Somaiya School of Design.\n\nAn active angel investor and podcast host of ‘Beneath the Force’, Vishal engages with diverse leaders and innovators. A passionate fitness enthusiast, he regularly participates in marathons, trekking, and adventure sports—reflecting his belief in living the philosophy he builds through GOQii.\n\nVishal’s vision continues to shape the intersection of health, technology, and engagement—driving the future of preventive healthcare." },
              { name: "Abhishek Sharma", role: "Co-Founder & CEO – GOQii UK", img: "https://appcdn.goqii.com/storeimg/69425_1775110219.jpg", bio: "Abhishek leads brand development, product marketing, PR, and social media at GOQii. A seasoned fitness product expert, he has worked with global brands like Nike across India, the USA, and the UK, driving both product innovation and consumer engagement.\n\nHe is deeply committed to sustainability and social impact, having collaborated with global non-profit organizations on key initiatives. Outside work, Abhishek is an avid football fan, travel photographer, and enjoys long motorbike road trips." },
              { name: "Sachin Janghel", role: "Co-Founder & CTO", img: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", bio: "Sachin leads the technology behind the GOQii ecosystem, bringing extensive experience across mobile, online, and interactive platforms. He has previously served as Technology Director at Indiagames (acquired by Disney UTV), where he led large-scale development teams.\n\nAt Disney UTV, he worked on building technologies for Interactive TV platforms including satellite, digital cable, and IPTV. A passionate technologist, Sachin enjoys exploring new innovations, gaming, and has represented his state in national-level football and hockey." },
              { name: "Champ Alreja", role: "Co-Founder & CBO – Health Store", img: "https://appcdn.goqii.com/storeimg/93100_1775110237.jpg", bio: "Champ combines engineering, manufacturing, and entrepreneurship to drive innovation at GOQii’s Health Store. As the founder of HitPlay, he brings deep expertise in building and delivering consumer tech products with a strong focus on quality and affordability.\n\nKnown for his creative and execution-driven mindset, Champ continuously pushes industry benchmarks in product development and service. A passionate tennis player, he enjoys staying active and competitive on the court." },
              { name: "Krishna Kumar (KK)", role: "Chief Customer Officer – Marketing Strategy & Consumer Engagement", img: "https://appcdn.goqii.com/storeimg/41869_1756732325.png", bio: "KK leads customer experience, brand strategy, and consumer engagement at GOQii. With a strong background in advertising and digital marketing, he has worked with leading global networks like Publicis, Leo Burnett, and WPP, and founded Media2win—one of India’s top digital agencies.\n\nAn avid mountaineer and marathon runner, KK regularly scales Himalayan peaks and brings the same discipline and endurance into building impactful brands." },
              { name: "Rohit Pareek", role: "Chief Financial Officer", img: "https://appcdn.goqii.com/storeimg/57617_1775121635.jpg", bio: "Rohit leads finance and corporate development at GOQii, bringing deep expertise from his investment banking career at Jefferies, JM Financial, and Times Group. He has worked with numerous companies and investors, gaining strong insights into growth, governance, and financial strategy.\n\nAn alumnus of IIM Ahmedabad and IIT BHU, Rohit is passionate about sustainability and social impact. He enjoys meditation and spending time with family." },
              { name: "V Srinivasan (Srini)", role: "Director", img: "https://appcdn.goqii.com/storeimg/66392_1775110257.jpg", bio: "Srini is a Chartered Accountant with over 25 years of experience across leading corporates. He previously served as CFO of Bharti AXA Life Insurance and has extensive expertise in financial planning, data analysis, and growth strategy.\n\nHe has also contributed to regulatory and policy discussions as part of committees with IRDA and the Ministry of Finance. A fitness enthusiast, Srini enjoys food, music, and staying active." },
              { name: "Luke Coutinho", role: "Master Coach & Head Nutritionist", img: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Like-Counho.png", bio: "Luke is a globally recognized nutritionist, author, and motivational speaker. His book “Eat Smart, Move More, Sleep Right” has reached audiences worldwide. He collaborates with the Yale Griffin Prevention Research Center and leads educational programs across India and Asia.\n\nA strong advocate of preventive health and lifestyle-based healing, Luke focuses on nutrition, holistic wellness, and sustainable habit change—helping individuals shift towards healthier living." }
            ].map((leader, i) => (
              <div key={i} className="leadership-card" onClick={() => setSelectedLeader(leader)} style={{ cursor: 'pointer' }}>
                <div className="leader-img">
                  <img src={leader.img} alt={leader.name} referrerPolicy="no-referrer" />
                </div>
                <div className="leader-info">
                  <h4>{leader.name}</h4>
                  <p>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header-container reveal" style={{ marginTop: '80px' }}>
            <h3 className="section-title" style={{ fontSize: '2.5rem' }}>Board of Directors</h3>
          </div>
          
          <div className="board-grid reveal">
            {[
              { name: "Bala Deshpande", role: "Director", img: "https://appcdn.goqii.com/storeimg/40814_1775053051.jpg" },
              { name: "Amit Singhal", role: "Director", img: "https://appcdn.goqii.com/storeimg/98313_1775053077.jpg" },
              { name: "Dr. Christine Li", role: "Director", img: "https://appcdn.goqii.com/storeimg/57121_1775053095.jpg" },
              { name: "Pravin Gandhi", role: "Director", img: "https://appcdn.goqii.com/storeimg/24219_1775109984.jpg" },
              { name: "Vishal Gondal", role: "Director", img: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png" }
            ].map((member, i) => (
              <div key={i} className="leadership-card">
                <div className="leader-img">
                  <img src={member.img} alt={member.name} referrerPolicy="no-referrer" />
                </div>
                <div className="leader-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-header-container reveal" style={{ marginTop: '80px' }}>
            <h3 className="section-title" style={{ fontSize: '2.5rem' }}>Investors & Partners</h3>
          </div>

          <div className="investor-strip reveal">
            <div className="investor-track">
              {[
                "https://websitecdn.goqii.com/images/profileimg/mitusui_logo.png",
                "https://websitecdn.goqii.com/images/profileimg/galaxy_digital.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_mega.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_cm.png",
                "https://appcdn.goqii.com/storeimg/33388_1658921764.png",
                "https://appcdn.goqii.com/storeimg/87523_1658921815.jpg",
                "https://websitecdn.goqii.com/images/profileimg/investor_glue.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_dsg.png"
              ].map((logo, i) => (
                <div key={i} className="investor-logo">
                  <img src={logo} alt={`Investor ${i+1}`} referrerPolicy="no-referrer" />
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {[
                "https://websitecdn.goqii.com/images/profileimg/mitusui_logo.png",
                "https://websitecdn.goqii.com/images/profileimg/galaxy_digital.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_mega.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_cm.png",
                "https://appcdn.goqii.com/storeimg/33388_1658921764.png",
                "https://appcdn.goqii.com/storeimg/87523_1658921815.jpg",
                "https://websitecdn.goqii.com/images/profileimg/investor_glue.png",
                "https://websitecdn.goqii.com/images/profileimg/investor_dsg.png"
              ].map((logo, i) => (
                <div key={`dup-${i}`} className="investor-logo">
                  <img src={logo} alt={`Investor ${i+1}`} referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          <div className="individual-investor-strip reveal">
            <div className="individual-investor-track">
              {[
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_ilkka.png", name: "Ilkka Paananen" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_pravin.png", name: "Pravin Gandhi" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_amit.png", name: "Amit Singhal" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_neeraj.png", name: "Neeraj Arora" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_vijay.png", name: "Vijay Sharma" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_marco.png", name: "Marco Argenti" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_anil.png", name: "Anil Godhwani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_bharat.png", name: "Bharat Vasan" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_shriram.png", name: "Dr. Shriram Nene" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_esther.png", name: "Esther Dyson" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_gautam.png", name: "Gautam Godhwani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/Kanwaljit.png", name: "Kanwaljit Bombra" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_mahesh.png", name: "Mahesh Samat" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_mike.png", name: "Mike McNamara" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_prashant.png", name: "Prashant Gulati" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_sanjay.png", name: "Sanjay Parthasarthy" },
                { img: "https://websitecdn.goqii.com/images/profileimg/Sanjay.png", name: "Sanjay Vaswani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_steve.png", name: "Steve Luczo" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_taher.png", name: "Taher Khorakiwala" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_vijayv.png", name: "Vijay Vashee" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_somasegar.png", name: "S. Somasegar" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_rajan.png", name: "Rajan Anandan" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_deepak.png", name: "Deepak I. Shahdadpuri" },
              ].map((investor, i) => (
                <div key={i} className="individual-investor-card">
                  <img src={investor.img} alt={investor.name} referrerPolicy="no-referrer" />
                  <p>{investor.name}</p>
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {[
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_ilkka.png", name: "Ilkka Paananen" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_pravin.png", name: "Pravin Gandhi" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_amit.png", name: "Amit Singhal" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_neeraj.png", name: "Neeraj Arora" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_vijay.png", name: "Vijay Sharma" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_marco.png", name: "Marco Argenti" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_anil.png", name: "Anil Godhwani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_bharat.png", name: "Bharat Vasan" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_shriram.png", name: "Dr. Shriram Nene" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_esther.png", name: "Esther Dyson" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_gautam.png", name: "Gautam Godhwani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/Kanwaljit.png", name: "Kanwaljit Bombra" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_mahesh.png", name: "Mahesh Samat" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_mike.png", name: "Mike McNamara" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_prashant.png", name: "Prashant Gulati" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_sanjay.png", name: "Sanjay Parthasarthy" },
                { img: "https://websitecdn.goqii.com/images/profileimg/Sanjay.png", name: "Sanjay Vaswani" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_steve.png", name: "Steve Luczo" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_taher.png", name: "Taher Khorakiwala" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_vijayv.png", name: "Vijay Vashee" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_somasegar.png", name: "S. Somasegar" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_rajan.png", name: "Rajan Anandan" },
                { img: "https://websitecdn.goqii.com/images/profileimg/investor_deepak.png", name: "Deepak I. Shahdadpuri" },
              ].map((investor, i) => (
                <div key={`dup-${i}`} className="individual-investor-card">
                  <img src={investor.img} alt={investor.name} referrerPolicy="no-referrer" />
                  <p>{investor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      
      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />

      {selectedLeader && (
        <div className="leader-modal-overlay" onClick={() => setSelectedLeader(null)}>
          <div className="leader-modal-content" onClick={e => e.stopPropagation()}>
            <button className="leader-modal-close" onClick={() => setSelectedLeader(null)}>
              <X size={24} />
            </button>
            <div className="leader-modal-left">
              <img className="leader-modal-img" src={selectedLeader.img} alt={selectedLeader.name} referrerPolicy="no-referrer" />
              <div className="leader-modal-header-info">
                <h3>{selectedLeader.name}</h3>
                <p className="leader-role">{selectedLeader.role}</p>
              </div>
            </div>
            <div className="leader-modal-scroll-area">
              <div className="leader-modal-info">
                <p className="leader-bio">{selectedLeader.bio || "Detailed biography coming soon."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
