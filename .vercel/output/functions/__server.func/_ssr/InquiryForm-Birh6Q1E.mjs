import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { h as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InquiryForm-Birh6Q1E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/InquiryForm.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-card p-8 sm:p-10 border border-border shadow-md rounded-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-xl font-medium text-ink",
				children: "Send an Inquiry"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "All communications are strictly confidential."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			formSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 rounded-sm border border-brass/50 bg-secondary/50 p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "mx-auto h-10 w-10 text-brass" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
						className: "mt-4 text-xl font-normal text-ink",
						children: "Inquiry Received"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
						children: "Thank you for reaching out to Bacon Legal Recruiting. We will review your mandate or inquiry and respond promptly."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				id: "contact-form",
				className: "mt-8 grid gap-5",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							placeholder: "Your full name",
							value: formData.name,
							onChange: (e) => setFormData({
								...formData,
								name: e.target.value
							}),
							className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Email"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								required: true,
								type: "email",
								placeholder: "name@firm.com",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Phone (Optional)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "tel",
								placeholder: "Direct contact number",
								value: formData.phone,
								onChange: (e) => setFormData({
									...formData,
									phone: e.target.value
								}),
								className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "eyebrow text-muted-foreground",
							children: "I am a"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							value: inquiryType,
							onChange: (e) => setInquiryType(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "Hiring law firm or legal department",
									children: "Hiring law firm or legal department"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "Partner or associate seeking lateral opportunity",
									children: "Partner or associate seeking lateral opportunity"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "General inquiry",
									children: "General inquiry"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Details"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							rows: 4,
							required: true,
							placeholder: "Please share details of your search requirements, timing, or practice area background...",
							value: formData.details,
							onChange: (e) => setFormData({
								...formData,
								details: e.target.value
							}),
							className: "mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "submit",
						id: "contact-submit-button",
						className: "mt-4 bg-ink px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm cursor-pointer",
						children: "Send Inquiry"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
//#endregion
export { InquiryForm as t };
