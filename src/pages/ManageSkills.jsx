


// import { useEffect, useState } from "react";
// import { API_URL } from "../config";

// export default function ManageSkills() {
//   const [skills, setSkills] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [preview, setPreview] = useState(null);

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

//   const token = localStorage.getItem("token");

//   /* ---------------- LOAD SKILLS ---------------- */
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

//   /* ---------------- FILE HANDLER ---------------- */
//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     setForm({ ...form, iconFile: f });
//     setPreview(f ? URL.createObjectURL(f) : null);
//   };

//   /* ---------------- RESET FORM ---------------- */
//   const resetForm = () => {
//     setForm({
//       name: "",
//       level: 60,
//       difficulty: 1,
//       category: "",
//       experience: "",
//       usedInProjects: 0,
//       iconFile: null,
//       iconName: "",
//       order: 0,
//     });
//     setPreview(null);
//     setEditId(null);
//   };

//   /* ---------------- ADD / UPDATE ---------------- */
//   const saveSkill = async () => {
//     if (!form.name.trim()) return alert("Name required");

//     const fd = new FormData();
//     fd.append("name", form.name);
//     fd.append("level", String(form.level));
//     fd.append("difficulty", String(form.difficulty));
//     fd.append("category", form.category);
//     fd.append("experience", form.experience ? `${form.experience} months` : "0 months");
//     fd.append("usedInProjects", String(form.usedInProjects));
//     fd.append("order", String(form.order));

//     if (form.iconFile) fd.append("icon", form.iconFile);
//     else if (form.iconName) fd.append("iconName", form.iconName);

//     const url = editId
//       ? `${API_URL}/api/skills/${editId}`
//       : `${API_URL}/api/skills`;

//     const method = editId ? "PUT" : "POST";

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: { Authorization: "Bearer " + token },
//         body: fd,
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         alert(err?.error || "Operation failed");
//         return;
//       }

//       resetForm();
//       loadSkills();
//     } catch (err) {
//       console.log("Save Skill Error:", err);
//     }
//   };

//   /* ---------------- DELETE ---------------- */
//   const deleteSkill = async (id) => {
//     if (!confirm("Delete this skill?")) return;
//     try {
//       await fetch(`${API_URL}/api/skills/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: "Bearer " + token },
//       });
//       loadSkills();
//     } catch (err) {
//       console.log("Delete Error:", err);
//     }
//   };

//   /* ---------------- EDIT ---------------- */
//   const openEdit = (s) => {
//     setEditId(s._id);
//     setForm({
//       name: s.name,
//       level: s.level,
//       difficulty: s.difficulty,
//       category: s.category,
//       experience: parseInt(s.experience),
//       usedInProjects: s.usedInProjects,
//       iconFile: null,
//       iconName: s.icon.includes("/") ? "" : s.icon,
//       order: s.order,
//     });

//     setPreview(s.icon.includes("/") ? `${API_URL}/uploads/${s.icon}` : null);
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>

//       {/* FORM */}
//       <div className="bg-white p-6 rounded-xl shadow mb-8 border">
//         <h2 className="text-xl font-semibold mb-4">
//           {editId ? "Update Skill" : "Add Skill"}
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4">
//           <input placeholder="Name" className="border p-2 rounded"
//             value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />

//           <input type="number" placeholder="Level" className="border p-2 rounded"
//             value={form.level} onChange={e => setForm({ ...form, level: Number(e.target.value) })} />

//           <input type="number" placeholder="Difficulty" className="border p-2 rounded"
//             value={form.difficulty} onChange={e => setForm({ ...form, difficulty: Number(e.target.value) })} />

//           <input placeholder="Category" className="border p-2 rounded"
//             value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />

//           <input type="number" placeholder="Experience (months)" className="border p-2 rounded"
//             value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />

//           <input type="number" placeholder="Used in projects" className="border p-2 rounded"
//             value={form.usedInProjects} onChange={e => setForm({ ...form, usedInProjects: Number(e.target.value) })} />

//           <input type="file" onChange={handleFile} />
//           <input placeholder="Lucide icon name" className="border p-2 rounded"
//             value={form.iconName} onChange={e => setForm({ ...form, iconName: e.target.value })} />
//         </div>

//         {preview && <img src={preview} className="mt-4 w-20 h-20" />}

//         <button onClick={saveSkill}
//           className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded">
//           {editId ? "Update Skill" : "Add Skill"}
//         </button>

//         {editId && (
//           <button onClick={resetForm}
//             className="ml-3 mt-4 bg-gray-400 text-white px-5 py-2 rounded">
//             Cancel
//           </button>
//         )}
//       </div>

//       {/* LIST */}
//       {skills.map(s => (
//         <div key={s._id} className="bg-white p-4 rounded-xl shadow border mb-3 flex justify-between">
//           <div>
//             <h3 className="font-semibold">{s.name}</h3>
//             <p className="text-sm text-gray-600">
//               Level {s.level}% • {s.category}
//             </p>
//           </div>

