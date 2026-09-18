import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Banknote,
  Briefcase,
  Building2,
  CalendarDays,
  Gavel,
  Landmark,
  Lightbulb,
  Network,
  Quote,
  Scale,
  ScrollText,
  Search,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import logoAsset from "@/assets/bacon-legal-logo.png.asset.json";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import insightLibrary from "@/assets/insight-library.jpg";
import insightMeeting from "@/assets/insight-meeting.jpg";
import insightSkyline from "@/assets/insight-skyline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bacon Legal Recruiting | Specialist Legal Recruitment" },
      {
        name: "description",
        content:
          "Bacon Legal Recruiting connects exceptional legal talent with leading law firms and in-house legal departments across the United States.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Bacon Legal Recruiting | Specialist Legal Recruitment",
      },
      {
        property: "og:description",
        content:
          "Specialist legal recruitment for law firms and in-house legal teams — partners, counsel, associates and general counsel.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Candidates", "#candidates"],
  ["Clients", "#clients"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
] as const;

const stats = [
  { icon: CalendarDays, value: "20+", label: "Years of Experience" },
  { icon: Landmark, value: "500+", label: "Law Firms Partnered" },
  { icon: Users, value: "10,000+", label: "Legal Professionals Placed" },
  { icon: Award, value: "95%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: UserRound,
    name: "Permanent Placement",
    copy: "Long-term hiring solutions for law firms and in-house legal departments.",
  },
  {
    icon: Briefcase,
    name: "Contract & Interim",
    copy: "Flexible staffing for short-term mandates and project-based legal work.",
  },
  {
    icon: Search,
    name: "Executive Search",
    copy: "Identifying and attracting senior legal talent for leadership roles.",
  },
  {
    icon: Lightbulb,
    name: "Market Insights",
    copy: "In-depth legal market intelligence to guide your hiring strategy.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    name: "Industry Specialists",
    copy: "Recruiters with deep legal market knowledge, not generalists.",
  },
  {
    icon: Network,
    name: "Extensive Network",
    copy: "Access to top legal talent across the country and every practice area.",
  },
  {
    icon: Award,
    name: "Proven Results",
    copy: "A track record of successful placements and long-term partnerships.",
  },
  {
    icon: UserRound,
    name: "Personal Approach",
    copy: "A dedicated consultant who understands your goals from day one.",
  },
];

const practiceAreas = [
  { icon: Building2, name: "Corporate" },
  { icon: Gavel, name: "Litigation" },
  { icon: Lightbulb, name: "Intellectual Property" },
  { icon: Landmark, name: "Real Estate" },
  { icon: Users, name: "Employment" },
  { icon: ScrollText, name: "Tax" },
  { icon: Banknote, name: "Banking & Finance" },
  { icon: Scale, name: "Compliance" },
];

const audiences = [
  {
    icon: Landmark,
    name: "For Law Firms",
    copy: "We act as an extension of your team to find legal talent that fits your culture, your clients and your growth plans.",
    cta: "Learn more",
    href: "#clients",
  },
  {
    icon: UserRound,
    name: "For Candidates",
    copy: "Discover exceptional opportunities with leading firms and in-house legal organisations — always confidentially.",
    cta: "Browse roles",
    href: "#candidates",
  },
  {
    icon: Briefcase,
    name: "Our Services",
    copy: "End-to-end recruitment solutions tailored to your mandate, from single hires to full practice-group moves.",
    cta: "Explore services",
    href: "#services",
  },
];

const insights = [
  {
    image: insightLibrary,
    date: "May 8, 2026",
    title: "2026 Legal Hiring Trends",
    copy: "Key shifts shaping compensation, lateral movement and partner demand this year.",
  },
  {
    image: insightMeeting,
    date: "April 22, 2026",
    title: "How Firms Attract Top Talent",
    copy: "What separates firms that win laterals from those that lose them at offer stage.",
  },
  {
    image: insightSkyline,
    date: "April 10, 2026",
    title: "In-House vs. Private Practice",
    copy: "A candid look at the trade-offs legal professionals weigh before moving.",
  },
];

