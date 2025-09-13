import React from 'react';
import { motion } from 'framer-motion';
import { TrafficCone as Traffic, Clock, AlertTriangle, TrendingUp, MapPin, Car, Bus, Bike, Activity } from 'lucide-react';

const colorMap = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", bar: "bg-blue-500" },
  green: { bg: "bg-green-100", text: "text-green-600", bar: "bg-green-500" },
  red: { bg: "bg-red-100", text: "text-red-600", bar: "bg-red-500" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", bar: "bg-purple-500" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600", bar: "bg-yellow-500" },
};

const TrafficManagement = () => {
  const trafficData = [
    { intersection: 'Main St & 5th Ave', delay: '2.3min', efficiency: 87, status: 'optimal' },
    { intersection: 'Broadway & Oak St', delay: '4.1min', efficiency: 72, status: 'moderate' },
    { intersection: 'Park Ave & 1st St', delay: '6.2min', efficiency: 58, status: 'congested' },
    { intersection: 'Center St & Elm Ave', delay: '1.8min', efficiency: 92, status: 'optimal' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6">
            <Traffic className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Traffic Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered traffic optimization using real-time data, predictive analytics, 
            and smart signal control to reduce congestion and improve urban mobility.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Clock, label: 'Avg. Wait Time', value: '3.2 min', change: '-15%', color: 'blue' },
            { icon: TrendingUp, label: 'Traffic Flow', value: '82%', change: '+12%', color: 'green' },
            { icon: AlertTriangle, label: 'Incidents', value: '14', change: '-8%', color: 'red' },
            { icon: Activity, label: 'System Health', value: '98%', change: '+2%', color: 'purple' }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${metric.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${metric.color}-600`} />
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    metric.change.startsWith('-') 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Live Traffic Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MapPin className="h-8 w-8 text-blue-600" />
            Live Intersection Status
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {trafficData.map((intersection, index) => (
                <motion.div
                  key={intersection.intersection}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{intersection.intersection}</h4>
                    <p className="text-sm text-gray-600">Average delay: {intersection.delay}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">{intersection.efficiency}%</div>
                      <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      intersection.status === 'optimal' ? 'bg-green-500' :
                      intersection.status === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traffic Distribution</h3>
              <div className="space-y-4">
                {[
                  { type: 'Cars', percentage: 68, icon: Car, color: 'blue' },
                  { type: 'Public Transit', percentage: 22, icon: Bus, color: 'green' },
                  { type: 'Bicycles', percentage: 10, icon: Bike, color: 'purple' }
                ].map((vehicle, index) => {
                  const Icon = vehicle.icon;
                  return (
                    <div key={vehicle.type} className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 text-${vehicle.color}-600`} />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{vehicle.type}</span>
                          <span className="text-sm text-gray-600">{vehicle.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${vehicle.percentage}%` }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                            className={`h-2 bg-${vehicle.color}-500 rounded-full`}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Smart Signal Control',
              description: 'AI algorithms adjust traffic light timing based on real-time traffic patterns and pedestrian flow.',
              features: ['Adaptive timing', 'Pedestrian detection', 'Emergency vehicle priority']
            },
            {
              title: 'Congestion Prediction',
              description: 'Machine learning models predict traffic bottlenecks and suggest alternative routes.',
              features: ['Real-time analysis', 'Historical data', 'Weather integration']
            },
            {
              title: 'Incident Management',
              description: 'Automated detection and response system for accidents and road hazards.',
              features: ['Automatic detection', 'Emergency dispatch', 'Quick response']
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {feature.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrafficManagement;
