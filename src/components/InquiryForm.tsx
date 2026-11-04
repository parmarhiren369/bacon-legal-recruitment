import { useState } from "react";
import { CheckCircle2, Download, FileText } from "lucide-react";
import { INQUIRY_DOWNLOAD_CONFIG } from "../config/documentConfig";

export function InquiryForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("Hiring law firm or legal department");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-card p-8 sm:p-10 border border-border shadow-md rounded-sm">
      <h3 className="text-xl font-medium text-ink">Send an Inquiry</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        All communications are strictly confidential.
      </p>

      {formSubmitted ? (
        <div className="mt-8 rounded-sm border border-brass/50 bg-secondary/50 p-8 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-brass" />
          <h4 className="mt-4 text-xl font-normal text-ink">Inquiry Received</h4>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Thank you for reaching out to Bacon Legal Recruiting. We will review your mandate or
            inquiry and respond promptly.
          </p>
          <button
            type="button"
            onClick={() => {
              setFormSubmitted(false);
              setFormData({ name: "", email: "", phone: "", details: "" });
            }}
            className="mt-6 border border-ink px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form id="contact-form" className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="eyebrow text-muted-foreground">Name</span>
            <input
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
            />
          </label>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="eyebrow text-muted-foreground">Email</span>
              <input
                required
                type="email"
                placeholder="name@firm.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
              />
            </label>

            <label className="block">
              <span className="eyebrow text-muted-foreground">Phone (Optional)</span>
              <input
                type="tel"
                placeholder="Direct contact number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
              />
            </label>
          </div>

          <label className="block">
            <span className="eyebrow text-muted-foreground">I am a</span>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass cursor-pointer"
            >
              <option value="Hiring law firm or legal department">
                Hiring law firm or legal department
              </option>
              <option value="Partner or associate seeking lateral opportunity">
                Partner or associate seeking lateral opportunity
              </option>
              <option value="In-house counsel recruitment">In-house counsel recruitment</option>
              <option value="State or Federal Lobbyist recruitment">
                State or Federal Lobbyist recruitment
              </option>
              <option value="General inquiry">General inquiry</option>
            </select>
          </label>

          <label className="block">
            <span className="eyebrow text-muted-foreground">Details</span>
            <textarea
              rows={4}
              required
              placeholder="Please share details of your search requirements, timing, or practice area background..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-brass placeholder:text-muted-foreground/50"
            />
          </label>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-2">
            <button
              type="submit"
              id="contact-submit-button"
              className="bg-ink px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      )}

      {/* DOCUMENT DOWNLOAD OPTION */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-secondary/40 p-4 border border-border rounded-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-secondary text-brass border border-border">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="eyebrow text-brass">Document Download</p>
              <h4 className="text-sm font-medium text-ink mt-0.5">
                {INQUIRY_DOWNLOAD_CONFIG.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {INQUIRY_DOWNLOAD_CONFIG.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const link = document.createElement("a");
              link.href = INQUIRY_DOWNLOAD_CONFIG.filePath;
              link.download = INQUIRY_DOWNLOAD_CONFIG.fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            id="inquiry-download-button"
            className="inline-flex items-center justify-center gap-2 bg-brass px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-ink transition-opacity hover:opacity-90 shadow-sm shrink-0 cursor-pointer"
            title="Download firm overview (PDF)"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>
        <p className="mt-2 text-[0.68rem] text-muted-foreground italic">
          Client note: To upload or update this document, replace the PDF file located in{" "}
          {INQUIRY_DOWNLOAD_CONFIG.uploadLocation}.
        </p>
      </div>
    </div>
  );
}
