// src/pages/Careers.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Briefcase, Mail, Star, Users, TrendingUp, 
  Heart, Coffee, Award, ArrowRight 
} from 'lucide-react';

const Careers = () => {
  const benefits = [
    { icon: Star, title: 'Growth Opportunities', description: 'Continuous learning and career advancement' },
    { icon: Users, title: 'Collaborative Culture', description: 'Work with industry experts and professionals' },
    { icon: TrendingUp, title: 'Challenging Projects', description: 'Engage in landmark construction projects' },
    { icon: Heart, title: 'Work-Life Balance', description: 'Supportive environment for personal well-being' },
    { icon: Coffee, title: 'Great Environment', description: 'Modern workspace and positive atmosphere' },
    { icon: Award, title: 'Recognition', description: 'Your contributions are valued and rewarded' },
  ];

  const openings = [
    {
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '8+ years'
    },
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '3-5 years'
    },
    {
      title: 'Architect',
      department: 'Design',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '5+ years'
    },
    {
      title: 'Site Supervisor',
      department: 'Construction',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '2-4 years'
    },
    {
      title: 'Quality Control Engineer',
      department: 'Quality',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '4-6 years'
    },
    {
      title: 'Procurement Manager',
      department: 'Supply Chain',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: '5+ years'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers"
        description="Build your career with AURELIA. Join our team of construction professionals and work on landmark projects."
        keywords="construction careers, engineering jobs, architecture jobs, Bangalore jobs"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Careers
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Build Your Future With AURELIA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Why Join AURELIA?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are always looking for talented professionals who are passionate about 
                construction, engineering, architecture, and project management.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to work with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Don't See a Suitable Opening?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Send your profile to us and we'll keep you in mind for future opportunities
            </p>
            <a
              href="mailto:careers@bluelite.in"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>careers@bluelite.in</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;