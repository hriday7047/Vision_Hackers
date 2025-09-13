// // pages/AboutPage.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const AboutPage = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden">
//       {/* Floating particles (like HomePage) */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full"
//             animate={{
//               x: [0, Math.random() * 100, 0],
//               y: [0, Math.random() * 100, 0],
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Card */}
//       <motion.div
//         className="relative z-10 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-2xl text-center"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           We are a passionate team of innovators working on{" "}
//           <span className="font-semibold text-indigo-600">Smart City Solutions</span> 🚀.
//           <br /> <br />
//           Our mission is to make urban living more sustainable, efficient, and
//           people-friendly by combining <strong>AI</strong>, <strong>IoT</strong>,
//           and <strong>data-driven planning</strong>.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutPage;

// pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

// Import local images (put 4 images in src/assets/)
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";

const team = [
  {
    name: "Saptarshi Maity",
    role: "Frontend Learner",
    skills: "React, Tailwind, JavaScript",
    img: member1,
  },
  {
    name: "Hriday Kumar Maji",
    role: "Backend Learner",
    skills: "Node.js, Express, MongoDB",
    img: member2,
  },
  {
    name: "Subhojit Ghosh",
    role: "UI/UX Designer",
    skills: "Figma, Photoshop, Prototyping",
    img: member3,
  },
  {
    name: "Soumayadip Roy",
    role: "Data Analyst",
    skills: "Python, SQL, Power BI",
    img: member4,
  },
];

const AboutPage = () => {
  return (
    <PageWrapper>
      <motion.div
        className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800">👥 Meet Our Team</h1>
        <p className="text-lg text-gray-700 mb-10">
          We are a passionate group of innovators working on{" "}
          <span className="font-semibold text-indigo-600">Smart City Solutions</span>.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-indigo-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.skills}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default AboutPage;
