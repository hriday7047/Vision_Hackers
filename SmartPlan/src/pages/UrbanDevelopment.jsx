import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Home, 
  Trees, 
  Users,
  MapPin,
  TrendingUp,
  Zap,
  Droplets
} from 'lucide-react';

const UrbanDevelopment = () => {
  const projects = [
    {
      name: 'Green District Phase 1',
      type: 'Residential',
      status: 'In Progress',
      completion: 65,
      units: 450,
      greenSpace: 35
    },
    {
      name: 'Tech Hub Development',
      type: 'Commercial',
      status: 'Planning',
      completion: 15,
      units: 25,
      greenSpace: 20
    },
    {
      name: 'Riverside Park Extension',
      type: 'Recreation',
      status: 'Completed',
      completion: 100,
      units: 0,
      greenSpace: 85
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Building className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Urban Development Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic city planning that balances growth with sustainability, creating 
            livable communities through smart zoning, infrastructure, and green spaces.
          </p>
        </motion.div>

        {/* Development Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Building, label: 'Active Projects', value: '23', trend: '+5', color: 'blue' },
            { icon: Home, label: 'Housing Units', value: '8,450', trend: '+12%', color: 'green' },
            { icon: Trees, label: 'Green Coverage', value: '42%', trend: '+8%', color: 'emerald' },
            { icon: Users, label: 'Population Growth', value: '3.2%', trend: '+0.8%', color: 'purple' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <span className="text-sm font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Active Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MapPin className="h-8 w-8 text-blue-600" />
            Active Development Projects
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.type} Development</p>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      {project.units > 0 && (
                        <div>
                          <p className="text-gray-500">Units</p>
                          <p className="font-semibold text-gray-900">{project.units}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-gray-500">Green Space</p>
                        <p className="font-semibold text-gray-900">{project.greenSpace}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Progress</p>
                        <p className="font-semibold text-gray-900">{project.completion}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Completion</span>
                      <span className="text-sm text-gray-600">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.completion}%` }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                        className={`h-3 rounded-full ${
                          project.completion === 100 ? 'bg-green-500' :
                          project.completion >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Planning Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Design Principles</h3>
            <div className="space-y-4">
              {[
                'Mixed-use development to reduce commuting',
                'Green building standards and certifications',
                'Walkable neighborhoods with bike lanes',
                'Public transportation integration',
                'Renewable energy infrastructure',
                'Water management and conservation'
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{principle}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Infrastructure</h3>
            <div className="space-y-6">
              {[
                { icon: Zap, title: 'Smart Grid', desc: 'Efficient energy distribution and monitoring' },
                { icon: Droplets, title: 'Water Systems', desc: 'Smart water management and conservation' },
                { icon: TrendingUp, title: 'Data Analytics', desc: 'Usage patterns and optimization insights' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Our urban development vision integrates sustainability, technology, and inclusivity 
            to build thriving communities. We aim to achieve a balance between growth and 
            environmental responsibility while leveraging smart solutions to enhance quality of life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UrbanDevelopment;
