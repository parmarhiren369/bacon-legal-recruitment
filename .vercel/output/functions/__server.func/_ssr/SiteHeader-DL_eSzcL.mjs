import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteHeader-DL_eSzcL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var bacon_legal_logo_default = "/assets/bacon-legal-logo-YbguWpL6.png";
var _jsxFileName = "/app/applet/src/components/SiteHeader.tsx";
var BRAND_LOGO = bacon_legal_logo_default;
var navItems = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Why Choose Us",
		href: "/why-choose-us"
	},
	{
		label: "About Us",
		href: "/about"
	},
	{
		label: "Our Services",
		href: "/services"
	},
	{
		label: "Careers",
		href: "/careers"
	}
];
function SiteHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-[#FFFFFF] transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:py-3.5 md:py-4 bg-[#FFFFFF]",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					id: "header-brand-logo",
					className: "flex shrink-0 items-center transition-opacity hover:opacity-90 bg-[#FFFFFF]",
					"aria-label": "Bacon Legal Recruiting Home",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: BRAND_LOGO,
						alt: "Bacon Legal Recruiting — Attorney Search Experts",
						width: 1536,
						height: 1024,
						className: "h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Main Navigation",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.href,
						className: "text-[0.72rem] font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-ink [&.active]:text-ink [&.active]:font-semibold",
						activeProps: { className: "text-ink font-semibold" },
						children: item.label
					}, item.label, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/contact",
						id: "header-cta-button",
						className: "shrink-0 bg-brass px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm",
						children: "Connect With Us"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						id: "mobile-menu-toggle",
						onClick: () => setMobileMenuOpen(!mobileMenuOpen),
						className: "inline-flex items-center justify-center p-2 text-ink lg:hidden focus:outline-none",
						"aria-label": "Toggle Navigation Menu",
						children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-6 w-6" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 31
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-6 w-6" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 59
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this), mobileMenuOpen && /* @__PURE__ */ (void 0)("div", {
			className: "border-b border-border bg-[#FFFFFF] px-6 py-5 lg:hidden",
			children: /* @__PURE__ */ (void 0)("nav", {
				className: "flex flex-col gap-4",
				children: [navItems.map((item) => /* @__PURE__ */ (void 0)(Link, {
					to: item.href,
					onClick: () => setMobileMenuOpen(false),
					className: "text-sm font-medium tracking-wider uppercase text-muted-foreground transition-colors hover:text-ink py-1 border-b border-border/40",
					activeProps: { className: "text-ink font-semibold" },
					children: item.label
				}, item.label, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 15
				}, this)), /* @__PURE__ */ (void 0)(Link, {
					to: "/contact",
					onClick: () => setMobileMenuOpen(false),
					className: "mt-2 text-center bg-brass py-3 text-xs font-semibold tracking-widest uppercase text-ink",
					children: "Connect With Us"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
//#endregion
export { SiteHeader as n, navItems as r, BRAND_LOGO as t };
