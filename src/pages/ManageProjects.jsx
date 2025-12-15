
// import { useEffect, useState } from "react";
// import { Trash2, PlusCircle, Pencil, X } from "lucide-react";
// import { motion } from "framer-motion";
// import { API_URL } from "../config";

// export default function ManageProjects() {
//   const [projects, setProjects] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     tech: "",
//     github: "",
//     live: "",
//     image: null,
//   });

//   const [preview, setPreview] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editingProjectId, setEditingProjectId] = useState(null);

//   const token = localStorage.getItem("token");

//   /* ---------------- LOAD PROJECTS ---------------- */
//   const load = async () => {
//     try {
//       const res = await fetch(`${API_URL}/api/projects`);
//       const data = await res.json();
//       setProjects(data);
//     } catch (err) {
//       console.log("Load Error:", err);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   /* ---------------- IMAGE HANDLER ---------------- */
//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     setForm({ ...form, image: file });
//     setPreview(URL.createObjectURL(file));
//   };

//   /* ---------------- ADD PROJECT ---------------- */
//   const addProject = async () => {
//     try {
//       const fd = new FormData();
//       Object.keys(form).forEach((key) => {
//         if (form[key]) fd.append(key, form[key]);
//       });

//       await fetch(`${API_URL}/api/projects`, {
//         method: "POST",
//         headers: { Authorization: "Bearer " + token },
//         body: fd,
//       });

//       resetForm();
//       load();
//     } catch (err) {
//       console.log("Add Error:", err);
//     }
//   };

//   /* ---------------- RESET FORM ---------------- */
//   const resetForm = () => {
//     setForm({
//       title: "",
//       description: "",
//       tech: "",
//       github: "",
//       live: "",
//       image: null,
//     });
//     setPreview(null);
//     setEditMode(false);
//     setEditingProjectId(null);
//   };

//   /* ---------------- OPEN EDIT ---------------- */
//   const openEdit = (p) => {
//     setEditMode(true);
//     setEditingProjectId(p._id);

//     setForm({
//       title: p.title || "",
//       description: p.description || "",
//       tech: Array.isArray(p.tech) ? p.tech.join(", ") : "",
//       github: p.github || "",
//       live: p.live || "",
//       image: null,
//     });

//     setPreview(`${API_URL}/uploads/${p.image}`);
//   };

//   /* ---------------- UPDATE PROJECT ---------------- */
//   const updateProject = async () => {
//     try {
//       const fd = new FormData();
//       fd.append("title", form.title);
//       fd.append("description", form.description);
//       fd.append("tech", form.tech);
//       fd.append("github", form.github);
//       fd.append("live", form.live);

//       if (form.image) fd.append("image", form.image);

//       await fetch(`${API_URL}/api/projects/${editingProjectId}`, {
//         method: "PUT",
//         headers: { Authorization: "Bearer " + token },
//         body: fd,
//       });

//       resetForm();
//       load();
//     } catch (err) {
//       console.log("Update Error:", err);
//     }
//   };

//   /* ---------------- DELETE PROJECT ---------------- */
//   const deleteProject = async (id) => {
//     try {
//       await fetch(`${API_URL}/api/projects/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: "Bearer " + token },
//       });
//       load();
//     } catch (err) {
//       console.log("Delete Error:", err);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-4xl font-bold mb-8">Manage Projects</h1>

//       {!editMode && (
//         <motion.div className="bg-white p-8 rounded-2xl shadow mb-12">
//           <h2 className="text-2xl font-semibold mb-6 flex gap-2">
//             <PlusCircle /> Add New Project
//           </h2>

//           <FormUI
//             form={form}
//             setForm={setForm}
//             handleImage={handleImage}
//             preview={preview}
//           />

//           <button
//             onClick={addProject}
//             className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl"
//           >
//             Add Project
//           </button>
//         </motion.div>
//       )}

//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((p) => (
//           <div key={p._id} className="bg-white p-5 rounded-2xl shadow flex gap-4">
//             <img
//               src={`${API_URL}/uploads/${p.image}`}
//               className="w-32 h-32 object-cover rounded-xl"
//             />

//             <div className="flex-1">
//               <h3 className="font-bold">{p.title}</h3>
//               <p className="text-sm">{p.description}</p>

//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={() => openEdit(p)}
//                   className="px-4 py-2 bg-yellow-500 text-white rounded-xl"
//                 >
//                   <Pencil /> Edit
//                 </button>

//                 <button
//                   onClick={() => deleteProject(p._id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-xl"
//                 >
//                   <Trash2 /> Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {editMode && (
//         <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-2xl w-full max-w-2xl">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-2xl font-bold">Edit Project</h2>
//               <button onClick={resetForm}><X /></button>
//             </div>

//             <FormUI
//               form={form}
//               setForm={setForm}
//               handleImage={handleImage}
//               preview={preview}
//             />

//             <button
//               onClick={updateProject}
//               className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl"
//             >
//               Update Project
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- FORM UI ---------------- */
// function FormUI({ form, setForm, handleImage, preview }) {
//   return (
//     <>
//       <input
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />

//       <input type="file" accept="image/*" onChange={handleImage} />

