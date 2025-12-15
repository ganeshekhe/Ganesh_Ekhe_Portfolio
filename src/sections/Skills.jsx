
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { motion } from "framer-motion";

// Lucide icons (fallback)
import * as LucideIcons from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  const load = async () => {
    try {
      const res = await fetch(`${API_URL}/api/skills`)
;
      const data = await res.json();
      setSkills(data);
    } catch (err) {
      console.log("Error loading skills:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!skills || skills.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-xl text-gray-500">Loading skills...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            A blend of technologies, tools and frameworks I use to build clean, scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => {
            const IconComponent = LucideIcons[s.icon] || LucideIcons["Code2"];

            const isImage =
              s.icon &&
              (s.icon.endsWith(".png") ||
                s.icon.endsWith(".jpg") ||
                s.icon.endsWith(".jpeg") ||
                s.icon.endsWith(".webp") ||
                s.icon.endsWith(".svg"));

            return (
              <motion.div
                key={s._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="
                  p-6 bg-white shadow-lg rounded-2xl border border-gray-100 
                  hover:shadow-2xl hover:-translate-y-2 
                  duration-300 cursor-pointer relative overflow-hidden
                "
              >

                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl transition"></div>

                {/* Icon + Title */}
                <div className="flex items-center gap-4 relative z-10">

                  {/* ICON (FILE or LUCIDE dynamic) */}
                  <div className="bg-indigo-100 p-3 rounded-xl flex items-center justify-center w-12 h-12">
                    {isImage ? (
                      <img
                        src={`${API_URL}/uploads/${s.icon}`}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <IconComponent className="text-indigo-600 w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>

                    <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded">
                      {s.level}% proficiency
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 h-2 rounded-full overflow-hidden relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  ></motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
