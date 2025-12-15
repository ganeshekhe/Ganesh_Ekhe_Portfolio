// import { API_URL } from "../config";

// import { useState } from "react";

// export default function Admin() {
//   // const API_URL = "http://localhost:5000";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");

//     try {
//       const res = await fetch(`${API_URL}/admin/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();

//       if (!data.success) {
//         setError(data.error || "Invalid login");
//         return;
//       }

//       // Save token
//       localStorage.setItem("token", data.token);

//       alert("Login successful!");
//       window.location.href = "/admin/projects";

//     } catch (err) {
//       console.log(err);
//       setError("Server error!");
//     }
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-gray-100">
//       <div className="w-[350px] bg-white p-6 rounded-xl shadow">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>

//         {error && <p className="text-red-500 mb-2">{error}</p>}

//         <input
//           className="border p-2 w-full mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           className="border p-2 w-full mb-3"
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           className="bg-indigo-600 text-white w-full py-2 rounded"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }




import { API_URL } from "../config";
import { useState } from "react";
import { Lock, Mail, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Invalid email or password");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/admin/projects";

    } catch (err) {
      console.log(err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md
        bg-white/90 backdrop-blur
        rounded-3xl shadow-2xl border border-white/30
        p-10"
      >

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl
            bg-indigo-600 text-white flex items-center justify-center shadow-lg">
            <Lock size={26} />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-800">
            Admin Panel
          </h1>
          <p className="text-gray-500 mt-2">
            Secure login to manage portfolio
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-center text-red-600 font-medium"
          >
            {error}
          </motion.p>
        )}

        {/* FORM */}
        <div className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2
            bg-gradient-to-r from-indigo-600 to-purple-600
            hover:from-indigo-700 hover:to-purple-700
            text-white font-semibold text-lg
            py-4 rounded-xl
            shadow-lg hover:shadow-2xl
            transition-all duration-300
            disabled:opacity-60"
          >
            <LogIn size={20} />
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Ganesh Ekhe — Admin Access
        </p>
      </motion.div>
    </div>
  );
}
