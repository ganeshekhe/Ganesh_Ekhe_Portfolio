
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // const getProjects = async () => {
  //   try {
  //     const res = await fetch(`${API_URL}/projects`);
  //     const data = await res.json();
  //     setProjects(data);
  //   } catch (error) {
  //     console.log("Project Fetch Error:", error);
  //   }
  // };
  const getProjects = async () => {
  try {
    const res = await fetch(`${API_URL}/api/projects`);
    const data = await res.json();
    setProjects(data);
  } catch (error) {
    console.log("Project Fetch Error:", error);
  }
};


  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            A collection of applications I have designed & developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              {/* Header */}
              <div className="p-5 border-b bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
                <Layers className="text-indigo-600 w-6 h-6" />
                <h2 className="text-xl font-semibold">{p.title}</h2>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{p.description}</p>

                {/* Tech Stack */}
                {p.tech && p.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex gap-4">

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-900 duration-200"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// import { useEffect, useState } from "react";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [selected, setSelected] = useState(null);

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

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((p) => (
//           <div
//             key={p._id}
//             className="border p-4 rounded-lg shadow bg-white hover:shadow-lg transition"
//           >
//             <img
//               src={`${import.meta.env.VITE_API_URL}/uploads/${p.image}`}
//               className="w-full h-40 object-cover rounded"
//             />

//             <h3 className="text-xl font-bold mt-3">{p.title}</h3>
//             <p className="text-gray-600 mt-2">{p.description}</p>

//             <p className="mt-2 text-sm text-gray-500">
//               <strong>Tech:</strong> {p.tech.join(", ")}
//             </p>

//             <div className="flex gap-3 mt-4">
//               <a
//                 href={p.github}
//                 target="_blank"
//                 className="text-indigo-600 underline"
//               >
//                 GitHub
//               </a>

//               <a
//                 href={p.live}
//                 target="_blank"
//                 className="text-green-600 underline"
//               >
//                 Live Demo
//               </a>
//             </div>

//             {/* View Details Button */}
//             <button
//               onClick={() => setSelected(p)}
//               className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selected && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4"
//           onClick={() => setSelected(null)}
//         >
//           <div
//             className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
//             <img
//               src={`${import.meta.env.VITE_API_URL}/uploads/${selected.image}`}
//               className="w-full h-56 object-cover rounded"
//             />

//             <p className="mt-3 text-gray-700">{selected.description}</p>

//             <p className="mt-3 text-gray-600">
//               <strong>Technologies:</strong> {selected.tech.join(", ")}
//             </p>

//             <div className="flex gap-4 mt-4">
//               <a
//                 href={selected.github}
//                 target="_blank"
//                 className="px-4 py-2 bg-gray-800 text-white rounded"
//               >
//                 GitHub
//               </a>

//               <a
//                 href={selected.live}
//                 target="_blank"
//                 className="px-4 py-2 bg-green-600 text-white rounded"
//               >
//                 Live Demo
//               </a>
//             </div>

//             <button
//               className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={() => setSelected(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
