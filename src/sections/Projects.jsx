

// import { useEffect, useState } from "react";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [selected, setSelected] = useState(null); // modal data

//   const loadProjects = async () => {
//     const res = await fetch(import.meta.env.VITE_API_URL + "/projects");
//     const data = await res.json();
//     setProjects(data);
//   };

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   return (
//     <div className="p-10 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((p) => (
//           <div key={p._id} className="border p-4 rounded-lg shadow bg-white">
            
//             {p.image && (
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/uploads/${p.image}`}
//                 className="w-full h-40 object-cover rounded"
//                 alt="project"
//               />
//             )}

//             <h3 className="text-xl font-bold mt-3">{p.title}</h3>
//             <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => setSelected(p)}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//               >
//                 View Details
//               </button>

//               <div className="flex gap-3">
//                 {p.github && (
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     className="text-indigo-600 underline"
//                   >
//                     GitHub
//                   </a>
//                 )}

//                 {p.live && (
//                   <a
//                     href={p.live}
//                     target="_blank"
//                     className="text-green-600 underline"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ---------- MODAL ---------- */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white w-[90%] md:w-[600px] p-6 rounded-lg shadow-lg relative animate-fadeIn">
            
//             {/* Close Button */}
//             <button
//               onClick={() => setSelected(null)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* Title */}
//             <h2 className="text-2xl font-bold">{selected.title}</h2>

//             {/* Image */}
//             {selected.image && (
//               <img
//                 src={`${import.meta.env.VITE_API_URL}/uploads/${selected.image}`}
//                 className="w-full h-56 object-cover rounded mt-4"
//                 alt="project"
//               />
//             )}

//             {/* Description */}
//             <p className="text-gray-700 mt-4">{selected.description}</p>

//             {/* Tech */}
//             <p className="mt-4">
//               <strong>Tech Used:</strong>{" "}
//               {Array.isArray(selected.tech)
//                 ? selected.tech.join(", ")
//                 : "Not Provided"}
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-4 mt-5">
//               {selected.github && (
//                 <a
//                   href={selected.github}
//                   target="_blank"
//                   className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
//                 >
//                   GitHub
//                 </a>
//               )}

//               {selected.live && (
//                 <a
//                   href={selected.live}
//                   target="_blank"
//                   className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                 >
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  const loadProjects = async () => {
    const res = await fetch(API + "/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Some of the real-world applications I have designed & developed.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition"
            >
              {/* IMAGE */}
              {p.image && (
                <img
                  src={`${API}/uploads/${p.image}`}
                  className="w-full h-44 object-cover"
                  alt="project"
                />
              )}

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>

                <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                  {p.description}
                </p>

                {/* TECH */}
                {Array.isArray(p.tech) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* ACTIONS */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelected(p)}
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    View Details
                  </button>

                  <div className="flex gap-4 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        className="flex items-center gap-1 text-gray-700 hover:text-black"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        className="flex items-center gap-1 text-green-600 hover:text-green-700"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              {/* IMAGE */}
              {selected.image && (
                <img
                  src={`${API}/uploads/${selected.image}`}
                  className="w-full h-64 object-cover"
                  alt="project"
                />
              )}

              {/* BODY */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {selected.title}
                </h3>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  {selected.description}
                </p>

                {/* TECH */}
                {Array.isArray(selected.tech) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* LINKS */}
                <div className="mt-6 flex gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-black transition"
                    >
                      GitHub
                    </a>
                  )}

                  {selected.live && (
                    <a
                      href={selected.live}
                      target="_blank"
                      className="px-5 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
