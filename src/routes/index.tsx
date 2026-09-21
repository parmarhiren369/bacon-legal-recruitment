import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Cpu,
  ExternalLink,
  HeartHandshake,
  Linkedin,
  Mail,
  Menu,
  Network,
  Phone,
  Scale,
  ShieldCheck,
  UserCheck,
  Users,
  X,
} from "lucide-react";

import heroCourthouse from "../assets/hero-courthouse.jpg";
import uploadedLogo from "../assets/bacon-legal-logo.png";

const BRAND_LOGO = uploadedLogo;
const HERO_IMAGE = heroCourthouse;
const ABOUT_IMAGE =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8N8gUJT4F7aiDg9OX4et/media/645bf82a57b9cc3fd1141da4.webp";
const SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";
const PLACEMENTS_IMAGE =
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";
const KEVIN_IMAGE =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8N8gUJT4F7aiDg9OX4et/media/646450b39fc03548dd058860.jpeg";
const MARQUE_IMAGE =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8N8gUJT4F7aiDg9OX4et/media/646453ef9fc035b938058d43.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bacon Legal Recruiting | Attorney Search Experts" },
      {
        name: "description",
        content:
          "Bacon Legal Recruiting — Attorney Search Experts. Founded and led by attorneys and industry experts, specializing in permanent legal placement for law firms and corporations nationwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Bacon Legal Recruiting | Attorney Search Experts",
      },
      {
        property: "og:description",
        content:
          "Attorney Search Experts. Founded and led by attorneys and industry experts, we understand that the right candidate is the perfect mix of experience, skill and compatibility.",
      },
      { property: "og:image", content: BRAND_LOGO },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#top"],
  ["Why Choose Us", "#why-choose-us"],
  ["About Us", "#about"],
  ["Our Services", "#services"],
  ["Our Team", "#leadership"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
] as const;

