const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #f5f4f1; }

  .hp {
    font-family: 'DM Sans', sans-serif;
    background: #f5f4f1;
    color: #111;
    padding-top: 0;
  }

  /* ── ABOUT HEADLINE BANNER ── */
  .about-banner {
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    padding: 2.2rem 2rem;
    margin: 2rem 0 1.5rem;
  }
  .about-banner h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -.01em;
  }

  /* ── 3-COL GRID ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; }
    .about-grid__photo { min-height: 300px; }
  }

  .about-card {
    background: #f5f4f1;
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about-card__bio {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.75;
    color: #222;
  }

  /* skills card */
  .about-card__label {
    font-size: .72rem;
    font-weight: 500;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: .5rem;
  }
  .skill-block { margin-bottom: 1.1rem; }
  .skill-block:last-child { margin-bottom: 0; }
  .skill-block__title {
    font-weight: 500;
    font-size: .92rem;
    margin-bottom: .3rem;
    color: #111;
  }
  .skill-block__list {
    font-size: .83rem;
    color: #555;
    line-height: 1.65;
  }
  .skill-block + .skill-block {
    padding-top: 1rem;
    border-top: 1px solid #e2e0db;
  }

  /* photo card */
  .about-grid__photo {
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    overflow: hidden;
    min-height: 420px;
    background: #e8e6e1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-grid__photo img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: top center;
    display: block;
  }
  .photo-placeholder {
    font-size: 4rem; color: #ccc;
    display: flex; align-items: center; justify-content: center;
    width: 100%; height: 100%; min-height: 360px;
  }

  /* ── FEATURED IN + SKILLS LOWER ROW ── */
  .lower-grid {
    display: grid;
    grid-template-columns: 1fr 1.35fr 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    align-items: start;
  }
  @media (max-width: 900px) { .lower-grid { grid-template-columns: 1fr; } }

  .featured-card {
    background: #f5f4f1;
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    overflow: hidden;
  }
  .featured-card__hdr {
    padding: .9rem 1.2rem;
    font-size: .72rem;
    font-weight: 500;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #888;
    border-bottom: 1px solid #e2e0db;
  }
  .featured-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .9rem 1.2rem;
    border-bottom: 1px solid #e2e0db;
  }
  .featured-item:last-child { border-bottom: none; }
  .featured-item__icon {
    width: 42px; height: 42px; border-radius: 8px;
    background: #222; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
    font-family: 'Playfair Display', serif; font-weight: 700;
    letter-spacing: -.03em;
  }
  .featured-item__text {
    font-size: .85rem;
    font-weight: 400;
    color: #222;
    line-height: 1.4;
  }

  /* more skills */
  .skills-extra {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    overflow: hidden;
  }
  .skills-extra__block {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #e2e0db;
  }
  .skills-extra__block:last-child { border-bottom: none; }
  .skills-extra__block .skill-block__title { font-size: .95rem; }
  .skills-extra__block .skill-block__list { font-size: .82rem; color: #555; }

  /* socials grid */
  .socials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    overflow: hidden;
  }
  .social-cell {
    display: flex; align-items: center; justify-content: center;
    padding: 2rem 1rem;
    border-right: 1px solid #e2e0db;
    border-bottom: 1px solid #e2e0db;
    cursor: pointer;
    transition: background .2s;
    text-decoration: none;
    color: #111;
  }
  .social-cell:hover { background: #eceae5; }
  .social-cell:nth-child(3n) { border-right: none; }
  .social-cell:nth-child(4), .social-cell:nth-child(5), .social-cell:nth-child(6) { border-bottom: none; }
  .social-cell svg { width: 28px; height: 120px; }

  /* ── CTA BANNER ── */
  .cta-banner {
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    padding: 3rem 2.5rem;
    margin-bottom: 1.5rem;
  }
  .cta-banner h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -.02em;
  }

  /* ── FOOTER ── */
  .hp-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
    border: 1px solid #d4d2cd;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) { .hp-footer { grid-template-columns: 1fr; } }

  .footer-col {
    padding: 1.5rem;
    border-right: 1px solid #e2e0db;
  }
  .footer-col:last-child { border-right: none; }

  .footer-col__label {
    font-size: .72rem;
    font-weight: 500;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1.25rem;
  }

  .footer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .75rem .9rem;
    border: 1px solid #e2e0db;
    border-radius: 6px;
    margin-bottom: .5rem;
    font-size: .9rem;
    color: #111;
    text-decoration: none;
    transition: background .2s;
    cursor: pointer;
  }
  .footer-link:hover { background: #eceae5; }
  .footer-link:last-child { margin-bottom: 0; }
  .footer-link__arrow {
    width: 24px; height: 24px;
    border: 1px solid #d4d2cd;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: .75rem;
    color: #555;
    flex-shrink: 0;
  }

  .footer-legal {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-top: 3rem;
  }
  .footer-legal a {
    font-size: .85rem;
    color: #444;
    text-decoration: none;
  }
  .footer-legal a:hover { text-decoration: underline; }
  .footer-copy {
    font-size: .78rem;
    color: #888;
    margin-top: 1.5rem;
  }
`;

/* ── SOCIAL ICONS ── */
const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.843L2.25 2.25h6.938l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M20.04 12.12c-4.3-1.4-7.56-1.7-12.04-.7M4.76 5.6c4.21 2.4 7.31 4.6 9.24 9.4" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  behance: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zM15.971 13h4.573c-.069-1.786-.872-2.271-2.141-2.271-1.207 0-2.186.517-2.432 2.271zM8 12c1.079-.5 1.849-1.45 1.849-2.713C9.849 7.249 8.457 6 5.963 6H1v12h5.4c2.552 0 4.237-1.313 4.237-3.486C10.637 13.012 9.504 12.25 8 12zm-4.5-4.5h1.962c1.135 0 1.838.417 1.838 1.464 0 .95-.654 1.502-1.838 1.502H3.5V7.5zm2.3 7.5H3.5v-3.1h2.3c1.304 0 2.075.485 2.075 1.55S7.104 15 5.8 15z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Home() {
  return (
    <div className="hp">
      <style>{STYLES}</style>
      <div className="container-fluid px-3 px-md-4">

        {/* ── ABOUT HEADLINE BANNER ── */}
        <div className="about-banner">
          <h1>Creating Interfaces That Understand People</h1>
        </div>

        {/* ── 3-COL ABOUT GRID ── */}
        <div className="about-grid">

          {/* Col 1 — Bio */}
          <div className="about-card">
            {/* Education */}
            <div className="about-card__hdr">About Me</div>
            <div className="about-card__bio">
              <p>              I'm a passionate UX designer dedicated to crafting intuitive and delightful digital experiences. With a background in human-computer interaction and a love for problem-solving, I specialize in turning complex challenges into elegant solutions that resonate with users. My design philosophy centers around empathy, simplicity, and innovation, ensuring that every project I undertake not only meets user needs but also brings joy and ease to their interactions.</p>
              <p>
                Over the years, I have collaborated with cross-functional teams to create products that are both visually engaging and functionally seamless. From conducting in-depth user research to developing wireframes, interactive prototypes, and final designs, I am deeply involved in every stage of the design process. I thrive on analyzing user behavior, identifying pain points, and transforming insights into meaningful design decisions that drive measurable impact.</p>
            </div>
          </div>

          {/* Col 2 — Education + Core Skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Education */}
            <div className="about-card" style={{ gap: 0, padding: 0, overflow: "hidden" }}>
              <div className="featured-card__hdr">Education</div>
              <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #e2e0db" }}>
                <div style={{ fontWeight: 500, fontSize: ".92rem", marginBottom: ".2rem" }}>Master of Science, Human-Computer Interaction</div>
                <div style={{ fontSize: ".82rem", color: "#666" }}>NorthWest point Institute of Technology, 2019</div>
              </div>
              <div style={{ padding: "1rem 1.5rem" }}>
                <div style={{ fontWeight: 500, fontSize: ".92rem", marginBottom: ".2rem" }}>Bachelor of Arts, Behavioral Science</div>
                <div style={{ fontSize: ".82rem", color: "#666" }}>Westmontaine University, 2017</div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="skills-extra">
              <div className="featured-card__hdr" style={{ padding: ".9rem 1.5rem", borderBottom: "1px solid #e2e0db", fontSize: ".72rem", fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "#888" }}>
                Core Skills
              </div>
              {[
                {
                  title: "Research & Strategy",
                  list: "User Research | Competitive Analysis | Information Architecture | User Journeys | Usability Testing | A/B Testing | Analytics",
                },
                {
                  title: "Design & Prototyping",
                  list: "Wireframing | UI Design | Interaction Design | Prototyping | Design Systems | Responsive Design | Accessibility (WCAG)",
                },
                {
                  title: "Tools",
                  list: "Figma | Sketch | Adobe XD | Principle | Framer | InVision | Miro | Hotjar | GA | Maze | Optimal Workshop",
                },
                {
                  title: "AI & Emerging Tech",
                  list: "AI-Assisted Design | Prompt Engineering for Design | Generative Design Tools | Automated Testing | Predictive UX | Personalization Algorithms",
                },
                {
                  title: "Collaboration",
                  list: "Workshops | Stakeholder Management | Agile/Scrum | Design QA | Dev Handoff | Cross-functional Leadership",
                },
              ].map((s) => (
                <div className="skills-extra__block" key={s.title}>
                  <div className="skill-block__title">{s.title}</div>
                  <div className="skill-block__list">{s.list}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Photo + Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="about-grid__photo">
              <div className="photo-placeholder"><img src="https://media.licdn.com/dms/image/v2/D4D03AQExPIBBnRpcUQ/profile-displayphoto-crop_800_800/B4DZvHC.UmKQAI-/0/1768571006576?e=1776902400&v=beta&t=vJlSOsoHJGO5FVjTHKBKsFIobV8nYnzlYI2fxOAZv64" alt="profile pic" /></div>
            </div>
            <div className="socials-grid">
              {[
                { icon: icons.email, href: "#" },
                { icon: icons.x, href: "#" },
                { icon: icons.dribbble, href: "#" },
                { icon: icons.instagram, href: "#" },
                { icon: icons.behance, href: "#" },
                { icon: icons.linkedin, href: "https://www.linkedin.com/in/samadhan-radye-824a21375/" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-cell">{s.icon}</a>
              ))}
            </div>
          </div>

        </div>

        {/* ── CTA BANNER ── */}
        <div className="cta-banner">
          <h2>Let's Create Something Exceptional Together</h2>
        </div>

        {/* ── FOOTER ── */}
        <div className="hp-footer">

          {/* Quick Links */}
          <div className="footer-col">
            <div className="footer-col__label">Quick Links</div>
            <div style={{ marginTop: "3rem" }}>
              {["Portfolio", "About", "Services", "Contact"].map((l) => (
                <a key={l} href="#" className="footer-link">
                  <span>{l}</span>
                  <span className="footer-link__arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <div className="footer-col__label">Contact</div>
            <div style={{ marginTop: "1.25rem" }}>
              {["Linkedin", "Dribbble", "Behance", "IG", "Email"].map((l) => (
                <a key={l} href="#" className="footer-link">
                  <span>{l}</span>
                  <span className="footer-link__arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <div className="footer-col__label">Legal</div>
            <div className="footer-legal">
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Accessibility Statement</a>
            </div>
            <p className="footer-copy">© 2035 by Samadhan. All rights reserved.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;