//           <div className="flex gap-2">
//             <button onClick={() => openEdit(s)}
//               className="bg-yellow-500 text-white px-3 py-1 rounded">
//               Edit
//             </button>
//             <button onClick={() => deleteSkill(s._id)}
//               className="bg-red-600 text-white px-3 py-1 rounded">
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import {
  Trash2,
  Pencil,
  X,
  PlusCircle,
  ImageIcon,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_URL } from "../config";

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState(null);

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

  const token = localStorage.getItem("token");

  /* ---------------- LOAD ---------------- */
  const loadSkills = async () => {
    const res = await fetch(`${API_URL}/api/skills`);
    const data = await res.json();
    setSkills(data);
  };

  useEffect(() => { loadSkills(); }, []);

  /* ---------------- FILE ---------------- */
  const handleFile = (e) => {
    const f = e.target.files[0];
    setForm({ ...form, iconFile: f });
    setPreview(f ? URL.createObjectURL(f) : null);
  };

  /* ---------------- RESET ---------------- */
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
    setEditId(null);
  };

  /* ---------------- ADD / UPDATE ---------------- */
  const saveSkill = async () => {
    if (!form.name.trim()) return alert("Name required");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== "") {
        if (k === "experience") fd.append(k, `${v} months`);
        else if (k !== "iconFile") fd.append(k, String(v));
      }
    });

    if (form.iconFile) fd.append("icon", form.iconFile);
    else if (form.iconName) fd.append("iconName", form.iconName);

    const url = editId
      ? `${API_URL}/api/skills/${editId}`
      : `${API_URL}/api/skills`;

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { Authorization: "Bearer " + token },
      body: fd,
    });

    resetForm();
    loadSkills();
  };

  /* ---------------- DELETE ---------------- */
  const deleteSkill = async (id) => {
    if (!confirm("Delete this skill?")) return;
    await fetch(`${API_URL}/api/skills/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    loadSkills();
  };

  /* ---------------- EDIT ---------------- */
  const openEdit = (s) => {
    setEditId(s._id);
    setForm({
      name: s.name,
      level: s.level,
      difficulty: s.difficulty,
      category: s.category,
      experience: parseInt(s.experience),
      usedInProjects: s.usedInProjects,
      iconFile: null,
      iconName: s.icon.includes("/") ? "" : s.icon,
      order: s.order,
    });

    setPreview(s.icon.includes("/") ? `${API_URL}/uploads/${s.icon}` : null);
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        🧠 Manage Skills
      </h1>

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border p-8 mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-indigo-700">
          {editId ? <Pencil /> : <PlusCircle />}
          {editId ? "Update Skill" : "Add Skill"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Skill Name" value={form.name}
            onChange={v => setForm({ ...form, name: v })} />

          <Input type="number" label="Level (%)" value={form.level}
            onChange={v => setForm({ ...form, level: Number(v) })} />

          <Input type="number" label="Difficulty (1-10)" value={form.difficulty}
            onChange={v => setForm({ ...form, difficulty: Number(v) })} />

          <Input label="Category" value={form.category}
            onChange={v => setForm({ ...form, category: v })} />

          <Input type="number" label="Experience (months)" value={form.experience}
            onChange={v => setForm({ ...form, experience: v })} />

          <Input type="number" label="Used In Projects" value={form.usedInProjects}
            onChange={v => setForm({ ...form, usedInProjects: Number(v) })} />
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-6">
          <label className="flex items-center gap-2 cursor-pointer text-indigo-600 font-medium">
            <ImageIcon />
            Upload Icon
            <input type="file" hidden onChange={handleFile} />
          </label>

          <input
            placeholder="Lucide Icon Name (Code2)"
            className="input w-64"
            value={form.iconName}
            onChange={e => setForm({ ...form, iconName: e.target.value })}
          />
        </div>

        {preview && (
          <img src={preview} className="mt-4 w-20 h-20 object-contain rounded-xl shadow" />
        )}

        <div className="mt-8 flex gap-4">
          <button
            onClick={saveSkill}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg"
          >
            {editId ? "Update Skill" : "Add Skill"}
          </button>

          {editId && (
            <button
              onClick={resetForm}
              className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </motion.div>

      {/* SKILL LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map(s => (
          <motion.div
            key={s._id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl shadow-lg border p-6 flex justify-between"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Layers className="text-indigo-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">{s.name}</h3>
                <p className="text-sm text-gray-600">
                  Level {s.level}% • {s.category}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => openEdit(s)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => deleteSkill(s._id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SMALL INPUT COMPONENT ---------------- */
function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-gray-600 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input mt-1"
      />
    </div>
  );
}
