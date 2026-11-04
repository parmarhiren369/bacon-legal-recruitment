import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as CircleCheck, O as BookOpen, S as Clock, T as Calendar, j as ArrowLeft, o as Share2, r as User } from "../_libs/lucide-react.mjs";
import { n as SiteHeader } from "./SiteHeader-CAjx6o9A.mjs";
import { n as SiteFooter, t as NewsletterSubscription } from "./SiteFooter-CzMrrXi4.mjs";
import { n as Route, t as BLOG_POSTS } from "./blogs-TlgTvcqi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs-DwFmRejO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogsPage() {
	const { article, category } = Route.useSearch();
	const navigate = useNavigate({ from: "/blogs" });
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(category || "All");
	const [copiedNotification, setCopiedNotification] = (0, import_react.useState)(false);
	const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
	const currentPost = article ? BLOG_POSTS.find((p) => p.slug === article) : null;
	const filteredPosts = BLOG_POSTS.filter((post) => {
		if (selectedCategory !== "All" && post.category !== selectedCategory) return false;
		return true;
	});
	const handleShare = () => {
		if (typeof navigator !== "undefined" && navigator.clipboard) {
			navigator.clipboard.writeText(window.location.href);
			setCopiedNotification(true);
			setTimeout(() => setCopiedNotification(false), 2500);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: currentPost ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-ink text-ink-foreground py-16 lg:py-20 border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-4xl px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => navigate({ search: {} }),
									className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass hover:text-ink-foreground transition-colors mb-6 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to all articles"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-brass",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-brass/20 text-brass px-3 py-1 font-semibold rounded-xs",
											children: currentPost.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-ink-foreground/70",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), currentPost.date]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-ink-foreground/70",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), currentPost.readTime]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-ink-foreground",
									children: currentPost.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between gap-4 border-t border-ink-foreground/15 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-brass text-ink font-semibold text-sm",
											children: "KB"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-ink-foreground",
											children: currentPost.author
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-ink-foreground/70",
											children: currentPost.authorRole
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleShare,
										className: "inline-flex items-center gap-1.5 border border-ink-foreground/20 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-ink-foreground hover:bg-ink-foreground/10 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5" }), copiedNotification ? "Link Copied!" : "Share"]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl px-6 pt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-sm border border-border shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: currentPost.featuredImage,
									alt: currentPost.title,
									className: "w-full aspect-[16/9] object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 border-l-2 border-brass pl-6 py-2 bg-secondary/40 text-base sm:text-lg italic text-ink font-display leading-relaxed",
								children: currentPost.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground",
								children: currentPost.content.map((paragraph, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/90",
									children: paragraph
								}, idx))
							}),
							currentPost.keyTakeaways && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 rounded-sm border border-brass/50 bg-secondary/50 p-8 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-brass",
										children: "Executive Summary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl font-normal text-ink",
										children: "Key Strategic Takeaways"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-3",
										children: currentPost.keyTakeaways.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm text-foreground/90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, idx))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 border border-border bg-card p-8 rounded-sm shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-brass font-serif text-xl border border-brass",
									children: "KB"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-brass",
										children: "About the Author"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-lg font-medium text-ink mt-1",
										children: "Kevin Bacon · Founder & CEO"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: "Kevin Bacon is an attorney with more than 25 years of legal and legislative experience, having served in the Ohio House of Representatives (2007–2010) and as an Ohio State Senator (2011–2018). As founder of Bacon Legal Recruiting, a national recruiting firm, he conducts discreet permanent placements for law firms and corporate legal departments across the United States."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors",
											children: ["Consult with an Attorney", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 pt-8 border-t border-border flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => navigate({ search: {} }),
									className: "inline-flex items-center gap-2 border border-ink px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "All Articles"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 bg-brass px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:opacity-90 transition-opacity shadow-sm",
									children: ["Connect With Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterSubscription, { variant: "section" })
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-brass",
									children: "Our Perspective"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]",
									children: ["Blogs & Legal Market ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brass",
										children: "Insights."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-display italic",
									children: "Analysis, recruitment strategies, and lateral market intelligence from our national recruiting firm."
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 border-b border-border pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-2",
								children: "Category:"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedCategory(cat),
								className: `px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${selectedCategory === cat ? "bg-ink text-ink-foreground shadow-sm" : "bg-secondary text-muted-foreground hover:text-ink hover:bg-secondary/80"}`,
								children: cat
							}, cat))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-10 sm:grid-cols-2",
							children: filteredPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col border border-border bg-card shadow-sm transition-all hover:border-brass/50 hover:shadow-md rounded-sm overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] w-full overflow-hidden bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: post.featuredImage,
										alt: post.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 left-4 bg-ink/90 text-brass px-3 py-1 text-[0.68rem] font-semibold tracking-wider uppercase backdrop-blur-xs border border-brass/30",
										children: post.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-8 flex flex-col flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), post.date]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), post.readTime]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 text-2xl font-normal text-ink leading-snug",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => navigate({ search: { article: post.slug } }),
												className: "text-left hover:text-brass transition-colors cursor-pointer",
												children: post.title
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm text-muted-foreground leading-relaxed flex-1",
											children: post.summary
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 pt-6 border-t border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5 text-brass" }), post.author]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => navigate({ search: { article: post.slug } }),
												className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors cursor-pointer",
												children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})]
										})
									]
								})]
							}, post.id))
						}),
						filteredPosts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-20 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mx-auto h-12 w-12 text-muted-foreground/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg font-medium text-ink",
									children: "No articles in this category."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelectedCategory("All"),
									className: "mt-3 text-xs uppercase tracking-wider text-brass hover:underline",
									children: "View all articles"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterSubscription, { variant: "section" })
			] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { BlogsPage as component };
