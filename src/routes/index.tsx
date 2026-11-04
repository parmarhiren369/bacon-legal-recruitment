import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Scale,
  UserCheck,
  HeartHandshake,
  Network,
  Cpu,
  Award,
  ExternalLink,
  Briefcase,
  Users,
  Building,
  Landmark,
} from "lucide-react";
import { SiteHeader, BRAND_LOGO } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { InquiryForm } from "../components/InquiryForm";
import heroCourthouse from "../assets/hero-courthouse.jpg";
import kevinPhoto from "../assets/kevin.png";

const HERO_IMAGE = heroCourthouse;
const ABOUT_IMAGE = kevinPhoto;
const SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";
const PLACEMENTS_IMAGE =
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bacon Legal Recruiting | National Recruiting Firm · Attorney Search Experts" },
      {
        name: "description",
        content:
          "Bacon Legal Recruiting — National Recruiting Firm. Founded and led by attorneys and industry experts, specializing in permanent legal placement for law firms and corporations across the United States.",
      },
      {
        property: "og:title",
        content: "Bacon Legal Recruiting | National Recruiting Firm · Attorney Search Experts",
      },
      {
        property: "og:description",
        content:
          "National Recruiting Firm. Founded and led by attorneys and industry experts, we understand that the right candidate is the perfect mix of experience, skill and compatibility.",
      },
      { property: "og:image", content: BRAND_LOGO },
    ],
  }),
  component: Index,
});

