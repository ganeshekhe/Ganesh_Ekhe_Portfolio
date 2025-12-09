

import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null); // modal data

  const loadProjects = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="border p-4 rounded-lg shadow bg-white">
            
            {p.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${p.image}`}
                className="w-full h-40 object-cover rounded"
                alt="project"
              />
            )}

            <h3 className="text-xl font-bold mt-3">{p.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setSelected(p)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                View Details
              </button>

              <div className="flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    className="text-indigo-600 underline"
                  >
                    GitHub
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="text-green-600 underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] p-6 rounded-lg shadow-lg relative animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold">{selected.title}</h2>

            {/* Image */}
            {selected.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${selected.image}`}
                className="w-full h-56 object-cover rounded mt-4"
                alt="project"
              />
            )}

            {/* Description */}
            <p className="text-gray-700 mt-4">{selected.description}</p>

            {/* Tech */}
            <p className="mt-4">
              <strong>Tech Used:</strong>{" "}
              {Array.isArray(selected.tech)
                ? selected.tech.join(", ")
                : "Not Provided"}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                  GitHub
                </a>
              )}

              {selected.live && (
                <a
                  href={selected.live}
                  target="_blank"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
