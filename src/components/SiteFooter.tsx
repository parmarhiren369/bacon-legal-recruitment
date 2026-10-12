import { Link } from "@tanstack/react-router";
import { BRAND_LOGO, navItems } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block transition-opacity hover:opacity-90">
            <img
              src={BRAND_LOGO}
              alt="Bacon Legal Recruiting"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-16 sm:h-20 w-auto object-contain rounded-sm"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/75 font-light">
            Bacon Legal Recruiting — Attorney Search Experts. Specialist legal recruiting and
            permanent placement for law firms and corporations nationwide.
          </p>
        </div>

        <div>
          <p className="eyebrow text-brass">Navigate</p>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/75">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="transition-colors hover:text-brass">
                Contact & Inquiry
              </Link>
            </li>
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
  );
}
