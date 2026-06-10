// src/components/FloatingContact.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile-only floating buttons - visible only on screens smaller than lg */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden flex flex-col items-end space-y-3">
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            >
              <ChevronUp className="w-6 h-6 text-gray-700" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick action buttons */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.a
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: 20 }}
                transition={{ delay: 0.1 }}
                href="tel:+91XXXXXXXXXX"
                className="flex items-center space-x-3 bg-white rounded-full shadow-lg px-5 py-3 hover:bg-gray-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-700">Call Now</span>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </motion.a>
              
              <motion.a
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: 20 }}
                transition={{ delay: 0.2 }}
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20AURELIA,%20I%20would%20like%20to%20know%20more%20about%20your%20construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white rounded-full shadow-lg px-5 py-3 hover:bg-gray-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-all"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Phone className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>
    </>
  );
}

export default FloatingContact;