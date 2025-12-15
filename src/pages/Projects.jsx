
// import { useEffect, useState } from "react";
// import { API_URL } from "../config";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Layers } from "lucide-react";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   const getProjects = async () => {
//     try {
//       const res = await fetch(`${API_URL}/api/projects`);
//       const data = await res.json();
//       setProjects(data);
//     } catch (error) {
//       console.log("Project Fetch Error:", error);
//     }
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-100">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-14">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             My Projects
//           </h1>
//           <p className="mt-3 text-gray-600 text-lg">
//             A collection of applications I have designed & developed.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((p, i) => (
//             <motion.div
//               key={p._id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
//             >
//               {/* Header */}
//               <div className="p-5 border-b bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
//                 <Layers className="text-indigo-600 w-6 h-6" />
//                 <h2 className="text-xl font-semibold">{p.title}</h2>
//               </div>

//               {/* Body */}
//               <div className="p-6">
//                 <p className="text-gray-700 leading-relaxed">{p.description}</p>

//                 {/* Tech Stack */}
//                 {p.tech && p.tech.length > 0 && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.tech.map((t, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Buttons */}
//                 <div className="mt-6 flex gap-4">

//                   {p.github && (
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-900 duration-200"
//                     >
//                       <Github size={18} />
//                       GitHub
//                     </a>
//                   )}

//                   {p.live && (
//                     <a
//                       href={p.live}
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 duration-200"
//                     >
//                       <ExternalLink size={18} />
//                       Live Demo
//                     </a>
//                   )}

//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.log("Project Fetch Error:", err));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-indigo-600 to-purple-600
            bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications crafted with performance, scalability
            and clean architecture in mind.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p._id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative bg-white rounded-3xl overflow-hidden
              border border-gray-100 shadow-lg
              hover:shadow-2xl hover:-translate-y-3
              transition-all duration-300"
            >

              {/* IMAGE */}
              {p.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${API_URL}/uploads/${p.image}`}
                    alt={p.title}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              )}

              {/* CARD BODY */}
              <div className="p-6 flex flex-col h-full">

                {/* TITLE */}
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="text-indigo-600 w-5 h-5" />
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* TECH STACK */}
                {p.tech?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium
                        rounded-full bg-indigo-50 text-indigo-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* ACTIONS */}
                <div className="mt-6 flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm
                      bg-gray-900 text-white rounded-xl
                      hover:bg-gray-800 transition"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm
                      bg-indigo-600 text-white rounded-xl
                      hover:bg-indigo-700 transition"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
