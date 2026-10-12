import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import uploadedLogo from "../assets/bacon-legal-logo.png";

export const BRAND_LOGO = uploadedLogo;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Careers", href: "/careers" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[#FFFFFF] transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:py-3.5 md:py-4 bg-[#FFFFFF]">
        <Link
          to="/"
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-ink [&.active]:text-ink [&.active]:font-semibold"
              activeProps={{
                className: "text-ink font-semibold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            id="header-cta-button"
            className="shrink-0 bg-brass px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm"
          >
            Connect With Us
          </Link>

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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground transition-colors hover:text-ink py-1 border-b border-border/40"
                activeProps={{
                  className: "text-ink font-semibold",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center bg-brass py-3 text-xs font-semibold tracking-widest uppercase text-ink"
            >
              Connect With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
