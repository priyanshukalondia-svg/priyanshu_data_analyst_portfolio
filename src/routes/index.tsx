import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroGlobe from "@/assets/hero-globe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Kalondia — Data Analyst Portfolio" },
      { name: "description", content: "B.Tech IT student turning data into decisions with SQL, Python, and Power BI. Explore projects, experience and skills." },
      { property: "og:title", content: "Priyanshu Kalondia — Data Analyst" },
      { property: "og:description", content: "SQL · Python · Power BI · Data Storytelling" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "stack", label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "awards", label: "AWARDS" },
  { id: "contact", label: "CONTACT" },
];

const STACK = {
  "DATA & ANALYTICS": ["EDA", "Descriptive Stats", "RFM Segmentation", "Trend Analysis", "Data Cleaning"],
  "LANGUAGES": ["Python", "SQL", "JavaScript", "TypeScript", "C++", "Java", "HTML", "CSS"],
  "BI & VISUALIZATION": ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Pandas", "NumPy", "Scikit-learn"],
  "TOOLS": ["MySQL Workbench", "PostgreSQL", "Git", "GitHub", "Jupyter", "VS Code", "Postman", "Vercel"],
  "DESIGN": ["Figma", "Canva", "Adobe", "Stitch"],
};

const PROJECTS = [
  {
    icon: "📊",
    title: "E-Commerce Sales Dashboard",
    stack: "Power BI · DAX · Power Query",
    bullets: [
      "Executive-ready Power BI dashboard tracking sales, profit, orders and customer KPIs.",
      "Dynamic KPI cards, drill-through reports, slicers and complex DAX measures.",
      "Analyzed trends by category, segment, region and time to surface growth opportunities.",
    ],
  },
  {
    icon: "🛒",
    title: "RFM Customer Segmentation",
    stack: "Python · Pandas · Cohort Analysis",
    bullets: [
      "Recency, Frequency, Monetary models segmenting customers from raw transactions.",
      "Classified cohorts: Champions, Loyal, Potential Loyalists, At-Risk, Lost.",
      "Evaluated CLV and revenue share to inform retention and targeted campaigns.",
    ],
  },
  {
    icon: "🎵",
    title: "Spotify Music Analysis",
    stack: "MySQL · Python · Matplotlib · Seaborn",
    bullets: [
      "Analyzed 32,833 tracks for popularity, artist and genre trends.",
      "Advanced SQL: CTEs, Views, Window & Aggregate Functions, CASE statements.",
      "Insights on how danceability, energy and playlist exposure drive popularity.",
    ],
  },
  {
    icon: "💼",
    title: "LinkedIn Fresher Hiring Analysis",
    stack: "Python · Pandas · NumPy · Matplotlib",
    bullets: [
      "EDA on tech fresher hiring datasets — salaries, roles, regional trends.",
      "Mapped relationships between profiles, skills, certifications and pay.",
      "Surfaced in-demand skills guiding entry-level job seekers.",
    ],
  },
];

