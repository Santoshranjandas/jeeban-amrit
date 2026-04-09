import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { Studio } from "sanity";
import sanityConfig from "../sanity.config";
import { sanityClient } from "./sanity/client";
import { urlFor } from "./sanity/image";

const leadership = [
  {
    name: "Satya Ranjan Das",
    role: "President",
    featured: true,
    image: "/ref/mainImage.jpeg"
  },
  { name: "Shyam Sundar Mohanty", role: "General Secretary", accent: "mint" },
  { name: "Niranjan Mohanty", role: "Vice President", accent: "sky" },
  { name: "Sambid Biswal", role: "Convenor Balasore", accent: "sun" },
  { name: "Smarak Dash", role: "Convenor Remuna", accent: "rose" },
  { name: "Mrutunjay Rout", role: "Treasurer", accent: "stone" }
];

const pillars = [
  {
    title: "Environmental Action",
    icon: "01",
    text: "Plantation, green corridors, and beautification efforts that improve public space."
  },
  {
    title: "Urban Improvement",
    icon: "02",
    text: "Cleaner streets, stronger civic pride, and more welcoming community infrastructure."
  },
  {
    title: "Health and Care",
    icon: "03",
    text: "A foundation for future blood donation, wellbeing outreach, and service-oriented support."
  }
];

const futureWork = [
  "Blood donation drives",
  "Health awareness campaigns",
  "Expanded urban development pages",
  "Educational and social welfare updates"
];

const galleryImages = [
  "/ref/mainImage.jpeg",
  "/ref/image1.jpeg",
  "/ref/image2.jpeg",
  "/ref/image3.jpeg",
  "/ref/image4.jpeg",
  "/ref/image5.jpeg"
];

const fallbackActivities = [
  {
    _id: "local-plantation-drive",
    title: "Plantation Drive 2026",
    slug: { current: "plantation-drive-2026" },
    category: "plantation",
    date: "2026-04-08",
    location: "Fandi Bazar, Balasore",
    summary: "Jeeban Amrit launched its plantation and urban beautification initiative with community participation in Balasore.",
    coverUrl: "/ref/mainImage.jpeg",
    galleryUrls: galleryImages
  },
  {
    _id: "local-urban-beautification",
    title: "Urban Beautification Program",
    slug: { current: "urban-beautification-program" },
    category: "urban-development",
    date: "2026-04-08",
    location: "Balasore, Odisha",
    summary: "The campaign highlights cleaner, greener roadsides and a stronger sense of civic ownership.",
    coverUrl: "/ref/image1.jpeg",
    galleryUrls: ["/ref/image1.jpeg", "/ref/image2.jpeg", "/ref/image3.jpeg"]
  }
];

const activitiesQuery = `*[_type == "activity" && published == true] | order(date desc, _createdAt desc) {
  _id,
  title,
  slug,
  category,
  date,
  location,
  summary,
  coverImage,
  galleryImages,
  videoUrls,
  featured
}`;

const activityBySlugQuery = `*[_type == "activity" && published == true && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  date,
  location,
  summary,
  body,
  coverImage,
  galleryImages,
  videoUrls,
  featured
}`;

