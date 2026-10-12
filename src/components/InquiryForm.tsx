import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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

          <button
            type="submit"
            id="contact-submit-button"
            className="mt-4 bg-ink px-8 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-ink-foreground transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </div>
  );
}
