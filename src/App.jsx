import { useState } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Fingerprint,
  KeyRound,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IAM Consulting",
    text: "Strategy, architecture, roadmap, platform selection, implementation and optimization for modern identity programs."
  },
  {
    icon: Workflow,
    title: "Identity Governance",
    text: "Joiner–mover–leaver, certifications, role governance, policy controls, access requests and compliance reporting."
  },
  {
    icon: CloudCog,
    title: "Managed IAM Services",
    text: "Monitoring, incident handling, operations, upgrades, enhancements, support and platform health management."
  },
  {
    icon: KeyRound,
    title: "Privileged Access",
    text: "Govern administrative access, reduce standing privilege and strengthen control over high-risk identities."
  },
  {
    icon: Bot,
    title: "Machine Identity",
    text: "Discover, assign ownership, govern and secure service accounts, bots, APIs, workloads and non-human identities."
  },
  {
    icon: Network,
    title: "Identity Integrations",
    text: "Connect HR, directories, SaaS, cloud, databases and business applications through secure identity workflows."
  }
];

const outcomes = [
  "Faster IAM delivery with AI-assisted engineering",
  "Human accountability for governance and risk decisions",
  "Scalable project squads and flexible managed support",
  "Practical controls aligned to enterprise operations"
];

const platforms = ["SailPoint", "Saviynt", "Microsoft Entra ID", "Okta", "CyberArk", "BeyondTrust"];

const operatingModel = [
  {
    number: "01",
    title: "Assess",
    text: "Understand identity risks, operating gaps, application landscape and business priorities."
  },
  {
    number: "02",
    title: "Engineer",
    text: "Design and implement secure identity architecture, integrations, workflows and governance controls."
  },
  {
    number: "03",
    title: "Operate",
    text: "Run, monitor and continuously improve IAM through accountable managed service squads."
  }
];

function LogoMark({ compact = false }) {
  return (
    <div className={compact ? "logo-mark logo-mark--compact" : "logo-mark"} aria-label="NCube Identity">
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cubeBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d5bd7" />
            <stop offset="100%" stopColor="#22c7ff" />
          </linearGradient>
          <linearGradient id="cubeDark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#071b3a" />
            <stop offset="100%" stopColor="#0c376e" />
          </linearGradient>
        </defs>
        <path d="M60 7 106 32 60 57 14 32Z" fill="url(#cubeBlue)" />
        <path d="M14 32 60 57v55L14 86Z" fill="#0b4eac" />
        <path d="M106 32 60 57v55l46-26Z" fill="url(#cubeDark)" />
        <path d="M36 81V41l48 55V50" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 7v105M14 32l46 25 46-25" fill="none" stroke="rgba(255,255,255,.33)" strokeWidth="2" />
      </svg>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="NCube Identity home">
            <LogoMark compact />
            <div>
              <span className="brand-name">NCube Identity</span>
              <span className="brand-sub">AI-Powered IAM</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#model">How We Work</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Talk to an Expert <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#model" onClick={() => setMenuOpen(false)}>How We Work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Talk to an Expert</a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="hero-glow hero-glow--one" aria-hidden="true"></div>
          <div className="hero-glow hero-glow--two" aria-hidden="true"></div>

          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={17} />
                AI-Powered IAM Consulting & Managed Services
              </div>

              <h1>
                Protect every identity.
                <span>Power every enterprise.</span>
              </h1>

              <p className="hero-lead">
                NCube Identity helps organizations secure workforce, privileged and machine identities through
                modern IAM engineering, governance and managed operations.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Book a Discovery Call <ArrowRight size={18} />
                </a>
                <a href="#services" className="button button-secondary">
                  Explore Our Services
                </a>
              </div>

              <div className="hero-proof">
                <span><CheckCircle2 size={18} /> AI-assisted delivery</span>
                <span><CheckCircle2 size={18} /> Human-led governance</span>
                <span><CheckCircle2 size={18} /> Enterprise-ready operations</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="NCube Identity protection visual">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="visual-card visual-card--top">
                <Fingerprint size={21} />
                <div>
                  <small>Identity Coverage</small>
                  <strong>Human + Machine</strong>
                </div>
              </div>

              <div className="visual-core">
                <LogoMark />
                <div className="core-shield">
                  <ShieldCheck size={58} />
                </div>
              </div>

              <div className="visual-card visual-card--bottom">
                <BrainCircuit size={21} />
                <div>
                  <small>Operating Model</small>
                  <strong>AI + Expert Squads</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="container platform-strip">
            <span className="platform-strip-label">Identity ecosystems we support</span>
            <div className="platform-list">
              {platforms.map((platform) => <span key={platform}>{platform}</span>)}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Capabilities</p>
                <h2>End-to-end identity security services</h2>
              </div>
              <p>
                From strategy and implementation to long-term operations, we support the complete identity lifecycle.
              </p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">Discuss this service <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust-section section-dark">
          <div className="container trust-layout">
            <div>
              <p className="section-kicker section-kicker--light">Why NCube Identity</p>
              <h2>AI-powered. Human-driven. Trust-delivered.</h2>
              <p className="trust-copy">
                We use automation to accelerate engineering while keeping governance, architecture and risk decisions
                accountable to experienced identity professionals.
              </p>
            </div>

            <div className="outcome-list">
              {outcomes.map((outcome) => (
                <div className="outcome-item" key={outcome}>
                  <CheckCircle2 size={22} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="model" className="section model-section">
          <div className="container">
            <div className="section-heading centered">
              <div>
                <p className="section-kicker">Our Operating Model</p>
                <h2>From identity challenge to measurable control</h2>
              </div>
              <p>
                A practical delivery framework designed for fast execution, clear ownership and continuous improvement.
              </p>
            </div>

            <div className="model-grid">
              {operatingModel.map((item) => (
                <article className="model-card" key={item.number}>
                  <span className="model-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-card">
            <div className="about-visual">
              <div className="about-cube">
                <LogoMark />
              </div>
              <Layers3 className="about-layers" size={52} />
            </div>

            <div className="about-copy">
              <p className="section-kicker">About NCube Identity</p>
              <h2>Building trust through identity</h2>
              <p>
                NCube Identity is an identity security consulting and managed services company focused on helping
                enterprises design, implement and operate secure access programs.
              </p>
              <p>
                Our vision is to simplify identity governance for both human and machine identities through intelligent
                automation, practical engineering and accountable service delivery.
              </p>
              <div className="about-pill-row">
                <span>Consulting</span>
                <span>Implementation</span>
                <span>Managed Services</span>
                <span>Machine Identity</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <p className="section-kicker section-kicker--light">Start a conversation</p>
              <h2>Ready to strengthen your identity program?</h2>
              <p>
                Talk to NCube Identity about IAM consulting, implementation, managed services or machine identity initiatives.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-light" href="mailto:contact@ncubeidentity.com">
                contact@ncubeidentity.com <ArrowRight size={18} />
              </a>
              <span>No obligation. Start with a discovery discussion.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand footer-brand">
            <LogoMark compact />
            <div>
              <span className="brand-name">NCube Identity</span>
              <span className="brand-sub">Protect. Govern. Automate.</span>
            </div>
          </div>

          <div className="footer-copy">
            <span>© {new Date().getFullYear()} NCube Identity. All rights reserved.</span>
            <span>AI-Powered IAM Consulting & Managed Services</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
