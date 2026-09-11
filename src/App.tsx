import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  X,
} from "lucide-react";
import "./styles.css";

const skills = [
  "Java",
  "Python",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "REST APIs",
  "AI integration",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <div className="noise-layer" aria-hidden="true" />
      <div className="cursor-orbit cursor-orbit-one" aria-hidden="true" />
      <div className="cursor-orbit cursor-orbit-two" aria-hidden="true" />

      {/* ── NAV ── */}
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" onClick={closeMenu}>
          <span className="brand-slash">/</span> PH
          <span className="brand-dot">.</span>
        </a>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            <span>01</span> About
          </a>
          <a href="#stack" onClick={closeMenu}>
            <span>02</span> Stack
          </a>
          <a href="#work" onClick={closeMenu}>
            <span>03</span> Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            <span>04</span> Contact
          </a>
        </div>
        <a
          className="nav-status"
          href="https://github.com/PrathamHapani01"
          target="_blank"
          rel="noreferrer"
        >
          <span className="status-pulse" /> Available for good work
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <span className="eyebrow-line" /> Based in Gujarat, India{" "}
            <span className="eyebrow-index">/ 2026</span>
          </p>
          <div className="hero-name reveal" aria-label="Pratham Hapani">
            <span className="hero-name-line">Pratham</span>
            <span className="hero-name-line hero-name-indent">
              Hapani<span className="title-mark">.</span>
            </span>
          </div>
          <h1 className="hero-title reveal">
            <span className="hero-title-line">Building</span>
            <span className="hero-title-line hero-title-indent">
              <em>the</em> invisible<span className="title-mark">.</span>
            </span>
            <span className="hero-title-line">
              infrastructure<span className="title-mark">.</span>
            </span>
          </h1>
          <div className="hero-lower reveal">
            <p className="hero-intro">
              Backend developer intern{" "}
              <strong>@ ScalerBit</strong>. I turn messy problems into clean
              systems that quietly do a lot.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/PrathamHapani01"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-ghost"
                href="https://www.linkedin.com/in/pratham-hapani-395b18363/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-terminal reveal" aria-label="Developer terminal">
          <div className="terminal-topbar">
            <span />
            <span />
            <span />
            <small>pratham@localhost:~</small>
          </div>
          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">$</span> whoami
            </p>
            <p className="terminal-output">pratham_hapani</p>
            <p>
              <span className="terminal-prompt">$</span> cat current_focus.txt
            </p>
            <p className="terminal-output terminal-caret">
              backend systems<span className="blink">_</span>
            </p>
            <p className="terminal-comment">
              // shipping ideas, one API at a time
            </p>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <ArrowDownRight size={18} />
        </a>
        <div className="hero-side-label">BACKEND / SYSTEMS / LOGIC</div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-strip" aria-label="Areas of focus">
        <div className="marquee-track">
          JAVA <span>✳</span> PYTHON <span>✳</span> APIS <span>✳</span> AI
          INTEGRATION <span>✳</span> SYSTEMS <span>✳</span> JAVA <span>✳</span>{" "}
          PYTHON <span>✳</span> APIS <span>✳</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="content-section about-section" id="about">
        <div className="section-label reveal">
          <span>01</span> About me
        </div>
        <div className="about-layout">
          <div className="about-statement reveal">
            <span className="quote-mark">"</span>
            <p>
              Not just writing code.
              <br />
              <strong>Designing what happens next.</strong>
            </p>
          </div>
          <div className="about-copy reveal">
            <p className="large-copy">
              I'm Pratham — a backend developer who likes understanding the
              engine behind the experience.
            </p>
            <p className="body-copy">
              Currently interning at ScalerBit and studying for a Diploma in IT
              at P P Savani University. I work where logic meets impact: APIs,
              databases, automation, and AI-integrated systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="content-section stack-section" id="stack">
        <div className="section-heading-row reveal">
          <div className="section-label">
            <span>02</span> The toolkit
          </div>
          <p>Tools are only interesting when they make the idea better.</p>
        </div>
        <div className="stack-grid">
          <div className="stack-intro reveal">
            <Code2 size={34} />
            <h2>
              Things I
              <br />
              <span>build with.</span>
            </h2>
            <p>
              A growing set of tools for building reliable, useful, slightly
              over-engineered things.
            </p>
          </div>
          <div className="skill-cloud reveal">
            {skills.map((skill, index) => (
              <span
                className={`skill-chip skill-chip-${index % 3}`}
                key={skill}
              >
                {skill}
                <sup>0{index + 1}</sup>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="content-section experience-section" id="experience">
        <div className="section-label reveal">
          <span>03</span> In the field
        </div>
        <div className="experience-row reveal">
          <div className="experience-date">2026 — now</div>
          <div className="experience-company">
            <span className="company-kicker">01 / EXPERIENCE</span>
            <h2>ScalerBit</h2>
            <p>Backend Developer Intern</p>
          </div>
          <div className="experience-detail">
            <p>
              Building the behind-the-scenes systems that keep products moving.
              Working across APIs, data, and the details users never have to
              think about.
            </p>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="content-section work-section" id="work">
        <div className="section-heading-row reveal">
          <div className="section-label">
            <span>04</span> Selected work
          </div>
          <a
            className="text-link"
            href="https://github.com/PrathamHapani01"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="project-grid">
          <article className="project-card project-card-featured reveal">
            <div className="project-number">01</div>
            <div className="project-symbol">
              <Terminal size={48} />
            </div>
            <div className="project-content">
              <span className="project-type">PROJECT / BACKEND</span>
              <h2>
                More projects
                <br />
                <em>coming soon.</em>
              </h2>
              <p>
                Backend systems in progress. Check GitHub for the latest repos
                and what I'm currently shipping.
              </p>
              <div className="tag-row">
                <span>GitHub</span>
                <span>In Progress</span>
              </div>
            </div>
            <a
              className="card-arrow"
              href="https://github.com/PrathamHapani01"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Pratham's GitHub"
            >
              <ExternalLink size={19} />
            </a>
          </article>
          <article className="project-card project-card-secondary reveal">
            <div className="project-number">02</div>
            <div className="project-lines" aria-hidden="true" />
            <div className="project-content">
              <span className="project-type">OPEN SLOT / 02</span>
              <h2>
                More systems.
                <br />
                <em>More soon.</em>
              </h2>
              <p>
                Have a project worth putting on the internet? I'm collecting the
                good ones.
              </p>
              <div className="tag-row">
                <span>APIs</span>
                <span>Logic</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education-band reveal" id="education">
        <div className="education-label">EDUCATION</div>
        <div>
          <h2>P P Savani University</h2>
          <p>Diploma in Information Technology</p>
        </div>
        <div className="education-mark">
          IT<span>↗</span>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="section-label reveal">
          <span>05</span> Make contact
        </div>
        <div className="contact-layout">
          <div className="contact-heading reveal">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Open to possibilities
            </p>
            <h2>
              Let's build
              <br />
              <em>something</em>
              <br />
              that works.
            </h2>
          </div>
          <div className="contact-actions reveal">
            <p>
              Have an idea, an opportunity, or a system that needs untangling?
              Find me on the internet.
            </p>
            <a
              className="contact-button contact-button-github"
              href="https://github.com/PrathamHapani01"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={22} />
              <span>
                <small>FOLLOW THE CODE</small> GitHub
              </span>
              <ArrowUpRight size={21} />
            </a>
            <a
              className="contact-button contact-button-linkedin"
              href="https://www.linkedin.com/in/pratham-hapani-395b18363/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={22} />
              <span>
                <small>CONNECT PROFESSIONALLY</small> LinkedIn
              </span>
              <ArrowUpRight size={21} />
            </a>
            <a
              className="mail-link"
              href="mailto:prathamhapani.082008@gmail.com"
            >
              <Mail size={16} /> prathamhapani.082008@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <span>© 2026 Pratham Hapani</span>
        <span>
          Built with intent<span className="footer-dot">●</span>
        </span>
        <a href="#top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </main>
  );
}
