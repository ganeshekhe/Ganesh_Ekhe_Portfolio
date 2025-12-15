

// import { Github, Linkedin, Mail, Phone } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
//       <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">

//         {/* Brand / Name */}
//         <div>
//           <h2 className="text-2xl font-bold text-white">Ganesh Ekhe</h2>
//           <p className="text-gray-400 mt-2 leading-7">
//             MERN Stack Developer focused on crafting clean, modern, and
//             scalable digital solutions. Passionate about problem-solving,
//             UI/UX, and building high-performance applications.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li><a href="/" className="hover:text-white duration-200">Home</a></li>
//             <li><a href="/about" className="hover:text-white duration-200">About</a></li>
//             <li><a href="/projects" className="hover:text-white duration-200">Projects</a></li>
//             <li><a href="/skills" className="hover:text-white duration-200">Skills</a></li>
//             <li><a href="/contact" className="hover:text-white duration-200">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
//           <ul className="space-y-3 text-gray-400">
//             <li className="flex items-center gap-3">
//               <Phone size={18} className="text-indigo-400" />
//               <span>9322945038</span>
//             </li>

//             <li className="flex items-center gap-3">
//               <Mail size={18} className="text-indigo-400" />
//               <span>g.ekhe.dev@gmail.com</span>
//             </li>

//             <li className="flex items-center gap-3">
//               <Linkedin size={18} className="text-indigo-400" />
//               <a
//                 href="https://www.linkedin.com/in/ganesh-ekhe-23b68b272"
//                 target="_blank"
//                 className="hover:text-white duration-200"
//               >
//                 LinkedIn Profile
//               </a>
//             </li>

//             <li className="flex items-center gap-3">
//               <Github size={18} className="text-indigo-400" />
//               <a
//                 href="https://github.com/ganeshekhe"
//                 target="_blank"
//                 className="hover:text-white duration-200"
//               >
//                 GitHub Profile
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
//         © {new Date().getFullYear()} Ganesh Ekhe — All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Ganesh Ekhe
          </h2>

          <p className="mt-4 text-gray-400 leading-7 max-w-sm">
            MERN Stack Developer focused on building clean, scalable and
            high-performance web applications with strong attention to UI/UX
            and modern development practices.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-400" />
              <span className="hover:text-white transition">
                +91 93229 45038
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-400" />
              <span className="hover:text-white transition">
                g.ekhe.dev@gmail.com
              </span>
            </li>

            <li className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/ganesh-ekhe-23b68b272"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/ganeshekhe"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
              >
                <Github size={18} />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="mt-14 border-t border-gray-800"></div>

      {/* BOTTOM BAR */}
      <div className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ganesh Ekhe • All Rights Reserved
      </div>
    </footer>
  );
}
