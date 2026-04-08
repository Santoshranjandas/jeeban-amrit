import { NavLink, Route, Routes } from "react-router-dom";

const leadership = [
  { name: "Satya Ranjan Das", role: "President", featured: true, portrait: "poster" },
  { name: "Shyam Sundar Mohanty", role: "General Secretary", portrait: "placeholder", accent: "green" },
  { name: "Niranjan Mohanty", role: "Vice President", portrait: "placeholder", accent: "teal" },
  { name: "Sambid Biswal", role: "Convenor Balasore", portrait: "placeholder", accent: "gold" },
  { name: "Smarak Dash", role: "Convenor Remuna", portrait: "placeholder", accent: "red" },
  { name: "Mrutunjay Rout", role: "Treasurer", portrait: "placeholder", accent: "charcoal" }
];

const initiatives = [
  {
    title: "Plantation & Urban Beautification",
    status: "Active Now",
    tone: "green",
    text: "The current featured initiative focuses on plantation, greener streets, and a more beautiful urban environment."
  },
  {
    title: "Urban Development",
    status: "Coming Next",
    tone: "teal",
    text: "This section is ready to grow into civic improvement, cleaner neighborhoods, and community-led development work."
  },
  {
    title: "Blood Donation & Health Support",
    status: "Planned",
    tone: "red",
    text: "A future health section can host blood donation drives, awareness programs, and public wellbeing campaigns."
  },
  {
    title: "Education & Public Awareness",
    status: "Future Layer",
    tone: "gold",
    text: "Educational outreach and community awareness work can be added as the organisation expands its service portfolio."
  }
];

const pillars = [
  {
    title: "Environment",
    icon: "E",
    tone: "green",
    text: "Plantation drives, greener streets, and long-term ecological responsibility."
  },
  {
    title: "Urban Development",
    icon: "U",
    tone: "teal",
    text: "Better public spaces, cleaner surroundings, and visible civic improvement."
  },
  {
    title: "Health Support",
    icon: "H",
    tone: "red",
    text: "A growing commitment to wellbeing, outreach, and future blood donation initiatives."
  },
  {
    title: "Awareness & Education",
    icon: "A",
    tone: "gold",
    text: "Community knowledge, social awareness, and shared responsibility through engagement."
  }
];

function App() {
  return (
    <div className="app-shell">
      <DecorativeBackdrop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/plantation-drive-2026" element={<PlantationPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/">
          <LogoMark />
          <span className="brand-copy">
            <strong>Jeeban Amrit</strong>
            <span>Social Service Organisation</span>
          </span>
        </NavLink>
        <nav className="site-nav">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/initiatives">Initiatives</HeaderLink>
          <HeaderLink to="/plantation-drive-2026">Plantation Drive</HeaderLink>
          <HeaderLink to="/leadership">Leadership</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </nav>
        <NavLink className="button button-primary" to="/contact">
          Volunteer
        </NavLink>
      </div>
    </header>
  );
}

