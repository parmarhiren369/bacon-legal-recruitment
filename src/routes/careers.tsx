import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, UserCheck, Lock, Award, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Bacon Legal Recruiting" },
      {
        name: "description",
        content:
          "Explore legal career opportunities with Bacon Legal Recruiting. Discreet, confidential consultations for partners, associates, and corporate counsel nationwide.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main>
        {/* HERO / INTRO BANNER */}
        <section className="bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brass">Careers</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]">
                Explore Opportunities for <span className="text-brass">Legal Talent.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-display italic">
                Discreet, confidential consultations for partners, associates, and corporate
                counsel.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CAREER CONTENT */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="border border-border bg-card p-10 sm:p-14 shadow-sm">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow text-brass">Confidential Career Representation</p>
                <h2 className="mt-4 text-3xl sm:text-4xl text-ink font-normal">
                  The Passive Workforce Advantage
                </h2>
                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    At Bacon Legal Recruiting, finding the right fit for organizations and
                    individual candidates is our specialty.
                  </p>
                  <p>
                    We recruit directly from the “passive” workforce. These are attorneys in the top
                    of the talent pool that are not job searching on public boards. Whether you are
                    a partner considering a lateral move, an experienced associate looking for your
                    next challenge, or seeking an in-house corporate role, all conversations begin
                    off the record and stay strictly confidential.
                  </p>
                  <p>
                    We do not use job boards, as the talent pool on public boards often fails to
                    represent the high-caliber legal practitioners our client firms and corporate
                    departments demand.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                <div className="border-l-4 border-brass bg-secondary/50 p-6 w-full text-left">
                  <p className="eyebrow text-brass">Our Commitment</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink font-medium">
                    100% confidential discussions with zero risk to your existing standing or
                    practice.
                  </p>
                </div>
                <Link
                  to="/contact"
                  id="careers-cta-button"
                  className="mt-6 w-full text-center bg-brass px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                >
                  Connect With Us
                </Link>
                <p className="mt-3 text-xs text-muted-foreground text-center lg:text-right w-full">
                  Discreet, confidential consultations.
                </p>
              </div>
            </div>
          </div>

          {/* CANDIDATE ADVANTAGES */}
          <div className="mt-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-brass">Candidate Representation</p>
              <h3 className="rule-brass mt-3 text-2xl sm:text-3xl text-ink font-normal">
                What Candidates Experience With Bacon Legal
              </h3>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Lock className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Strict Discretion</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Your identity and interest are guarded at every step. We only introduce you to
                  firms or companies with your explicit prior consent.
                </p>
              </div>

              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <UserCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Peer-to-Peer Dialogue</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  You converse with former practicing attorneys and experienced legal executives who
                  comprehend your practice area, client conflicts, and portable business.
                </p>
              </div>

              <div className="border border-border p-8 bg-card shadow-sm hover:border-brass/50 transition-all flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass mb-6">
                  <Award className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-ink">Unlisted Opportunities</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Many of our most lucrative lateral partner and General Counsel assignments are
                  retained exclusively and never posted publicly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
