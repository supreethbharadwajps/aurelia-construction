// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">AURELIA</h3>
            <p className="text-gray-400 mb-4">
              Engineering Excellence. Crafted for Generations.
            </p>
            <p className="text-gray-400 mb-4">
              A Brand of Bluelite Corporate Services Pvt Ltd
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/approach" className="text-gray-400 hover:text-primary-400 transition-colors">Our Approach</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-primary-400 transition-colors">Quality & Safety</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#residential" className="text-gray-400 hover:text-primary-400 transition-colors">Residential Construction</Link></li>
              <li><Link to="/services#commercial" className="text-gray-400 hover:text-primary-400 transition-colors">Commercial Construction</Link></li>
              <li><Link to="/services#industrial" className="text-gray-400 hover:text-primary-400 transition-colors">Industrial Projects</Link></li>
              <li><Link to="/services#design" className="text-gray-400 hover:text-primary-400 transition-colors">Design & Build</Link></li>
              <li><Link to="/services#infrastructure" className="text-gray-400 hover:text-primary-400 transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1" />
                <span className="text-gray-400">Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400" />
                <a href="mailto:info@bluelite.in" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@bluelite.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AURELIA - Bluelite Corporate Services Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;