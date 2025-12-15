


// import { Link, Outlet, useLocation } from "react-router-dom";
// import { LayoutDashboard, FolderKanban, Wrench, User } from "lucide-react";

// export default function AdminLayout() {
//   const location = useLocation();

//   const menu = [
//     {
//       name: "Dashboard",
//       path: "/admin",
//       icon: <LayoutDashboard size={18} />,
//     },
//     {
//       name: "Manage Projects",
//       path: "/admin/projects",
//       icon: <FolderKanban size={18} />,
//     },
//     {
//       name: "Manage Skills",
//       path: "/admin/skills",
//       icon: <Wrench size={18} />,
//     },
//     {
//       name: "Manage Profile",
//       path: "/admin/profile",
//       icon: <User size={18} />,
//     },
//   ];

//   return (
//     <div className="flex">
//       {/* SIDEBAR */}
//       <div className="w-64 bg-gray-900/95 backdrop-blur-xl text-white h-screen p-6 shadow-2xl border-r border-gray-700">
        
//         {/* Logo */}
//         <h2 className="text-2xl font-bold tracking-wide mb-8 text-center">
//           Admin Panel
//         </h2>

//         {/* Menu Items */}
//         <div className="space-y-2">
//           {menu.map((item, i) => {
//             const active = location.pathname === item.path;

//             return (
//               <Link
//                 key={i}
//                 to={item.path}
//                 className={`
//                   flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
//                   ${
//                     active
//                       ? "bg-indigo-600 text-white shadow-lg scale-[1.02]"
//                       : "text-gray-300 hover:bg-gray-800 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.icon}
//                 <span className="text-sm font-medium">{item.name}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* MAIN CONTENT AREA */}
//       <div className="flex-1 p-10 bg-gray-100 min-h-screen">
//         <Outlet />
//       </div>
//     </div>
//   );
// }


import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Wrench, User } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLayout() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: <FolderKanban size={18} />,
    },
    {
      name: "Skills",
      path: "/admin/skills",
      icon: <Wrench size={18} />,
    },
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <User size={18} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 bg-gray-900/90 backdrop-blur-xl text-white shadow-2xl border-r border-gray-700 flex flex-col">
        
        {/* LOGO */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-extrabold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-xs text-gray-400 text-center mt-1">
            Portfolio Management
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }
                  `}
                >
                  <span
                    className={`p-2 rounded-lg ${
                      active ? "bg-white/20" : "bg-gray-800"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Ganesh Ekhe
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-10 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
