import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroStill from "@/assets/hero-still.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Kalondia — Data Analyst" },
      { name: "description", content: "Editorial portfolio of Priyanshu Kalondia. Data analyst working with SQL, Python and Power BI to turn numbers into stories." },
      { property: "og:title", content: "Priyanshu Kalondia — Data Analyst" },
      { property: "og:description", content: "Data, design and storytelling." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    no: "01",
    title: "E-Commerce Sales Dashboard",
    year: "2024",
    place: "Power BI · SQL",
    image: project1,
    blurb: "Interactive analytics across 32K+ rows of transactional data — revenue, customer cohorts and category performance unified into a single executive view.",
  },
  {
    no: "02",
    title: "RFM Customer Segmentation",
    year: "2024",
    place: "Python · Pandas",
    image: project2,
    blurb: "Behavioural segmentation of online retail customers using recency, frequency and monetary scoring to surface the most actionable cohorts for retention.",
  },
  {
    no: "03",
    title: "Spotify Listening Analysis",
    year: "2024",
    place: "Python · Seaborn",
    image: project3,
    blurb: "An exploration of audio features and streaming habits — what makes a track stick, and how mood maps onto tempo, energy and danceability.",
  },
  {
    no: "04",
    title: "LinkedIn Fresher Job Market",
    year: "2025",
    place: "Web Scraping · Power BI",
    image: project4,
    blurb: "Scraped and analysed fresher job postings across India to map the demand for early-career data and tech roles by city, skill and company.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-cream/85 backdrop-blur-sm" : "py-8"}`}>
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-6 md:px-12">
        <a href="#top" className="leading-none">
          <div className="font-display text-2xl md:text-3xl italic tracking-tight text-ink">Priyanshu.</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ink/70">Data Analyst and Data Engineer</div>
        </a>
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 pt-2">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-display italic text-lg text-ink hover:opacity-60 transition-opacity"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block pt-2 text-sm tracking-wider text-ink/70">EN</div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="relative flex items-center justify-center" style={{ minHeight: "78vh" }}>
          {/* Image centered behind type */}
          <img
            src={heroStill}
            alt="Editorial still life"
            width={520}
            height={700}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px] lg:w-[440px] h-auto object-cover shadow-[0_30px_80px_-30px_rgba(80,20,20,0.35)]"
          />
          {/* Giant serif name over image */}
          <h1 className="relative z-10 font-display text-ink text-center leading-[0.85] tracking-[-0.03em] animate-fade-up">
            <span className="block text-[18vw] md:text-[15vw] lg:text-[13vw] font-medium">Priyanshu.</span>
            <span className="block text-[6vw] md:text-[4vw] lg:text-[3vw] italic mt-2 md:mt-4 font-light">Data Analyst and Data Engineer</span>
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-display italic text-ink/70 text-base">Know More</span>
          <div className="w-px h-10 bg-ink/30 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-xs uppercase tracking-[0.4em] text-ink/60 mb-12">— About</div>
        <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-ink font-light">
          I'm <em className="italic">Priyanshu Kalondia</em>, a B.Tech Information Technology student in Delhi who turns messy datasets into clear, honest stories. I work across <em className="italic">SQL</em>, <em className="italic">Python</em> and <em className="italic">Power&nbsp;BI</em>, with a stubborn belief that good analysis should feel as composed as good design.
        </p>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-ink/15 pt-12">
          {[
            ["Based in", "Delhi, India"],
            ["Studying", "B.Tech IT, GGSIPU"],
            ["Focus", "Analytics & BI"],
            ["Status", "Available 2026"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-3">{k}</div>
              <div className="font-display text-xl md:text-2xl italic text-ink">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 bg-cream">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between mb-20 md:mb-28">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-ink/60 mb-6">— Selected work</div>
            <h2 className="font-display text-6xl md:text-8xl text-ink leading-none">Projects.</h2>
          </div>
          <div className="hidden md:block font-display italic text-ink/60 text-lg">{PROJECTS.length} pieces</div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((p, i) => (
            <article key={p.no} className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7">
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                </a>
              </div>
              <div className="md:col-span-5 md:px-6">
                <div className="flex items-baseline gap-4 mb-6 text-ink/60">
                  <span className="font-mono text-xs">{p.no}</span>
                  <span className="h-px flex-1 bg-ink/20" />
                  <span className="font-display italic text-sm">{p.year}</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-6">{p.title}</h3>
                <div className="font-display italic text-ink/70 mb-6">{p.place}</div>
                <p className="text-ink/80 leading-relaxed text-base md:text-lg max-w-md">{p.blurb}</p>
                <a href="#" className="inline-block mt-8 font-display italic text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors">
                  View case →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { year: "2024 —", role: "Lead Designer", org: "Insanzia Labs", note: "Building a small studio for data and design experiments." },
    { year: "2023 — 2027", role: "B.Tech, Information Technology", org: "GGSIPU, Delhi", note: "Coursework in DBMS, statistics, machine learning and software engineering." },
    { year: "2024", role: "Top 20%", org: "HackWithIndia Hackathon", note: "Recognised among the strongest data-driven submissions nationally." },
    { year: "2024", role: "Finalist", org: "Multiple campus analytics competitions", note: "Built dashboards, pitched insights, presented to juries." },
  ];
  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-xs uppercase tracking-[0.4em] text-ink/60 mb-12">— A short timeline</div>
        <h2 className="font-display text-6xl md:text-8xl text-ink leading-none mb-20">Experience.</h2>
        <div className="border-t border-ink/15">
          {items.map((it) => (
            <div key={it.role + it.year} className="grid md:grid-cols-12 gap-6 py-10 border-b border-ink/15 group">
              <div className="md:col-span-2 font-mono text-sm text-ink/60 pt-2">{it.year}</div>
              <div className="md:col-span-4">
                <div className="font-display text-3xl md:text-4xl text-ink leading-tight">{it.role}</div>
                <div className="font-display italic text-ink/60 mt-1">{it.org}</div>
              </div>
              <div className="md:col-span-6 text-ink/75 leading-relaxed md:pt-2">{it.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-56 px-6 md:px-12 bg-cream">
      <div className="mx-auto max-w-[1400px] text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-ink/60 mb-12">— Get in touch</div>
        <h2 className="font-display text-[14vw] md:text-[10vw] leading-[0.9] text-ink">
          <span className="italic">Let's</span> work<br />together.
        </h2>
        <a
          href="mailto:priyanshu.kalondia@example.com"
          className="inline-block mt-16 font-display italic text-2xl md:text-3xl text-ink border-b border-ink/40 hover:border-ink pb-2 transition-colors"
        >
          priyanshu.kalondia@example.com
        </a>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-ink/70">
          <a href="#" className="font-display italic text-lg hover:text-ink">LinkedIn</a>
          <span className="h-1 w-1 rounded-full bg-ink/30" />
          <a href="#" className="font-display italic text-lg hover:text-ink">GitHub</a>
          <span className="h-1 w-1 rounded-full bg-ink/30" />
          <a href="#" className="font-display italic text-lg hover:text-ink">Resume</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-ink/15">
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink/60 tracking-wider">
        <div>© {new Date().getFullYear()} Priyanshu Kalondia. All rights reserved.</div>
        <div className="font-display italic">Made with care, in Delhi.</div>
      </div>
    </footer>
  );
}
