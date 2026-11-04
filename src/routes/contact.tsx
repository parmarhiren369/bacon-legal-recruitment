import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ShieldCheck, MapPin, ExternalLink } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { InquiryForm } from "../components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Send an Inquiry | Bacon Legal Recruiting" },
      {
        name: "description",
        content:
          "Contact Bacon Legal Recruiting — a premier National Recruiting Firm. Send a confidential inquiry or consult with an attorney for partner searches, associate placements, in-house counsel, State Lobbyists, or Federal Lobbyists across the United States.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main>
        {/* HERO / INTRO BANNER */}
        <section className="bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brass">Contact · National Recruiting Firm</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]">
                Begin a <span className="text-brass">Conversation.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-display italic">
                Consult with an attorney. Every inquiry is handled with complete discretion and answered promptly by our leadership team.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT & INQUIRY SECTION */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5">
              <p className="eyebrow text-brass">Get in Touch</p>
              <h2 className="rule-brass mt-4 text-3xl sm:text-4xl text-ink">
                Direct Leadership Access
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Share the outline of your search request or background. As a national recruiting firm operating exclusively within the United States, every inquiry is handled with complete discretion and answered promptly by our leadership team.
              </p>

              <dl className="mt-10 space-y-6 text-sm">
                {/* Business Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary border border-border text-brass">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Office Address</dt>
                    <dd className="mt-1 text-base text-ink font-medium leading-relaxed">
                      6852 Bethany Drive<br />Columbus, OH 43081
                    </dd>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary border border-border text-brass">
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

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary border border-border text-brass">
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

                {/* Search Scope */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary border border-border text-brass">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Search Scope</dt>
                    <dd className="mt-1 text-sm text-ink leading-relaxed">
                      National Recruiting Firm across the United States · Partners, Associates, In-House Counsel, State Lobbyists & Federal Lobbyists
                    </dd>
                  </div>
                </div>
              </dl>

              {/* NALSC badge card */}
              <div className="mt-12 border-l-4 border-brass bg-secondary/40 p-6 border border-border">
                <p className="eyebrow text-brass">Professional Standards</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Kevin Bacon Executive Recruiting, DBA “Bacon Legal Recruiting” is a member of the
                  National Association of Legal Search Consultants (NALSC) and strictly adheres to
                  its ethical standards.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.nalsc.org/code-of-ethics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors"
                  >
                    NALSC Code of Ethics
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
