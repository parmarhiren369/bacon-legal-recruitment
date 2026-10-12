import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as navItems, t as BRAND_LOGO } from "./SiteHeader-BFp0MrOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-Dr6zgfBc.js
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-block transition-opacity hover:opacity-90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND_LOGO,
						alt: "Bacon Legal Recruiting",
						width: 1536,
						height: 1024,
						loading: "lazy",
						className: "h-16 sm:h-20 w-auto object-contain rounded-sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/75 font-light",
					children: "Bacon Legal Recruiting — Attorney Search Experts. Specialist legal recruiting and permanent placement for law firms and corporations nationwide."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-brass",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-2.5 text-sm text-ink-foreground/75",
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "transition-colors hover:text-brass",
						children: item.label
					}) }, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "transition-colors hover:text-brass",
						children: "Contact & Inquiry"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-brass",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm text-ink-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:admin@baconlegalrecruiting.com",
							className: "hover:text-brass transition-colors",
							children: "admin@baconlegalrecruiting.com"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+16145782655",
							className: "hover:text-brass transition-colors tabular-nums",
							children: "614-578-2655"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-2 text-xs text-ink-foreground/60 border-t border-ink-foreground/10",
							children: "Member, National Association of Legal Search Consultants (NALSC)"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-ink-foreground/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2025. Kevin Bacon Legal Recruiting. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tracking-widest uppercase text-[0.65rem] text-brass",
					children: "Attorney Search Experts"
				})]
			})
		})]
	});
}
//#endregion
export { SiteFooter as t };
