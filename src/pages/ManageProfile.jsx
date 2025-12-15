
// import { useEffect, useState } from "react";
// import { Upload, Save } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ManageProfile() {
//   const [profile, setProfile] = useState({
//     name: "",
//     role: "",
//     about: "",
//     github: "",
//     linkedin: "",
//     email: "",
//   });

//   const [image, setImage] = useState(null);
//   const [resume, setResume] = useState(null);
//   const [certificates, setCertificates] = useState([]);
//   const [previewImg, setPreviewImg] = useState(null);

//   const API = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem("token");

//   /* ---------------- LOAD PROFILE ---------------- */
//   useEffect(() => {
//     fetch(`${API}/api/profile`)
//       .then((r) => r.json())
//       .then((d) => {
//         if (!d) return;
//         setProfile({
//           name: d.name || "",
//           role: d.role || "",
//           about: d.about || "",
//           github: d.github || "",
//           linkedin: d.linkedin || "",
//           email: d.email || "",
//         });

//         if (d.image) {
//           setPreviewImg(`${API}/uploads/${d.image}`);
//         }
//       });
//   }, []);

//   /* ---------------- UPDATE PROFILE ---------------- */
//   const updateProfile = async () => {
//     const fd = new FormData();

//     // text fields
//     Object.entries(profile).forEach(([key, value]) => {
//       fd.append(key, value || "");
//     });

//     // files
//     if (image) fd.append("image", image);
//     if (resume) fd.append("resume", resume);
//     certificates.forEach((file) => fd.append("certificates", file));

//     const res = await fetch(`${API}/api/profile`, {
//       method: "PUT",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//       body: fd,
//     });

//     if (res.ok) {
//       alert("Profile Updated Successfully!");
//       window.location.reload();
//     } else {
//       const err = await res.json();
//       console.log(err);
//       alert("Update Failed!");
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-4xl font-bold mb-8">Manage Profile</h1>

//       <div className="bg-white shadow-xl border rounded-2xl p-8 space-y-6">

//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             placeholder="Name"
//             value={profile.name}
//             onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//             className="p-3 rounded-xl border"
//           />

//           <input
//             placeholder="Role"
//             value={profile.role}
//             onChange={(e) => setProfile({ ...profile, role: e.target.value })}
//             className="p-3 rounded-xl border"
//           />
//         </div>

//         <textarea
//           placeholder="About"
//           rows="4"
//           value={profile.about}
//           onChange={(e) => setProfile({ ...profile, about: e.target.value })}
//           className="w-full p-3 rounded-xl border"
//         />

//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             placeholder="GitHub URL"
//             value={profile.github}
//             onChange={(e) => setProfile({ ...profile, github: e.target.value })}
//             className="p-3 rounded-xl border"
//           />

//           <input
//             placeholder="LinkedIn URL"
//             value={profile.linkedin}
//             onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
//             className="p-3 rounded-xl border"
//           />

//           <input
//             placeholder="Email"
//             value={profile.email}
//             onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//             className="p-3 rounded-xl border md:col-span-2"
//           />
//         </div>

//         {/* IMAGE */}
//         <div>
//           <label className="font-semibold">Profile Image</label>
//           <div className="flex items-center gap-4 mt-2">
//             {previewImg && (
//               <motion.img
//                 src={previewImg}
//                 className="w-24 h-24 rounded-xl object-cover border"
//               />
//             )}

//             <label className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
//               <Upload size={18} />
//               Upload Image
//               <input
//                 type="file"
//                 hidden
//                 accept="image/*"
//                 onChange={(e) => {
//                   setImage(e.target.files[0]);
//                   setPreviewImg(URL.createObjectURL(e.target.files[0]));
//                 }}
//               />
//             </label>
//           </div>
//         </div>

//         {/* RESUME */}
//         <div>
//           <label className="font-semibold">Resume (PDF)</label>
//           <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 mt-2 w-fit">
//             <Upload size={18} />
//             Upload Resume
//             <input
//               type="file"
//               hidden
//               accept="application/pdf"
//               onChange={(e) => setResume(e.target.files[0])}
//             />
//           </label>
//         </div>

//         {/* CERTIFICATES */}
//         <div>
//           <label className="font-semibold">Certificates</label>
//           <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 mt-2 w-fit">
//             <Upload size={18} />
//             Upload Certificates
//             <input
//               type="file"
//               hidden
//               multiple
//               onChange={(e) => setCertificates([...e.target.files])}
//             />
//           </label>
//         </div>

