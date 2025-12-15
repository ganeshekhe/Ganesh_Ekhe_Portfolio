

// import { useEffect, useState } from "react";
// import { API_URL } from "../config";
// import { motion } from "framer-motion";
// import * as Icons from "lucide-react"; // for fallback icons
// import { Code2 } from "lucide-react";

// export default function Skills() {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     // fetch(API_URL + "/skills")
//     + fetch(API_URL + "/api/skills")
//       .then((r) => r.json())
//       .then((d) => setSkills(d))
//       .catch((err) => console.log(err));
//   }, []);

//   if (!skills || skills.length === 0) {
//     return (
//       <section className="py-20 text-center">
//         <h2 className="text-xl text-gray-500">Loading skills...</h2>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-100">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Skills & Technologies
//           </h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             A blend of tools, technologies & frameworks I use to build modern applications.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skills.map((s, i) => {
//             // if icon contains a slash -> it's uploaded path
//             const isImg = s.icon && s.icon.includes("/");
//             const LucideIcon = Icons[s.icon] || Code2;

//             return (
//               <motion.div key={s._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
//                 <div className="flex items-center gap-4">
//                   <div className="bg-indigo-100 p-3 rounded-xl">
//                     {isImg ? (
//                       <img src={`${API_URL}/uploads/${s.icon}`} alt={s.name} className="w-6 h-6 object-contain" />
//                     ) : (
//                       <LucideIcon className="text-indigo-600 w-6 h-6" />
//                     )}
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold">{s.name}</h3>
//                     <p className="text-xs text-gray-500">{s.level}% • proficiency</p>
//                   </div>
//                 </div>

//                 <div className="mt-4 w-full bg-gray-200 h-2 rounded-full">
//                   <div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" style={{ width: `${s.level}%` }} />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
// import { API_URL } from "../config";
const API_URL = import.meta.env.VITE_API_URL;
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Code2 } from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/api/skills")
      .then((r) => r.json())
      .then((d) => setSkills(d))
      .catch((err) => console.log("Skill Fetch Error:", err));
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

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            A blend of tools, technologies & frameworks I use to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => {
            const isImg = s.icon && s.icon.includes("/");
            const LucideIcon = Icons[s.icon] || Code2;

            return (
              <motion.div
                key={s._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    {isImg ? (
                      <img
                        src={`${API_URL}/uploads/${s.icon}`}
                        alt={s.name}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <LucideIcon className="text-indigo-600 w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="text-xs text-gray-500">
                      {s.level}% • proficiency
                    </p>
                  </div>
                </div>

                <div className="mt-4 w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