const whyChooseCards = [
  {
    icon: Scale,
    title: "Experienced Legal Experts",
    copy: "Led by an experienced attorney and industry experts, we offer a unique insider understanding of what is needed to fill each position with the right candidate.",
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
    title: "Vast National Network",
    copy: "Because of our background in the legal industry and our contacts across the United States, we have access to a national network of over 500,000 attorney profiles.",
  },
  {
    icon: Cpu,
    title: "Technology",
    copy: "We utilize the latest technology to streamline our process and optimize our solutions so we can deliver for you in a timely manner.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    copy: "Our results speak for themselves. We will work diligently to place a candidate in every position we have been tasked to fill. We will continue to work with you and the candidate after the placement to ensure a smooth transition and onboarding process.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main id="top">
        {/* HERO SECTION */}
        <section id="hero" className="relative bg-ink text-ink-foreground overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center px-6 py-20 lg:py-28 lg:pr-12 z-10">
              <p className="eyebrow text-brass">National Recruiting Firm</p>
              <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-normal">
                Attorney Search <span className="text-brass">Experts</span>
              </h1>
              <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-ink-foreground/80">
                Founded and led by attorneys and industry experts, we understand that the right
                candidate is the perfect mix of experience, skill and compatibility. We have a
                national network of talent and recruit in all markets across the United States.
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
                <Link
                  to="/contact"
                  id="hero-primary-cta"
                  className="bg-brass px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-md"
                >
                  Consult with an Attorney
                </Link>
                <Link
                  to="/why-choose-us"
                  id="hero-secondary-cta"
                  className="border border-ink-foreground/30 px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-ink-foreground transition-colors hover:bg-ink-foreground/10 hover:border-ink-foreground/60"
                >
                  Why Choose Us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <img
                src={HERO_IMAGE}
                alt="Bacon Legal Recruiting — National Recruiting Firm"
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-brass">Why Choose Us · National Recruiting Firm</p>
              <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                Why Choose Bacon Legal Recruiting
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Finding the right fit for organizations and individual candidates across the United
                States is our specialty. Here is what sets our search practice apart:
              </p>
            </div>
            <Link
              to="/why-choose-us"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors"
            >
              Explore All Pillars
              <ArrowRight className="h-4 w-4" />
            </Link>
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

        {/* ABOUT US PREVIEW */}
        <section id="about" className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow text-brass">About Us · National Recruiting Firm</p>
                <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                  Experience. Reputation. Results.
                </h2>
                <p className="mt-4 text-lg font-medium text-ink/80 italic font-display">
                  Trusted legal placement you can count on across the United States.
                </p>

                <div className="mt-7 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p className="text-ink font-medium">
                    Founded and led by attorneys and industry experts, we understand that the right
                    candidate is the perfect mix of experience, skill and compatibility. We have a
                    national network of talent and recruit in all markets.
                  </p>
                  <p>
                    At Bacon Legal Recruiting, we know that your team drives your success. We
                    specialize in identifying and attracting the very top attorneys, State
                    Lobbyists, and Federal Lobbyists for law firms and corporations across the
                    United States. We have a skilled and client friendly team motivated to achieve
                    excellence.
                  </p>
                  <p>
                    We recruit directly from the “passive” workforce. These are attorneys in the top
                    of the talent pool that are not job searching. We do not use job boards as the
                    overall talent pool on job boards has a disproportionately high percentage of
                    lower performers.
                  </p>
                  <p>
                    As an attorney of more than 25 years himself, our founder and CEO, Kevin Bacon,
                    knows the industry intricately from the inside out. His reputation in the legal
                    and political world is impeccable, and he excels at finding the perfect fit for
                    each role.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    id="about-cta-button"
                    className="inline-flex items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                  >
                    Read Our Full Story & Leads
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-ink px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors"
                  >
                    Consult with an Attorney
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src={ABOUT_IMAGE}
                    alt="Kevin Bacon — Founder & CEO of Bacon Legal Recruiting"
                    width={1122}
                    height={1402}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover object-top rounded-sm border border-border shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 hidden sm:block bg-ink text-ink-foreground p-6 max-w-xs border border-brass/40 shadow-xl">
                    <p className="text-xs uppercase tracking-widest text-brass font-medium">
                      25+ Years Experience
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-foreground/80">
                      Led by attorney and former State Senator Kevin Bacon, delivering placements
                      and assisting attorneys nationwide.
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
              <p className="eyebrow text-brass">Our Services · National Recruiting Firm</p>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Committed to professionalism.
              </p>
              <h2 className="rule-brass mt-3 text-3xl sm:text-4xl text-ink">
                The legal search firm with an edge.
              </h2>

              <div className="mt-7 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Whether you're searching for partners, associates, in-house counsel attorneys,
                  State Lobbyists, or Federal Lobbyists, our extensive experience and intimate
                  knowledge of the legal profession gives us a unique edge.
                </p>
                <p>
                  Because our firm is run by a former practicing attorney and market experts, we
                  understand not just the practice of law, but the “business of law,” and we know
                  where to find quality candidates across the United States.
                </p>
                <p className="font-medium text-ink">
                  We routinely talk to hundreds of attorneys all over the United States every week.
                </p>
              </div>

              {/* Service categories */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-border pt-6">
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">Partner Search</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Lateral partners, practice group acquisitions, and firm mergers.
                  </p>
                </div>
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">Associate Placement</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    High-achieving associates across corporate, litigation, IP, Traditional Labor,
                    Employment & specialized niches.
                  </p>
                </div>
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">In-House Counsel</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    General Counsel and corporate legal team recruitment.
                  </p>
                </div>
                <div className="border border-border p-4 bg-secondary/30">
                  <h4 className="text-base font-medium text-ink">State & Federal Lobbyists</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Government affairs advocates, policy directors, and legislative counsel.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/services"
                  id="services-cta-button"
                  className="inline-flex items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                >
                  View Search Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
                      Retention Rate placing candidates in long term roles.
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
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    id="placements-cta-button"
                    className="inline-flex items-center gap-2 bg-brass px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90"
                  >
                    Consult with an Attorney
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                      Constantly refreshed nationwide legal database and partner recruiter network
                      across the United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS HIGHLIGHT */}
        <section id="careers" className="border-t border-border bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border border-border bg-card p-10 sm:p-14 shadow-sm">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="eyebrow text-brass">Careers · National Recruiting Firm</p>
                  <h2 className="mt-4 text-3xl sm:text-4xl text-ink font-normal">
                    Explore Opportunities for Legal Talent
                  </h2>
                  <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <p>
                      At Bacon Legal Recruiting, finding the right fit for organizations and
                      individual candidates is our specialty across the United States.
                    </p>
                    <p>
                      We recruit directly from the “passive” workforce. Whether you are a partner
                      considering a lateral move, an experienced associate looking for your next
                      challenge, or seeking an in-house corporate role or government affairs
                      position, all conversations begin off the record and stay strictly
                      confidential.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                  <Link
                    to="/careers"
                    id="careers-cta-button"
                    className="w-full sm:w-auto text-center bg-brass px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                  >
                    Explore Careers Page
                  </Link>
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

        {/* SEND AN INQUIRY ON HOME PAGE */}
        <section id="contact" className="border-t border-border bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow text-brass">Contact · National Recruiting Firm</p>
                <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                  Begin a conversation.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Consult with an attorney. Share the outline of your search request or background.
                  As a national recruiting firm conducting searches within the United States, every
                  inquiry is handled with complete discretion and answered promptly by our
                  leadership team.
                </p>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors"
                  >
                    Go to Full Contact Page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <InquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
