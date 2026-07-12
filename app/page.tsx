import {
  ArrowDown,
  ArrowRight,
  Camera,
  Cloud,
  Code2,
  Mail,
  Monitor,
  Network,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const services = [
  { icon: Monitor, title: "IT Support & Repair", text: "Troubleshooting, repair, upgrades, and reliable end-user support." },
  { icon: Network, title: "Network Solutions", text: "Network design, setup, firewall configuration, and ongoing management." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Security-focused systems, access controls, backups, and risk reduction." },
  { icon: Cloud, title: "Data & Migration", text: "Secure migrations, backups, cloud transitions, and device replacements." },
  { icon: Camera, title: "Security Cameras", text: "Camera installation, configuration, remote viewing, and support." },
  { icon: Code2, title: "Web Development", text: "Modern websites, dashboards, internal tools, and business applications." }
];

export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-bg" />
          <div className="hero-vignette" />
          <div className="hero-grain" />
        </div>
        <Navbar />
        <div className="hero-inner">
          <div className="hero-content reveal">
            <p className="hero-kicker">IT Professional · Entrepreneur · Problem Solver</p>
            <h1>TO</h1>
            <p className="hero-lead">
              Building software, networks, and technology solutions that help businesses operate more efficiently.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">
                View My Work <ArrowRight size={17} strokeWidth={2.5} />
              </a>
              <a className="button secondary" href="#contact">
                Contact Me <Mail size={17} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        <a className="scroll-down" href="#portfolio" aria-label="Scroll to portfolio">
          <ArrowDown size={18} />
        </a>
        <div className="wave-divider" aria-hidden="true" />
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Featured Work</p>
          <h2>Recent Projects</h2>
          <div className="heading-rule" />
        </div>
        <div className="projects-track">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        <div className="section-cta reveal">
          <a className="button outline" href="#contact">
            View All Projects
          </a>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="services-grid reveal">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-layout reveal">
          <div className="about-portrait">
            <Image
              src="/images/aj-portrait.png"
              alt="TO"
              width={640}
              height={853}
              className="about-portrait-img"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>Technology that solves real problems.</h2>
            <p>
              I&apos;m TO, founder of NXrent LLC and an IT professional with hands-on experience in support,
              networking, cybersecurity, automation, SaaS development, and business operations. I focus on building
              tools that are dependable, understandable, and useful in the real world.
            </p>
          </div>
        </div>
        <div className="stats-grid reveal">
          <div><strong>IT</strong><span>Support & Infrastructure</span></div>
          <div><strong>SaaS</strong><span>Business Software</span></div>
          <div><strong>Web</strong><span>Sites & Applications</span></div>
          <div><strong>Ops</strong><span>Automation & Systems</span></div>
        </div>
      </section>

      <section id="blog" className="section blog-section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Insights</p>
          <h2>Notes from the field</h2>
          <p>Occasional thoughts on IT, automation, and building software for real businesses.</p>
        </div>
        <div className="blog-placeholder reveal">
          <p>New articles coming soon.</p>
          <a className="text-link" href="#contact">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="section ventures-section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Current Ventures</p>
          <h2>What I&apos;m Building</h2>
        </div>
        <div className="ventures-grid reveal">
          <a href="https://nxrent.com" target="_blank" rel="noreferrer" className="venture-card">
            <div className="venture-logo-img">
              <Image src="/images/logos/nxrent.png" alt="NXrent" width={120} height={48} />
            </div>
            <div>
              <h3>NXrent LLC</h3>
              <p>Business software focused on payments, rentals, leasing, and customer operations.</p>
            </div>
            <ArrowRight size={20} />
          </a>
          <a href="https://itnx.tech" target="_blank" rel="noreferrer" className="venture-card">
            <div className="venture-logo-img dark">
              <Image src="/images/logos/itnx.png" alt="ITNX.tech" width={120} height={48} />
            </div>
            <div>
              <h3>ITNX.tech</h3>
              <p>Computer repair, IT services, network support, and technology consulting.</p>
            </div>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="reveal">
          <p className="eyebrow light">Let&apos;s Work Together</p>
          <h2>Have a project or technology problem?</h2>
          <p>Tell me what you&apos;re working on and what you need help solving.</p>
        </div>
        <a className="button primary reveal" href="mailto:to@nxrent.com">
          to@nxrent.com <Mail size={17} strokeWidth={2.5} />
        </a>
      </section>

      <footer>
        <a className="signature dark" href="#home">TO</a>
        <p>Founder of NXrent LLC · IT Professional</p>
        <p>© {new Date().getFullYear()} TO. All rights reserved.</p>
      </footer>
    </main>
  );
}
