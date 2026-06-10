// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Return to AURELIA Construction homepage."
        keywords="404, page not found, error"
      />

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Home size={20} />
                <span>Back to Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;