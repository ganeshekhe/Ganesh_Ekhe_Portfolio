
import { API_URL } from "../config";

import { useState } from "react";

export default function Login() {
  // FIX: API URL MUST BE DEFINED HERE
  // const API_URL = "http://localhost:5000";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      // FIXED: CORRECT BACKEND URL
      const res = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Invalid login");
        return;
      }

      localStorage.setItem("token", data.token);

      alert("Login successful!");
      window.location.href = "/admin/projects";

    } catch (err) {
      console.log(err);
      setError("Server error");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[350px] bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-indigo-600 text-white w-full py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
