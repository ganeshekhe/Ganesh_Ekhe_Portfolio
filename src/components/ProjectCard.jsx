
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Layers } from "lucide-react";

// export default function ProjectCard({ p }) {
//   const API = import.meta.env.VITE_API_URL;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
//     >
//       {/* Image Section */}
//       {p.image && (
//         <img
//           src={`${API}/uploads/${p.image}`}
//           alt={p.title}
//           className="w-full h-48 object-cover"
//         />
//       )}

//       {/* Header */}
//       <div className="p-5 border-b bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
//         <Layers className="text-indigo-600 w-6 h-6" />
//         <h2 className="text-lg font-semibold">{p.title}</h2>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <p className="text-gray-700 text-sm leading-relaxed">{p.description}</p>

//         {/* Techs */}
//         {p.tech && (
//           <div className="flex flex-wrap mt-4 gap-2">
//             {p.tech.map((t, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="mt-6 flex gap-4">
//           {p.github && (
//             <a
//               href={p.github}
//               target="_blank"
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-black duration-200"
//             >
//               <Github size={18} />
//               GitHub
//             </a>
//           )}

//           {p.live && (
//             <a
//               href={p.live}
//               target="_blank"
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 duration-200"
//             >
//               <ExternalLink size={18} />
//               Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { API_URL } from "../config";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
    >
      {/* Image Section */}
      {p?.image && (
        <img
          src={`${API_URL}/uploads/${p.image}`}
          alt={p.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Header */}
      <div className="p-5 border-b bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
        <Layers className="text-indigo-600 w-6 h-6" />
        <h2 className="text-lg font-semibold">{p?.title}</h2>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          {p?.description}
        </p>

        {/* Tech Stack */}
        {Array.isArray(p?.tech) && p.tech.length > 0 && (
          <div className="flex flex-wrap mt-4 gap-2">
            {p.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {p?.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-black duration-200"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

          {p?.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 duration-200"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