//       {preview && <img src={preview} className="w-40 h-40" />}

//       <input
//         placeholder="GitHub"
//         value={form.github}
//         onChange={(e) => setForm({ ...form, github: e.target.value })}
//       />

//       <input
//         placeholder="Live"
//         value={form.live}
//         onChange={(e) => setForm({ ...form, live: e.target.value })}
//       />

//       <input
//         placeholder="Tech (comma separated)"
//         value={form.tech}
//         onChange={(e) => setForm({ ...form, tech: e.target.value })}
//       />

//       <textarea
//         placeholder="Description"
//         value={form.description}
//         onChange={(e) => setForm({ ...form, description: e.target.value })}
//       />
//     </>
//   );
// }





import { useEffect, useState } from "react";
import { Trash2, PlusCircle, Pencil, X, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_URL } from "../config";

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

  const token = localStorage.getItem("token");

  /* ---------------- LOAD ---------------- */
  const load = async () => {
    const res = await fetch(`${API_URL}/api/projects`);
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => { load(); }, []);

  /* ---------------- IMAGE ---------------- */
  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- RESET ---------------- */
  const resetForm = () => {
    setForm({ title:"", description:"", tech:"", github:"", live:"", image:null });
    setPreview(null);
    setEditMode(false);
    setEditingProjectId(null);
  };

  /* ---------------- ADD ---------------- */
  const addProject = async () => {
    const fd = new FormData();
    Object.keys(form).forEach(k => form[k] && fd.append(k, form[k]));

    await fetch(`${API_URL}/api/projects`, {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      body: fd,
    });

    resetForm();
    load();
  };

  /* ---------------- EDIT ---------------- */
  const openEdit = (p) => {
    setEditMode(true);
    setEditingProjectId(p._id);

    setForm({
      title: p.title || "",
      description: p.description || "",
      tech: Array.isArray(p.tech) ? p.tech.join(", ") : "",
      github: p.github || "",
      live: p.live || "",
      image: null,
    });

    setPreview(`${API_URL}/uploads/${p.image}`);
  };

  /* ---------------- UPDATE ---------------- */
  const updateProject = async () => {
    const fd = new FormData();
    Object.entries(form).forEach(([k,v]) => v && fd.append(k,v));

    await fetch(`${API_URL}/api/projects/${editingProjectId}`, {
      method: "PUT",
      headers: { Authorization: "Bearer " + token },
      body: fd,
    });

    resetForm();
    load();
  };

  /* ---------------- DELETE ---------------- */
  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await fetch(`${API_URL}/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    load();
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        🚀 Manage Projects
      </h1>

      {/* ADD CARD */}
      {!editMode && (
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          className="bg-white rounded-3xl shadow-xl border p-8 mb-14"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-indigo-700">
            <PlusCircle /> Add New Project
          </h2>

          <FormUI {...{ form, setForm, handleImage, preview }} />

          <button
            onClick={addProject}
            className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg"
          >
            Add Project
          </button>
        </motion.div>
      )}

      {/* PROJECT LIST */}
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map(p => (
          <motion.div
            key={p._id}
            whileHover={{ y:-6 }}
            className="bg-white rounded-2xl shadow-lg border overflow-hidden"
          >
            <img
              src={`${API_URL}/uploads/${p.image}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.description}</p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => openEdit(p)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl"
                >
                  <Pencil size={18}/> Edit
                </button>

                <button
                  onClick={() => deleteProject(p._id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl"
                >
                  <Trash2 size={18}/> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EDIT MODAL */}
      <AnimatePresence>
        {editMode && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          >
            <motion.div
              initial={{ scale:0.9 }}
              animate={{ scale:1 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
                  <Pencil /> Edit Project
                </h2>
                <button onClick={resetForm}>
                  <X className="text-gray-500 hover:text-gray-700"/>
                </button>
              </div>

              <FormUI {...{ form, setForm, handleImage, preview }} />

              <button
                onClick={updateProject}
                className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium shadow-lg"
              >
                Update Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- FORM UI ---------------- */
function FormUI({ form, setForm, handleImage, preview }) {
  return (
    <div className="grid gap-4">
      <input className="input" placeholder="Project Title"
        value={form.title}
        onChange={e => setForm({ ...form, title:e.target.value })} />

      <textarea className="input h-24" placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description:e.target.value })} />

      <input className="input" placeholder="Tech (React, Node, MongoDB)"
        value={form.tech}
        onChange={e => setForm({ ...form, tech:e.target.value })} />

      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" placeholder="GitHub URL"
          value={form.github}
          onChange={e => setForm({ ...form, github:e.target.value })} />

        <input className="input" placeholder="Live URL"
          value={form.live}
          onChange={e => setForm({ ...form, live:e.target.value })} />
      </div>

      <label className="flex items-center gap-3 cursor-pointer text-indigo-600 font-medium">
        <ImageIcon />
        Upload Image
        <input type="file" accept="image/*" hidden onChange={handleImage} />
      </label>

      {preview && (
        <img src={preview} className="w-40 h-40 object-cover rounded-xl shadow" />
      )}
    </div>
  );
}
