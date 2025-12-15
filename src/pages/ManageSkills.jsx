
// import { useEffect, useState } from "react";
// import { API_URL } from "../config";

// export default function ManageSkills() {
//   const [skills, setSkills] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     level: 60,
//     difficulty: 1,
//     category: "",
//     experience: "",
//     usedInProjects: 0,
//     iconFile: null,    // file
//     iconName: "",      // lucide fallback name
//     order: 0,
//   });
//   const [preview, setPreview] = useState(null);
//   const token = localStorage.getItem("token");

//   const loadSkills = async () => {
//     try {
//       const res = await fetch(`${API_URL}/skills`);
//       const data = await res.json();
//       setSkills(data);
//     } catch (err) {
//       console.log("Skill Fetch Error:", err);
//     }
//   };

//   useEffect(() => { loadSkills(); }, []);

//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     setForm({ ...form, iconFile: f });
//     setPreview(f ? URL.createObjectURL(f) : null);
//   };

//   const addSkill = async () => {
//     if (!form.name.trim()) return alert("Name required");
//     if (form.level === "" || form.level === null) return alert("Level required");

//     try {
//       const fd = new FormData();
//       fd.append("name", form.name);
//       fd.append("level", String(form.level));
//       fd.append("difficulty", String(form.difficulty));
//       fd.append("category", form.category);
//       fd.append("experience", form.experience ? `${form.experience} months` : "0 months");
//       fd.append("usedInProjects", String(form.usedInProjects));
//       fd.append("order", String(form.order));
//       if (form.iconFile) fd.append("icon", form.iconFile);
//       else if (form.iconName) fd.append("iconName", form.iconName);

//       const res = await fetch(`${API_URL}/skills`, {
//         method: "POST",
//         headers: { Authorization: "Bearer " + token },
//         body: fd,
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         console.log("Add error:", err);
//         alert(err?.error || "Add failed");
//       } else {
//         setForm({
//           name: "",
//           level: 60,
//           difficulty: 1,
//           category: "",
//           experience: "",
//           usedInProjects: 0,
//           iconFile: null,
//           iconName: "",
//           order: 0,
//         });
//         setPreview(null);
//         loadSkills();
//       }
//     } catch (err) {
//       console.log("Skill Add Error:", err);
//     }
//   };

//   const deleteSkill = async (id) => {
//     if (!confirm("Delete this skill?")) return;
//     try {
//       await fetch(`${API_URL}/skills/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: "Bearer " + token },
//       });
//       loadSkills();
//     } catch (err) {
//       console.log("Skill Delete Error:", err);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>

//       <div className="bg-white p-6 rounded-xl shadow mb-8 border">
//         <h2 className="text-xl mb-4 font-semibold">Add Skill</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input className="border p-2 rounded" placeholder="Skill Name"
//             value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

//           <input type="number" className="border p-2 rounded" placeholder="Level (0-100)"
//             value={form.level} onChange={(e) => setForm({ ...form, level: Number(e.target.value) })} />

//           <input type="number" className="border p-2 rounded" placeholder="Difficulty (1-10)"
//             value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: Number(e.target.value) })} />

//           <input className="border p-2 rounded" placeholder="Category" value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })} />

//           <input type="number" className="border p-2 rounded" placeholder="Experience (months)"
//             value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} />

//           <input type="number" className="border p-2 rounded" placeholder="Used in projects"
//             value={form.usedInProjects} onChange={(e) => setForm({ ...form, usedInProjects: Number(e.target.value) })} />

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">Upload Icon Image (optional)</label>
//             <input type="file" accept="image/*" onChange={handleFile} />
//             {preview && <img src={preview} className="mt-2 w-20 h-20 object-contain rounded" />}
//           </div>

//           <input className="border p-2 rounded" placeholder="Or lucide icon name (Code2)"
//             value={form.iconName} onChange={(e) => setForm({ ...form, iconName: e.target.value })} />

//           <input type="number" className="border p-2 rounded" placeholder="Order"
//             value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} />
//         </div>

//         <button onClick={addSkill}
//           className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded shadow hover:bg-indigo-700">
//           Add Skill
//         </button>
//       </div>

//       <div>
//         <h2 className="text-xl mb-4 font-semibold">All Skills</h2>

