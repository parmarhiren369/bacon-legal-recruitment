import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, O as Award, _ as HeartHandshake, i as UserCheck, k as ArrowRight, l as Network, s as Scale, x as Cpu } from "../_libs/lucide-react.mjs";
import { n as SiteHeader } from "./SiteHeader-Dzra1Mlm.mjs";
import { n as SiteFooter } from "./SiteFooter-CNcLccSQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-choose-us-EUcQPnV2.js
var import_jsx_runtime = require_jsx_runtime();
var PLACEMENTS_IMAGE = "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb";
var whyChooseCards = [
	{
		icon: Scale,
		title: "Experienced Legal Acumen",
		copy: "Led by an attorney with over 25 years in practice and legislation, our firm offers a unique insider understanding of what is needed to fill each position with the right candidate."
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
		title: "Vast National Network",
		copy: "Because of our background in the legal and legislative community, we maintain access to a national network of over 500,000 attorney profiles and recruit across all U.S. markets."
	},
	{
		icon: Cpu,
		title: "Technology",
		copy: "We utilize the latest technology to streamline our process and optimize our solutions so we can deliver for you in a timely manner."
	},
	{
		icon: Award,
		title: "Satisfaction Guarantee",
		copy: "Our results speak for themselves. We will work diligently to place a candidate in every position we have been tasked to fill. We will continue to work with you and the candidate after the placement to ensure a smooth transition and onboarding process."
	}
];
function WhyChooseUsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-brass",
									children: "Why Choose Us · National Recruiting Firm"
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
									children: "Finding the right fit for organizations and individual candidates is our specialty across the United States. Here is what sets our search practice apart:"
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unlike generalist recruiters who treat attorney placements as standard keyword matches, we evaluate candidates through the lens of legal practice, partnership dynamics, and long-term organizational stability." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every search is conducted with the utmost discretion. As a national recruiting firm, we specialize in reaching top-tier partners, corporate counsel, State Lobbyists, and Federal Lobbyists who are not actively posting on public job boards, creating opportunities that would otherwise remain unavailable." })]
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
													children: "Nationwide reach across all U.S. markets with 500,000+ attorney profiles"
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
													children: "97% Retention Rate placing candidates in long term roles"
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
											children: "“Our results speak for themselves. We will work diligently to place a candidate in every position we have been tasked to fill. We will continue to work with you and the candidate after the placement to ensure a smooth transition and onboarding process.”"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted-foreground",
											children: "— Kevin Bacon, Founder & CEO"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "mt-6 w-full text-center inline-flex justify-center items-center gap-2 bg-brass px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm",
									children: ["Consult with an Expert", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ink text-ink-foreground py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-14 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-brass",
										children: "Our Track Record"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 text-3xl sm:text-4xl text-ink-foreground font-normal",
										children: "Our Placements"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg font-medium text-brass italic font-display",
										children: "We work with each client until their search request is filled."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex items-baseline gap-4 border-y border-brass/30 py-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-6xl sm:text-7xl font-light text-brass tabular-nums",
											children: "97%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg sm:text-xl font-medium text-ink-foreground",
											children: "Retention Rate placing candidates in long term roles."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs tracking-wider uppercase text-ink-foreground/60",
											children: "Proven Permanent Retention"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-ink-foreground/80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We have access to well over 500,000 attorney profiles in our database which is constantly updated." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As a national recruiting firm, we have recruiters working for Bacon Legal Recruiting that have a network of recruiter partners across the United States that conduct searches for us in almost every legal market." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-ink-foreground",
												children: "Our candidates are high quality experienced professionals who are well positioned to make significant contributions to the organizations they join."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 bg-brass px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink transition-opacity hover:opacity-90",
											children: ["Consult with an Expert", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: PLACEMENTS_IMAGE,
										alt: "Attorneys collaborating in modern law firm",
										width: 1200,
										height: 1200,
										loading: "lazy",
										className: "w-full object-cover rounded-sm border border-brass/30 shadow-2xl"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 border-l-2 border-brass pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-widest text-brass",
											children: "500,000+ Attorney Profiles"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-ink-foreground/70",
											children: "Constantly refreshed nationwide legal database and partner recruiter network across the United States."
										})]
									})]
								})
							})]
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { WhyChooseUsPage as component };
