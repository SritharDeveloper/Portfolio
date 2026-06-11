import { useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { sendContact } from "../api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContact(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-slate-200"
    >      <div className="max-w-5xl mx-auto">
        <p className="section-label">Contact</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="font-serif text-3xl font-medium mb-4">
              Let's build something.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Open to full-time roles and freelance projects. Drop me a message
              and I'll get back to you within a day.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/SritharDeveloper?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Github size={16} /> github.com/SritharDeveloper
              </a>
              <a
                href="https://www.linkedin.com/in/srithar-s-b64159302/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={16} /> linkedin.com/in/srithar-s-b64159302
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="input-field resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send size={14} />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-400 text-center">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