const storyCards = [
  {
    title: "Grounded in local action",
    text: "Jeeban Amrit grows through visible work in public spaces, not abstract messaging."
  },
  {
    title: "Built for many causes",
    text: "The site can grow from plantation into blood donation, civic programs, and broader social service."
  },
  {
    title: "Designed to earn trust",
    text: "Real campaign moments, clear leadership, and a softer NGO-style presentation make the organisation feel credible."
  }
];

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/plantation-drive-2026" element={<PlantationPage />} />
        <Route path="/activities/:slug" element={<ActivityDetailPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/studio/*" element={<Studio config={sanityConfig} />} />
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
          <HeaderLink to="/" tone="tone-home">Home</HeaderLink>
          <HeaderLink to="/about" tone="tone-about">About</HeaderLink>
          <HeaderLink to="/initiatives" tone="tone-initiatives">Initiatives</HeaderLink>
          <HeaderLink to="/plantation-drive-2026" tone="tone-plantation">Plantation</HeaderLink>
          <HeaderLink to="/leadership" tone="tone-leadership">Leadership</HeaderLink>
          <HeaderLink to="/contact" tone="tone-contact">Contact</HeaderLink>
        </nav>
        <NavLink className="button button-primary" to="/contact">
          Connect
        </NavLink>
      </div>
    </header>
  );
}

function HeaderLink({ to, children, tone }) {
  return (
    <NavLink className={({ isActive }) => `nav-link ${tone}${isActive ? " active" : ""}`} to={to}>
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
              <span>One Tree, One Life. Service that grows from the ground up.</span>
            </span>
          </div>
        </div>
        <div className="footer-column">
          <h3>Current Focus</h3>
          <p>Plantation Drive 2026</p>
          <p>Urban Beautification Program</p>
          <p>Balasore, Odisha</p>
        </div>
        <div className="footer-column">
          <h3>Next Expansion</h3>
          <p>Blood donation</p>
          <p>Health support</p>
          <p>Urban development</p>
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
  const { activities } = useActivities();
  const latestActivities = activities.slice(0, 3);
  const galleryViewer = useGalleryViewer();

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-header">
          <article className="hero-banner">
            <img
              src="/ref/mainImage.jpeg"
              alt="Jeeban Amrit front page main event photo"
            />
            <div className="hero-overlay">
              <div className="hero-overlay-copy">
                <span className="eyebrow">Community-led impact</span>
                <h1>Jeeban Amrit</h1>
                <p>Real civic action through plantation, beautification, and community service.</p>
              </div>
              <div className="hero-overlay-actions">
                <NavLink className="button button-primary" to="/plantation-drive-2026">
                  See campaign
                </NavLink>
                <NavLink className="button button-secondary" to="/about">
                  About us
                </NavLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container hero-stats">
          <InfoCard label="Featured initiative" value="Plantation Drive 2026" />
          <InfoCard label="Location" value="Fandi Bazar, Balasore" />
          <InfoCard label="Focus" value="Plantation and urban beauty" />
        </div>
      </section>

      <section className="section section-intro-band">
        <div className="container intro-band-grid">
          <div>
            <span className="eyebrow">Why this version feels stronger</span>
            <h2>Less brochure. More editorial NGO platform.</h2>
          </div>
          <p>
            This direction moves the site closer to the reference you liked by using softer surfaces, larger rounded image areas,
            clearer content rhythm, and more emotional campaign-led storytelling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          {storyCards.map((card) => (
            <article className="soft-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">What Jeeban Amrit works on</span>
          <h2>A social platform that can grow across environment, health, and civic development.</h2>
        </div>
        <div className="container pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-panel" key={pillar.title}>
              <span className="pillar-index">{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container showcase-layout">
          <div className="showcase-copy">
            <span className="eyebrow">Current campaign</span>
            <h2>Plantation Drive 2026 anchors the public identity right now.</h2>
            <p>
              For the current phase, the website presents Jeeban Amrit through its plantation and urban beautification work.
              Future sections can expand into blood donation and other areas without changing the core design language.
            </p>
            <ul className="detail-list">
              <li>Inauguration Ceremony</li>
              <li>8 April 2026 at 7:00 AM</li>
              <li>Fandi Bazar, Balasore, Odisha</li>
            </ul>
            <NavLink className="button button-primary" to="/plantation-drive-2026">
              Visit campaign page
            </NavLink>
          </div>
          <div className="showcase-gallery">
            <article className="gallery-card tall">
              <img
                src="/ref/image1.jpeg"
                alt="Jeeban Amrit plantation activity"
              />
            </article>
            <article className="gallery-card accent-card">
              <span className="mini-tag">Field activity</span>
              <h3>Community presence on the ground</h3>
              <p>The site now starts using the actual plantation photos from your organisation to build a more authentic and trustworthy visual identity.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Latest activities</span>
          <h2>Updates you can manage from the admin panel.</h2>
        </div>
        <div className="container activity-grid">
          {latestActivities.map((activity) => (
            <ActivityCard activity={activity} key={activity._id} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Photo story</span>
          <h2>Real campaign moments from Jeeban Amrit's work.</h2>
        </div>
        <div className="container live-gallery">
          {galleryImages.map((image, index) => (
            <button
              className={`gallery-shot shot-${index + 1}`}
              key={image}
              onClick={() => galleryViewer.open(galleryImages, index)}
              type="button"
            >
              <img src={image} alt={`Jeeban Amrit gallery ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">Leadership</span>
          <h2>The faces behind the initiative.</h2>
          <p>The leadership cards are now more image-forward and easier to expand as you collect portraits.</p>
        </div>
        <div className="container leadership-grid">
          {leadership.slice(0, 3).map((person) => (
            <LeaderCard
              key={person.name}
              person={person}
              description={
                person.featured
                  ? "Leading the organisation's current public-facing initiative and campaign momentum."
                  : "Supporting Jeeban Amrit's community-led programs and operational coordination."
              }
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container future-strip">
          <div className="future-strip-copy">
            <span className="eyebrow">Next chapters</span>
            <h2>The platform is ready for the organisation to expand.</h2>
          </div>
          <div className="future-list">
            {futureWork.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <Lightbox viewer={galleryViewer} />
    </main>
  );
}

function AboutPage() {
  return (
    <PageFrame
      eyebrow="About Jeeban Amrit"
      title="A service organisation shaped by care, place, and public participation."
      intro="Jeeban Amrit is growing as a civic-minded social organisation whose work can extend from plantation into health support, blood donation, and broader community upliftment."
    >
      <div className="story-grid">
        <SoftCard title="Vision" text="To nurture healthier, greener, more connected communities through practical local action." />
        <SoftCard title="Mission" text="To bring people together through visible service, dignified community work, and future-focused social initiatives." />
        <SoftCard title="Approach" text="Start with real, grounded campaigns. Build trust through action. Expand thoughtfully into new service areas." />
      </div>
    </PageFrame>
  );
}

function InitiativesPage() {
  const { activities } = useActivities();

  return (
    <PageFrame
      eyebrow="Initiatives"
      title="A multi-cause structure with one clear starting point."
      intro="Plantation is the first complete story on the site, but the design is intentionally ready for future blood donation, health, and urban development pages."
    >
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article className="pillar-panel" key={pillar.title}>
            <span className="pillar-index">{pillar.icon}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
      <div className="section-block">
        <NavLink className="button button-primary" to="/plantation-drive-2026">
          Open plantation campaign
        </NavLink>
      </div>
      <div className="section-block">
        <div className="section-head">
          <span className="eyebrow">Published updates</span>
          <h2>Activities and news from the admin panel.</h2>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity._id} />
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

function PlantationPage() {
  const galleryViewer = useGalleryViewer();

  return (
    <main>
      <section className="page-hero page-hero-green">
        <div className="container campaign-layout">
          <div className="campaign-copy">
            <span className="eyebrow">Featured plantation page</span>
            <h1>Plantation Drive 2026</h1>
            <p>
              This page carries the greener visual theme within the broader Jeeban Amrit platform, presenting the Urban Beautification Program as the organisation's first major public initiative online.
            </p>
            <div className="hero-actions">
              <NavLink className="button button-primary" to="/contact">
                Participate
              </NavLink>
              <NavLink className="button button-secondary" to="/leadership">
                Meet the team
              </NavLink>
            </div>
          </div>
          <button
            className="photo-frame photo-main clickable-media"
            onClick={() => galleryViewer.open(galleryImages, 1)}
            type="button"
          >
            <img
              src="/ref/image2.jpeg"
              alt="Plantation Drive 2026"
            />
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <SoftCard title="Date" text="8 April 2026" />
          <SoftCard title="Time" text="7:00 AM" />
          <SoftCard title="Venue" text="Fandi Bazar, Balasore, Odisha" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-head">
          <span className="eyebrow">Why it matters</span>
          <h2>Plantation here is also about civic beauty and shared ownership.</h2>
        </div>
        <div className="container pillar-grid">
          <article className="pillar-panel">
            <span className="pillar-index">01</span>
            <h3>Greener roadsides</h3>
            <p>More shade, better public atmosphere, and a visible sign of care for the city.</p>
          </article>
          <article className="pillar-panel">
            <span className="pillar-index">02</span>
            <h3>Community pride</h3>
            <p>Beautified spaces invite people to value, protect, and participate in their surroundings.</p>
          </article>
          <article className="pillar-panel">
            <span className="pillar-index">03</span>
            <h3>Long-term impact</h3>
            <p>Each plantation effort can become a seed for deeper civic and social transformation.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container live-gallery plantation-gallery">
          {galleryImages.slice(1).map((image, index) => (
            <button
              className={`gallery-shot shot-${index + 1}`}
              key={image}
              onClick={() => galleryViewer.open(galleryImages.slice(1), index)}
              type="button"
            >
              <img src={image} alt={`Plantation gallery ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>
      <Lightbox viewer={galleryViewer} />
    </main>
  );
}

function LeadershipPage() {
  return (
    <PageFrame
      eyebrow="Leadership"
      title="People shaping Jeeban Amrit's public mission."
      intro="The current leadership view highlights the office bearers from the available campaign material and is ready to grow as more portraits and bios become available."
    >
      <div className="leadership-grid leadership-grid-full">
        {leadership.map((person) => (
          <LeaderCard
            key={person.name}
            person={person}
            description={
              person.featured
                ? "Leading Jeeban Amrit's current initiative and helping define the organisation's public direction."
                : "Part of the leadership team supporting local coordination, outreach, and organisational growth."
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
      title="A clean space for volunteers, supporters, and future collaborators."
      intro="The structure is ready for phone, email, address, and social links whenever the official contact details are finalised."
    >
      <div className="story-grid">
        <SoftCard title="Volunteer" text="Join plantation and future community initiatives." />
        <SoftCard title="Collaborate" text="Support local campaigns, outreach, and public events." />
        <SoftCard title="Contact setup" text="Phone, email, social, and donation details can be added here next." />
      </div>
    </PageFrame>
  );
}

function ActivityDetailPage() {
  const { slug } = useParams();
  const { activity, loading } = useActivity(slug);
  const selectedActivity = activity || fallbackActivities.find((item) => item.slug.current === slug);

  if (loading) {
    return (
      <PageFrame eyebrow="Loading" title="Fetching activity details..." intro="Please wait while the latest update loads.">
        <div className="soft-card">Loading...</div>
      </PageFrame>
    );
  }

  if (!selectedActivity) {
    return (
      <PageFrame eyebrow="Not found" title="This activity is not available." intro="It may be unpublished or the link may be incorrect.">
        <NavLink className="button button-primary" to="/initiatives">Back to initiatives</NavLink>
      </PageFrame>
    );
  }

  const cover = getActivityImage(selectedActivity);
  const gallery = getActivityGallery(selectedActivity);
  const galleryViewer = useGalleryViewer();
  const mediaItems = [...(cover ? [cover] : []), ...gallery, ...(selectedActivity.videoUrls || [])];

  return (
    <main>
      <section className="page-hero">
        <div className="container campaign-layout">
          <div className="campaign-copy">
            <span className="eyebrow">{formatCategory(selectedActivity.category)}</span>
            <h1>{selectedActivity.title}</h1>
            <p>{selectedActivity.summary}</p>
            <div className="activity-meta">
              {selectedActivity.date ? <span>{formatDate(selectedActivity.date)}</span> : null}
              {selectedActivity.location ? <span>{selectedActivity.location}</span> : null}
            </div>
          </div>
          {cover ? (
            <button
              className="photo-frame photo-main clickable-media"
              onClick={() => galleryViewer.open(mediaItems, 0)}
              type="button"
            >
              <img src={cover} alt={selectedActivity.title} />
            </button>
          ) : null}
        </div>
      </section>
      {gallery.length ? (
        <section className="section">
          <div className="container live-gallery">
            {gallery.map((image, index) => (
              <button
                className={`gallery-shot shot-${index + 1}`}
                key={image}
                onClick={() => galleryViewer.open(mediaItems, index + (cover ? 1 : 0))}
                type="button"
              >
                <img src={image} alt={`${selectedActivity.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>
      ) : null}
      {selectedActivity.videoUrls?.length ? (
        <section className="section section-soft">
          <div className="container story-grid">
            {selectedActivity.videoUrls.map((video) => (
              <a className="soft-card text-link" href={video} target="_blank" rel="noreferrer" key={video}>
                Watch video
              </a>
            ))}
          </div>
        </section>
      ) : null}
      <Lightbox viewer={galleryViewer} />
    </main>
  );
}

function PageFrame({ eyebrow, title, intro, children }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-shell">
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

function SoftCard({ title, text }) {
  return (
    <article className="soft-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ActivityCard({ activity }) {
  const image = getActivityImage(activity);
  return (
    <NavLink className="activity-card" to={`/activities/${activity.slug?.current}`}>
      <div className="activity-card-media">
        {image ? <img src={image} alt={activity.title} /> : <span>No image</span>}
      </div>
      <div className="activity-card-body">
        <span className="mini-tag">{formatCategory(activity.category)}</span>
        <h3>{activity.title}</h3>
        <p>{activity.summary}</p>
        <div className="activity-meta">
          {activity.date ? <span>{formatDate(activity.date)}</span> : null}
          {activity.location ? <span>{activity.location}</span> : null}
        </div>
      </div>
    </NavLink>
  );
}

function LeaderCard({ person, description }) {
  return (
    <article className={`leader-card${person.featured ? " featured" : ""}`}>
      <div className={`leader-media${person.image ? " has-image" : ` tone-${person.accent}`}`}>
        {person.image ? <img src={person.image} alt={person.name} /> : <span>{getInitials(person.name)}</span>}
      </div>
      <div className="leader-body">
        <span className="mini-tag">{person.role}</span>
        <h3>{person.name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="info-card">
      <span>{label}</span>
      <strong>{value}</strong>
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

function useActivities() {
  const [activities, setActivities] = useState(fallbackActivities);

  useEffect(() => {
    let mounted = true;

    sanityClient
      .fetch(activitiesQuery)
      .then((items) => {
        if (mounted && items?.length) {
          setActivities(items);
        }
      })
      .catch(() => {
        if (mounted) {
          setActivities(fallbackActivities);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { activities };
}

function useActivity(slug) {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    sanityClient
      .fetch(activityBySlugQuery, { slug })
      .then((item) => {
        if (mounted) {
          setActivity(item);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setActivity(null);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  return { activity, loading };
}

function getActivityImage(activity) {
  if (activity.coverUrl) return activity.coverUrl;
  if (activity.coverImage) return urlFor(activity.coverImage)?.width(900).height(620).fit("crop").url();
  return "";
}

function getActivityGallery(activity) {
  if (activity.galleryUrls) return activity.galleryUrls;
  if (activity.galleryImages?.length) {
    return activity.galleryImages
      .map((image) => urlFor(image)?.width(900).height(620).fit("crop").url())
      .filter(Boolean);
  }
  return [];
}

function formatCategory(category) {
  if (!category) return "Update";
  return category
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

function useGalleryViewer() {
  const [viewer, setViewer] = useState({
    open: false,
    items: [],
    index: 0
  });

  function open(items, index = 0) {
    setViewer({ open: true, items, index });
  }

  function close() {
    setViewer((current) => ({ ...current, open: false }));
  }

  function next() {
    setViewer((current) => ({
      ...current,
      index: (current.index + 1) % current.items.length
    }));
  }

  function previous() {
    setViewer((current) => ({
      ...current,
      index: (current.index - 1 + current.items.length) % current.items.length
    }));
  }

  return { ...viewer, open, close, next, previous };
}

function Lightbox({ viewer }) {
  if (!viewer.open || !viewer.items.length) return null;

  const item = viewer.items[viewer.index];
  const isVideo = isVideoUrl(item);
  const hasMany = viewer.items.length > 1;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery viewer">
      <button className="lightbox-backdrop" onClick={viewer.close} type="button" aria-label="Close gallery" />
      <div className="lightbox-panel">
        <button className="lightbox-close" onClick={viewer.close} type="button" aria-label="Close gallery">
          Close
        </button>
        {hasMany ? (
          <button className="lightbox-nav lightbox-prev" onClick={viewer.previous} type="button" aria-label="Previous item">
            Prev
          </button>
        ) : null}
        <div className="lightbox-media">
          {isVideo ? (
            <iframe
              src={getEmbeddableVideoUrl(item)}
              title="Activity video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img src={item} alt="Gallery item" />
          )}
        </div>
        {hasMany ? (
          <button className="lightbox-nav lightbox-next" onClick={viewer.next} type="button" aria-label="Next item">
            Next
          </button>
        ) : null}
        <div className="lightbox-count">
          {viewer.index + 1} / {viewer.items.length}
        </div>
      </div>
    </div>
  );
}

function isVideoUrl(url) {
  return /youtube\.com|youtu\.be|vimeo\.com|\.mp4($|\?)/i.test(url);
}

function getEmbeddableVideoUrl(url) {
  if (/youtu\.be\//i.test(url)) {
    const id = url.split("youtu.be/")[1]?.split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (/youtube\.com/i.test(url)) {
    const id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  return url;
}

export default App;
