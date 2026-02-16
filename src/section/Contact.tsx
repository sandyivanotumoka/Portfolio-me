import { useRef, useState } from "react";
import Container from "../components/Container";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      toast.success("Message sent! I'll reply soon ✨");
      formRef.current.reset();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-32 border-t border-[var(--border-soft)] flex items-center bg-[var(--bg-soft)] transition-colors duration-300"
    >
      <Container>
        <div className="max-w-2xl w-full surface surface-glow p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Contact
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-12 space-y-6 max-w-xl"
          >
            {/* anti spam bot */}
            <input type="text" name="honeypot" className="hidden" />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg
              bg-[var(--bg-main)]
              border border-[var(--border-soft)]
              text-[var(--text-main)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none focus:ring-2 focus:ring-sky-400/40 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg
              bg-[var(--bg-main)]
              border border-[var(--border-soft)]
              text-[var(--text-main)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-4 rounded-lg resize-none
              bg-[var(--bg-main)]
              border border-[var(--border-soft)]
              text-[var(--text-main)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none focus:ring-2 focus:ring-pink-400/40 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-lg font-medium text-white
              bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500
              hover:scale-105 active:scale-95 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
