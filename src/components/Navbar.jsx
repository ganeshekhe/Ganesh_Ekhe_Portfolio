


// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const linkClass = ({ isActive }) =>
//     isActive ? "text-indigo-600 font-semibold px-3" : "text-gray-700 px-3";

//   return (
//     <nav className="bg-white shadow px-6 py-4">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-indigo-600">Ganesh</Link>

//         <div className="flex items-center">
//           <NavLink to="/" className={linkClass}>Home</NavLink>
//           <NavLink to="/projects" className={linkClass}>Projects</NavLink>
//           <NavLink to="/skills" className={linkClass}>Skills</NavLink> {/* ✅ Added */}
//           <NavLink to="/about" className={linkClass}>About</NavLink>
//           <NavLink to="/contact" className={linkClass}>Contact</NavLink>

//           <NavLink to="/admin" className="ml-4 text-sm text-gray-500">
//             Admin
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
     ${
       isActive
         ? "text-indigo-600 bg-indigo-50"
         : "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
     }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Ganesh
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* ADMIN */}
          <NavLink
            to="/admin"
            className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-black transition"
          >
            Admin
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow"
        >
          <div className="flex flex-col px-6 py-4 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/admin"
              className="mt-2 px-4 py-2 text-center rounded-lg bg-gray-900 text-white font-semibold"
            >
              Admin
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
}