//         <button
//           onClick={updateProfile}
//           className="mt-6 flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-xl mx-auto"
//         >
//           <Save size={20} /> Update Profile
//         </button>
//       </div>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { Upload, Save, User, FileText, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function ManageProfile() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    about: "",
    github: "",
    linkedin: "",
    email: "",
  });

  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  /* ---------------- LOAD PROFILE ---------------- */
  useEffect(() => {
    fetch(`${API}/api/profile`)
      .then(r => r.json())
      .then(d => {
        if (!d) return;
        setProfile({
          name: d.name || "",
          role: d.role || "",
          about: d.about || "",
          github: d.github || "",
          linkedin: d.linkedin || "",
          email: d.email || "",
        });

        if (d.image) setPreviewImg(`${API}/uploads/${d.image}`);
      });
  }, []);

  /* ---------------- UPDATE PROFILE ---------------- */
  const updateProfile = async () => {
    const fd = new FormData();

    Object.entries(profile).forEach(([k, v]) => fd.append(k, v || ""));
    if (image) fd.append("image", image);
    if (resume) fd.append("resume", resume);
    certificates.forEach(f => fd.append("certificates", f));

    const res = await fetch(`${API}/api/profile`, {
      method: "PUT",
      headers: { Authorization: "Bearer " + token },
      body: fd,
    });

    res.ok
      ? alert("Profile Updated Successfully!")
      : alert("Update Failed!");
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 flex items-center gap-2">
        <User /> Manage Profile
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border p-10 max-w-5xl"
      >
        {/* BASIC INFO */}
        <Section title="Basic Information">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Name" value={profile.name}
              onChange={v => setProfile({ ...profile, name: v })} />

            <Input label="Role" value={profile.role}
              onChange={v => setProfile({ ...profile, role: v })} />
          </div>

          <Textarea label="About" value={profile.about}
            onChange={v => setProfile({ ...profile, about: v })} />
        </Section>

        {/* LINKS */}
        <Section title="Social & Contact">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="GitHub URL" value={profile.github}
              onChange={v => setProfile({ ...profile, github: v })} />

            <Input label="LinkedIn URL" value={profile.linkedin}
              onChange={v => setProfile({ ...profile, linkedin: v })} />

            <Input label="Email" value={profile.email}
              onChange={v => setProfile({ ...profile, email: v })}
              full />
          </div>
        </Section>

        {/* MEDIA */}
        <Section title="Media Uploads">
          {/* IMAGE */}
          <div>
            <Label>Profile Image</Label>
            <div className="flex items-center gap-6 mt-2">
              {previewImg && (
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={previewImg}
                  className="w-28 h-28 rounded-2xl object-cover shadow border"
                />
              )}

              <UploadBtn
                label="Upload Image"
                icon={<ImageIcon size={18} />}
                accept="image/*"
                onFile={f => {
                  setImage(f);
                  setPreviewImg(URL.createObjectURL(f));
                }}
                color="indigo"
              />
            </div>
          </div>

          {/* RESUME */}
          <div>
            <Label>Resume (PDF)</Label>
            <UploadBtn
              label="Upload Resume"
              icon={<FileText size={18} />}
              accept="application/pdf"
              onFile={setResume}
              color="green"
            />
          </div>

          {/* CERTIFICATES */}
          <div>
            <Label>Certificates</Label>
            <UploadBtn
              label="Upload Certificates"
              icon={<Upload size={18} />}
              multiple
              onFile={f => setCertificates([...f])}
              color="purple"
            />
          </div>
        </Section>

        {/* SAVE */}
        <div className="pt-8 text-center">
          <button
            onClick={updateProfile}
            className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-10 py-4 rounded-2xl text-lg font-medium shadow-lg"
          >
            <Save size={22} /> Save Profile
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Label({ children }) {
  return <p className="font-medium text-gray-600">{children}</p>;
}

function Input({ label, value, onChange, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <Label>{label}</Label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input mt-1"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <textarea
        rows="4"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input mt-1"
      />
    </div>
  );
}

function UploadBtn({ label, icon, onFile, accept, multiple, color }) {
  const colors = {
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  };

  return (
    <label
      className={`inline-flex items-center gap-2 text-white px-4 py-2 rounded-xl cursor-pointer shadow ${colors[color]}`}
    >
      {icon} {label}
      <input
        hidden
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={e => onFile(multiple ? e.target.files : e.target.files[0])}
      />
    </label>
  );
}
