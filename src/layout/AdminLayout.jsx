


import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Wrench, User } from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Manage Projects",
      path: "/admin/projects",
      icon: <FolderKanban size={18} />,
    },
    {
      name: "Manage Skills",
      path: "/admin/skills",
      icon: <Wrench size={18} />,
    },
    {
      name: "Manage Profile",
      path: "/admin/profile",
      icon: <User size={18} />,
    },
  ];

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900/95 backdrop-blur-xl text-white h-screen p-6 shadow-2xl border-r border-gray-700">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide mb-8 text-center">
          Admin Panel
        </h2>

        {/* Menu Items */}
        <div className="space-y-2">
          {menu.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    active
                      ? "bg-indigo-600 text-white shadow-lg scale-[1.02]"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
