import { ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const fade = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length < 2) e.name = "Name too short";

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";

    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message too short";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setForm({ name: "", email: "", message: "" });
      setToast("Message sent successfully ✓");
    } catch {
      setToast("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(39,203,203,0.08),transparent_40%)]" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fade} initial="hidden" whileInView="show">
          <h2 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400">
            Let’s work together
          </h2>

          <p className="mt-6 text-gray-400 max-w-md text-lg">
            Have an opportunity or project in mind?
            Send a quick message - I usually respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <motion.a
              whileHover={{ x: 6 }}
              href="https://github.com/sonukumar864"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaGithub className="text-2xl" />
              <div>
                <p className="font-medium text-gray-200">GitHub</p>
                <p className="text-sm text-gray-400">Explore my projects</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href="http://www.linkedin.com/in/sonu-kumar-5b8722282"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <div>
                <p className="font-medium text-gray-200">LinkedIn</p>
                <p className="text-sm text-gray-400">Let’s connect</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" />
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          variants={fade}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit}
          className="p-8 rounded-3xl border border-gray-800 bg-linear-to-b from-gray-900/60 to-gray-900/30 backdrop-blur-xl space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-200">
            Send a Message
          </h3>

          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500"
            />
            {errors.name && (
              <p className="text-sm text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500"
            />
            {errors.email && (
              <p className="text-sm text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500"
            />
            {errors.message && (
              <p className="text-sm text-red-400 mt-1">{errors.message}</p>
            )}
          </div>

          <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-medium">
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {toast && (
            <p className="text-sm text-center text-gray-300">{toast}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;