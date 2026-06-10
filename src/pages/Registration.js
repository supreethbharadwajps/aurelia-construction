// src/pages/Registration.js - COMPLETE FILE
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const registrationTypes = {
  architect: {
    title: 'Architect Registration',
    description: 'Join Our Design Network',
    categories: [
      'Residential Architects',
      'Commercial Architects',
      'Interior Designers',
      'Landscape Architects',
      'Urban Planning Consultants',
    ],
    requirements: [
      'Qualification Details',
      'Professional License',
      'Years of Experience',
      'Portfolio of Projects',
      'Service Locations',
      'Contact Information',
    ],
  },
  engineer: {
    title: 'Engineer Registration',
    description: 'Engineering Excellence Starts Here',
    categories: [
      'Civil Engineers',
      'Structural Engineers',
      'Electrical Engineers',
      'Mechanical Engineers',
      'MEP Consultants',
      'Geotechnical Engineers',
      'Project Engineers',
    ],
    requirements: [
      'Qualification Certificates',
      'Professional Registration',
      'Work Experience',
      'Technical Expertise',
      'Previous Projects',
      'Contact Information',
    ],
  },
  contractor: {
    title: 'Contractor & Vendor Registration',
    description: 'Build Success Together',
    categories: [
      'Civil Contractors',
      'Electrical Contractors',
      'Plumbing Contractors',
      'Interior Contractors',
      'Fabrication Contractors',
      'Material Suppliers',
      'Equipment Providers',
    ],
    benefits: [
      'Access to New Projects',
      'Long-Term Partnerships',
      'Professional Recognition',
      'Business Growth Opportunities',
    ],
  },
};

const schema = yup.object().shape({
  companyName: yup.string().required('Company/Individual name is required'),
  contactPerson: yup.string().required('Contact person name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  category: yup.string().required('Please select a category'),
  experience: yup.string().required('Years of experience is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required').min(20),
  agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
});

function Registration() {
  const { type } = useParams();
  const [file, setFile] = useState(null);
  const registration = registrationTypes[type] || registrationTypes.architect;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log('Form data:', data);
    toast.success('Registration received! We will review your application.');
    reset();
    setFile(null);
  };

  const items = registration.requirements || registration.benefits || [];

  return (
    <div>
      <SEO 
        title={registration.title}
        description={registration.description}
        keywords={`${type}, registration, construction, professional network`}
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              {registration.title}
            </h1>
            <p className="text-xl text-gray-200">{registration.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {registration.categories.map((category, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements/Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {registration.requirements ? 'Requirements' : 'Benefits'}
              </h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Types</h3>
              <div className="space-y-2">
                <Link
                  to="/register/architect"
                  className="block p-3 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                >
                  Architect Registration
                </Link>
                <Link
                  to="/register/engineer"
                  className="block p-3 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                >
                  Engineer Registration
                </Link>
                <Link
                  to="/register/contractor"
                  className="block p-3 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                >
                  Contractor & Vendor Registration
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Registration Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Individual Name *
                  </label>
                  <input
                    {...register('companyName')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    {...register('contactPerson')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  {errors.contactPerson && <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select category</option>
                    {registration.categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    {...register('experience')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="e.g., 5 years"
                  />
                  {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  {...register('location')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="City, State"
                />
                {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio / Previous Projects *
                </label>
                <textarea
                  {...register('description')}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                  placeholder="Describe your experience and notable projects..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Portfolio/Certificates
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Drag and drop files here or click to browse</p>
                  <p className="text-sm text-gray-500">PDF, DOC, Images (Max 10MB)</p>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700 transition-colors"
                  >
                    Browse Files
                  </label>
                  {file && (
                    <p className="mt-2 text-sm text-green-600">Selected: {file.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start">
                <input
                  {...register('agreeToTerms')}
                  type="checkbox"
                  className="mt-1 mr-3"
                />
                <label className="text-sm text-gray-600">
                  I agree to the terms and conditions and consent to AURELIA contacting me regarding my registration. *
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>}

              <button type="submit" className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;