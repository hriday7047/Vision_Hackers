
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";

// // function RegisterPage() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       alert("❌ Passwords do not match!");
// //       return;
// //     }
// //     alert("✅ Registration successful! Please log in.");
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-emerald-600">
// //       <motion.div
// //         className="bg-white p-8 rounded-2xl shadow-lg w-96"
// //         initial={{ opacity: 0, y: -40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         <h2 className="text-2xl font-bold mb-6 text-center">📝 Register</h2>
// //         <form onSubmit={handleRegister} className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             className="w-full px-4 py-2 border rounded-lg"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full px-4 py-2 border rounded-lg"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirm Password"
// //             className="w-full px-4 py-2 border rounded-lg"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <p className="mt-4 text-center">
// //           Already have an account?{" "}
// //           <span
// //             className="text-green-600 font-semibold cursor-pointer"
// //             onClick={() => navigate("/login")}
// //           >
// //             Login
// //           </span>
// //         </p>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default RegisterPage;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// function RegisterPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("❌ Passwords do not match!");
//       return;
//     }
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//   // Check if username already exists
//   if (existingUsers.find((u) => u.username === username)) {
//     alert("⚠ Username already exists! Choose another.");
//     return;
//   }

//   // Add new user
//   const newUser = { username, password };
//   existingUsers.push(newUser);
//   localStorage.setItem("users", JSON.stringify(existingUsers));

//   alert("✅ Registration successful! Please log in.");
//   navigate("/login");
// };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">
//       <motion.div
//         className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
//           Create Account ✨
//         </h2>
//         <form onSubmit={handleRegister} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Already have an account?{" "}
//           <span
//             className="text-green-600 font-semibold cursor-pointer hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// export default RegisterPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.find((u) => u.username === username)) {
      alert("⚠ Username already exists!");
      return;
    }

    existingUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("✅ Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">
      <motion.div
        className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          📝 Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