function HeaderLink({ to, children }) {
  return (
    <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to={to}>
      {children}
    </NavLink>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <LogoMark />
            <span className="brand-copy">
              <strong>Jeeban Amrit</strong>
              <span>Working for a healthier, greener, and more compassionate tomorrow.</span>
            </span>
          </div>
        </div>
        <div>
          <h3>Current Focus</h3>
          <p>Plantation Drive 2026<br />Urban Beautification Program<br />Balasore, Odisha</p>
        </div>
        <div>
          <h3>What Grows Next</h3>
          <p>Blood donation, urban development, and other social service pages can be expanded as more information arrives.</p>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span className="logo-cell tree">T</span>
      <span className="logo-cell heart">H</span>
      <span className="logo-cell book">B</span>
      <span className="logo-cell care">+</span>
    </span>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Community. Care. Action.</span>
            <h1>A modern social service platform for many causes, not just one.</h1>
            <p>
              Jeeban Amrit brings together environmental action, urban development, public wellbeing,
              and service-led community initiatives under one living identity.
            </p>
            <div className="hero-actions">
              <NavLink className="button button-primary" to="/initiatives">
                Explore Initiatives
              </NavLink>
              <NavLink className="button button-secondary" to="/contact">
                Join Our Mission
              </NavLink>
            </div>
            <div className="hero-stat-row">
              <InfoChip label="Current live page" value="Plantation Drive 2026" />
              <InfoChip label="Place" value="Balasore, Odisha" />
              <InfoChip label="Next vertical" value="Blood Donation" />
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />
            <div className="poster-card">
              <div className="poster-card-head">
                <span className="mini-tag">Featured Campaign</span>
                <span className="pulse-dot" />
              </div>
              <img
                src="/ref/662824045_10162033434146949_3693761508649048548_n.jpg"
                alt="Jeeban Amrit Plantation Drive 2026 poster"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionIntro
        eyebrow="Our Identity"
        title="A broader organisation brand with campaign-specific visual themes."
        text="The website now treats Jeeban Amrit as a multi-cause organisation. Plantation gets the botanical tone, while the wider platform stays more civic, contemporary, and flexible."
      />

      <section className="section">
        <div className="container card-grid two-up">
          <FeaturePanel
            title="Designed for growth"
            text="The structure is ready for plantation, blood donation, urban development, and future welfare initiatives without redesigning the whole site every time."
          />
          <FeaturePanel
            title="Campaign-first storytelling"
            text="Instead of plain text pages, the site now has a reusable, component-driven layout that can grow into a richer experience as more materials arrive."
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">Core Service Areas</span>
          <h2>One mission, multiple ways to serve the public.</h2>
        </div>
        <div className="container card-grid four-up">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <span className={`tone-icon ${pillar.tone}`}>{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-showcase">
          <div className="showcase-copy">
            <span className="eyebrow">Current Highlight</span>
            <h2>Plantation Drive 2026 starts the digital journey.</h2>
            <p>
              The first completed initiative page reflects Jeeban Amrit’s urban beautification effort with a greener, more botanical atmosphere drawn from the poster you shared.
            </p>
            <ul className="detail-list">
              <li>Inauguration Ceremony</li>
              <li>Urban Beautification Program</li>
              <li>8 April 2026, 7:00 AM</li>
            </ul>
            <NavLink className="button button-primary" to="/plantation-drive-2026">
              Open Plantation Page
            </NavLink>
          </div>
          <div className="showcase-panel">
            <div className="gradient-band green-band" />
            <div className="showcase-shell">
              <img
                src="/ref/662824045_10162033434146949_3693761508649048548_n.jpg"
                alt="Plantation drive poster"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">Leadership</span>
          <h2>Guided by people committed to practical social service.</h2>
        </div>
        <div className="container leader-preview-grid">
          {leadership.slice(0, 3).map((person) => (
            <LeaderCard
              key={person.name}
              person={person}
              description={
                person.featured
                  ? "Leading Jeeban Amrit’s public-facing mission and current campaign direction."
                  : "Part of the core team helping shape the organisation’s service efforts."
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <PageFrame
      eyebrow="About Jeeban Amrit"
      title="Built to unite compassion, civic pride, and community action."
      intro="Jeeban Amrit is envisioned as a social service organisation whose work can extend across plantation, urban development, health support, blood donation, and public awareness."
    >
      <div className="card-grid two-up">
        <FeaturePanel
          title="Vision"
          text="To help build communities that are healthier, cleaner, greener, and more actively involved in shaping a better shared future."
        />
        <FeaturePanel
          title="Mission"
          text="To create practical, visible initiatives that improve public life and invite people to become part of meaningful service."
        />
      </div>
      <div className="section-block">
        <SectionIntro
          eyebrow="Guiding Values"
          title="Care, dignity, participation, and visible impact."
          text="The digital identity is intentionally flexible so each future program can have its own tone while still belonging to one recognisable Jeeban Amrit platform."
        />
      </div>
      <div className="card-grid four-up">
        <MiniValue title="Compassion" text="Service begins with care for people and public life." />
        <MiniValue title="Action" text="The organisation aims for practical and visible change." />
        <MiniValue title="Participation" text="Local involvement is central to long-term impact." />
        <MiniValue title="Responsibility" text="Every initiative should leave communities stronger." />
      </div>
    </PageFrame>
  );
}

function InitiativesPage() {
  return (
    <PageFrame
      eyebrow="Initiatives"
      title="A structure ready for multiple causes."
      intro="Plantation is the first fully detailed page, but the platform is designed so blood donation, urban development, and future service areas can be added without starting over."
    >
      <div className="card-grid two-up">
        {initiatives.map((initiative) => (
          <article className={`initiative-tile ${initiative.tone}`} key={initiative.title}>
            <span className="mini-tag">{initiative.status}</span>
            <h3>{initiative.title}</h3>
            <p>{initiative.text}</p>
            {initiative.title === "Plantation & Urban Beautification" ? (
              <NavLink className="text-link" to="/plantation-drive-2026">
                View live campaign
              </NavLink>
            ) : null}
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function PlantationPage() {
  return (
    <main>
      <section className="campaign-hero">
        <div className="container campaign-grid">
          <div className="campaign-copy">
            <span className="eyebrow">Featured Initiative</span>
            <h1>Plantation Drive 2026</h1>
            <p>
              A greener chapter of Jeeban Amrit, shaped around urban beautification, plantation, and a more hopeful public environment.
            </p>
            <div className="hero-actions">
              <NavLink className="button button-primary" to="/contact">
                Participate
              </NavLink>
              <NavLink className="button button-secondary" to="/initiatives">
                See All Initiatives
              </NavLink>
            </div>
            <div className="timeline-card">
              <InfoChip label="Date" value="8 April 2026" />
              <InfoChip label="Time" value="7:00 AM" />
              <InfoChip label="Venue" value="Fandi Bazar, Balasore" />
            </div>
          </div>
          <div className="campaign-visual">
            <div className="leaf-glow" />
            <div className="poster-card campaign-poster">
              <img
                src="/ref/662824045_10162033434146949_3693761508649048548_n.jpg"
                alt="Plantation Drive 2026 campaign poster"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two-up">
          <FeaturePanel
            title="Urban Beautification Program"
            text="This campaign connects environmental care with civic pride by improving the look, feel, and environmental quality of public space."
          />
          <FeaturePanel
            title="Campaign Message"
            text="One Tree, One Life points to something larger than plantation alone: it suggests care, continuity, responsibility, and a better tomorrow."
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">Why It Matters</span>
          <h2>Plantation as visible public transformation.</h2>
        </div>
        <div className="container card-grid four-up">
          <MiniValue title="Cleaner Surroundings" text="Trees and greener streets improve everyday urban life." />
          <MiniValue title="Civic Pride" text="Beautified public spaces create stronger community connection." />
          <MiniValue title="Local Participation" text="The initiative invites people to take part in shared change." />
          <MiniValue title="Long-Term Value" text="Each plantation effort can become part of a wider movement." />
        </div>
      </section>
    </main>
  );
}

function LeadershipPage() {
  return (
    <PageFrame
      eyebrow="Leadership"
      title="The people currently visible in Jeeban Amrit’s public material."
      intro="This section can later grow into fuller profiles, portraits, and messages once more official information is available."
    >
      <div className="card-grid three-up">
        {leadership.map((person) => (
          <LeaderCard
            key={person.name}
            person={person}
            description={
              person.featured
                ? "Leading the current public identity and featured initiative of the organisation."
                : "Part of the current leadership team referenced in the campaign material."
            }
          />
        ))}
      </div>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="A ready contact hub for volunteers, supporters, and future collaborators."
      intro="Official phone, email, and social details can be dropped into this page later without changing the design structure."
    >
      <div className="card-grid two-up">
        <FeaturePanel
          title="Ways to connect"
          text="Volunteer for future initiatives, support campaigns, collaborate on social programs, or reach out to learn more about Jeeban Amrit."
        />
        <FeaturePanel
          title="Details to add next"
          text="Phone number, email, office address, donation information, and official social media links can be integrated here."
        />
      </div>
      <div className="section-block">
        <article className="wide-panel">
          <span className="mini-tag">Current event location</span>
          <h3>Fandi Bazar, Balasore, Odisha</h3>
          <p>
            This is currently the published venue for Plantation Drive 2026 and can anchor the contact page until the organisation’s permanent communication details are ready.
          </p>
        </article>
      </div>
    </PageFrame>
  );
}

function PageFrame({ eyebrow, title, intro, children }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}

function FeaturePanel({ title, text }) {
  return (
    <article className="feature-panel">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function LeaderCard({ person, description }) {
  return (
    <article className={`leader-card${person.featured ? " featured" : ""}`}>
      <div className={`leader-portrait ${person.portrait === "poster" ? "photo" : `placeholder ${person.accent}`}`}>
        {person.portrait === "poster" ? (
          <img
            src="/ref/662824045_10162033434146949_3693761508649048548_n.jpg"
            alt={person.name}
          />
        ) : (
          <span>{getInitials(person.name)}</span>
        )}
      </div>
      <div className="leader-card-body">
        <span className="mini-tag">{person.role}</span>
        <h3>{person.name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function MiniValue({ title, text }) {
  return (
    <article className="mini-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function InfoChip({ label, value }) {
  return (
    <div className="info-chip">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <section className="section">
      <div className="container section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function DecorativeBackdrop() {
  return (
    <div className="decorative-backdrop" aria-hidden="true">
      <span className="backdrop-blob one" />
      <span className="backdrop-blob two" />
      <span className="backdrop-blob three" />
    </div>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default App;