const STATS = [
  { v: "4+", l: "PROJECTS" },
  { v: "32K", l: "ROWS ANALYZED" },
  { v: "5+", l: "BI DASHBOARDS" },
  { v: "TOP 20%", l: "HACKWITHINDIA" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="starfield pointer-events-none fixed inset-0 z-0" aria-hidden />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.2em] text-neon">
          PRIYANSHU<span className="text-foreground">.DATA</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] transition-colors ${
                active === n.id ? "text-neon" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-neon shadow-[0_0_8px_var(--neon)]" />
              )}
            </a>
          ))}
        </nav>
        <a
          href="mailto:priyanshukalondia@gmail.com"
          className="rounded border border-neon px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-neon transition-all hover:bg-neon hover:text-primary-foreground"
        >
          [ HIRE_ME ]
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon/50 bg-neon/5 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-neon">SYSTEM_ONLINE</span>
        </div>

        <div className="relative mx-auto mb-6 h-64 w-64 md:h-80 md:w-80">
          <img
            src={heroGlobe}
            alt=""
            width={1024}
            height={1024}
            className="animate-float-slow absolute inset-0 h-full w-full object-contain opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-5xl font-black tracking-widest text-neon md:text-6xl" style={{ textShadow: "0 0 20px var(--neon), 0 0 40px var(--neon)" }}>
              PK
            </div>
          </div>
        </div>

        <h1 className="font-display text-4xl font-black tracking-tight md:text-7xl">
          PRIYANSHU <span className="text-neon">KALONDIA</span>
        </h1>
        <div className="mt-3 font-mono text-xs tracking-[0.3em] text-muted-foreground md:text-sm">
          &gt; DATA_ANALYST · BI_DEVELOPER · UI/UX
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-neon/30 bg-surface/60 p-4 text-left font-mono text-xs backdrop-blur md:text-sm">
          <div className="mb-2 flex items-center gap-1.5 border-b border-border/40 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
            <span className="ml-2 text-[10px] tracking-[0.2em] text-muted-foreground">
              NEURAL_CORE // BIO.GENERATOR
            </span>
          </div>
          <div className="text-foreground/90">
            <span className="text-neon">&gt;</span> Turning raw data into{" "}
            <span className="text-neon">executive-ready insights</span>.<br />
            <span className="text-neon">&gt;</span> SQL pipelines, Python analysis, Power BI dashboards
            <span className="animate-blink text-neon">_</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="panel rounded-md p-3 text-center transition-all">
              <div className="font-display text-xl font-bold text-neon md:text-2xl">{s.v}</div>
              <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded border border-neon bg-neon/10 px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-neon transition-all hover:bg-neon hover:text-primary-foreground glow-neon">
            VIEW_MY_WORK
          </a>
          <a href="#contact" className="rounded border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground hover:text-foreground">
            CONTACT_ME
          </a>
        </div>

        <div className="mt-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL ↓</div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-3 font-mono text-[10px] tracking-[0.35em] text-neon">[ {tag} ]</div>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-neon to-transparent" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="ABOUT_ME" title="The Operator Behind the Data" />
        <div className="panel rounded-lg p-8 md:p-10">
          <p className="font-sans text-base leading-relaxed text-foreground/90 md:text-lg">
            I'm an analytical and detail-oriented{" "}
            <span className="text-neon">B.Tech Information Technology</span> student at GGSIPU (USICT),
            specializing in transforming complex datasets into actionable business insights. I'm fluent in
            <span className="text-neon"> SQL extraction</span>,{" "}
            <span className="text-neon">Python data manipulation</span> (Pandas, NumPy), and building
            interactive <span className="text-neon">Power BI dashboards</span>.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            My edge? An advanced background in UI/UX — so dashboards I ship aren't just correct, they're
            intuitive and executive-ready. I design data products people actually want to use.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/40 pt-6 md:grid-cols-4">
            {[
              { l: "LOCATION", v: "Delhi, IN" },
              { l: "DEGREE", v: "B.Tech IT" },
              { l: "UNIVERSITY", v: "GGSIPU" },
              { l: "STATUS", v: "Available" },
            ].map((i) => (
              <div key={i.l}>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{i.l}</div>
                <div className="mt-1 font-display text-sm font-bold text-foreground">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="TECH_STACK" title="Tools of the Trade" />
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(STACK).map(([cat, items]) => (
            <div key={cat} className="panel rounded-lg p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />
                <h3 className="font-mono text-xs tracking-[0.25em] text-neon">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-foreground/80 transition-all hover:border-neon hover:text-neon"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="DEPLOYED_PROJECTS" title="Featured Work" />
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="panel group relative overflow-hidden rounded-lg p-6 transition-all">
              <div className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                #{String(i + 1).padStart(2, "0")}
              </div>
              <div className="mb-4 text-3xl">{p.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-neon">
                {p.title}
              </h3>
              <div className="mt-2 font-mono text-[11px] tracking-[0.1em] text-neon/80">{p.stack}</div>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 font-sans text-sm text-muted-foreground">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] text-neon opacity-60 transition-opacity group-hover:opacity-100">
                <span>VIEW_REPO</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="WORK_LOG" title="Experience & Education" />
        <div className="space-y-5">
          <div className="panel rounded-lg p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-neon">FOUNDER · LEAD</div>
                <h3 className="mt-1 font-display text-xl font-bold">Interface Specialist · INSANZIA LABS</h3>
              </div>
              <div className="rounded border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                JAN 2026 — MAR 2026
              </div>
            </div>
            <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon" />Coordinated end-to-end layouts, data architecture and frontend interfaces for web apps with clean state.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon" />Translated raw client requirements into structured DB schemas and intuitive visual interfaces.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon" />Integrated RESTful APIs and monitored user metrics with modern JavaScript standards.</li>
            </ul>
          </div>

          <div className="panel rounded-lg p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-neon">EDUCATION</div>
                <h3 className="mt-1 font-display text-xl font-bold">B.Tech, Information Technology</h3>
                <div className="mt-1 font-sans text-sm text-muted-foreground">Guru Gobind Singh Indraprastha University · USICT, Delhi</div>
              </div>
              <div className="rounded border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                2023 — 2027
              </div>
            </div>
            <div className="mt-4 font-sans text-sm text-muted-foreground">
              Relevant Curriculum: DBMS, Data Structures &amp; Algorithms, Applied Statistics, OOP, Collaborative Projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const items = [
    { tag: "TOP 20%", title: "BuildWithIndia — HackWithIndia", desc: "Top 5,000 of 25,000 teams in a national product-building competition. Grand finale at Google Office." },
    { tag: "FINALIST", title: "Smart Delhi Ideathon 2025 · GGSIPU", desc: "Team Code Yodhas — engineered tech-driven data tracking prototypes for urban innovation." },
    { tag: "SUBMITTED", title: "GDG Solution Challenge", desc: "AI-based data solution targeting UN Sustainable Development Goals." },
    { tag: "COMPETED", title: "EDU Chain Regional Hackathon", desc: "Blockchain × educational technology — MSC-MSIT & HackQuest." },
  ];
  return (
    <section id="awards" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="ACHIEVEMENTS" title="Hackathons & Recognitions" />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((a) => (
            <div key={a.title} className="panel rounded-lg p-6">
              <div className="mb-3 inline-block rounded border border-neon/50 bg-neon/5 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-neon">
                {a.tag}
              </div>
              <h3 className="font-display text-base font-bold">{a.title}</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { l: "EMAIL", v: "priyanshukalondia@gmail.com", href: "mailto:priyanshukalondia@gmail.com" },
    { l: "PHONE", v: "+91 99717 47013", href: "tel:+919971747013" },
    { l: "LINKEDIN", v: "/in/priyanshu-kalondia", href: "#" },
    { l: "GITHUB", v: "@priyanshu-kalondia", href: "#" },
  ];
  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader tag="ESTABLISH_CONNECTION" title="Let's Build Something" />
        <p className="mx-auto max-w-xl font-sans text-base text-muted-foreground">
          Open to internships, freelance dashboards and collaborative data projects. Send a signal and I'll
          respond within 24 hours.
        </p>
        <a
          href="mailto:priyanshukalondia@gmail.com"
          className="mt-8 inline-block rounded border border-neon bg-neon/10 px-8 py-3 font-mono text-xs tracking-[0.25em] text-neon transition-all hover:bg-neon hover:text-primary-foreground glow-neon"
        >
          [ SEND_TRANSMISSION ]
        </a>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a key={l.l} href={l.href} className="panel group flex items-center justify-between rounded-md p-4 text-left transition-all">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">{l.l}</div>
                <div className="mt-1 font-mono text-sm text-foreground group-hover:text-neon">{l.v}</div>
              </div>
              <span className="font-mono text-neon opacity-50 transition-opacity group-hover:opacity-100">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
        <div>© 2026 PRIYANSHU.KALONDIA // ALL_SYSTEMS_OPERATIONAL</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
          <span>BUILT_WITH_CURIOSITY</span>
        </div>
      </div>
    </footer>
  );
}