//         {skills.length === 0 && <p className="text-gray-500">No Skills Added Yet</p>}

//         {skills.map((s) => (
//           <div key={s._id} className="bg-white p-4 rounded-xl shadow border mb-4 flex justify-between items-center">
//             <div className="flex items-center gap-4">
//               {/* icon: if it's an uploaded image path (contains '/'), show image; else show lucide icon name */}
//               {s.icon && s.icon.includes("/") ? (
//                 <img src={`${API_URL}/uploads/${s.icon}`} alt={s.name} className="w-12 h-12 object-contain rounded" />
//               ) : (
//                 <div className="w-12 h-12 bg-indigo-50 rounded flex items-center justify-center text-indigo-600">
//                   { /* show text fallback if you want, or integrate lucide dynamic icon */ }
//                   <span className="text-sm">{s.icon}</span>
//                 </div>
//               )}

//               <div>
//                 <h3 className="font-semibold text-lg">{s.name}</h3>
//                 <p className="text-gray-600 text-sm">Level: {s.level}% • Difficulty: {s.difficulty}/10</p>
//                 <p className="text-gray-500 text-sm">Category: {s.category} • Experience: {s.experience}</p>
//               </div>
//             </div>

//             <div className="flex gap-2">
//               <button onClick={() => deleteSkill(s._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// // import { API_URL } from "../config";
// const API_URL = import.meta.env.VITE_API_URL;


// export default function ManageSkills() {
//   const [skills, setSkills] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     level: 60,
//     difficulty: 1,
//     category: "",
//     experience: "",
//     usedInProjects: 0,
//     iconFile: null,
//     iconName: "",
//     order: 0,
//   });
//   const [preview, setPreview] = useState(null);
//   const token = localStorage.getItem("token");

//   const loadSkills = async () => {
//     try {
//       const res = await fetch(`${API_URL}/api/skills`);
//       const data = await res.json();
//       setSkills(data);
//     } catch (err) {
//       console.log("Skill Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     loadSkills();
//   }, []);

//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     setForm({ ...form, iconFile: f });
//     setPreview(f ? URL.createObjectURL(f) : null);
//   };

//   const addSkill = async () => {
//     if (!form.name.trim()) return alert("Name required");
//     if (form.level === "" || form.level === null) return alert("Level required");

//     try {
//       const fd = new FormData();
//       fd.append("name", form.name);
//       fd.append("level", String(form.level));
//       fd.append("difficulty", String(form.difficulty));
//       fd.append("category", form.category);
//       fd.append(
//         "experience",
//         form.experience ? `${form.experience} months` : "0 months"
//       );
//       fd.append("usedInProjects", String(form.usedInProjects));
//       fd.append("order", String(form.order));
//       if (form.iconFile) fd.append("icon", form.iconFile);
//       else if (form.iconName) fd.append("iconName", form.iconName);

//       const res = await fetch(`${API_URL}/api/skills`, {
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//         body: fd,
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         console.log("Add error:", err);
//         alert(err?.error || "Add failed");
//       } else {
//         setForm({
//           name: "",
//           level: 60,
//           difficulty: 1,
//           category: "",
//           experience: "",
//           usedInProjects: 0,
//           iconFile: null,
//           iconName: "",
//           order: 0,
//         });
//         setPreview(null);
//         loadSkills();
//       }
//     } catch (err) {
//       console.log("Skill Add Error:", err);
//     }
//   };

//   const deleteSkill = async (id) => {
//     if (!confirm("Delete this skill?")) return;
//     try {
//       await fetch(`${API_URL}/api/skills/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       loadSkills();
//     } catch (err) {
//       console.log("Skill Delete Error:", err);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>

//       <div className="bg-white p-6 rounded-xl shadow mb-8 border">
//         <h2 className="text-xl mb-4 font-semibold">Add Skill</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="border p-2 rounded"
//             placeholder="Skill Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />

//           <input
//             type="number"
//             className="border p-2 rounded"
//             placeholder="Level (0-100)"
//             value={form.level}
//             onChange={(e) =>
//               setForm({ ...form, level: Number(e.target.value) })
//             }
//           />

