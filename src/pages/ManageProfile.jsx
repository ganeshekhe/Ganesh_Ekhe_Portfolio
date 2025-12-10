


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
//     image: "",
//     resume: "",
//     certificates: []
//   });

//   const [image, setImage] = useState(null);
//   const [resume, setResume] = useState(null);
//   const [certificates, setCertificates] = useState([]);
//   const [previewImg, setPreviewImg] = useState(null);

//   const API = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     fetch(API + "/profile")
//       .then((r) => r.json())
//       .then((d) => {
//         setProfile(d || {});

//         // preview image
//         if (d?.image) {
//           setPreviewImg(`${API}/uploads/${d.image}`);
//         }
//       });
//   }, []);

//   const updateProfile = async () => {
//     const fd = new FormData();

//     // text fields append
//     Object.keys(profile).forEach((key) => {
//       if (key !== "image" && key !== "resume" && key !== "certificates") {
//         fd.append(key, profile[key]);
//       }
//     });

//     // new files
//     if (image) fd.append("image", image);
//     if (resume) fd.append("resume", resume);
//     certificates.forEach((file) => fd.append("certificates", file));

//     const res = await fetch(API + "/profile", {
//       method: "PUT",
//       body: fd,
//     });

//     if (res.ok) {
//       alert("Profile Updated Successfully!");
//       window.location.reload();
//     } else {
//       alert("Update Failed!");
//     }
//   };

//   return (
//     <div className="p-10">

//       <h1 className="text-4xl font-bold mb-8 text-gray-800 tracking-wide">
//         Manage Profile
//       </h1>

//       <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 space-y-6">

//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             placeholder="Name"
//             value={profile.name}
//             onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//             className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
//           />

//           <input
//             placeholder="Role"
//             value={profile.role}
//             onChange={(e) => setProfile({ ...profile, role: e.target.value })}
//             className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
//           />
//         </div>

//         <textarea
//           placeholder="About (Short Bio)"
//           rows="4"
//           value={profile.about}
//           onChange={(e) => setProfile({ ...profile, about: e.target.value })}
//           className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
//         ></textarea>

//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             placeholder="GitHub URL"
//             value={profile.github}
//             onChange={(e) => setProfile({ ...profile, github: e.target.value })}
//             className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
//           />

//           <input
//             placeholder="LinkedIn URL"
//             value={profile.linkedin}
//             onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
//             className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
//           />

//           <input
//             placeholder="Email Address"
//             value={profile.email}
//             onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//             className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none md:col-span-2"
//           />
//         </div>

//         <div>
//           <label className="font-semibold text-gray-700">Profile Image</label>
//           <div className="flex items-center gap-4 mt-2">
//             {previewImg && (
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 src={previewImg}
//                 className="w-24 h-24 rounded-xl object-cover border shadow"
//               />
//             )}

//             <label className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition flex items-center gap-2">
//               <Upload size={18} />
//               Upload Image
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={(e) => {
//                   setImage(e.target.files[0]);
//                   setPreviewImg(URL.createObjectURL(e.target.files[0]));
//                 }}
//               />
//             </label>
//           </div>
//         </div>

//         <div>
//           <label className="font-semibold text-gray-700">Resume (PDF)</label>
//           <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2 mt-2 w-fit">
//             <Upload size={18} /> Upload Resume
//             <input
//               type="file"
//               accept="application/pdf"
//               className="hidden"
//               onChange={(e) => setResume(e.target.files[0])}
//             />
//           </label>
//         </div>

//         <div>
//           <label className="font-semibold text-gray-700">Certificates (Multiple)</label>
//           <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition flex items-center gap-2 mt-2 w-fit">
//             <Upload size={18} /> Upload Certificates
//             <input
//               type="file"
//               className="hidden"
//               multiple
//               onChange={(e) => setCertificates([...e.target.files])}
//             />
//           </label>
//         </div>

//         <button
//           onClick={updateProfile}
//           className="mt-6 flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow hover:bg-indigo-800 transition mx-auto"
//         >
//           <Save size={20} /> Update Profile
//         </button>

//       </div>

//     </div>
//   );
// }









import { useEffect, useState } from "react";
import { Upload, Save } from "lucide-react";
import { motion } from "framer-motion";

export default function ManageProfile() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    about: "",
    github: "",
    linkedin: "",
    email: "",
    image: "",
    resume: "",
    certificates: []
  });

  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  /* LOAD EXISTING PROFILE */
  useEffect(() => {
    fetch(API + "/profile")
      .then((r) => r.json())
      .then((d) => {
        setProfile(d || {});

        // FIXED PATH
        if (d?.image) {
          setPreviewImg(`${API}/${d.image}`);
        }
      })
      .catch((e) => console.log("Load Error:", e));
  }, []);

  /* UPDATE PROFILE */
  const updateProfile = async () => {
    const fd = new FormData();

    // append text fields EXCEPT files
    Object.keys(profile).forEach((key) => {
      if (key !== "image" && key !== "resume" && key !== "certificates") {
        fd.append(key, profile[key]);
      }
    });

    // upload files
    if (image) fd.append("image", image);
    if (resume) fd.append("resume", resume);
    certificates.forEach((file) => fd.append("certificates", file));

    const res = await fetch(API + "/profile", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token, // VERY IMPORTANT FIX
      },
      body: fd,
    });

    if (res.ok) {
      alert("Profile Updated Successfully!");
      window.location.reload();
    } else {
      alert("Update Failed!");
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8 text-gray-800 tracking-wide">
        Manage Profile
      </h1>

      <div className="bg-white shadow-xl border rounded-2xl p-8 space-y-6">

        {/* INPUT FIELDS */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            placeholder="Role"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <textarea
          placeholder="About (Short Bio)"
          rows="4"
          value={profile.about}
          onChange={(e) => setProfile({ ...profile, about: e.target.value })}
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
        ></textarea>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="GitHub URL"
            value={profile.github}
            onChange={(e) => setProfile({ ...profile, github: e.target.value })}
            className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            placeholder="LinkedIn URL"
            value={profile.linkedin}
            onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
            className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            placeholder="Email Address"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none md:col-span-2"
          />
        </div>

        {/* PROFILE IMAGE */}
        <div>
          <label className="font-semibold text-gray-700">Profile Image</label>
          <div className="flex items-center gap-4 mt-2">
            {previewImg && (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={previewImg}
                className="w-24 h-24 rounded-xl object-cover border shadow"
              />
            )}

            <label className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition flex items-center gap-2">
              <Upload size={18} />
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPreviewImg(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </label>
          </div>
        </div>

        {/* RESUME */}
        <div>
          <label className="font-semibold text-gray-700">Resume (PDF)</label>
          <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2 mt-2 w-fit">
            <Upload size={18} /> Upload Resume
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </label>
        </div>

        {/* CERTIFICATES */}
        <div>
          <label className="font-semibold text-gray-700">Certificates</label>
          <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition flex items-center gap-2 mt-2 w-fit">
            <Upload size={18} /> Upload Certificates
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => setCertificates([...e.target.files])}
            />
          </label>
        </div>

        {/* BUTTON */}
        <button
          onClick={updateProfile}
          className="mt-6 flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow hover:bg-indigo-800 transition mx-auto"
        >
          <Save size={20} /> Update Profile
        </button>
      </div>
    </div>
  );
}
