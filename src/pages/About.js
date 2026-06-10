import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import { 
  Shield, Clock, Users, Award, Target, Leaf, 
  CheckCircle, Zap, Building2, Wrench
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const whyChooseUs = [
    { icon: Shield, title: '30+ Years of Engineering Expertise', description: 'Decades of combined experience in delivering complex projects' },
    { icon: Award, title: 'Quality-Focused Execution', description: 'Uncompromising commitment to construction quality and standards' },
    { icon: Users, title: 'Transparent Project Management', description: 'Clear communication and regular updates throughout the project' },
    { icon: Zap, title: 'Modern Construction Technology', description: 'Latest tools and techniques for efficient project delivery' },
    { icon: Leaf, title: 'Sustainable Building Practices', description: 'Eco-friendly construction methods and materials' },
    { icon: Clock, title: 'Timely Project Delivery', description: 'Proven track record of completing projects on schedule' },
    { icon: Target, title: 'End-to-End Project Solutions', description: 'Comprehensive services from planning to handover' },
    { icon: Building2, title: 'Professional Network of Experts', description: 'Access to specialized architects, engineers, and consultants' },
  ];

  const stats = [
    { value: '30+', label: 'Years Experience' },
    { value: '100+', label: 'Professional Associates' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="AURELIA is the construction and engineering division of Bluelite Corporate Services Pvt Ltd, delivering world-class construction solutions."
        keywords="about aurelia, construction company, engineering firm, Bluelite Corporate Services"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Who We Are - Engineering Excellence. Crafted for Generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  AURELIA is the construction and engineering division of <strong>Bluelite Corporate Services Pvt Ltd</strong>.
                </p>
                <p>
                  Our mission is to deliver world-class construction solutions through professional expertise, modern technology, and unwavering commitment to quality.
                </p>
                <p>
                  Our team consists of experienced engineers, architects, project consultants, construction professionals, and industry specialists dedicated to delivering projects that exceed expectations.
                </p>
                <p>
                  With a foundation built on integrity, innovation, and excellence, we transform visions into reality, creating landmarks that stand the test of time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Building2 className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">AURELIA</h3>
                  <p className="text-primary-700">Engineering Excellence</p>
                  <p className="text-primary-600 text-sm mt-2">A Brand of Bluelite Corporate Services Pvt Ltd</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose AURELIA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with a committed construction partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <Target className="w-12 h-12 text-primary-300 mb-4" />
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 text-lg">
                To become one of India's most trusted construction and engineering brands, recognized for innovation, quality, integrity, and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <Target className="w-12 h-12 text-primary-300 mb-4" />
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-gray-200 text-lg">
                To deliver exceptional projects that create lasting value for clients, communities, and future generations through engineering excellence and professional expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;