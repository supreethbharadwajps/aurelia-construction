// src/pages/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Home, Building2, Factory, Wrench, 
  Construction, CheckCircle, ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Construction',
      description: 'Creating elegant homes that combine comfort, luxury, and functionality.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      items: [
        'Luxury Villas',
        'Premium Apartments',
        'Independent Houses',
        'Farmhouses',
        'Gated Communities',
        'Renovation & Redevelopment'
      ]
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Developing spaces that empower businesses to grow.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      items: [
        'Office Buildings',
        'Retail Complexes',
        'Shopping Centres',
        'Hospitality Projects',
        'Educational Institutions',
        'Corporate Campuses'
      ]
    },
    {
      id: 'industrial',
      icon: Factory,
      title: 'Industrial Construction',
      description: 'Delivering efficient and durable industrial facilities.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      items: [
        'Warehouses',
        'Manufacturing Units',
        'Logistics Facilities',
        'Industrial Sheds',
        'Factory Buildings'
      ]
    },
    {
      id: 'design',
      icon: Wrench,
      title: 'Design & Build',
      description: 'Comprehensive solutions from concept to completion.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      items: [
        'Architectural Design',
        'Structural Design',
        'Interior Design',
        'MEP Services',
        'Project Planning',
        'Construction Management'
      ]
    },
    {
      id: 'infrastructure',
      icon: Construction,
      title: 'Infrastructure Development',
      description: 'Building foundations for future growth.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      items: [
        'Site Development',
        'Roads & Drainage',
        'Utility Infrastructure',
        'Public Works',
        'Institutional Projects'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive construction services including residential, commercial, industrial, design & build, and infrastructure development."
        keywords="construction services, residential construction, commercial construction, industrial projects, design and build"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976590-713941681591?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive construction solutions from concept to completion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mb-20 last:mb-0 ${index % 2 === 0 ? '' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Include:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a free consultation
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;