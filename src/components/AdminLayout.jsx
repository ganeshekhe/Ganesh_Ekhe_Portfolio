import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <div className="w-60 bg-gray-900 text-white h-screen p-5 space-y-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

        <Link to="/admin/projects" className="block">Manage Projects</Link>
        <Link to="/admin/skills" className="block">Manage Skills</Link>
      </div>

      <div className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
