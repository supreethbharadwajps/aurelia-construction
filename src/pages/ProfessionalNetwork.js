// src/pages/ProfessionalNetwork.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Users, UserPlus, Building2, PenTool, 
  HardHat, Truck, ArrowRight, CheckCircle 
} from 'lucide-react';

const ProfessionalNetwork = () => {
  const networkCategories = [
    {
      icon: PenTool,
      title: 'Architects',
      description: 'Join our design network',
      link: '/register/architect',
      color: 'bg-blue-500'
    },
    {
      icon: HardHat,
      title: 'Engineers',
      description: 'Engineering excellence starts here',
      link: '/register/engineer',
      color: 'bg-green-500'
    },
    {
      icon: Truck,
      title: 'Contractors & Vendors',
      description: 'Build success together',
      link: '/register/contractor',
      color: 'bg-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Access to Projects',
      description: 'Get opportunities to work on prestigious construction projects across various sectors.'
    },
    {
      title: 'Professional Growth',
      description: 'Expand your portfolio and gain experience working with industry leaders.'
    },
    {
      title: 'Long-Term Partnerships',
      description: 'Build lasting professional relationships and become a trusted partner.'
    },
    {
      title: 'Resource Sharing',
      description: 'Access to shared resources, knowledge base, and technical expertise.'
    },
    {
      title: 'Brand Association',
      description: 'Associate with a premium construction brand and enhance your professional credibility.'
    },
    {
      title: 'Business Development',
      description: 'Grow your business through consistent project flow and referrals.'
    }
  ];

  return (
    <>
      <SEO 
        title="Professional Network"
        description="Partner with AURELIA's professional network of architects, engineers, contractors, and suppliers for construction excellence."
        keywords="professional network, architect registration, engineer registration, contractor partnership"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Professional Network
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Partnering with Industry Experts to Deliver Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Building Success Together
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At AURELIA, we believe great projects are built by great professionals. 
                Our collaborative ecosystem brings together the best talent in the industry.
              </p>
            </motion.div>
          </div>

          {/* Network Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {networkCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Benefits of Joining Our Network
            </h2>
            <p className="text-xl text-gray-600">
              Why professionals choose to partner with AURELIA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our growing network of professionals and be part of exceptional projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register/architect" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Register as Architect
              </Link>
              <Link to="/register/engineer" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Register as Engineer
              </Link>
              <Link to="/register/contractor" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Register as Contractor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalNetwork;