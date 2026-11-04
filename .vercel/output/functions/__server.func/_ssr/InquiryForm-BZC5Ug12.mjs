import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as CircleCheck, b as Download, v as FileText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InquiryForm-BZC5Ug12.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INQUIRY_DOWNLOAD_CONFIG = {
	title: "Firm Overview & Practice Specializations Guide",
	description: "Download our firm overview, practice areas (including State and Federal Lobbyists), and search questionnaire (PDF).",
	fileName: "bacon-legal-recruiting-overview.pdf",
	filePath: "/documents/bacon-legal-recruiting-overview.pdf",
	fileSizeBytes: "PDF Document",
	uploadLocation: "/public/documents/bacon-legal-recruiting-overview.pdf"
};
function InquiryForm() {
	const [formSubmitted, setFormSubmitted] = (0, import_react.useState)(false);
	const [inquiryType, setInquiryType] = (0, import_react.useState)("Hiring law firm or legal department");
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		details: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card p-8 sm:p-10 border border-border shadow-md rounded-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-medium text-ink",
				children: "Send an Inquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "All communications are strictly confidential."
			}),
			formSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-sm border border-brass/50 bg-secondary/50 p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-10 w-10 text-brass" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-4 text-xl font-normal text-ink",
						children: "Inquiry Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
						children: "Thank you for reaching out to Bacon Legal Recruiting. We will review your mandate or inquiry and respond promptly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setFormSubmitted(false);
							setFormData({
								name: "",
								email: "",
								phone: "",
								details: ""
							});
						},
						className: "mt-6 border border-ink px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors cursor-pointer",
						children: "Send Another Message"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				id: "contact-form",
				className: "mt-8 grid gap-5",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: "Your full name",
							value: formData.name,
							onChange: (e) => setFormData({
								...formData,
								name: e.target.value
							}),
							className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								placeholder: "name@firm.com",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Phone (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								placeholder: "Direct contact number",
								value: formData.phone,
								onChange: (e) => setFormData({
									...formData,
									phone: e.target.value
								}),
								className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "I am a"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: inquiryType,
							onChange: (e) => setInquiryType(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Hiring law firm or legal department",
									children: "Hiring law firm or legal department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Partner or associate seeking lateral opportunity",
									children: "Partner or associate seeking lateral opportunity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "In-house counsel recruitment",
									children: "In-house counsel recruitment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "State or Federal Lobbyist recruitment",
									children: "State or Federal Lobbyist recruitment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "General inquiry",
									children: "General inquiry"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							required: true,
							placeholder: "Please share details of your search requirements, timing, or practice area background...",
							value: formData.details,
							onChange: (e) => setFormData({
								...formData,
								details: e.target.value
							}),
							className: "mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							id: "contact-submit-button",
							className: "bg-ink px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm cursor-pointer",
							children: "Send Inquiry"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 pt-6 border-t border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-secondary/40 p-4 border border-border rounded-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-secondary text-brass border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-brass",
								children: "Document Download"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-medium text-ink mt-0.5",
								children: INQUIRY_DOWNLOAD_CONFIG.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: INQUIRY_DOWNLOAD_CONFIG.description
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							const link = document.createElement("a");
							link.href = INQUIRY_DOWNLOAD_CONFIG.filePath;
							link.download = INQUIRY_DOWNLOAD_CONFIG.fileName;
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						},
						id: "inquiry-download-button",
						className: "inline-flex items-center justify-center gap-2 bg-brass px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm shrink-0 cursor-pointer",
						title: "Download firm overview (PDF)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download PDF"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[0.68rem] text-muted-foreground italic",
					children: [
						"Client note: To upload or update this document, replace the PDF file located in",
						" ",
						INQUIRY_DOWNLOAD_CONFIG.uploadLocation,
						"."
					]
				})]
			})
		]
	});
}
//#endregion
export { InquiryForm as t };
