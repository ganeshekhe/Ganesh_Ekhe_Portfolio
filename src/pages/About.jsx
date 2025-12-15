// export default function About() {
//   return (
//     <div className="py-20 max-w-4xl mx-auto px-4">
//       <h1 className="text-4xl font-bold mb-6 text-gray-900">
//         About Me
//       </h1>

     
//       <p className="text-gray-700 leading-7 mb-4">
//   I’m a passionate <span className="font-semibold text-indigo-600">MERN Stack Developer</span> 
//   with a strong foundation in building modern, responsive, and user-friendly web applications.
//   Even though I am at the beginning of my professional journey, I have developed multiple 
//   real-world projects that strengthened my understanding of front-end and back-end development.
// </p>

// <p className="text-gray-700 leading-7 mb-4">
//   I enjoy learning new technologies, solving challenges, and writing clean and efficient code.
//   I have hands-on experience in working with React, Node.js, Express, and MongoDB, and I’m always 
//   eager to improve my skills and explore new tools and frameworks.
// </p>

// <p className="text-gray-700 leading-7 mb-4">
//   I believe in continuous learning and building projects that not only work well but also deliver 
//   a smooth and meaningful user experience. My goal is to grow as a developer and contribute to 
//   impactful digital solutions.
// </p>

//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 space-y-6"
        >

          <p className="text-gray-700 leading-8 text-lg">
            I’m a passionate{" "}
            <span className="font-semibold text-indigo-600">
              MERN Stack Developer
            </span>{" "}
            with a strong foundation in building modern, responsive, and
            user-friendly web applications. Even though I am at the beginning
            of my professional journey, I have developed multiple real-world
            projects that strengthened my understanding of both front-end and
            back-end development.
          </p>

          <p className="text-gray-700 leading-8 text-lg">
            I enjoy learning new technologies, solving challenges, and writing
            clean and efficient code. I have hands-on experience working with{" "}
            <span className="font-medium text-gray-900">
              React, Node.js, Express, and MongoDB
            </span>
            , and I’m always eager to improve my skills while exploring new
            tools and frameworks.
          </p>

          <p className="text-gray-700 leading-8 text-lg">
            I strongly believe in{" "}
            <span className="font-medium text-indigo-600">
              continuous learning
            </span>{" "}
            and building applications that not only work efficiently but also
            provide a smooth and meaningful user experience. My goal is to grow
            as a developer and contribute to impactful digital solutions.
          </p>

          {/* HIGHLIGHT STRIP */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-center text-gray-800 font-medium text-lg">
              🚀 Focused on building scalable, clean & user-centric web
              applications
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
