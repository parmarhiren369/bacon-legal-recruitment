import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Scale, f as HeartHandshake, h as CircleCheck, m as Cpu, r as UserCheck, s as Network, v as Award, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader } from "./SiteHeader-BFp0MrOG.mjs";
import { t as SiteFooter } from "./SiteFooter-Dr6zgfBc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-choose-us-F85tx-3n.js
var import_jsx_runtime = require_jsx_runtime();
var whyChooseCards = [
	{
		icon: Scale,
		title: "Experienced Legal Experts",
		copy: "As attorneys and legal industry experts, we have a unique understanding of what is needed to fill a position with the right candidate."
	},
	{
		icon: UserCheck,
		title: "Service Focused",
		copy: "At Bacon Legal Recruiting, we are laser focused on presenting firms with high quality talent and helping candidates find a work environment with great culture where they can excel."
	},
	{
		icon: HeartHandshake,
		title: "Relationship Driven",
		copy: "We believe in taking care of our clients, and we work hard to build strong long-term relationships. We are proud that so many rely on us for all of their search needs."
	},
	{
		icon: Network,
		title: "Vast Network",
		copy: "Because of our background in the legal industry and our many contacts throughout the region, we have access to a wide range of highly qualified attorneys."
	},
	{
		icon: Cpu,
		title: "Technology",
		copy: "We utilize the latest technology to streamline our process and optimize our solutions so we can deliver for you in a timely manner."
	},
	{
		icon: Award,
		title: "Satisfaction Guarantee",
		copy: "Our results speak for themselves. We will work until we successfully place a candidate in every position we have been tasked to fill. We guarantee success."
	}
];
function WhyChooseUsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-brass",
								children: "Why Choose Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]",
								children: ["Why Choose ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brass",
									children: "Bacon Legal Recruiting"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80",
								children: "Finding the right fit for organizations and individual candidates is our specialty. Here is what sets our search practice apart:"
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: whyChooseCards.map((card, idx) => {
						const Icon = card.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							id: `why-card-${idx + 1}`,
							className: "flex flex-col border border-border bg-card p-8 transition-all hover:border-brass/50 hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-brass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-6 w-6",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 text-xl font-normal text-ink",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground flex-1",
									children: card.copy
								})
							]
						}, card.title);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 border border-border bg-card p-8 sm:p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-brass",
									children: "The Bacon Legal Difference"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl sm:text-3xl text-ink font-normal",
									children: "Recruiting Powered by Legal Acumen & Unwavering Discretion"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unlike generalist recruiters who treat attorney placements as standard keyword matches, we evaluate candidates through the lens of legal practice, partnership dynamics, and long-term organizational stability." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every search is conducted with the utmost discretion. We specialize in reaching top-tier partners and corporate counsel who are not actively posting on public job boards, creating opportunities that would otherwise remain unavailable." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-ink",
												children: "Direct executive-level representation on every search"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-ink",
												children: "Nationwide reach with 500,000+ vetted attorney profiles"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-ink",
												children: "Strict adherence to NALSC Code of Ethics"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-ink",
												children: "97% long-term placement retention rate"
											})]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4 flex flex-col items-center lg:items-end justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l-4 border-brass bg-secondary/60 p-6 w-full text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-brass",
										children: "Client Assurance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-base font-medium text-ink",
										children: "“We will work until we successfully place a candidate in every position we have been tasked to fill. We guarantee success.”"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-muted-foreground",
										children: "— Kevin Bacon, Founder & CEO"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-6 w-full text-center inline-flex justify-center items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm",
								children: ["Connect With Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})]
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { WhyChooseUsPage as component };
