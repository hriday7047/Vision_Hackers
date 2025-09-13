import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrafficCone as Traffic, Building, Zap, Leaf, BarChart3, ArrowRight, Users, Car, TreePine, Wifi } from 'lucide-react';

const HomePage = () => {
  const [stats, setStats] = useState({
    population: 0,
    traffic: 0,
    energy: 0,
    greenSpace: 0
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);


  useEffect(() => {
    const animateStats = () => {
      const targets = { population: 2.5, traffic: 85, energy: 92, greenSpace: 65 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          population: Number((targets.population * progress).toFixed(1)),
          traffic: Math.floor(targets.traffic * progress),
          energy: Math.floor(targets.energy * progress),
          greenSpace: Math.floor(targets.greenSpace * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    animateStats();
  }, []);

  const features = [
    {
      icon: Traffic,
      title: 'Traffic Management',
      description: 'AI-powered traffic optimization, smart signals, and real-time monitoring systems.',
      link: '/traffic',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Building,
      title: 'Urban Development',
      description: 'Sustainable city planning, zoning optimization, and infrastructure development.',
      link: '/urban',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Smart Infrastructure',
      description: 'IoT sensors, smart grids, and connected urban systems for efficiency.',
      link: '/infrastructure',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Leaf,
      title: 'Environmental Solutions',
      description: 'Green technology, air quality monitoring, and sustainability initiatives.',
      link: '/environment',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Real-time insights, predictive modeling, and performance dashboards.',
      link: '/analytics',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        {isVideoOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="relative bg-black rounded-xl shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
      
      {/* Close Button */}
<button
  onClick={() => setIsVideoOpen(false)}
  className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg z-50"
>
  ✕
</button>


      <div className="aspect-w-16 aspect-h-9">
          <div className="aspect-w-16 aspect-h-9">
              <video
              className="w-full h-full rounded-lg"
              src="/demo.mp4"
              controls
  />
        </div>

      </div>
    </div>
  </div>
)}

        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Smart City Planning
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
          >
            Transforming urban landscapes through intelligent technology, sustainable development, 
            and data-driven solutions for tomorrow's cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              to="/traffic"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 group"
            >
              Explore Solutions
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button onClick={() => setIsVideoOpen(true)}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
>           Watch Demo
            </button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-blue-200 mr-2" />
                <span className="text-3xl font-bold">{stats.population}M</span>
              </div>
              <p className="text-blue-200">Population Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Car className="h-8 w-8 text-green-200 mr-2" />
                <span className="text-3xl font-bold">{stats.traffic}%</span>
              </div>
              <p className="text-green-200">Traffic Efficiency</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-yellow-200 mr-2" />
                <span className="text-3xl font-bold">{stats.energy}%</span>
              </div>
              <p className="text-yellow-200">Energy Savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TreePine className="h-8 w-8 text-green-200 mr-2" />
                <span className="text-3xl font-bold">{stats.greenSpace}%</span>
              </div>
              <p className="text-green-200">Green Spaces</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our integrated approach to urban challenges through innovative technology 
              and sustainable practices that create livable, efficient cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
  {/* Traffic */}
  <Link to="/traffic">
  <div className="rounded-2xl p-[2px] bg-gradient-to-r from-transparent to-transparent hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition hover:scale-105">
    <div className="bg-white rounded-2xl p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800">🚦 Traffic Management</h3>
      <p className="text-gray-600 text-sm">Smart systems for smoother traffic flow</p>
    </div>
  </div>
</Link>


  {/* Urban */}
  <Link to="/urban">
  <div className="rounded-2xl p-[2px] bg-gradient-to-r from-transparent to-transparent hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition hover:scale-105">
    <div className="bg-white rounded-2xl p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800">🏙 Urban Development</h3>
      <p className="text-gray-600 text-sm">Sustainable planning for modern cities</p>
    </div>
  </div>
</Link>


  {/* Infrastructure */}
  <Link to="/infrastructure">
    <div className="rounded-2xl p-[2px] bg-gradient-to-r from-transparent to-transparent hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition hover:scale-105">
      <div className="bg-white rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">🏗 Smart Infrastructure</h3>
        <p className="text-gray-600 text-sm">AI-powered urban infrastructure</p>
      </div>
    </div>
  </Link>

  {/* Environment */}
  <Link to="/environment">
    <div className="rounded-2xl p-[2px] bg-gradient-to-r from-transparent to-transparent hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition hover:scale-105">
      <div className="bg-white rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">🌱 Environmental Solutions</h3>
        <p className="text-gray-600 text-sm">Green and sustainable initiatives</p>
      </div>
    </div>
  </Link>

  {/* Analytics */}
  <Link to="/analytics">
    <div className="rounded-2xl p-[2px] bg-gradient-to-r from-transparent to-transparent hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition hover:scale-105">
      <div className="bg-white rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">📊 Data Analytics</h3>
        <p className="text-gray-600 text-sm">Real-time urban data insights</p>
      </div>
    </div>
  </Link>
</div>


        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Addressing Urban Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Modern cities face complex problems that require intelligent, integrated solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Urban Problems</h3>
              <div className="space-y-6">
                {[
                  'Traffic congestion costs $87 billion annually',
                  'Air pollution affects 80% of urban population',
                  'Energy waste in buildings reaches 30%',
                  'Urban flooding increases by 40% decade',
                  'Digital divide affects 21% of city residents'
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Smart City Solutions</h3>
              <div className="space-y-6">
                {[
                  'AI traffic optimization reduces delays by 25%',
                  'Smart sensors improve air quality monitoring',
                  'IoT systems cut energy consumption by 30%',
                  'Predictive analytics prevent flood damage',
                  'Digital infrastructure bridges connectivity gaps'
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
