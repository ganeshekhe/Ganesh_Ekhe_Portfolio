



import { useEffect, useState } from "react";
import { Trash2, PlusCircle, Pencil, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [editMode, setEditMode] = useState(false);  
  const [editingProjectId, setEditingProjectId] = useState(null);

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const load = async () => {
    try {
      const res = await fetch(`${API}/api/projects`);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.log("Load Error:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const addProject = async () => {
    try {
      const fd = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) fd.append(key, form[key]);
      });

      await fetch(`${API}/api/projects`, {

        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body: fd,
      });

      resetForm();
      load();
    } catch (err) {
      console.log("Add Error:", err);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      tech: "",
      github: "",
      live: "",
      image: null,
    });
    setPreview(null);
    setEditMode(false);
    setEditingProjectId(null);
  };

  // ⭐ Open Edit Modal
  const openEdit = (p) => {
    setEditMode(true);
    setEditingProjectId(p._id);

    setForm({
      title: p.title,
      description: p.description,
      tech: p.tech,
      github: p.github,
      live: p.live,
      image: null,
    });

    setPreview(`${API}/uploads/${p.image}`);
  };

  // ⭐ Update Project
  const updateProject = async () => {
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("tech", form.tech);
      fd.append("github", form.github);
      fd.append("live", form.live);

      if (form.image) fd.append("image", form.image);

      await fetch(`${API}/projects/${editingProjectId}`, {
        method: "PUT",
        headers: { Authorization: "Bearer " + token },
        body: fd,
      });

      resetForm();
      load();
    } catch (err) {
      console.log("Update Error:", err);
    }
  };

  const deleteProject = async (id) => {
    try {
     await fetch(`${API}/api/projects/${id}`, {

        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });

      load();
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8 text-gray-800 tracking-wide">
        Manage Projects
      </h1>

      {/* ADD CARD */}
      {!editMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-indigo-700">
            <PlusCircle size={24} /> Add New Project
          </h2>

          <FormUI
            form={form}
            setForm={setForm}
            handleImage={handleImage}
            preview={preview}
          />

          <button
            onClick={addProject}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Add Project
          </button>
        </motion.div>
      )}

      {/* PROJECT LIST */}
      <h2 className="text-2xl font-semibold mb-4">All Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg border border-gray-200 p-5 rounded-2xl flex gap-4"
          >
            <img
              src={`${API}/uploads/${p.image}`}
              className="w-32 h-32 object-cover rounded-xl shadow"
            />

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.description}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => openEdit(p)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-xl flex items-center gap-2 hover:bg-yellow-600"
                >
                  <Pencil size={18} /> Edit
                </button>

                <button
                  onClick={() => deleteProject(p._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl flex items-center gap-2 hover:bg-red-700"
                >
                  <Trash2 size={18} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ⭐ EDIT MODAL ⭐ */}
      {editMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
          >
            <div className="flex justify-between mb-3">
              <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
                <Pencil size={24} /> Edit Project
              </h2>

              <button onClick={resetForm}>
                <X size={28} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <FormUI
              form={form}
              setForm={setForm}
              handleImage={handleImage}
              preview={preview}
            />

            <button
              onClick={updateProject}
              className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-xl shadow hover:bg-green-700 transition"
            >
              Update Project
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

/* ---------------- FORM UI COMPONENT ---------------- */
function FormUI({ form, setForm, handleImage, preview }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="p-3 rounded-xl border bg-gray-50 cursor-pointer"
        />

        {preview && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={preview}
            className="w-40 h-40 object-cover rounded-xl shadow-md border"
          />
        )}

        <input
          className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="GitHub Link"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />

        <input
          className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Live Link"
          value={form.live}
          onChange={(e) => setForm({ ...form, live: e.target.value })}
        />

        <input
          className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Tech (comma separated)"
          value={form.tech}
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
        />
      </div>

      <textarea
        className="p-3 mt-4 w-full rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
        placeholder="Description"
        rows="3"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      ></textarea>
    </>
  );
}
