import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Activity, 
  Database, 
  Cpu, 
  Globe, 
  TrendingUp 
} from 'lucide-react';

const DataAnalytics = () => {
  const datasets = [
    {
      name: 'Traffic Flow Analysis',
      icon: LineChart,
      status: 'Real-time',
      coverage: 92,
      description: 'Monitoring and predicting traffic patterns across major routes',
      color: 'blue'
    },
    {
      name: 'Energy Consumption',
      icon: Activity,
      status: 'Daily',
      coverage: 87,
      description: 'Tracking energy usage and identifying optimization opportunities',
      color: 'yellow'
    },
    {
      name: 'Population Density',
      icon: Globe,
      status: 'Quarterly',
      coverage: 78,
      description: 'Analyzing urban population distribution and movement',
      color: 'green'
    },
    {
      name: 'Resource Utilization',
      icon: Database,
      status: 'Weekly',
      coverage: 83,
      description: 'Data on water, waste, and essential services consumption',
      color: 'purple'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
            <BarChart3 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Urban Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harnessing big data and AI to optimize city operations, predict trends, 
            and support sustainable urban development.
          </p>
        </motion.div>

        {/* Datasets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {datasets.map((dataset, index) => {
            const Icon = dataset.icon;
            return (
              <motion.div
                key={dataset.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${dataset.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${dataset.color}-600`} />
                  </div>
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">
                    {dataset.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dataset.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dataset.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Coverage</span>
                  <span className="font-semibold text-gray-900">{dataset.coverage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${dataset.coverage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className={`h-2 bg-${dataset.color}-500 rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Cpu,
                title: 'AI Predictions',
                desc: 'Machine learning models for traffic, energy, and population trends'
              },
              {
                icon: PieChart,
                title: 'Resource Allocation',
                desc: 'Optimizing distribution of city resources based on usage data'
              },
              {
                icon: LineChart,
                title: 'Trend Analysis',
                desc: 'Identifying and forecasting urban development patterns'
              },
              {
                icon: TrendingUp,
                title: 'Performance Metrics',
                desc: 'Monitoring KPIs and city efficiency indicators'
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
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
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

        {/* Future Outlook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Outlook</h2>
          <p className="text-gray-600 leading-relaxed">
            The future of smart cities lies in data-driven decision making. By leveraging 
            advanced analytics, AI, and real-time monitoring, we can create urban 
            environments that are more efficient, sustainable, and responsive to the 
            needs of their citizens.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalytics;