//           <input
//             type="number"
//             className="border p-2 rounded"
//             placeholder="Difficulty (1-10)"
//             value={form.difficulty}
//             onChange={(e) =>
//               setForm({ ...form, difficulty: Number(e.target.value) })
//             }
//           />

//           <input
//             className="border p-2 rounded"
//             placeholder="Category"
//             value={form.category}
//             onChange={(e) =>
//               setForm({ ...form, category: e.target.value })
//             }
//           />

//           <input
//             type="number"
//             className="border p-2 rounded"
//             placeholder="Experience (months)"
//             value={form.experience}
//             onChange={(e) =>
//               setForm({ ...form, experience: e.target.value })
//             }
//           />

//           <input
//             type="number"
//             className="border p-2 rounded"
//             placeholder="Used in projects"
//             value={form.usedInProjects}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 usedInProjects: Number(e.target.value),
//               })
//             }
//           />

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">
//               Upload Icon Image (optional)
//             </label>
//             <input type="file" accept="image/*" onChange={handleFile} />
//             {preview && (
//               <img
//                 src={preview}
//                 className="mt-2 w-20 h-20 object-contain rounded"
//               />
//             )}
//           </div>

//           <input
//             className="border p-2 rounded"
//             placeholder="Or lucide icon name (Code2)"
//             value={form.iconName}
//             onChange={(e) =>
//               setForm({ ...form, iconName: e.target.value })
//             }
//           />

//           <input
//             type="number"
//             className="border p-2 rounded"
//             placeholder="Order"
//             value={form.order}
//             onChange={(e) =>
//               setForm({ ...form, order: Number(e.target.value) })
//             }
//           />
//         </div>

//         <button
//           onClick={addSkill}
//           className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded shadow hover:bg-indigo-700"
//         >
//           Add Skill
//         </button>
//       </div>

//       <div>
//         <h2 className="text-xl mb-4 font-semibold">All Skills</h2>

//         {skills.length === 0 && (
//           <p className="text-gray-500">No Skills Added Yet</p>
//         )}

//         {skills.map((s) => (
//           <div
//             key={s._id}
//             className="bg-white p-4 rounded-xl shadow border mb-4 flex justify-between items-center"
//           >
//             <div className="flex items-center gap-4">
//               {s.icon && s.icon.includes("/") ? (
//                 <img
//                   src={`${API_URL}/uploads/${s.icon}`}
//                   alt={s.name}
//                   className="w-12 h-12 object-contain rounded"
//                 />
//               ) : (
//                 <div className="w-12 h-12 bg-indigo-50 rounded flex items-center justify-center text-indigo-600">
//                   <span className="text-sm">{s.icon}</span>
//                 </div>
//               )}

