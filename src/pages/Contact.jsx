// // // import { useState } from "react";

// // // export default function Contact() {
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setForm({
// // //       ...form,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Validate fields (frontend only)
// // //     if (!form.name || !form.email || !form.message) {
// // //       alert("Please fill all fields");
// // //       return;
// // //     }

// // //     alert("Form submitted (Backend yet to connect)");
// // //   };

// // //   return (
// // //     <div className="px-8 md:px-16 lg:px-32 py-20">

// // //       <h1 className="text-3xl font-bold text-center text-gray-800">
// // //         Contact Me
// // //       </h1>

// // //       <p className="text-center text-gray-600 mt-2">
// // //         Feel free to reach out for any project or collaboration.
// // //       </p>

// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl space-y-6"
// // //       >
// // //         {/* Name */}
// // //         <div>
// // //           <label className="block mb-1 font-medium text-gray-700">
// // //             Full Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={form.name}
// // //             onChange={handleChange}
// // //             placeholder="Enter your name"
// // //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// // //           />
// // //         </div>

// // //         {/* Email */}
// // //         <div>
// // //           <label className="block mb-1 font-medium text-gray-700">
// // //             Email Address
// // //           </label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={form.email}
// // //             onChange={handleChange}
// // //             placeholder="Enter your email"
// // //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// // //           />
// // //         </div>

// // //         {/* Message */}
// // //         <div>
// // //           <label className="block mb-1 font-medium text-gray-700">
// // //             Message
// // //           </label>
// // //           <textarea
// // //             name="message"
// // //             value={form.message}
// // //             onChange={handleChange}
// // //             placeholder="Write your message..."
// // //             rows="5"
// // //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// // //           ></textarea>
// // //         </div>

// // //         {/* Submit */}
// // //         <button
// // //           type="submit"
// // //           className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
// // //         >
// // //           Send Message
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [status, setStatus] = useState(""); // Success/error message

// //   const handleChange = (e) => {
// //     setForm({
// //       ...form,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!form.name || !form.email || !form.message) {
// //       setStatus("Please fill all fields");
// //       return;
// //     }

// //     setStatus("Sending...");

// //     try {
// //       const res = await fetch("http://localhost:5000/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (data.success) {
// //         setStatus("Message sent successfully!");
// //         setForm({ name: "", email: "", message: "" });
// //       } else {
// //         setStatus("Failed to send message");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       setStatus("Server error");
// //     }
// //   };

// //   return (
// //     <div className="px-8 md:px-16 lg:px-32 py-20">
// //       <h1 className="text-3xl font-bold text-center text-gray-800">
// //         Contact Me
// //       </h1>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl space-y-6"
// //       >
// //         {/* Name */}
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="Enter your name"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// //           />
// //         </div>

// //         {/* Email */}
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">
// //             Email Address
// //           </label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             placeholder="Enter your email"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// //           />
// //         </div>

// //         {/* Message */}
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">
// //             Message
// //           </label>
// //           <textarea
// //             name="message"
// //             value={form.message}
// //             onChange={handleChange}
// //             placeholder="Write your message..."
// //             rows="5"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
// //           ></textarea>
// //         </div>

// //         {/* Status Message */}
// //         {status && (
// //           <p
// //             className={`text-center font-medium ${
// //               status.includes("success")
// //                 ? "text-green-600"
// //                 : status === "Sending..."
// //                 ? "text-indigo-600"
// //                 : "text-red-600"
// //             }`}
// //           >
// //             {status}
// //           </p>
// //         )}

// //         {/* Submit */}
// //         <button
// //           type="submit"
// //           className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
// //         >
// //           Send Message
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     try {
//       const res = await fetch(import.meta.env.VITE_API_URL + "/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (data.success) {
//         setStatus("Message sent!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send");
//       }
//     } catch (err) {
//       setStatus("Server error");
//     }
//   };

//   return (
//     <div className="py-20 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Contact</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="w-full border p-2" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
//         <input className="w-full border p-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
//         <textarea className="w-full border p-2" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}/>
//         <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
//       </form>
//       {status && <p className="mt-4">{status}</p>}
//     </div>
//   );
// }


import { useState } from "react";
// import { API_URL } from "../config";
const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (err) {
      console.log("Contact Error:", err);
      setStatus("Server error");
    }
  };

  return (
    <div className="py-20 max-w-2xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow border">

        <input
          className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <textarea
          rows="4"
          className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-gray-600 font-medium">
          {status}
        </p>
      )}
    </div>
  );
}
