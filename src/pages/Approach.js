// src/pages/Approach.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  MessageSquare, PenTool, Calculator, 
  Wrench, ClipboardCheck, Home,
  ArrowRight, CheckCircle
} from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Consultation & Requirement Analysis',
      description: 'We begin by understanding your vision, requirements, budget, and timeline. Our team conducts detailed discussions to capture every aspect of your project needs.',
      details: [
        'Initial client meeting',
        'Site assessment & evaluation',
        'Requirement documentation',
        'Budget planning',
        'Timeline estimation'
      ]
    },
    {
      step: '02',
      icon: PenTool,
      title: 'Planning & Design Development',
      description: 'Our architects and engineers create detailed plans and designs that bring your vision to life while ensuring functionality and compliance.',
      details: [
        'Architectural design',
        'Structural planning',
        '3D visualization',
        'Material selection',
        'Design approval'
      ]
    },
    {
      step: '03',
      icon: Calculator,
      title: 'Engineering & Cost Evaluation',
      description: 'Detailed engineering analysis and cost estimation to ensure project feasibility and transparency in budgeting.',
      details: [
        'Structural analysis',
        'Cost estimation',
        'Value engineering',
        'Resource planning',
        'Risk assessment'
      ]
    },
    {
      step: '04',
      icon: Wrench,
      title: 'Project Execution',
      description: 'Professional execution with modern construction techniques, quality materials, and skilled workforce.',
      details: [
        'Site mobilization',
        'Construction management',
        'Quality control',
        'Progress monitoring',
        'Safety compliance'
      ]
    },
    {
      step: '05',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Rigorous quality checks and inspections at every stage to ensure the highest standards of construction.',
      details: [
        'Material testing',
        'Workmanship inspection',
        'Safety audits',
        'Compliance verification',
        'Quality assurance'
      ]
    },
    {
      step: '06',
      icon: Home,
      title: 'Project Delivery & Support',
      description: 'Timely handover with complete documentation, warranties, and ongoing support for your complete satisfaction.',
      details: [
        'Final inspection',
        'Documentation handover',
        'Client orientation',
        'Warranty provision',
        'Post-delivery support'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Our Approach"
        description="Discover AURELIA's systematic 6-step approach from consultation to project delivery, ensuring excellence at every stage."
        keywords="construction approach, project methodology, construction process, project execution"
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Our Approach
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From Vision to Reality - A systematic 6-step process for project excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number */}
                  <div className="lg:col-span-2 text-center lg:text-right">
                    <div className="text-6xl font-bold text-primary-200">{step.step}</div>
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto mt-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        {step.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and start the journey from vision to reality
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Approach;