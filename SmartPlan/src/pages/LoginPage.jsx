// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();


//     if (username === "Vision_Hackers" && password === "hackathon2025") {
//       alert("Login successful ✅");
//       navigate("/home");
//     } else {
//       alert("Invalid credentials ❌");
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
//       <form
//         onSubmit={handleLogin}
//         style={{
//           padding: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "10px",
//           width: "300px",
//           backgroundColor: "#f9f9f9"
//         }}
//       >
//         <h2>🔐 Login</h2>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             background: "blue",
//             color: "white",
//             border: "none",
//             borderRadius: "5px"
//           }}
//         >
//           Login
//         </button>

//         <p style={{ marginTop: "15px", textAlign: "center" }}>
//           Don’t have an account?{" "}
//           <span
//             style={{ color: "blue", cursor: "pointer" }}
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

// LoginPage.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate, useLocation } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       onLogin();
//       // redirect to intended page or home
//       const params = new URLSearchParams(location.search);
//       const redirectPath = params.get("redirect") || "/";
//       navigate(redirectPath);
//     } else {
//       alert("Please enter username and password");
//     }
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//   // Find match
//   const user = existingUsers.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     onLogin();
//     const params = new URLSearchParams(location.search);
//     const redirectPath = params.get("redirect") || "/";
//     navigate(redirectPath);
//   } else {
//     alert("❌ Invalid username or password!");
//   }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
//       <motion.div
//         className="bg-white p-8 rounded-2xl shadow-lg w-96"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">🔒 Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full px-4 py-2 border rounded-lg"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded-lg"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don’t have an account?{" "}
//           <a href="/register" className="text-indigo-600 font-semibold">
//             Register
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin();
      const params = new URLSearchParams(location.search);
      const redirectPath = params.get("redirect") || "/";
      navigate(redirectPath);
    } else {
      alert("❌ Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🔒 Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm">
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/register" className="text-indigo-600 hover:underline">
            Create Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
