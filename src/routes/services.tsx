import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, Building, Landmark, Award } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";

const PLACEMENTS_IMAGE =
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Bacon Legal Recruiting" },
      {
        name: "description",
        content:
          "Bacon Legal Recruiting — National Recruiting Firm. Search services for partner searches, associate placements, in-house counsel, State Lobbyists, and Federal Lobbyists across the United States.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main>
        {/* HERO / INTRO BANNER */}
        <section className="bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brass">Our Services · National Recruiting Firm</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]">
                The Legal Search Firm With an <span className="text-brass">Edge.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-display italic">
                Committed to professionalism, precision, and partnership nationwide across the United States.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW & IMAGE */}
        <section className="mx-auto max-w-6xl px-6 py-24">
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
              <p className="eyebrow text-brass">Executive Search Expertise</p>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Committed to professionalism.
              </p>
              <h2 className="rule-brass mt-3 text-3xl sm:text-4xl text-ink">
                Understanding the Practice and Business of Law
              </h2>

              <div className="mt-7 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Whether you're searching for partners, associates, in-house counsel attorneys, State Lobbyists, or Federal Lobbyists, our extensive experience and intimate knowledge of the legal and legislative professions gives us a unique edge.
                </p>
                <p>
                  As a national recruiting firm led by an experienced attorney and market experts, we understand not just the practice of law, but the “business of law,” and we know where to find quality candidates.
                </p>
                <p className="font-medium text-ink">
                  We routinely talk to hundreds of attorneys, policy advocates, and corporate counsel all over the United States every week.
                </p>
                <p>
                  Every client is our top priority, and because of this along with our 97% retention rate, we operate on many repeat engagements from current happy clients as well as referrals.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  id="services-cta-button"
                  className="inline-flex items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                >
                  Consult with an Attorney
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CORE PRACTICE SPECIALIZATIONS GRID */}
          <div className="mt-20">
            <div className="max-w-2xl">
              <p className="eyebrow text-brass">Practice Specializations</p>
              <h3 className="rule-brass mt-3 text-2xl sm:text-3xl text-ink font-normal">
                Search Solutions Across the Legal & Policy Spectrum
              </h3>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Partner Search */}
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Briefcase className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Partner Search</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Lateral partner placements, practice group acquisitions, and strategic law firm
                  mergers handled with total discretion.
                </p>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-brass">
                  Lateral Transitions · Confidential Mandates
                </div>
              </div>

              {/* Associate Placement */}
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Users className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Associate Placement</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  High-achieving associates across corporate transactional, complex litigation, IP,
                  tax, Traditional Labor, Employment, and specialized regulatory niches.
                </p>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-brass">
                  Traditional Labor · Employment · Litigation · Corporate
                </div>
              </div>

              {/* In-House Counsel */}
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Building className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">In-House Counsel</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  General Counsel, Chief Legal Officers, and corporate legal department placements
                  for private and enterprise organizations.
                </p>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-brass">
                  General Counsel · Corporate Legal Leadership
                </div>
              </div>

              {/* State Lobbyists */}
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Landmark className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">State Lobbyists</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  State government affairs advocates, legislative directors, and policy counsel with deep institutional capital in state capitals across the United States.
                </p>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-brass">
                  State Legislative Chambers · Regulatory Advocacy
                </div>
              </div>

              {/* Federal Lobbyists */}
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Award className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Federal Lobbyists</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Federal government relations professionals, Congressional committee veterans, and regulatory policy experts serving law firm practices and corporations.
                </p>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-brass">
                  Congressional Relations · Federal Agency Affairs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRACK RECORD & PLACEMENTS SECTION */}
        <section className="bg-ink text-ink-foreground py-24">
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

                {/* Stat block */}
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
                    As a national recruiting firm, we have recruiters working for Bacon Legal Recruiting that have a network of
                    recruiter partners across the United States that conduct searches for us in
                    almost every legal market.
                  </p>
                  <p className="font-medium text-ink-foreground">
                    Our candidates are high quality experienced professionals who are well
                    positioned to make significant contributions to the organizations they join.
                  </p>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
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
                      Constantly refreshed nationwide legal database and partner recruiter network across the United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