const process = [
  { step: "01", name: "Mandate", copy: "We define the brief with the decision-makers, not an intake form." },
  { step: "02", name: "Market Map", copy: "A researched, named universe of candidates before a single approach." },
  { step: "03", name: "Approach", copy: "Discreet outreach that protects your reputation and theirs." },
  { step: "04", name: "Close", copy: "Compensation, conflicts and transition handled to signature." },
];

const firms = ["Kirkland & Ellis", "Latham & Watkins", "Simpson Thacher", "Morgan Lewis", "White & Case"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex shrink-0 items-center">
            <img
              src={logoAsset.url}
              alt="Bacon Legal Recruiting — Kevin Bacon Executive Recruiting"
              width={329}
              height={106}
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="shrink-0 bg-brass px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.14em] uppercase text-ink transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[1.05fr_1fr]">
            <div className="px-6 py-20 lg:py-28 lg:pr-14">
              <p className="eyebrow text-brass">Legal talent. Lasting impact.</p>
              <h1 className="mt-7 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                Connecting <span className="text-brass">Exceptional Legal</span> Talent with
                Leading Law Firms
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-foreground/70">
                Specialist legal recruitment across the United States. Trusted by law firms,
                in-house legal departments and the professionals who build them.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#clients"
                  className="bg-brass px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90"
                >
                  For Clients
                </a>
                <a
                  href="#candidates"
                  className="border border-ink-foreground/40 px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
                >
                  For Candidates
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src={heroCourthouse}
                alt="Marble columns of a courthouse facade at golden hour"
                width={1600}
                height={1104}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 border-border py-9 md:border-r md:last:border-r-0 md:pl-6 md:first:pl-0"
              >
                <s.icon className="h-7 w-7 shrink-0 text-brass" strokeWidth={1.25} />
                <div>
                  <p className="font-sans text-2xl leading-none text-ink tabular-nums">{s.value}</p>
                  <p className="mt-2 text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-brass">About Us</p>
              <h2 className="rule-brass mt-5 text-4xl text-ink">
                Experts in Legal Recruitment
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                We partner with top law firms and in-house legal teams to recruit the very best
                legal talent. Every search is run personally by a consultant who knows the
                market, the practice and the people in it.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our deep industry knowledge and extensive network deliver results that last —
                placements that stay, and partnerships that compound over years.
              </p>
              <a
                href="#services"
                className="mt-9 inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-medium tracking-[0.16em] uppercase text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                Learn More
              </a>
            </div>
            <img
              src={heroOffice}
              alt="Boardroom of a modern law firm at dusk"
              width={1600}
              height={1104}
              loading="lazy"
              className="w-full object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="eyebrow text-brass">Our Services</p>
            <h2 className="mt-5 text-4xl text-ink">Tailored Recruitment Solutions</h2>
            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.name} className="flex flex-col items-center px-2">
                  <s.icon className="h-8 w-8 text-brass" strokeWidth={1.25} />
                  <h3 className="mt-6 text-xl text-ink">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-xl">
            <p className="eyebrow text-brass">Why Bacon Legal</p>
            <h2 className="rule-brass mt-5 text-4xl text-ink">We recruit. You succeed.</h2>
          </div>
          <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.name}
                className="border-b border-border py-9 lg:border-r lg:px-7 lg:last:border-r-0 lg:first:pl-0"
              >
                <v.icon className="h-7 w-7 text-brass" strokeWidth={1.25} />
                <h3 className="mt-5 text-lg text-ink">{v.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Practice areas */}
        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="eyebrow text-center text-muted-foreground">Practice Areas We Cover</p>
            <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-8">
              {practiceAreas.map((p) => (
                <div key={p.name} className="flex flex-col items-center text-center">
                  <p.icon className="h-6 w-6 text-brass" strokeWidth={1.25} />
                  <p className="mt-4 text-xs leading-snug text-ink">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidates CTA band */}
        <section id="candidates" className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.4fr_auto]">
            <div>
              <h2 className="text-3xl">Looking for Your Next Opportunity?</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/70">
                Explore exceptional roles with leading law firms and in-house legal teams. We
                never circulate your résumé — conversations begin off the record and stay there
                until you decide otherwise.
              </p>
            </div>
            <a
              href="#contact"
              className="justify-self-start bg-brass px-8 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 md:justify-self-end"
            >
              Browse Roles
            </a>
          </div>
        </section>

        {/* Audiences */}
        <section id="clients" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-px border-t border-border md:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.name}
                className="border-b border-border py-10 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0"
              >
                <a.icon className="h-8 w-8 text-brass" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl text-ink">{a.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
                <a
                  href={a.href}
                  className="mt-7 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-ink transition-colors hover:text-brass"
                >
                  {a.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-xl">
              <p className="eyebrow text-brass">Our Approach</p>
              <h2 className="mt-5 text-4xl">A retained process, in four movements.</h2>
            </div>
            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <div key={p.step} className="border-t border-brass/40 pt-6">
                  <p className="font-sans text-2xl text-brass tabular-nums">{p.step}</p>
                  <h3 className="mt-3 text-xl">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{p.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr]">
            <div>
              <p className="eyebrow text-brass">Insights</p>
              <h2 className="rule-brass mt-5 text-3xl text-ink">Recent Insights</h2>
              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                Stay informed with the latest legal hiring trends, compensation data and market
                updates from our consultants.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-ink transition-colors hover:text-brass"
              >
                View all insights
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {insights.map((i) => (
                <article key={i.title}>
                  <img
                    src={i.image}
                    alt={i.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <p className="mt-5 text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground tabular-nums">
                    {i.date}
                  </p>
                  <h3 className="mt-2 text-lg leading-snug text-ink">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <Quote className="mx-auto h-7 w-7 text-brass" strokeWidth={1.25} />
            <blockquote className="mt-7 font-display text-2xl leading-relaxed italic sm:text-3xl">
              “Bacon Legal consistently delivers high-quality candidates who make an immediate
              impact. Two firms, four weeks, no leaks — that is rare in this market.”
            </blockquote>
            <figcaption className="eyebrow mt-8 text-ink-foreground/60">
              Managing Partner — AmLaw 100 Firm
            </figcaption>
          </div>
        </section>

        {/* Firms strip */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <p className="eyebrow text-muted-foreground">Some of the firms we work with</p>
            <div className="mt-9 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {firms.map((f) => (
                <p key={f} className="font-display text-lg text-ink/70">
                  {f}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-brass">Contact</p>
              <h2 className="rule-brass mt-5 text-4xl text-ink">Begin a conversation.</h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Share the outline of your mandate or your own situation. Every enquiry is read
                and answered by Kevin Bacon within one business day.
              </p>
              <dl className="mt-10 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow text-muted-foreground">Email</dt>
                  <dd className="mt-1 text-ink">kevin@baconlegalrecruiting.com</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Telephone</dt>
                  <dd className="mt-1 text-ink tabular-nums">+1 (312) 555-0184</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Offices</dt>
                  <dd className="mt-1 text-ink">Chicago · New York · Remote nationwide</dd>
                </div>
              </dl>
            </div>
            <form
              className="bg-card p-8"
              style={{ boxShadow: "var(--shadow-elegant)" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Name</span>
                  <input
                    required
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none focus:border-brass"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none focus:border-brass"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">I am a</span>
                  <select className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none focus:border-brass">
                    <option>Hiring firm or legal department</option>
                    <option>Candidate</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Details</span>
                  <textarea
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none focus:border-brass"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 bg-ink px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="Bacon Legal Recruiting"
              width={329}
              height={106}
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              Specialist legal recruitment for law firms and in-house legal departments across
              the United States.
            </p>
          </div>
          <div>
            <p className="eyebrow text-brass">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              {nav.slice(1).map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-brass">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-brass">Contact</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
              <li>kevin@baconlegalrecruiting.com</li>
              <li className="tabular-nums">+1 (312) 555-0184</li>
              <li>Chicago · New York</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-foreground/10">
          <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-ink-foreground/50 tabular-nums">
            © {new Date().getFullYear()} Bacon Legal Recruiting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
