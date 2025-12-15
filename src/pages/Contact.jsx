
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     try {
//       const res = await fetch(import.meta.env.VITE_API_URL + "/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (data.success) {
//         setStatus("Message sent!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send");
//       }
//     } catch (err) {
//       setStatus("Server error");
//     }
//   };

//   return (
//     <div className="py-20 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Contact</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="w-full border p-2" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
//         <input className="w-full border p-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
//         <textarea className="w-full border p-2" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}/>
//         <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
//       </form>
//       {status && <p className="mt-4">{status}</p>}
//     </div>
//   );
// }





import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + "/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (err) {
      setStatus("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-indigo-600 to-purple-600
            bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project, opportunity, or just want to say hello?  
            Drop a message — I’ll respond quickly.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto
          bg-white/80 backdrop-blur
          border border-gray-200
          rounded-3xl shadow-xl p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-4 rounded-xl border
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {/* EMAIL */}
            <input
              required
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-4 rounded-xl border
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              required
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-4 rounded-xl border
              focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full flex items-center justify-center gap-2
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700
              text-white font-semibold text-lg
              px-6 py-4 rounded-xl
              shadow-lg hover:shadow-2xl
              transition-all duration-300 disabled:opacity-60"
            >
              <Send size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* STATUS */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-6 text-center font-medium ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("❌")
                  ? "text-red-600"
                  : "text-indigo-600"
              }`}
            >
              {status}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
