

import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">

        {/* Brand / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white">Ganesh Ekhe</h2>
          <p className="text-gray-400 mt-2 leading-7">
            MERN Stack Developer focused on crafting clean, modern, and
            scalable digital solutions. Passionate about problem-solving,
            UI/UX, and building high-performance applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-white duration-200">About</a></li>
            <li><a href="/projects" className="hover:text-white duration-200">Projects</a></li>
            <li><a href="/skills" className="hover:text-white duration-200">Skills</a></li>
            <li><a href="/contact" className="hover:text-white duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-400" />
              <span>9322945038</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-400" />
              <span>g.ekhe.dev@gmail.com</span>
            </li>

            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-indigo-400" />
              <a
                href="https://www.linkedin.com/in/ganesh-ekhe-23b68b272"
                target="_blank"
                className="hover:text-white duration-200"
              >
                LinkedIn Profile
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Github size={18} className="text-indigo-400" />
              <a
                href="https://github.com/ganeshekhe"
                target="_blank"
                className="hover:text-white duration-200"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Ganesh Ekhe — All Rights Reserved.
      </div>
    </footer>
  );
}
