// src/pages/QualitySafety.js
import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Shield, CheckCircle, Leaf, Scale, 
  HardHat, AlertTriangle, Award, Heart
} from 'lucide-react';

const QualitySafety = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control procedures at every stage of construction, from material selection to final finishing.',
      points: ['ISO standard processes', 'Material testing', 'Regular inspections', 'Documentation']
    },
    {
      icon: HardHat,
      title: 'Site Safety',
      description: 'Comprehensive safety protocols and training to ensure zero accidents and a secure work environment.',
      points: ['Safety training', 'PPE compliance', 'Emergency protocols', 'Regular audits']
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Sustainable construction practices that minimize environmental impact and promote green building.',
      points: ['Waste management', 'Energy efficiency', 'Water conservation', 'Green materials']
    },
    {
      icon: Scale,
      title: 'Regulatory Compliance',
      description: 'Strict adherence to all local, state, and national building codes and regulations.',
      points: ['Building codes', 'Legal compliance', 'Permits & approvals', 'Documentation']
    }
  ];

  return (
    <>
      <SEO 
        title="Quality & Safety"
        description="AURELIA's commitment to quality assurance, site safety, environmental responsibility, and regulatory compliance in construction."
        keywords="quality construction, safety standards, environmental responsibility, building compliance"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Quality & Safety
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Commitment Beyond Construction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every project is executed with strict quality control procedures and industry-standard safety practices. 
                Our commitment to excellence goes beyond construction.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Commitment Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Award, value: '100%', label: 'Quality Compliance' },
              { icon: Shield, value: '0', label: 'Safety Incidents' },
              { icon: Heart, value: '100%', label: 'Client Satisfaction' },
              { icon: Leaf, value: 'Eco', label: 'Friendly Practices' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default QualitySafety;