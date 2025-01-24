import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Facebook, Truck, Wrench, Shield, Clock, Users, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamSection } from './components/TeamSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/team-banner.jpg",
      title: "Professional Towing Services",
      subtitle: "Local & Trusted Team",
      description: "Your reliable towing partner in Bryan, TX",
      textColor: "text-neon-green"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'header-solid' : 'header-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img 
                src="https://api.movingsites.com/Image/ResizeImage?w=123&h=123&url=https://movingsitesblobstorage.blob.core.windows.net/towing/ProfileLogo_18443.jpg&Type=webp"
                alt="R&J Towing Logo"
                className="h-16 w-16 rounded-lg"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">R&J Towing</h1>
                <p className="text-sm text-gray-600">24/7 Emergency Service</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <div className="flex items-center space-x-8">
                <a href="#services" className="nav-link">Services</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
              <a 
                href="tel:+19797045058" 
                className="btn-primary"
              >
                <Phone className="mr-2" size={20} />
                (979) 704-5058
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center text-gray-800 hover:text-yellow-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="nav-link block py-2">Services</a>
                <a href="#about" className="nav-link block py-2">About</a>
                <a href="#contact" className="nav-link block py-2">Contact</a>
                <a 
                  href="tel:+19797045058" 
                  className="btn-primary mt-4"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-screen"
          >
            <div 
              className="hero-image"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundPosition: currentSlide === 0 ? 'center center' : 'center 20%'
              }}
            />
            
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <span className={`hero-subtitle ${slides[currentSlide].textColor}`}>
                    {slides[currentSlide].subtitle}
                  </span>
                  <h1 className="hero-title">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="hero-description">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a 
                      href="tel:+19797045058" 
                      className="btn-primary"
                    >
                      <Phone className="mr-2" size={20} />
                      Call Now
                    </a>
                    <a 
                      href="#services" 
                      className="btn-secondary"
                    >
                      Our Services
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Professional Services</h2>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-gray-600 text-lg">
                We provide comprehensive towing and recovery services with a commitment to quality and reliability
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Emergency Towing",
                  description: "Round-the-clock towing service for all vehicle types",
                  icon: <Truck className="service-icon" />
                },
                {
                  title: "Roadside Assistance",
                  description: "Quick help with jump starts, tire changes, and lockouts",
                  icon: <Wrench className="service-icon" />
                },
                {
                  title: "Recovery Services",
                  description: "Professional vehicle recovery from any situation",
                  icon: <Shield className="service-icon" />
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="service-card"
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">About R&J Towing</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 uppercase">
                Setting New Standards in Towing Excellence
              </h3>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Here at R & J Towing, we are setting a new standard in the towing business. We take pride in our work of keeping our community safe and our customers happy.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our drivers are courteous and eager to get the job done efficiently. Our goal is to become the number one towing company in Brazos County.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="text-center p-6 bg-gray-50">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
                    <div className="text-gray-800 uppercase text-sm tracking-wider">Emergency Service</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
                    <div className="text-gray-800 uppercase text-sm tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://api.movingsites.com/Image/ResizeImage?w=800&h=600&url=https://movingsitesblobstorage.blob.core.windows.net/towing/Profile_1QOEB6KZJVP_18443&Type=webp"
                alt="R&J Towing Service"
                className="w-full h-auto rounded-none shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">Our Advantages</span>
            <h2 className="section-title">Why Choose Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Fast Response",
                description: "Quick arrival within 30 minutes in most cases",
                icon: <Clock className="w-8 h-8 text-blue-900" />
              },
              {
                title: "Professional Team",
                description: "Experienced and certified towing specialists",
                icon: <Users className="w-8 h-8 text-blue-900" />
              },
              {
                title: "Fair Pricing",
                description: "Competitive rates with no hidden charges",
                icon: <DollarSign className="w-8 h-8 text-blue-900" />
              },
              {
                title: "Available 24/7",
                description: "Round-the-clock emergency assistance",
                icon: <Clock className="w-8 h-8 text-blue-900" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add the Team Section before the Contact Section */}
      <TeamSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="text-blue-900 w-6 h-6 mr-4" />
                      <div>
                        <p className="font-semibold">24/7 Emergency Service</p>
                        <a href="tel:+19797045058" className="text-blue-900 hover:text-blue-700 text-xl">
                          (979) 704-5058
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-900 w-6 h-6 mr-4" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600">Bryan, TX 77808</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-blue-900 w-6 h-6 mr-4" />
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p className="text-gray-600">24/7 Emergency Service</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a 
                        href="https://www.facebook.com/p/R-J-Towing-and-Recovery-LLC-100063832860582/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-900 hover:text-blue-700"
                      >
                        <Facebook className="mr-2" size={24} />
                        Follow us on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <iframe
                    title="R&J Towing Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2!2d-96.3645576!3d30.7085614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzMwLjgiTiA5NsKwMjEnNTIuNCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg mb-6"
                  />
                  <a 
                    href="tel:+19797045058" 
                    className="btn-primary w-full text-center py-4"
                  >
                    <Phone className="inline-block mr-2" size={20} />
                    Call Now: (979) 704-5058
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://api.movingsites.com/Image/ResizeImage?w=123&h=123&url=https://movingsitesblobstorage.blob.core.windows.net/towing/ProfileLogo_18443.jpg&Type=webp"
                alt="R&J Towing Logo"
                className="h-16 w-16 rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">R&J Towing</h3>
              <p className="text-gray-400">Professional towing and recovery services available 24/7.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">24/7 Emergency Towing</li>
                <li className="text-gray-400">Roadside Assistance</li>
                <li className="text-gray-400">Vehicle Recovery</li>
                <li className="text-gray-400">Flatbed Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">(979) 704-5058</li>
                <li className="text-gray-400">Bryan, TX 77808</li>
                <li className="text-gray-400">24/7 Emergency Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} R&J Towing And Recovery LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;