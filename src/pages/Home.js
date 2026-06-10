// src/pages/Home.js - COMPLETE LUXURY HOMEPAGE
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';
import { 
  Home as HomeIcon, Building2, Palette, Wrench,
  ChevronDown, ChevronUp, Star, Shield, Clock, 
  MessageCircle, Eye, ThumbsUp, Award, Users,
  Phone, Mail, MapPin, Send, CheckCircle,
  ArrowRight, Play, Pause, Quote
} from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Validation Schema
const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3),
  phone: yup.string().required('Phone is required').min(10),
  email: yup.string().email('Invalid email').required('Email is required'),
  plotSize: yup.string().required('Plot size is required'),
  plotFacing: yup.string().required('Plot facing is required'),
  location: yup.string().required('Location is required'),
});

const Home = () => {
  const [activePackage, setActivePackage] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showExpertForm, setShowExpertForm] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    toast.success('Thank you! Our expert will contact you within 24 hours.');
    reset();
    setShowContactForm(false);
    setShowExpertForm(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Services Data
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Construction",
      description: "Luxury homes and villas crafted with precision and elegance, tailored to your lifestyle.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "State-of-the-art commercial spaces designed for business excellence and growth.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
    },
    {
      icon: Palette,
      title: "Custom Home Building",
      description: "Bespoke homes that reflect your personality, built with unmatched craftsmanship.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
    },
    {
      icon: Wrench,
      title: "Architectural Design",
      description: "Innovative architectural solutions blending aesthetics with functionality.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
    }
  ];

  // Packages Data
  const packages = [
    {
      name: "Essential",
      price: "₹1,850",
      features: {
        "Design & Development": "Basic architectural design, structural design, 3D elevation",
        "Structure": "RCC framed structure, standard quality materials",
        "Kitchen": "Granite platform, stainless steel sink, basic storage",
        "Doors & Windows": "Flush doors, aluminum windows with mosquito mesh",
        "Bathroom": "Standard sanitaryware, CP fittings, basic tiling",
        "Flooring": "Vitrified tiles living areas, ceramic tiles bedrooms",
        "Plumbing": "CPVC pipes, standard fixtures",
        "Elevation Cost": "Basic elevation with texture paint",
        "Painting": "Interior emulsion, exterior weatherproof paint",
        "Electrical": "Standard switches, basic lighting points",
        "Miscellaneous": "Basic landscaping, standard finishes"
      }
    },
    {
      name: "Prestige",
      price: "₹2,100",
      features: {
        "Design & Development": "Premium architectural design, detailed 3D visualization",
        "Structure": "Enhanced RCC structure, premium materials",
        "Kitchen": "Quartz platform, designer sink, modular storage",
        "Doors & Windows": "Designer doors, UPVC windows with safety grills",
        "Bathroom": "Premium sanitaryware, designer CP fittings, anti-skid tiling",
        "Flooring": "Premium vitrified tiles, wooden flooring in master bedroom",
        "Plumbing": "Premium pipes, water purifier point",
        "Elevation Cost": "Designer elevation with stone cladding",
        "Painting": "Premium emulsion, designer textures",
        "Electrical": "Modular switches, designer lighting points",
        "Miscellaneous": "Landscaping, intercom points"
      }
    },
    {
      name: "Signature",
      price: "₹2,250",
      features: {
        "Design & Development": "Luxury architectural design, VR visualization",
        "Structure": "Premium RCC structure, imported materials",
        "Kitchen": "Italian marble platform, modular kitchen with accessories",
        "Doors & Windows": "Imported doors, soundproof UPVC windows",
        "Bathroom": "Luxury sanitaryware, rain shower, Jacuzzi point",
        "Flooring": "Italian marble living, wooden flooring all bedrooms",
        "Plumbing": "Imported pipes, solar water heater connection",
        "Elevation Cost": "Premium elevation with imported stone",
        "Painting": "Luxury emulsion, Italian textures",
        "Electrical": "Home automation ready, designer modular switches",
        "Miscellaneous": "Landscape garden, CCTV points, door video phone"
      }
    },
    {
      name: "Elite",
      price: "₹2,500",
      features: {
        "Design & Development": "Bespoke architectural design, full 3D/VR package",
        "Structure": "Earthquake resistant structure, finest materials",
        "Kitchen": "Imported marble, fully modular German kitchen",
        "Doors & Windows": "Teak wood doors, triple glazed UPVC windows",
        "Bathroom": "Imported sanitaryware, steam shower, designer bathtub",
        "Flooring": "Imported marble throughout, teak wood flooring",
        "Plumbing": "German plumbing systems, instant hot water",
        "Elevation Cost": "Custom elevation with imported materials",
        "Painting": "Imported luxury paints, gold leaf accents",
        "Electrical": "Full home automation, designer switches",
        "Miscellaneous": "Terrace garden, swimming pool, home theater wiring"
      }
    }
  ];

  // Why Us Data
  const whyUsFeatures = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "30+ years of combined engineering excellence with 50+ successful projects delivered across Bangalore."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Execution",
      description: "Complete project management from concept to handover, ensuring seamless coordination."
    },
    {
      icon: Clock,
      title: "On-Time Every Time",
      description: "Guaranteed timeline adherence with milestone-based progress tracking and regular updates."
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Regular project updates, open book pricing, and dedicated project coordinator for each client."
    },
    {
      icon: Eye,
      title: "Quality You Can See & Feel",
      description: "Premium materials, superior workmanship, and multiple quality checks at every stage."
    },
    {
      icon: Star,
      title: "Local Knowledge, Global Standards",
      description: "Deep understanding of Bangalore's construction landscape combined with international best practices."
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Thimanna",
      city: "Hiriyur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      review: "AURELIA transformed our vision into reality. Their attention to detail and commitment to quality is exceptional. Our dream home exceeded all expectations.",
      rating: 5
    },
    {
      name: "Suresh",
      city: "Bangalore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      review: "Professional team with outstanding execution. They completed our commercial complex ahead of schedule with impeccable quality. Highly recommended!",
      rating: 5
    },
    {
      name: "Chitti Gowda",
      city: "Bangalore",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      review: "The transparency in pricing and regular updates made our construction journey stress-free. AURELIA truly delivers on their promises.",
      rating: 5
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Share Vision",
      description: "Begin your journey by sharing your dream project vision with our expert consultants. We listen, understand, and document every requirement.",
      icon: MessageCircle
    },
    {
      step: "02",
      title: "Expert Meet",
      description: "Meet our dedicated team of architects, engineers, and project managers who will bring your vision to life with their expertise.",
      icon: Users
    },
    {
      step: "03",
      title: "Site Visit",
      description: "Comprehensive site analysis including soil testing, topography study, and feasibility assessment for optimal planning.",
      icon: MapPin
    },
    {
      step: "04",
      title: "Design Plan",
      description: "Detailed architectural and structural designs with 3D visualization, material selection, and cost estimation.",
      icon: Palette
    },
    {
      step: "05",
      title: "Smart Build",
      description: "Execution with modern construction techniques, quality materials, and regular progress monitoring for timely delivery.",
      icon: Wrench
    },
    {
      step: "06",
      title: "Happy Handover",
      description: "Thorough quality inspection, documentation, and joyous handover of your dream project with ongoing support.",
      icon: ThumbsUp
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What services does AURELIA provide?",
      answer: "AURELIA offers comprehensive construction services including residential construction, commercial construction, custom home building, architectural design, and turnkey project execution across Bangalore."
    },
    {
      question: "What is the average construction cost per square foot?",
      answer: "Construction costs vary based on specifications and packages. Our Essential package starts at ₹1,850/sq.ft, Prestige at ₹2,100/sq.ft, Signature at ₹2,250/sq.ft, and Elite at ₹2,500/sq.ft. Each package includes different material specifications and finishes."
    },
    {
      question: "How long does it take to complete a residential project?",
      answer: "A typical residential project of 2,000-3,000 sq.ft takes approximately 12-18 months from groundbreaking to handover, depending on complexity, specifications, and weather conditions."
    },
    {
      question: "Do you handle all necessary approvals and permits?",
      answer: "Yes, we provide complete assistance with all required approvals including BBMP/BDA plan sanction, building license, and other statutory permits required for construction."
    },
    {
      question: "What warranty do you provide on construction?",
      answer: "We provide a comprehensive 5-year structural warranty and 1-year workmanship warranty on all our projects, demonstrating our confidence in construction quality."
    },
    {
      question: "Can I customize the design during construction?",
      answer: "Yes, we accommodate design modifications during construction with proper change order documentation. Minor changes are flexible, while major structural changes are best finalized during the design phase."
    },
    {
      question: "What payment schedule do you follow?",
      answer: "We follow a milestone-based payment schedule linked to construction progress. Payments are spread across foundation, structure, finishing, and handover stages for transparency."
    },
    {
      question: "Do you use quality materials from reputed brands?",
      answer: "Absolutely. We source materials from certified manufacturers and authorized dealers. All materials undergo quality checks before use, and clients can verify brand specifications."
    },
    {
      question: "What makes AURELIA different from other builders?",
      answer: "AURELIA brings 30+ years of combined engineering expertise, transparent processes, dedicated project managers, and a professional network of architects and engineers ensuring superior quality and timely delivery."
    },
    {
      question: "Why choose AURELIA Group?",
      answer: "Key advantages include:\n• 30+ years of engineering expertise\n• In-house team of architects and engineers\n• Transparent pricing with no hidden costs\n• Premium quality materials from trusted brands\n• Regular project updates and site visits\n• Comprehensive warranty coverage\n• Post-handover support and maintenance"
    },
    {
      question: "Do you take up renovation and remodeling projects?",
      answer: "Yes, we undertake renovation, remodeling, and extension projects for existing buildings, bringing the same quality and professionalism to upgrade your space."
    },
    {
      question: "Is it possible to visit your ongoing projects?",
      answer: "Certainly! We encourage clients to visit our ongoing projects to witness our construction quality and workmanship firsthand. Site visits can be arranged through our project coordinator."
    },
    {
      question: "What areas in Bangalore do you serve?",
      answer: "We serve all major areas in Bangalore including North, South, East, West, and Central Bangalore, as well as upcoming areas in the outskirts. Contact us to check availability in your location."
    },
    {
      question: "How do you ensure site safety during construction?",
      answer: "Safety is our priority. We follow strict safety protocols including PPE compliance, regular safety training, site barricading, and dedicated safety officers for larger projects."
    },
    {
      question: "Can you work with my own architect or designer?",
      answer: "Yes, we collaborate with external architects and designers. Our team can execute projects based on your architect's plans while ensuring structural integrity and construction quality."
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Premium Construction & Engineering"
        description="AURELIA - Premium construction and engineering brand in Bangalore. Luxury homes, commercial spaces, and custom building solutions with 30+ years of expertise."
        keywords="construction, builders Bangalore, luxury homes, commercial construction, custom home building, architectural design"
      />

      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AURELIA Construction",
          "description": "Premium construction and engineering brand in Bangalore",
          "brand": {
            "@type": "Brand",
            "name": "Bluelite Corporate Services Pvt Ltd"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "priceRange": "₹1,850 - ₹2,500 per sq.ft",
          "telephone": "+91 XXXXX XXXXX",
          "email": "info@bluelite.in"
        })}
      </script>

      {/* ========== HERO SECTION WITH FORM ========== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')] bg-cover bg-center opacity-30"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full mb-6"
              >
                <span className="text-primary-300 text-sm font-medium">✨ Premium Construction in Bangalore</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Building Dreams.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
                  Delivering Excellence.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium construction and engineering solutions with 30+ years of expertise. 
                Creating exceptional spaces for generations to come.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">30+ Years Exp</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">50+ Projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <ThumbsUp className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">100% Quality</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-display font-bold text-gray-900">
                    Let's Build Your Dream Project
                  </h2>
                  <p className="text-gray-600 mt-2">Talk To Our Experts</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="Email Address *"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('plotSize')}
                        type="text"
                        placeholder="Plot Size (sq.ft) *"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                      {errors.plotSize && <p className="text-red-500 text-xs mt-1">{errors.plotSize.message}</p>}
                    </div>
                    <div>
                      <select
                        {...register('plotFacing')}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Plot Facing *</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                      </select>
                      {errors.plotFacing && <p className="text-red-500 text-xs mt-1">{errors.plotFacing.message}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      {...register('location')}
                      type="text"
                      placeholder="Your Plot Location in Bangalore *"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Get Free Consultation</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* ========== WHO WE ARE SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              About AURELIA
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                AURELIA is a premium construction and engineering brand committed to creating exceptional 
                residential, commercial, industrial, and infrastructure developments. As a proud brand of 
                <strong> Bluelite Corporate Services Pvt Ltd</strong>, we bring together decades of expertise 
                and a passion for excellence.
              </p>
              <p>
                With a team backed by <strong>30+ years of combined engineering and project execution 
                experience</strong>, we provide end-to-end construction solutions that combine innovation, 
                quality, functionality, and long-term value. Whether it is a luxury residence, commercial 
                complex, industrial facility, or infrastructure project, AURELIA delivers excellence at 
                every stage.
              </p>
              <p>
                Our mission is to deliver world-class construction solutions through professional expertise, 
                modern technology, and unwavering commitment to quality. We believe in building not just 
                structures, but lasting relationships with our clients based on trust, transparency, and 
                exceptional service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '100+', label: 'Professionals' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== PACKAGES SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold mb-6">
              Pricing Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your dream project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  index === 3 ? 'border-yellow-400' : 'border-transparent'
                }`}
              >
                {index === 3 && (
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center py-2 text-sm font-semibold rounded-t-2xl">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-500">/sq.ft</span>
                  </div>
                  
                  {/* Collapsible Features */}
                  <div className="space-y-2 mb-6">
                    {Object.entries(pkg.features).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="font-semibold text-gray-700">{key}:</span>
                        <span className="text-gray-600 ml-1">{value.substring(0, 60)}...</span>
                      </div>
                    ))}
                    
                    <AnimatePresence>
                      {activePackage === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {Object.entries(pkg.features).slice(3).map(([key, value]) => (
                            <div key={key} className="text-sm mt-2">
                              <span className="font-semibold text-gray-700">{key}:</span>
                              <span className="text-gray-600 ml-1">{value}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => setActivePackage(activePackage === index ? null : index)}
                    className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center space-x-1 mb-4"
                  >
                    <span>{activePackage === index ? 'Show Less' : 'View All Features'}</span>
                    {activePackage === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
                  >
                    Contact Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US SECTION ========== */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference of working with Bangalore's trusted construction partner
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about us
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mx-2">
                    <Quote className="w-10 h-10 text-primary-200 mb-4" />
                    <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.review}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.city}</p>
                        <div className="flex space-x-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ========== OUR PROCESS SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to building your dream project
            </p>
          </motion.div>

          {/* Process Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeProcess === index
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{step.step}</span>
                {step.title}
              </button>
            ))}
          </div>

          {/* Active Process Content */}
         <AnimatePresence mode="wait">
  <motion.div
    key={activeProcess}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="max-w-2xl mx-auto text-center bg-gray-50 rounded-2xl p-8"
  >
    {(() => {
      const ActiveIcon = processSteps[activeProcess].icon;
      return <ActiveIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />;
    })()}
    <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
      {processSteps[activeProcess].title}
    </h3>
    <p className="text-lg text-gray-600 leading-relaxed">
      {processSteps[activeProcess].description}
    </p>
  </motion.div>
</AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowExpertForm(true)}
              className="btn-primary bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Talk To Our Expert
            </button>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Frequently asked questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer.includes('•') ? (
                          <div>
                            <p className="mb-2">Key advantages include:</p>
                            <ul className="space-y-2">
                              {faq.answer.split('•').filter(Boolean).map((item, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{item.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p>{faq.answer}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM POPUP MODALS ========== */}
      <AnimatePresence>
        {(showContactForm || showExpertForm) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowContactForm(false);
              setShowExpertForm(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  Get Free Consultation
                </h3>
                <p className="text-gray-600 mt-2">Our expert will contact you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  {...register('name')}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <input
                  {...register('phone')}
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <input
                  {...register('email')}
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
                >
                  Submit & Get Free Quote
                </button>
              </form>
              
              <button
                onClick={() => {
                  setShowContactForm(false);
                  setShowExpertForm(false);
                }}
                className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;