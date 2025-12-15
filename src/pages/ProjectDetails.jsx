
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { API_URL } from "../config";
const API_URL = import.meta.env.VITE_API_URL;

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_URL}/projects/${id}`);
        const data = await res.json();
        setProject(data); // Correct: backend returns direct object
      } catch (err) {
        console.log("Project load error:", err);
      }
    };
    load();
  }, [id]);

  if (!project) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <p className="text-gray-700 mt-4">{project.description}</p>

      <div className="mt-4 flex gap-2">
        {project.tech?.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          className="block mt-4 text-blue-600 underline"
          target="_blank"
        >
          Github Repo
        </a>
      )}

      {project.live && (
        <a
          href={project.live}
          className="block text-green-600 underline"
          target="_blank"
        >
          Live Demo
        </a>
      )}

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mt-6 rounded shadow"
        />
      )}
    </div>
  );
}
