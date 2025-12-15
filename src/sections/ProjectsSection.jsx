
// import { useEffect, useState } from "react";
// import ProjectCard from "../components/ProjectCard";

// export default function ProjectsSection() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch(import.meta.env.VITE_API_URL + "/projects")
//       .then(r => r.json())
//       .then(d => setProjects(d));
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             Some of the projects I've worked on recently.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map(p => (
//             <ProjectCard key={p._id} p={p} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { API_URL } from "../config";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Projects fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Some of the projects I've worked on recently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((p) => (
              <ProjectCard key={p._id} p={p} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
