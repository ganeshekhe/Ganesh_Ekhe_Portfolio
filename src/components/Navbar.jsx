


import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-indigo-600 font-semibold px-3" : "text-gray-700 px-3";

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">Ganesh</Link>

        <div className="flex items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink> {/* ✅ Added */}
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <NavLink to="/admin" className="ml-4 text-sm text-gray-500">
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
