import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Wifi, 
  Building2, 
  Cpu, 
  Activity,
  Droplets,
  Shield,
  Server
} from 'lucide-react';

const SmartInfrastructure = () => {
  const systems = [
    {
      name: 'Smart Grid',
      icon: Zap,
      status: 'Operational',
      efficiency: 94,
      description: 'Intelligent energy distribution and monitoring system',
      color: 'yellow'
    },
    {
      name: 'IoT Network',
      icon: Wifi,
      status: 'Expanding',
      efficiency: 88,
      description: 'City-wide IoT sensors and connectivity infrastructure',
      color: 'blue'
    },
    {
      name: 'Water Management',
      icon: Droplets,
      status: 'Stable',
      efficiency: 91,
      description: 'Smart water distribution and conservation system',
      color: 'cyan'
    },
    {
      name: 'Security Systems',
      icon: Shield,
      status: 'Operational',
      efficiency: 97,
      description: 'AI-powered surveillance and emergency response',
      color: 'red'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Infrastructure Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connected systems and IoT integration for efficient resource management, 
            enhanced safety, and improved quality of urban life.
          </p>
        </motion.div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${system.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${system.color}-600`} />
                  </div>
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    system.status === 'Operational' ? 'bg-green-100 text-green-700' :
                    system.status === 'Expanding' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {system.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{system.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Efficiency</span>
                  <span className="font-semibold text-gray-900">{system.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${system.efficiency}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className={`h-2 bg-${system.color}-500 rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Integration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Central Control System',
                desc: 'Unified platform for monitoring and managing all city systems'
              },
              {
                icon: Server,
                title: 'Data Infrastructure',
                desc: 'Robust cloud-based storage and processing capabilities'
              },
              {
                icon: Activity,
                title: 'Real-time Monitoring',
                desc: 'Continuous data collection and analysis from all systems'
              },
              {
                icon: Zap,
                title: 'Energy Optimization',
                desc: 'AI-powered optimization of energy consumption across systems'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Our smart infrastructure strategy focuses on creating a connected ecosystem where 
            technology and sustainability work hand in hand. We envision cities where resources 
            are optimized, systems are resilient, and quality of life is enhanced through 
            intelligent design and continuous innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SmartInfrastructure;
