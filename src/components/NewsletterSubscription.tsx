import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, CheckCircle2, AlertCircle, Info, ArrowRight } from "lucide-react";
import { subscribeToBaconBits } from "../functions/brevo";

interface NewsletterSubscriptionProps {
  variant?: "section" | "footer" | "card";
  className?: string;
}

export function NewsletterSubscription({
  variant = "section",
  className = "",
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "unconfigured" | "success">("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Please enter an email address.";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email address (e.g., attorney@firm.com).";
    }
    return null;
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationError = validateEmail(email);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const trimmedEmail = email.trim();
    setStatus("loading");

    try {
      const result = await subscribeToBaconBits({
        data: { email: trimmedEmail },
      });

      if (result.status === "success") {
        setStatus("success");
        setSubmittedEmail(result.email);
        setEmail("");
      } else if (result.status === "unconfigured") {
        setStatus("unconfigured");
        setSubmittedEmail(result.email);
      } else {
        setErrorMessage(result.message);
        setStatus("idle");
      }
    } catch {
      setErrorMessage("Network error connecting to Brevo. Please try again.");
      setStatus("idle");
    }
  };

  if (variant === "footer") {
    return (
      <div className={`pt-6 border-t border-ink-foreground/10 ${className}`}>
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link to="/blogs" className="eyebrow text-brass hover:underline">
              BACON BITS
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1 text-[0.7rem] font-semibold tracking-wider uppercase text-brass hover:text-ink-foreground transition-colors"
            >
              Read Bacon Bits &amp; Blogs
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <p className="mt-1 text-sm text-ink-foreground/80 font-normal">
            Short yet Informative and Entertaining News Bits in the Legal Market.
          </p>
          <p className="mt-1 text-sm text-ink-foreground/90 font-medium">
            Subscribe to get the latest “Sizzle."
          </p>

          {status === "unconfigured" ? (
            <div className="mt-3 rounded-sm border border-brass/40 bg-ink-foreground/5 p-3.5 text-xs text-ink-foreground/90">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-brass shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brass">Email Validated ({submittedEmail})</p>
                  <p className="mt-0.5 text-ink-foreground/70 leading-relaxed">
                    BACON BITS subscription is prepared for Brevo and is currently pending backend
                    Brevo API credentials. Live subscriptions will activate upon configuration.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setEmail("");
                    }}
                    className="mt-2 text-[0.7rem] uppercase tracking-wider text-brass hover:underline cursor-pointer"
                  >
                    Enter another email
                  </button>
                </div>
              </div>
            </div>
          ) : status === "success" ? (
            <div className="mt-3 flex items-center gap-2 text-xs text-brass">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Subscribed to BACON BITS for {submittedEmail}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-foreground/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="attorney@firm.com"
                    aria-label="Email address for BACON BITS"
                    className="w-full rounded-sm border border-ink-foreground/20 bg-ink-foreground/5 py-2 pl-9 pr-3 text-xs text-ink-foreground placeholder:text-ink-foreground/40 focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-brass px-5 py-2 text-xs font-semibold tracking-wider uppercase text-ink transition-opacity hover:opacity-90 shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Subscribe"}
                </button>
              </div>

              {errorMessage && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    );
  }

  // Section variant (used on Bacon Bits & Blogs page or at bottom of pages)
  return (
    <section className={`border-t border-border bg-secondary/50 py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brass">BACON BITS</p>
          <h3 className="mt-2 text-2xl sm:text-3xl text-ink font-normal">
            Short yet Informative and Entertaining News Bits in the Legal Market.
          </h3>
          <p className="mt-3 text-sm font-medium text-ink leading-relaxed">
            Subscribe to get the latest “Sizzle."
          </p>

          {status === "unconfigured" ? (
            <div className="mt-6 mx-auto max-w-lg rounded-sm border border-brass/50 bg-card p-5 text-left text-xs shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-sm">
                    Email Validated — Brevo Integration Pending
                  </p>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    Your email address (<strong>{submittedEmail}</strong>) has been verified. BACON
                    BITS subscription management is configured for Brevo and is currently awaiting
                    Brevo API credentials on the server.
                  </p>
                  <p className="mt-2 text-[0.7rem] text-brass uppercase tracking-wider font-medium">
                    Brevo Configuration Pending · No Spam
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setEmail("");
                    }}
                    className="mt-3 inline-block border border-ink/20 px-3 py-1 text-xs uppercase tracking-wider text-ink hover:bg-secondary cursor-pointer"
                  >
                    Enter Different Email
                  </button>
                </div>
              </div>
            </div>
          ) : status === "success" ? (
            <div className="mt-6 mx-auto max-w-md rounded-sm border border-brass/50 bg-card p-6 shadow-sm">
              <CheckCircle2 className="mx-auto h-8 w-8 text-brass" />
              <h4 className="mt-2 text-base font-medium text-ink">Subscription Active</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Thank you. You are subscribed to BACON BITS with {submittedEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 mx-auto max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter your professional email"
                    aria-label="Email address for BACON BITS"
                    className="w-full rounded-sm border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none transition-colors shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Subscribe"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {errorMessage && (
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <p className="mt-3 text-[0.7rem] text-muted-foreground">
                Completely confidential. We never share or sell contact details. Unsubscribe
                anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