const whyChooseCards = [
  {
    icon: Scale,
    title: "Experienced Legal Experts",
    copy: "As attorneys and legal industry experts, we have a unique understanding of what is needed to fill a position with the right candidate.",
  },
  {
    icon: UserCheck,
    title: "Service Focused",
    copy: "At Bacon Legal Recruiting, we are laser focused on presenting firms with high quality talent and helping candidates find a work environment with great culture where they can excel.",
  },
  {
    icon: HeartHandshake,
    title: "Relationship Driven",
    copy: "We believe in taking care of our clients, and we work hard to build strong long-term relationships. We are proud that so many rely on us for all of their search needs.",
  },
  {
    icon: Network,
    title: "Vast Network",
    copy: "Because of our background in the legal industry and our many contacts throughout the region, we have access to a wide range of highly qualified attorneys.",
  },
  {
    icon: Cpu,
    title: "Technology",
    copy: "We utilize the latest technology to streamline our process and optimize our solutions so we can deliver for you in a timely manner.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    copy: "Our results speak for themselves. We will work until we successfully place a candidate in every position we have been tasked to fill. We guarantee success.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-[#FFFFFF] transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:py-3.5 md:py-4 bg-[#FFFFFF]">
          <a
            href="#top"
            id="header-brand-logo"
            className="flex shrink-0 items-center transition-opacity hover:opacity-90 bg-[#FFFFFF]"
            aria-label="Bacon Legal Recruiting Home"
          >
            <img
              src={BRAND_LOGO}
              alt="Bacon Legal Recruiting — Attorney Search Experts"
              width={1536}
              height={1024}
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              id="header-cta-button"
              className="shrink-0 bg-brass px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
            >
              Connect With Us
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-ink lg:hidden focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-[#FFFFFF] px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wider uppercase text-muted-foreground transition-colors hover:text-ink py-1 border-b border-border/40"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-brass py-3 text-xs font-semibold tracking-widest uppercase text-ink"
              >
                Connect With Us
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section id="hero" className="relative bg-ink text-ink-foreground overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center px-6 py-20 lg:py-28 lg:pr-12 z-10">
              <p className="eyebrow text-brass">Bacon Legal Recruiting</p>
              <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-normal">
                Attorney Search <span className="text-brass">Experts</span>
              </h1>
              <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-ink-foreground/80">
                Founded and led by attorneys and industry experts, we understand that the right
                candidate is the perfect mix of experience, skill and compatibility.
              </p>

              {/* Supporting section text */}
              <div className="mt-8 border-l-2 border-brass/60 pl-5 py-1">
                <p className="text-sm sm:text-base leading-relaxed text-ink-foreground/85">
                  At Bacon Legal Recruiting, we understand that each client has its own unique
                  niche, needs and culture.
                </p>
                <p className="mt-2 text-sm sm:text-base font-medium text-brass">
                  Finding the right fit for organizations and individual candidates is our
                  specialty.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  id="hero-primary-cta"
                  className="bg-brass px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-md"
                >
                  Connect With Us
                </a>
                <a
                  href="#why-choose-us"
                  id="hero-secondary-cta"
                  className="border border-ink-foreground/30 px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink-foreground transition-colors hover:bg-ink-foreground/10 hover:border-ink-foreground/60"
                >
                  Why Choose Us
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <img
                src={HERO_IMAGE}
                alt="Bacon Legal Recruiting — Attorney Search Experts"
                width={1600}
                height={1104}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/20 lg:to-transparent" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE BACON LEGAL RECRUITING */}
        <section id="why-choose-us" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-brass">Why Choose Us</p>
            <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
              Why Choose Bacon Legal Recruiting
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Finding the right fit for organizations and individual candidates is our specialty.
              Here is what sets our search practice apart:
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  id={`why-card-${idx + 1}`}
                  className="flex flex-col border border-border bg-card p-8 transition-all hover:border-brass/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-normal text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {card.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about" className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow text-brass">About Us</p>
                <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                  Experience. Reputation. Results.
                </h2>
                <p className="mt-4 text-lg font-medium text-ink/80 italic font-display">
                  Trusted legal placement you can count on.
                </p>

                <div className="mt-7 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    At Bacon Legal Recruiting, we know that your team drives your success. We
                    specialize in identifying and attracting the very top attorneys for law firms
                    and corporations. We have a skilled and client friendly team motivated to
                    achieve excellence.
                  </p>
                  <p>
                    We recruit directly from the “passive” workforce. These are attorneys in the top
                    of the talent pool that are not job searching. We do not use job boards as the
                    overall talent pool on job boards has a disproportionately high percentage of
                    lower performers.
                  </p>
                  <p>
                    As an attorney of more than 25 years himself, our founder and CEO, Kevin Bacon,
                    knows the industry intricately from the inside out. After working as a private
                    practice attorney and legislator, Kevin realized that there is a demand for
                    experienced, skilled, knowledgeable and well-connected legal recruiters. His
                    reputation in the legal and political world is impeccable, and he excels at
                    finding the perfect fit for each role.
                  </p>
                  <p>
                    Some of Kevin's many strengths are his ability to understand a situation and
                    source a successful solution. Having served in the Ohio House of Representatives
                    from 2007 to 2010, and as a state senator for the 3rd District of the Ohio
                    Senate from 2011 to 2018, Kevin understands how to work with many different
                    types of people and achieve measurable success.
                  </p>
                  <p>
                    Kevin has built a team here at Bacon Legal Recruiting that has a proven track
                    record of permanent placements for our law firms and corporations. Each and
                    every client is our number one client, and our focus is getting you the best
                    partner, associate or in-house counsel attorney.
                  </p>
                </div>

                <div className="mt-8 border-l-2 border-brass pl-5 py-2 bg-background/60">
                  <p className="text-base font-medium text-ink">
                    At Bacon Legal Recruiting, we know the attorney you choose will make a
                    difference.
                  </p>
                  <p className="mt-1 text-sm text-brass font-medium">
                    Let us help you find the right one.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    id="about-cta-button"
                    className="inline-flex items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90"
                  >
                    Connect With Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src={ABOUT_IMAGE}
                    alt="Bacon Legal Recruiting executive team"
                    width={1200}
                    height={1400}
                    loading="lazy"
                    className="w-full object-cover rounded-sm border border-border shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 hidden sm:block bg-ink text-ink-foreground p-6 max-w-xs border border-brass/40 shadow-xl">
                    <p className="text-xs uppercase tracking-widest text-brass font-medium">
                      25+ Years Experience
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-foreground/80">
                      Led by former attorney & legislator Kevin Bacon, delivering discreet permanent
                      placements nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <img
                src={SERVICES_IMAGE}
                alt="Law firm boardroom consultation"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full object-cover rounded-sm border border-border shadow-lg"
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <p className="eyebrow text-brass">Our Services</p>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Committed to professionalism.
              </p>
              <h2 className="rule-brass mt-3 text-3xl sm:text-4xl text-ink">
                The legal search firm with an edge.
              </h2>

              <div className="mt-7 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Whether you're searching for partners, associates or in-house counsel attorneys,
                  our extensive experience and intimate knowledge of the legal profession gives us a
                  unique edge.
                </p>
                <p>
                  Because our firm is run by a former practicing attorney and market experts, we
                  understand not just the practice of law, but the “business of law,” and we know
                  where to find quality candidates.
                </p>
                <p className="font-medium text-ink">
                  We routinely talk to hundreds of attorneys all over the United States every week.
                </p>
                <p>
                  Every client is our top priority, and because of this along with our high
                  placement success rate, we operate on many repeat engagements from current happy
                  clients as well as referrals.
                </p>
              </div>

              {/* Service categories */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-6">
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">Partner Search</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Lateral partners, practice group acquisitions, and firm mergers.
                  </p>
                </div>
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">Associate Placement</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    High-achieving associates across corporate, litigation, IP & specialized niches.
                  </p>
                </div>
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">In-House Counsel</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    General Counsel and corporate legal team recruitment for enterprise
                    organizations.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  id="services-cta-button"
                  className="inline-flex items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90"
                >
                  Connect With Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PLACEMENTS */}
        <section id="placements" className="bg-ink text-ink-foreground py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow text-brass">Our Track Record</p>
                <h2 className="mt-4 text-3xl sm:text-4xl text-ink-foreground font-normal">
                  Our Placements
                </h2>
                <p className="mt-4 text-lg font-medium text-brass italic font-display">
                  We work with each client until their search request is filled.
                </p>

                {/* Prominent Visual Statistic block */}
                <div className="mt-8 flex items-baseline gap-4 border-y border-brass/30 py-6">
                  <span className="font-display text-6xl sm:text-7xl font-light text-brass tabular-nums">
                    97%
                  </span>
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-ink-foreground">
                      Success rate placing candidates in long term roles.
                    </p>
                    <p className="mt-1 text-xs tracking-wider uppercase text-ink-foreground/60">
                      Proven Permanent Retention
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-ink-foreground/80">
                  <p>
                    We have access to well over 500,000 attorney profiles in our database which is
                    constantly updated.
                  </p>
                  <p>
                    We have recruiters working for Bacon Legal Recruiting that have a network of
                    recruiter partners across the United States that conduct searches for us in
                    almost every legal market.
                  </p>
                  <p className="font-medium text-ink-foreground">
                    Our candidates are high quality experienced professionals who are well
                    positioned to make significant contributions to the organizations they join.
                  </p>
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    id="placements-cta-button"
                    className="inline-flex items-center gap-2 bg-brass px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90"
                  >
                    Connect With Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src={PLACEMENTS_IMAGE}
                    alt="Attorneys collaborating in modern law firm"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="w-full object-cover rounded-sm border border-brass/30 shadow-2xl"
                  />
                  <div className="mt-4 border-l-2 border-brass pl-4">
                    <p className="text-xs uppercase tracking-widest text-brass">
                      500,000+ Attorney Profiles
                    </p>
                    <p className="mt-1 text-xs text-ink-foreground/70">
                      Constantly refreshed nationwide legal database and partner recruiter network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR TEAM / LEADERSHIP */}
        <section id="leadership" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-brass">Our Leadership</p>
            <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">Our Leadership Team</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Directly engaged with every client and search assignment to guarantee personalized
              focus, industry acumen, and exceptional placement results.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {/* Team Member 1: Kevin Bacon */}
            <article
              id="team-kevin-bacon"
              className="flex flex-col border border-border bg-card p-8 shadow-sm transition-all hover:border-brass/50 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-secondary border border-border">
                <img
                  src={KEVIN_IMAGE}
                  alt="Kevin Bacon — Founder & CEO of Bacon Legal Recruiting"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-2xl text-ink font-normal">Kevin Bacon</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brass mt-1">
                    Founder & CEO
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/kevin-bacon-esq-8169993/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-ink transition-colors hover:bg-brass hover:text-ink"
                  aria-label="Kevin Bacon LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                Kevin heads up strategy, technology, and client service. As the ultimate
                relationship builder, Kevin spends a lot of time on the phone with clients and
                candidates. He oversees the team and is personally engaged with every client and
                candidate.
              </p>
            </article>

            {/* Team Member 2: Marqué Bressler-Preininger */}
            <article
              id="team-marque-preininger"
              className="flex flex-col border border-border bg-card p-8 shadow-sm transition-all hover:border-brass/50 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-secondary border border-border">
                <img
                  src={MARQUE_IMAGE}
                  alt="Marqué Bressler-Preininger — Exec. Dir. of Legal Search"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-2xl text-ink font-normal">Marqué Bressler-Preininger</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brass mt-1">
                    Exec. Dir. of Legal Search
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/marque-preininger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-ink transition-colors hover:bg-brass hover:text-ink"
                  aria-label="Marqué Bressler-Preininger LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                Marqué heads up legal recruiting. She spent almost three decades in the residential
                and commercial housing industry building a well established and sizable network
                throughout the country. Marqué also oversees company operations.
              </p>
            </article>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section id="careers" className="border-t border-border bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border border-border bg-card p-10 sm:p-14 shadow-sm">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="eyebrow text-brass">Careers</p>
                  <h2 className="mt-4 text-3xl sm:text-4xl text-ink font-normal">
                    Explore Opportunities for Legal Talent
                  </h2>
                  <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <p>
                      At Bacon Legal Recruiting, finding the right fit for organizations and
                      individual candidates is our specialty.
                    </p>
                    <p>
                      We recruit directly from the “passive” workforce. These are attorneys in the
                      top of the talent pool that are not job searching on public boards. Whether
                      you are a partner considering a lateral move, an experienced associate looking
                      for your next challenge, or seeking an in-house corporate role, all
                      conversations begin off the record and stay strictly confidential.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                  <a
                    href="#contact"
                    id="careers-cta-button"
                    className="w-full sm:w-auto text-center bg-brass px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                  >
                    Connect With Us
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground text-center lg:text-right">
                    Discreet, confidential consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NATIONAL ASSOCIATION OF LEGAL SEARCH CONSULTANTS (NALSC) */}
        <section id="nalsc" className="border-t border-border bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border-l-4 border-brass bg-secondary/30 p-8 sm:p-12">
              <p className="eyebrow text-brass">Professional Standards & Affiliations</p>
              <h2 className="mt-3 text-2xl sm:text-3xl text-ink font-normal">
                National Association of Legal Search Consultants (NALSC)
              </h2>

              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Kevin Bacon Executive Recruiting, DBA “Bacon Legal Recruiting” was accepted into,
                  and continues to be a member of, the National Association of Legal Search
                  Consultants (NALSC).
                </p>
                <p className="font-medium text-ink">
                  To be a member of NALSC, members must comply with all its ethical requirements.
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="https://www.nalsc.org/code-of-ethics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
                >
                  NALSC Code of Ethics
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* ULPQ Information Section */}
              <div className="mt-10 border-t border-border/80 pt-8">
                <h3 className="text-lg font-medium text-ink">
                  Universal Lateral Partner Questionnaire (ULPQ) Information
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Law Firms, Corporations and Attorneys that are interested in obtaining
                    information and forms for the Universal Lateral Partner Questionnaire (ULPQ),
                    please see the following link.
                  </p>
                  <p>
                    Members of NALSC work tirelessly with law firms across the United States to
                    create these documents to streamline the initial communications between search
                    firms and law firms and eliminate the repetition of putting together separate
                    LPQ’s when presenting partner candidates to multiple law firms.
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    href="https://www.nalsc.org/u-lpq-information/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary border border-border px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-ink transition-colors hover:bg-ink hover:text-ink-foreground hover:border-ink"
                  >
                    ULPQ Information
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="border-t border-border bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow text-brass">Contact</p>
                <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                  Begin a conversation.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Share the outline of your search request or background. Every inquiry is handled
                  with complete discretion and answered promptly by our leadership team.
                </p>

                <dl className="mt-10 space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background border border-border text-brass">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Email</dt>
                      <dd className="mt-1">
                        <a
                          href="mailto:admin@baconlegalrecruiting.com"
                          className="text-base text-ink font-medium hover:text-brass transition-colors"
                        >
                          admin@baconlegalrecruiting.com
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background border border-border text-brass">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Telephone</dt>
                      <dd className="mt-1">
                        <a
                          href="tel:+16145782655"
                          className="text-base text-ink font-medium hover:text-brass transition-colors tabular-nums"
                        >
                          614-578-2655
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background border border-border text-brass">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Search Scope</dt>
                      <dd className="mt-1 text-sm text-ink leading-relaxed">
                        National Reach · Partners, Associates & In-House Counsel
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7">
                <form
                  id="contact-form"
                  className="bg-card p-8 sm:p-10 border border-border shadow-md rounded-sm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <h3 className="text-xl font-medium text-ink">Send an Inquiry</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    All communications are strictly confidential.
                  </p>

                  {formSubmitted ? (
                    <div className="mt-8 rounded-sm border border-brass/50 bg-secondary/50 p-8 text-center">
                      <CheckCircle2 className="mx-auto h-10 w-10 text-brass" />
                      <h4 className="mt-4 text-xl font-normal text-ink">Inquiry Received</h4>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                        Thank you for reaching out to Bacon Legal Recruiting. We will review your
                        mandate or inquiry and respond promptly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="mt-6 border border-ink px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <div className="mt-8 grid gap-5">
                      <label className="block">
                        <span className="eyebrow text-muted-foreground">Name</span>
                        <input
                          required
                          placeholder="Your full name"
                          className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
                        />
                      </label>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <label className="block">
                          <span className="eyebrow text-muted-foreground">Email</span>
                          <input
                            required
                            type="email"
                            placeholder="name@firm.com"
                            className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
                          />
                        </label>

                        <label className="block">
                          <span className="eyebrow text-muted-foreground">Phone (Optional)</span>
                          <input
                            type="tel"
                            placeholder="Direct contact number"
                            className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="eyebrow text-muted-foreground">I am a</span>
                        <select className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass">
                          <option>Hiring law firm or legal department</option>
                          <option>Partner or associate seeking lateral opportunity</option>
                          <option>Attorney seeking in-house counsel position</option>
                          <option>General inquiry</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="eyebrow text-muted-foreground">Details</span>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please share details of your search requirements, timing, or practice area background..."
                          className="mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
                        />
                      </label>

                      <button
                        type="submit"
                        id="contact-submit-button"
                        className="mt-4 bg-ink px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={BRAND_LOGO}
              alt="Bacon Legal Recruiting"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-16 sm:h-20 w-auto object-contain rounded-sm"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/75 font-light">
              Bacon Legal Recruiting — Attorney Search Experts. Specialist legal recruiting and
              permanent placement for law firms and corporations nationwide.
            </p>
          </div>

          <div>
            <p className="eyebrow text-brass">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/75">
              {nav.map(([label, href]) => (
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
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
              <li>
                <a
                  href="mailto:admin@baconlegalrecruiting.com"
                  className="hover:text-brass transition-colors"
                >
                  admin@baconlegalrecruiting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16145782655"
                  className="hover:text-brass transition-colors tabular-nums"
                >
                  614-578-2655
                </a>
              </li>
              <li className="pt-2 text-xs text-ink-foreground/60 border-t border-ink-foreground/10">
                Member, National Association of Legal Search Consultants (NALSC)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-foreground/10">
          <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-ink-foreground/60">
            <p>© 2025. Kevin Bacon Legal Recruiting. All Rights Reserved.</p>
            <p className="tracking-widest uppercase text-[0.65rem] text-brass">
              Attorney Search Experts
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
