import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from 'scrollreveal';

// Note: The import for './App.css' has been removed as it's no longer needed.

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    });

    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
        title: "AI Automation",
        description: "Streamline your business processes with custom AI automation solutions that reduce costs and increase efficiency.",
        icon: "fas fa-robot"
    },
    {
        title: "Machine Learning",
        description: "Leverage the power of machine learning to gain insights from your data and make smarter business decisions.",
        icon: "fas fa-brain"
    },
    {
        title: "Custom AI Solutions",
        description: "Tailored AI applications designed specifically for your business needs and challenges.",
        icon: "fas fa-cogs"
    },
    {
        title: "Chatbot Development",
        description: "Intelligent chatbots that provide 24/7 customer support and enhance user engagement.",
        icon: "fas fa-comments"
    },
    {
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with our advanced analytics solutions.",
        icon: "fas fa-chart-line"
    },
    {
        title: "Cloud AI Integration",
        description: "Seamlessly integrate AI capabilities with your existing cloud infrastructure.",
        icon: "fas fa-cloud"
    }
  ];

  const projects = [
    {
        title: "Smart Retail Assistant",
        description: "AI-powered shopping assistant that increased sales by 35% for our retail client.",
        tags: ["Python", "TensorFlow", "NLP"],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Healthcare Diagnosis AI",
        description: "Machine learning model that assists doctors in diagnosing diseases with 92% accuracy.",
        tags: ["PyTorch", "Computer Vision", "Healthcare"],
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Financial Fraud Detection",
        description: "Real-time fraud detection system that reduced false positives by 60% for a banking client.",
        tags: ["Anomaly Detection", "Time Series", "AWS"],
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const techStack = [
    { name: "Python", icon: "fab fa-python" },
    { name: "TensorFlow", icon: "fas fa-project-diagram" },
    { name: "PyTorch", icon: "fas fa-fire" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-cubes" }
  ];

  return (
      <div className="min-h-screen">
          {/* Navigation */}
          <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
              <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center"
                  >
                      <span className="text-2xl font-bold gradient-text">Perflo</span>
                  </motion.div>
                  
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-8">
                      {['home', 'services', 'work', 'about', 'contact'].map((item) => (
                          <button
                              key={item}
                              onClick={() => scrollToSection(item)}
                              className={`relative text-sm font-medium uppercase tracking-wider ${activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'} animated-border`}
                          >
                              {item}
                          </button>
                      ))}
                  </div>
                  
                  <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                  </button>
                  
                  {/* Mobile Menu Button */}
                  <button 
                      className="md:hidden text-gray-300 focus:outline-none"
                      onClick={toggleMenu}
                  >
                      {isMenuOpen ? (
                          <i className="fas fa-times text-xl"></i>
                      ) : (
                          <i className="fas fa-bars text-xl"></i>
                      )}
                  </button>
              </div>
              
              {/* Mobile Menu */}
              <AnimatePresence>
                  {isMenuOpen && (
                      <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="md:hidden bg-gray-900 overflow-hidden"
                      >
                          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                              {['home', 'services', 'work', 'about', 'contact'].map((item) => (
                                  <button
                                      key={item}
                                      onClick={() => scrollToSection(item)}
                                      className={`text-sm font-medium uppercase tracking-wider ${activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'} py-2`}
                                  >
                                      {item}
                                  </button>
                              ))}
                              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                                  Get Started
                              </button>
                          </div>
                      </motion.div>
                  )}
              </AnimatePresence>
          </nav>
          
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 gradient-bg">
              <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                  <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="md:w-1/2 mb-12 md:mb-0 reveal"
                  >
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                          <span className="gradient-text">AI-Powered</span> Solutions for the Future
                      </h1>
                      <p className="text-lg md:text-xl text-gray-300 mb-8">
                          We build cutting-edge AI automation and development solutions that transform businesses and drive innovation.
                      </p>
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                              Get Started
                          </button>
                          <button className="px-8 py-3 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                              Learn More
                          </button>
                      </div>
                  </motion.div>
                  
                  <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="md:w-1/2 reveal"
                  >
                      <div className="relative">
                          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                          <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                          
                          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 glow">
                              <img 
                                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                  alt="AI Automation" 
                                  className="w-full h-auto rounded-2xl"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                  <div className="flex items-center">
                                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                          <i className="fas fa-play text-white"></i>
                                      </div>
                                      <div>
                                          <p className="text-sm text-gray-300">Watch our demo</p>
                                          <p className="text-white font-medium">How Perflo transforms businesses</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
              
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down">
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white">
                      <i className="fas fa-chevron-down text-2xl"></i>
                  </button>
              </div>
          </section>
          
          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-900">
              <div className="container mx-auto px-6 md:px-12">
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center mb-16 reveal"
                  >
                      <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">Our Expertise</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Services That <span className="gradient-text">Drive Results</span></h2>
                      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                          We specialize in creating custom AI solutions that solve real business problems and deliver measurable impact.
                      </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {services.map((service, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="reveal"
                          >
                              <div className="service-card h-full p-8 rounded-xl card-gradient">
                                  <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                      <i className={`${service.icon} text-2xl text-blue-400`}></i>
                                  </div>
                                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                  <p className="text-gray-400">{service.description}</p>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </section>
          
          {/* Work Section */}
          <section id="work" className="py-20 bg-gray-900/50">
              <div className="container mx-auto px-6 md:px-12">
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center mb-16 reveal"
                  >
                      <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">Our Work</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies That <span className="gradient-text">Showcase Our Skills</span></h2>
                      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                          Explore how we've helped businesses leverage AI to solve complex challenges and achieve remarkable results.
                      </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                      {projects.map((project, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="reveal"
                          >
                              <div className="h-full overflow-hidden rounded-xl card-gradient border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                                  <div className="h-48 overflow-hidden">
                                      <img 
                                          src={project.image} 
                                          alt={project.title} 
                                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                      />
                                  </div>
                                  <div className="p-6">
                                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                      <p className="text-gray-400 mb-4">{project.description}</p>
                                      <div className="flex flex-wrap gap-2">
                                          {project.tags.map((tag, i) => (
                                              <span key={i} className="text-xs px-3 py-1 bg-gray-800 rounded-full text-blue-300">
                                                  {tag}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </motion.div>
                      ))}
                  </div>
                  
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center reveal"
                  >
                      <button className="px-8 py-3 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                          View All Projects
                      </button>
                  </motion.div>
              </div>
          </section>
          
          {/* Tech Stack Section */}
          <section className="py-16 bg-gray-900">
              <div className="container mx-auto px-6 md:px-12">
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center mb-12 reveal"
                  >
                      <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">Our Stack</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We <span className="gradient-text">Excel In</span></h2>
                      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                          We leverage the most advanced and reliable technologies to build robust AI solutions.
                      </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                      {techStack.map((tech, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                              className="reveal"
                          >
                              <div className="tech-icon flex flex-col items-center p-4">
                                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-3">
                                      <i className={`${tech.icon} text-3xl text-blue-400`}></i>
                                  </div>
                                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </section>
          
          {/* About Section */}
          <section id="about" className="py-20 bg-gray-900/50">
              <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                  <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="md:w-1/2 mb-12 md:mb-0 reveal"
                  >
                      <div className="relative">
                          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                          
                          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 p-8">
                              <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">About Us</span>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                  We're <span className="gradient-text">Perflo</span> - AI Innovation Leaders
                              </h2>
                              <p className="text-gray-400 mb-6">
                                  Founded in 2018, Perflo has been at the forefront of AI development and automation, helping businesses across industries harness the power of artificial intelligence.
                              </p>
                              <p className="text-gray-400 mb-8">
                                  Our team of PhDs, data scientists, and engineers combine deep technical expertise with business acumen to deliver solutions that drive real impact.
                              </p>
                              <div className="flex flex-wrap gap-4">
                                  <div className="flex items-center">
                                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                                          <i className="fas fa-trophy text-blue-400"></i>
                                      </div>
                                      <div>
                                          <p className="text-2xl font-bold text-white">25+</p>
                                          <p className="text-sm text-gray-400">Industry Awards</p>
                                      </div>
                                  </div>
                                  <div className="flex items-center">
                                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4">
                                          <i className="fas fa-users text-purple-400"></i>
                                      </div>
                                      <div>
                                          <p className="text-2xl font-bold text-white">50+</p>
                                          <p className="text-sm text-gray-400">Satisfied Clients</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
                  
                  <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="md:w-1/2 md:pl-12 reveal"
                  >
                      <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 text-white">Our Approach</h3>
                          <p className="text-gray-400 mb-6">
                              We don't just build AI solutions - we craft intelligent systems that learn, adapt, and evolve with your business needs.
                          </p>
                          <div className="space-y-4">
                              <div className="flex">
                                  <div className="flex-shrink-0 mt-1">
                                      <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                                          <i className="fas fa-check text-blue-400 text-xs"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <p className="text-gray-300 font-medium">Data-first methodology</p>
                                      <p className="text-gray-500 text-sm">We start with your data to ensure solutions are tailored to your specific context.</p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <div className="flex-shrink-0 mt-1">
                                      <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                                          <i className="fas fa-check text-purple-400 text-xs"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <p className="text-gray-300 font-medium">Ethical AI practices</p>
                                      <p className="text-gray-500 text-sm">We prioritize fairness, transparency, and accountability in all our solutions.</p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <div className="flex-shrink-0 mt-1">
                                      <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center">
                                          <i className="fas fa-check text-pink-400 text-xs"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <p className="text-gray-300 font-medium">Continuous improvement</p>
                                      <p className="text-gray-500 text-sm">Our systems are designed to learn and improve over time.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div>
                          <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us</h3>
                          <div className="space-y-6">
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                          <i className="fas fa-bolt text-blue-400"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg font-medium text-white">Cutting-edge Research</h4>
                                      <p className="text-gray-400 mt-1">
                                          Our team regularly publishes in top AI conferences and stays ahead of industry trends.
                                      </p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                          <i className="fas fa-lock text-purple-400"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg font-medium text-white">Enterprise-grade Security</h4>
                                      <p className="text-gray-400 mt-1">
                                          We implement robust security measures to protect your data and intellectual property.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20 bg-gray-900">
              <div className="container mx-auto px-6 md:px-12">
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center mb-16 reveal"
                  >
                      <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">Testimonials</span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
                      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                          Don't just take our word for it - hear from businesses that have transformed with our AI solutions.
                      </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[1, 2, 3].map((item, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="reveal"
                          >
                              <div className="h-full p-8 rounded-xl card-gradient border border-gray-800">
                                  <div className="flex items-center mb-6">
                                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                          <img 
                                              src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 30}.jpg`} 
                                              alt="Client" 
                                              className="w-full h-full object-cover"
                                          />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-white">Client Name</h4>
                                          <p className="text-sm text-gray-400">CEO, Company</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-300 mb-6">
                                      "Working with Perflo was a game-changer for our business. Their AI automation solution reduced our operational costs by 40% while improving accuracy. The team's technical expertise is unmatched."
                                  </p>
                                  <div className="flex">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                          <i key={star} className="fas fa-star text-yellow-400 mr-1"></i>
                                      ))}
                                  </div>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="container mx-auto px-6 md:px-12 text-center">
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="reveal"
                  >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          Ready to <span className="gradient-text">Transform Your Business</span> with AI?
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                          Schedule a free consultation with our AI experts to discuss how we can help you achieve your goals.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                              Get Started
                          </button>
                          <button className="px-8 py-3 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                              Contact Sales
                          </button>
                      </div>
                  </motion.div>
              </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-900">
              <div className="container mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <motion.div 
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className="reveal"
                      >
                          <span className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-2 inline-block">Contact Us</span>
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                              Let's <span className="gradient-text">Build Something</span> Amazing Together
                          </h2>
                          <p className="text-gray-400 mb-8 max-w-lg">
                              Have a project in mind or want to learn more about our services? Reach out to us and our team will get back to you within 24 hours.
                          </p>
                          
                          <div className="space-y-6">
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                          <i className="fas fa-map-marker-alt text-blue-400"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg font-medium text-white">Our Office</h4>
                                      <p className="text-gray-400 mt-1">123 AI Avenue, Tech City, TC 10101</p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                          <i className="fas fa-envelope text-purple-400"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg font-medium text-white">Email Us</h4>
                                      <p className="text-gray-400 mt-1">hello@perflo.ai</p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                          <i className="fas fa-phone-alt text-pink-400"></i>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg font-medium text-white">Call Us</h4>
                                      <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="mt-12">
                              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                              <div className="flex space-x-4">
                                  {['twitter', 'linkedin', 'github', 'facebook'].map((social) => (
                                      <a 
                                          key={social}
                                          href="#" 
                                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                                      >
                                          <i className={`fab fa-${social}`}></i>
                                      </a>
                                  ))}
                              </div>
                          </div>
                      </motion.div>
                      
                      <motion.div 
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="reveal"
                      >
                          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
                              <form>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                      <div>
                                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                          <input 
                                              type="text" 
                                              id="name" 
                                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                              placeholder="Your name"
                                          />
                                      </div>
                                      <div>
                                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                          <input 
                                              type="email" 
                                              id="email" 
                                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                              placeholder="your@email.com"
                                          />
                                      </div>
                                  </div>
                                  <div className="mb-6">
                                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                      <input 
                                          type="text" 
                                          id="subject" 
                                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                          placeholder="Subject"
                                      />
                                  </div>
                                  <div className="mb-6">
                                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                      <textarea 
                                          id="message" 
                                          rows="5" 
                                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                          placeholder="Tell us about your project..."
                                      ></textarea>
                                  </div>
                                  <button 
                                      type="submit" 
                                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                  >
                                      Send Message
                                  </button>
                              </form>
                          </div>
                      </motion.div>
                  </div>
              </div>
          </section>
          
          {/* Footer */}
          <footer className="py-12 bg-gray-900 border-t border-gray-800">
              <div className="container mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div>
                          <span className="text-2xl font-bold gradient-text mb-4 inline-block">Perflo</span>
                          <p className="text-gray-400 mb-6">
                              Leading AI automation and development agency helping businesses transform with cutting-edge technology.
                          </p>
                          <div className="flex space-x-4">
                              {['twitter', 'linkedin', 'github'].map((social) => (
                                  <a 
                                      key={social}
                                      href="#" 
                                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                                  >
                                      <i className={`fab fa-${social}`}></i>
                                  </a>
                              ))}
                          </div>
                      </div>
                      
                      <div>
                          <h4 className="text-lg font-bold text-white mb-4">Services</h4>
                          <ul className="space-y-2">
                              {services.slice(0, 4).map((service, index) => (
                                  <li key={index}>
                                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                          {service.title}
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      <div>
                          <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                          <ul className="space-y-2">
                              {['About Us', 'Careers', 'Blog', 'Press'].map((item, index) => (
                                  <li key={index}>
                                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                          {item}
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      <div>
                          <h4 className="text-lg font-bold text-white mb-4">Subscribe</h4>
                          <p className="text-gray-400 mb-4">
                              Stay updated with our latest news and insights.
                          </p>
                          <div className="flex">
                              <input 
                                  type="email" 
                                  placeholder="Your email" 
                                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 w-full"
                              />
                              <button className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300">
                                  <i className="fas fa-paper-plane"></i>
                              </button>
                          </div>
                      </div>
                  </div>
                  
                  <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                      <p className="text-gray-500 text-sm mb-4 md:mb-0">
                          © {new Date().getFullYear()} Perflo AI. All rights reserved.
                      </p>
                      <div className="flex space-x-6">
                          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
                          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
                          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  );
}

export default App;
