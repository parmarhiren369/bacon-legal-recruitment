import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  UserCheck,
  HeartHandshake,
  Network,
  Cpu,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | Bacon Legal Recruiting" },
      {
        name: "description",
        content:
          "Discover what sets Bacon Legal Recruiting apart: experienced attorney leadership, vast talent network, service-focused methodology, and a satisfaction guarantee.",
      },
    ],
  }),
  component: WhyChooseUsPage,
});

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

function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main>
        {/* HERO / INTRO BANNER */}
        <section className="bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brass">Why Choose Us</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]">
                Why Choose <span className="text-brass">Bacon Legal Recruiting</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80">
                Finding the right fit for organizations and individual candidates is our specialty.
                Here is what sets our search practice apart:
              </p>
            </div>
          </div>
        </section>

        {/* 6 CORE PILLARS GRID */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="mt-6 text-xl font-normal text-ink">{card.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {card.copy}
                  </p>
                </article>
              );
            })}
          </div>

          {/* ADDITIONAL DEPTH / ADVANTAGES */}
          <div className="mt-16 border border-border bg-card p-8 sm:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow text-brass">The Bacon Legal Difference</p>
                <h3 className="mt-3 text-2xl sm:text-3xl text-ink font-normal">
                  Recruiting Powered by Legal Acumen & Unwavering Discretion
                </h3>
                <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Unlike generalist recruiters who treat attorney placements as standard keyword
                    matches, we evaluate candidates through the lens of legal practice, partnership
                    dynamics, and long-term organizational stability.
                  </p>
                  <p>
                    Every search is conducted with the utmost discretion. We specialize in reaching
                    top-tier partners and corporate counsel who are not actively posting on public
                    job boards, creating opportunities that would otherwise remain unavailable.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">
                      Direct executive-level representation on every search
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">
                      Nationwide reach with 500,000+ vetted attorney profiles
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">
                      Strict adherence to NALSC Code of Ethics
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">
                      97% long-term placement retention rate
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <div className="border-l-4 border-brass bg-secondary/60 p-6 w-full text-left">
                  <p className="eyebrow text-brass">Client Assurance</p>
                  <p className="mt-2 text-base font-medium text-ink">
                    “We will work until we successfully place a candidate in every position we have
                    been tasked to fill. We guarantee success.”
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">— Kevin Bacon, Founder & CEO</p>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 w-full text-center inline-flex justify-center items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
                >
                  Connect With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
