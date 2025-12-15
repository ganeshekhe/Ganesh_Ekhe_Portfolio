

// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import AdminLayout from "./layout/AdminLayout";
// // import "./App.css";

// // Public pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import ProjectDetails from "./pages/ProjectDetails";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";


// // Admin & Auth
// import Login from "./pages/Login";
// import ManageProjects from "./pages/ManageProjects";
// import ManageSkills from "./pages/ManageSkills";
// import ManageProfile from "./pages/ManageProfile";

// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <Routes>

//       {/* Public UI Layout */}
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="projects/:id" element={<ProjectDetails />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="skills" element={<Skills />} /> {/* ADD THIS IF NOT ADDED */}
//       </Route>

//       {/* Login */}
//       <Route path="/login" element={<Login />} />

//       {/* Admin Area */}
//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute>
//             <AdminLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="projects" element={<ManageProjects />} />
//         <Route path="skills" element={<ManageSkills />} />
//         <Route path="profile" element={<ManageProfile />} />
//       </Route>

//     </Routes>
//   );
// }


import { Routes, Route } from "react-router-dom";

/* Layouts */
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

/* Admin & Auth */
import Login from "./pages/Login";
import ManageProjects from "./pages/ManageProjects";
import ManageSkills from "./pages/ManageSkills";
import ManageProfile from "./pages/ManageProfile";

/* Protection */
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* ================= PUBLIC WEBSITE ================= */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* ================= AUTH ================= */}
      <Route path="/login" element={<Login />} />

      {/* ================= ADMIN PANEL ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ManageProjects />} />
        <Route path="projects" element={<ManageProjects />} />
        <Route path="skills" element={<ManageSkills />} />
        <Route path="profile" element={<ManageProfile />} />
      </Route>

    </Routes>
  );
}
