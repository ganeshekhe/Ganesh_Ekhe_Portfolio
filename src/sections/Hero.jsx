



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function Hero() {
  const [profile, setProfile] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
 fetch(API + "/api/profile")


      .then((r) => r.json())
      .then((d) => setProfile(d));
  }, []);

  if (!profile)
    return (
      <div className="py-20 text-center text-xl font-semibold text-gray-500">
        Loading Profile...
      </div>
    );

  /* -------------------------------------------
      AUTO FIX PATHS
  ------------------------------------------- */

  const profileImg = profile.image
    ? `${API}/uploads/${profile.image}`
    : "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const resumePath = profile.resume
    ? `${API}/uploads/${profile.resume}`
    : null;

  const certificatePaths = profile.certificates?.map(
    (c) => `${API}/uploads/${c}`
  );

  return (
    <section className="py-2 bg-gradient-to-b from-gray-50 to-white text-center">

      {/* Profile Image */}
      {/* <motion.img
        src={profileImg}
        alt="Profile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-60 h-60 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
      /> */}
      <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white bg-gray-100 flex items-center justify-center"
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-full h-full object-contain p-2"
  />
</motion.div>


      {/* Name */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
      >
        {profile.name}
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-indigo-600 text-xl mt-2"
      >
        {profile.role}
      </motion.p>

      {/* About */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg leading-relaxed"
      >
        {profile.about}
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="flex justify-center mt-8 gap-6"
      >
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            className="p-3 bg-white rounded-full shadow hover:bg-indigo-50 hover:shadow-lg duration-300"
          >
            <Github size={22} className="text-gray-700" />
          </a>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            className="p-3 bg-white rounded-full shadow hover:bg-indigo-50 hover:shadow-lg duration-300"
          >
            <Linkedin size={22} className="text-blue-700" />
          </a>
        )}

        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="p-3 bg-white rounded-full shadow hover:bg-indigo-50 hover:shadow-lg duration-300"
          >
            <Mail size={22} className="text-red-500" />
          </a>
        )}
      </motion.div>

      {/* Resume + Certificates */}
      <div className="mt-5 max-w-3xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10 text-center">

        {/* Resume */}
        {resumePath && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full"
          >
            
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Resume
            </h2> */}
            <a
              href={resumePath}
              download
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 duration-200 flex items-center gap-2 mx-auto w-fit"
            >
              <FileDown size={20} /> Download Resume
            </a>
            
          </motion.div>
        )}

        {/* Certificates */}
        {certificatePaths?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full"
          >
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Certificates
            </h2> */}

            <div className="flex flex-col gap-3">
              {certificatePaths.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  download
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 duration-200 flex items-center gap-2 justify-center"
                >
                  <FileDown size={20} /> Certificate {i + 1}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-5 flex justify-center gap-6"
      >
        <a
          href="/projects"
          className="px-7 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 duration-200"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-7 py-3 bg-white border border-gray-300 rounded-xl shadow-lg hover:bg-gray-50 duration-200"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