//               <div>
//                 <h3 className="font-semibold text-lg">{s.name}</h3>
//                 <p className="text-gray-600 text-sm">
//                   Level: {s.level}% • Difficulty: {s.difficulty}/10
//                 </p>
//                 <p className="text-gray-500 text-sm">
//                   Category: {s.category} • Experience: {s.experience}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => deleteSkill(s._id)}
//               className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Trash2, Pencil, X, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    level: 60,
    difficulty: 1,
    category: "",
    experience: "",
    usedInProjects: 0,
    iconFile: null,
    iconName: "",
    order: 0,
  });
  const [preview, setPreview] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load Skills
  const loadSkills = async () => {
    try {
      const res = await fetch(`${API}/skills`, {
        headers: { Authorization: "Bearer " + token },
      });
      const data = await res.json();
      setSkills(data);
    } catch (err) {
      console.log("Skill Fetch Error:", err);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  // Handle image preview
  const handleFile = (e) => {
    const f = e.target.files[0];
    setForm({ ...form, iconFile: f });
    setPreview(f ? URL.createObjectURL(f) : null);
  };

  // Reset Form
  const resetForm = () => {
    setForm({
      name: "",
      level: 60,
      difficulty: 1,
      category: "",
      experience: "",
      usedInProjects: 0,
      iconFile: null,
      iconName: "",
      order: 0,
    });
    setPreview(null);
    setEditMode(false);
    setEditingSkillId(null);
  };

  // Add or Update Skill
  const saveSkill = async () => {
    if (!form.name.trim()) return alert("Name required");

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("level", String(form.level));
      fd.append("difficulty", String(form.difficulty));
      fd.append("category", form.category);
      fd.append(
        "experience",
        form.experience ? `${form.experience} months` : "0 months"
      );
      fd.append("usedInProjects", String(form.usedInProjects));
      fd.append("order", String(form.order));
      if (form.iconFile) fd.append("icon", form.iconFile);
      else if (form.iconName) fd.append("iconName", form.iconName);

      const url = editMode ? `${API}/skills/${editingSkillId}` : `${API}/skills`;
      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: "Bearer " + token },
        body: fd,
      });

      if (!res.ok) {
        const err = await res.json();
        console.log("Skill Save Error:", err);
        alert(err?.error || "Save failed");
      } else {
        resetForm();
        loadSkills();
      }
    } catch (err) {
      console.log("Skill Save Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete Skill
  const deleteSkill = async (id) => {
    if (!confirm("Delete this skill?")) return;
    try {
      await fetch(`${API}/skills/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      loadSkills();
    } catch (err) {
      console.log("Skill Delete Error:", err);
    }
  };

  // Open Edit Modal
  const openEdit = (s) => {
    setEditMode(true);
    setEditingSkillId(s._id);
    setForm({
      name: s.name,
      level: s.level,
      difficulty: s.difficulty,
      category: s.category,
      experience: s.experience.replace(" months", ""),
      usedInProjects: s.usedInProjects,
      iconFile: null,
      iconName: s.icon && !s.icon.includes("/") ? s.icon : "",
      order: s.order,
    });
    setPreview(s.icon && s.icon.includes("/") ? `${API}/uploads/${s.icon}` : null);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>

      {/* Add / Edit Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow mb-8 border"
      >
        <h2 className="text-xl mb-4 font-semibold flex items-center gap-2">
          {editMode ? <Pencil size={20} /> : <PlusCircle size={20} />}
          {editMode ? "Edit Skill" : "Add Skill"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Skill Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Level (0-100)"
            value={form.level}
            onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
          />
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Difficulty (1-10)"
            value={form.difficulty}
            onChange={(e) => setForm({ ...form, difficulty: Number(e.target.value) })}
          />
          <input
            className="border p-2 rounded"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Experience (months)"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Used in projects"
            value={form.usedInProjects}
            onChange={(e) => setForm({ ...form, usedInProjects: Number(e.target.value) })}
          />

          <div>
            <label className="block text-sm text-gray-600 mb-1">Upload Icon (optional)</label>
            <input type="file" accept="image/*" onChange={handleFile} />
            {preview && <img src={preview} className="mt-2 w-20 h-20 object-contain rounded" />}
          </div>

          <input
            className="border p-2 rounded"
            placeholder="Or Lucide Icon Name"
            value={form.iconName}
            onChange={(e) => setForm({ ...form, iconName: e.target.value })}
          />

          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Order"
            value={form.order}
            onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
          />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={saveSkill}
            disabled={loading}
            className="bg-indigo-600 text-white px-5 py-2 rounded shadow hover:bg-indigo-700"
          >
            {loading ? "Saving..." : editMode ? "Update Skill" : "Add Skill"}
          </button>
          {editMode && (
            <button
              onClick={resetForm}
              className="bg-gray-400 text-white px-5 py-2 rounded shadow hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </motion.div>

      {/* Skill List */}
      <div>
        <h2 className="text-xl mb-4 font-semibold">All Skills</h2>
        {skills.length === 0 && <p className="text-gray-500">No Skills Added Yet</p>}

        {skills.map((s) => (
          <motion.div
            key={s._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-xl shadow border mb-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              {s.icon && s.icon.includes("/") ? (
                <img src={`${API}/uploads/${s.icon}`} alt={s.name} className="w-12 h-12 object-contain rounded" />
              ) : (
                <div className="w-12 h-12 bg-indigo-50 rounded flex items-center justify-center text-indigo-600">
                  <span className="text-sm">{s.icon}</span>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-lg">{s.name}</h3>
                <p className="text-gray-600 text-sm">
                  Level: {s.level}% • Difficulty: {s.difficulty}/10
                </p>
                <p className="text-gray-500 text-sm">
                  Category: {s.category} • Experience: {s.experience}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => openEdit(s)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => deleteSkill(s._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 flex items-center gap-1"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
