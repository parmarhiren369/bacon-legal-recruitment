import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as CircleCheck, f as Mail, g as Info, w as CircleAlert } from "../_libs/lucide-react.mjs";
import { r as navItems, t as BRAND_LOGO } from "./SiteHeader-CAjx6o9A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-CzMrrXi4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsletterSubscription({ variant = "section", className = "" }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [submittedEmail, setSubmittedEmail] = (0, import_react.useState)("");
	const validateEmail = (val) => {
		const trimmed = val.trim();
		if (!trimmed) return "Please enter an email address.";
		if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) return "Please enter a valid email address (e.g., attorney@firm.com).";
		return null;
	};
	const handleSubscribe = async (e) => {
		e.preventDefault();
		setErrorMessage(null);
		const validationError = validateEmail(email);
		if (validationError) {
			setErrorMessage(validationError);
			return;
		}
		const trimmedEmail = email.trim();
		setStatus("loading");
		const env = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		};
		const newsletterEndpoint = env.VITE_NEWSLETTER_ENDPOINT || env.NEWSLETTER_ENDPOINT;
		if (newsletterEndpoint) try {
			const res = await fetch(newsletterEndpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: trimmedEmail })
			});
			if (res.ok) {
				setStatus("success");
				setSubmittedEmail(trimmedEmail);
				setEmail("");
			} else if (res.status === 409) {
				setErrorMessage("This email address is already subscribed.");
				setStatus("idle");
			} else {
				setErrorMessage("Unable to complete subscription at this time. Please try again later.");
				setStatus("idle");
			}
		} catch {
			setErrorMessage("Network error connecting to newsletter provider. Please try again.");
			setStatus("idle");
		}
		else {
			setStatus("unconfigured");
			setSubmittedEmail(trimmedEmail);
		}
	};
	if (variant === "footer") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pt-6 border-t border-ink-foreground/10 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-brass",
					children: "Legal Market Insights"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink-foreground/80 font-normal",
					children: "Subscribe to our confidential newsletter for attorney market updates and lateral hiring trends."
				}),
				status === "unconfigured" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-sm border border-brass/40 bg-ink-foreground/5 p-3.5 text-xs text-ink-foreground/90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold text-brass",
								children: [
									"Email Validated (",
									submittedEmail,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-ink-foreground/70 leading-relaxed",
								children: "Newsletter service is awaiting backend provider credentials (e.g., Mailchimp or SendGrid API key). Live deliveries will activate upon configuration."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setStatus("idle");
									setEmail("");
								},
								className: "mt-2 text-[0.7rem] uppercase tracking-wider text-brass hover:underline cursor-pointer",
								children: "Enter another email"
							})
						] })]
					})
				}) : status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2 text-xs text-brass",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Subscription confirmed for ",
						submittedEmail,
						"."
					] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubscribe,
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									if (errorMessage) setErrorMessage(null);
								},
								placeholder: "attorney@firm.com",
								"aria-label": "Email address for newsletter",
								className: "w-full rounded-sm border border-ink-foreground/20 bg-ink-foreground/5 py-2 pl-9 pr-3 text-xs text-ink-foreground placeholder:text-ink-foreground/40 focus:border-brass focus:outline-none transition-colors"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "loading",
							className: "bg-brass px-5 py-2 text-xs font-semibold tracking-wider uppercase text-ink transition-opacity hover:opacity-90 shrink-0 cursor-pointer disabled:opacity-50",
							children: status === "loading" ? "Validating..." : "Subscribe"
						})]
					}), errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-1.5 text-xs text-red-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `border-t border-border bg-secondary/50 py-16 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-brass",
						children: "Stay Informed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-2xl sm:text-3xl text-ink font-normal",
						children: "Bacon Legal Market Insights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground leading-relaxed",
						children: "Receive exclusive perspective on lateral partner movements, General Counsel searches, State & Federal Lobbyist recruitment, and hiring trends across the United States."
					}),
					status === "unconfigured" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 mx-auto max-w-lg rounded-sm border border-brass/50 bg-card p-5 text-left text-xs shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-5 w-5 text-brass shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-ink text-sm",
									children: "Subscription Request Validated"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted-foreground leading-relaxed",
									children: [
										"Your email address (",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: submittedEmail }),
										") has been verified. The newsletter subscription backend is currently awaiting client provider credentials (e.g., Mailchimp, ConvertKit, or SendGrid API key)."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.7rem] text-brass uppercase tracking-wider font-medium",
									children: "Backend Connection Pending · No Spam"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setStatus("idle");
										setEmail("");
									},
									className: "mt-3 inline-block border border-ink/20 px-3 py-1 text-xs uppercase tracking-wider text-ink hover:bg-secondary cursor-pointer",
									children: "Enter Different Email"
								})
							] })]
						})
					}) : status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 mx-auto max-w-md rounded-sm border border-brass/50 bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-8 w-8 text-brass" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-2 text-base font-medium text-ink",
								children: "Subscription Active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									"Thank you. You are subscribed to Bacon Legal Market Insights with ",
									submittedEmail,
									"."
								]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubscribe,
						className: "mt-6 mx-auto max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: email,
										onChange: (e) => {
											setEmail(e.target.value);
											if (errorMessage) setErrorMessage(null);
										},
										placeholder: "Enter your professional email",
										"aria-label": "Professional email address",
										className: "w-full rounded-sm border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none transition-colors shadow-sm"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: status === "loading",
									className: "inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm shrink-0 cursor-pointer disabled:opacity-50",
									children: [status === "loading" ? "Checking..." : "Subscribe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})]
							}),
							errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-center gap-1.5 text-xs text-red-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.7rem] text-muted-foreground",
								children: "Completely confidential. We never share or sell contact details. Unsubscribe anytime."
							})
						]
					})
				]
			})
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-ink-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: "Bacon Legal Recruiting — National Recruiting Firm. Specialist legal recruiting and permanent placement for law firms and corporations across the United States."
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-ink-foreground/75 leading-relaxed",
								children: [
									"6852 Bethany Drive",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Columbus, OH 43081"
								]
							}),
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-6 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterSubscription, { variant: "footer" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-ink-foreground/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2025. Kevin Bacon Legal Recruiting. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tracking-widest uppercase text-[0.65rem] text-brass",
						children: "National Recruiting Firm · Attorney Search Experts"
					})]
				})
			})
		]
	});
}
//#endregion
export { SiteFooter as n, NewsletterSubscription as t };
