// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X, Building2 } from 'lucide-react';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/traffic', label: 'Traffic Management' },
//     { path: '/urban', label: 'Urban Development' },
//     { path: '/infrastructure', label: 'Infrastructure' },
//     { path: '/environment', label: 'Environment' },
//     { path: '/analytics', label: 'Analytics' }
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <Building2 className="h-8 w-8 text-blue-600" />
//             <span className="font-bold text-xl text-gray-900">SmartCity</span>
//           </Link>

//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`relative px-3 py-2 text-sm font-medium transition-colors ${
//                   location.pathname === item.path
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {item.label}
//                 {location.pathname === item.path && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="md:hidden bg-white border-b border-gray-200"
//         >
//           <div className="px-4 py-2 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   location.pathname === item.path
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navigation;

// components/Navigation.jsx

import { Link, useNavigate } from "react-router-dom";

function Navigation({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">🏙️ SmartCity</span>
      </div>

      {/* Center Nav Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/traffic">Traffic Management</Link>
        <Link to="/urban">Urban Development</Link>
        <Link to="/infrastructure">Infrastructure</Link>
        <Link to="/environment">Environment</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right Side: Auth Buttons */}
      <div>
        {isAuthenticated ? (
          <button
            onClick={() => {
              onLogout();
              navigate("/");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
