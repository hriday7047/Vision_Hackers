import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TreePine, 
  Wind, 
  Droplets, 
  Sun, 
  Recycle, 
  Factory, 
  ThermometerSun 
} from 'lucide-react';

const EnvironmentalSolutions = () => {
  const initiatives = [
    {
      name: 'Air Quality Monitoring',
      icon: Wind,
      status: 'Active',
      coverage: 85,
      description: 'Real-time monitoring of air quality across the city',
      color: 'blue'
    },
    {
      name: 'Green Spaces',
      icon: TreePine,
      status: 'Expanding',
      coverage: 62,
      description: 'Development and maintenance of parks and green areas',
      color: 'green'
    },
    {
      name: 'Water Conservation',
      icon: Droplets,
      status: 'Active',
      coverage: 78,
      description: 'Smart water management and recycling initiatives',
      color: 'cyan'
    },
    {
      name: 'Renewable Energy',
      icon: Sun,
      status: 'Active',
      coverage: 56,
      description: 'Integration of solar and wind power into the grid',
      color: 'yellow'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Leaf className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Environmental Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable practices and green initiatives for cleaner air, water 
            conservation, and renewable energy integration.
          </p>
        </motion.div>

        {/* Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${initiative.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${initiative.color}-600`} />
                  </div>
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    initiative.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{initiative.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Coverage</span>
                  <span className="font-semibold text-gray-900">{initiative.coverage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${initiative.coverage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className={`h-2 bg-${initiative.color}-500 rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Environmental Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Environmental Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Factory,
                title: 'Air Pollution',
                desc: 'Industrial emissions and traffic contribute to poor air quality'
              },
              {
                icon: Droplets,
                title: 'Water Management',
                desc: 'Increasing demand and climate change impact water resources'
              },
              {
                icon: ThermometerSun,
                title: 'Climate Change',
                desc: 'Rising temperatures and extreme weather events'
              },
              {
                icon: Recycle,
                title: 'Waste Management',
                desc: 'Growing urban populations generate more waste than systems can handle'
              }
            ].map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Goals</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to creating a sustainable urban environment where nature and 
            technology coexist. Our focus is on reducing emissions, increasing renewable 
            energy adoption, expanding green spaces, and implementing circular economy 
            principles for waste management.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnvironmentalSolutions;
