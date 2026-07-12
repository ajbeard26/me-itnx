import {
  ArrowDown,
  ArrowRight,
  Camera,
  Cloud,
  Code2,
  Database,
  Mail,
  MonitorCog,
  Network,
  ShieldCheck,
  Wrench
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const services = [
  { icon: Wrench, title: "IT Support & Repair", text: "Troubleshooting, repair, upgrades, and reliable end-user support." },
  { icon: Network, title: "Network Solutions", text: "Network design, setup, firewall configuration, and ongoing management." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Security-focused systems, access controls, backups, and risk reduction." },
  { icon: Database, title: "Data & Migration", text: "Secure migrations, backups, cloud transitions, and device replacements." },
  { icon: Camera, title: "Security Cameras", text: "Camera installation, configuration, remote viewing, and support." },
  { icon: Code2, title: "Web Development", text: "Modern websites, dashboards, internal tools, and business applications." }
];

export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-overlay" />
        <Navbar />
        <div className="hero-content">
          <p className="hero-kicker">IT PROFESSIONAL · ENTREPRENEUR · PROBLEM SOLVER</p>
          <h1>AJ BEARD</h1>
          <p className="hero-lead">
            Building software, networks, and practical technology solutions that help businesses operate more efficiently.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#portfolio">View My Work <ArrowRight size={18} /></a>
            <a className="button secondary" href="#contact">Contact Me <Mail size={18} /></a>
          </div>
        </div>
        <a className="scroll-down" href="#about" aria-label="Scroll to about"><ArrowDown /></a>
        <div className="wave-divider" />
      </section>

      <section id="about" className="section about-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Technology that solves real problems.</h2>
          </div>
          <p>
            I&apos;m AJ Beard, founder of NXrent LLC and an IT professional with hands-on experience in support,
            networking, cybersecurity, automation, SaaS development, and business operations. I focus on building
            tools that are dependable, understandable, and useful in the real world.
          </p>
        </div>
        <div className="stats-grid">
          <div><strong>IT</strong><span>Support & Infrastructure</span></div>
          <div><strong>SaaS</strong><span>Business Software</span></div>
          <div><strong>Web</strong><span>Sites & Applications</span></div>
          <div><strong>Ops</strong><span>Automation & Systems</span></div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="section-heading centered">
          <p className="eyebrow">FEATURED WORK</p>
          <h2>Recent Projects</h2>
          <p>A selection of platforms, tools, websites, and technology systems I&apos;ve built or managed.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading centered light">
          <p className="eyebrow">SERVICES</p>
          <h2>How I Can Help</h2>
          <p>Flexible technology support for individuals, growing companies, and public-sector teams.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section ventures-section">
        <div className="section-heading centered">
          <p className="eyebrow">CURRENT VENTURES</p>
          <h2>What I&apos;m Building</h2>
        </div>
        <div className="ventures-grid">
          <a href="https://nxrent.com" target="_blank" rel="noreferrer" className="venture-card">
            <div className="venture-logo">NX</div>
            <div><h3>NXrent LLC</h3><p>Business software focused on payments, rentals, leasing, and customer operations.</p></div>
            <ArrowRight />
          </a>
          <a href="https://itnx.tech" target="_blank" rel="noreferrer" className="venture-card">
            <div className="venture-logo">IT</div>
            <div><h3>ITNX.tech</h3><p>Computer repair, IT services, network support, and technology consulting.</p></div>
            <ArrowRight />
          </a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>Have a project or technology problem?</h2>
          <p>Tell me what you&apos;re working on and what you need help solving.</p>
        </div>
        <a className="button primary" href="mailto:aj@nxrent.com">aj@nxrent.com <Mail size={18} /></a>
      </section>

      <footer>
        <a className="signature dark" href="#home">AJ Beard</a>
        <p>Founder of NXrent LLC · IT Professional</p>
        <p>© {new Date().getFullYear()} AJ Beard. All rights reserved.</p>
      </footer>
    </main>
  );
}
