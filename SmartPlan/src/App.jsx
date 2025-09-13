// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import RegisterPage from "./pages/RegisterPage";
// import HomePage from './pages/HomePage';
// import LoginPage from "./pages/LoginPage";
// import TrafficManagement from './pages/TrafficManagement';
// import UrbanDevelopment from './pages/UrbanDevelopment';
// import SmartInfrastructure from './pages/SmartInfrastructure';
// import EnvironmentalSolutions from './pages/EnvironmentalSolutions';
// import DataAnalytics from './pages/DataAnalytics';
// import Navigation from './components/Navigation';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//         <Navigation />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Routes>
//             {/* <Route path="/" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} /> */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/traffic" element={<TrafficManagement />} />
//             <Route path="/urban" element={<UrbanDevelopment />} />
//             <Route path="/infrastructure" element={<SmartInfrastructure />} />
//             <Route path="/environment" element={<EnvironmentalSolutions />} />
//             <Route path="/analytics" element={<DataAnalytics />} />
//           </Routes>
//         </motion.div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';import { motion } from 'framer-motion';
import RegisterPage from "./pages/RegisterPage";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TrafficManagement from './pages/TrafficManagement';
import UrbanDevelopment from './pages/UrbanDevelopment';
import SmartInfrastructure from './pages/SmartInfrastructure';
import EnvironmentalSolutions from './pages/EnvironmentalSolutions';
import DataAnalytics from './pages/DataAnalytics';
import Navigation from './components/Navigation';
// import AuthLayout from "../components/AuthLayout";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const PrivateRoute = ({ children }) => {
    const location = useLocation();
    return isAuthenticated ? children : <Navigate to={`/login?redirect=${location.pathname}`} />;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Protected Pages */}
            <Route path="/traffic" element={<PrivateRoute><TrafficManagement /></PrivateRoute>} />
            <Route path="/urban" element={<PrivateRoute><UrbanDevelopment /></PrivateRoute>} />
            <Route path="/infrastructure" element={<PrivateRoute><SmartInfrastructure /></PrivateRoute>} />
            <Route path="/environment" element={<PrivateRoute><EnvironmentalSolutions /></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute><DataAnalytics /></PrivateRoute>} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;

