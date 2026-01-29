import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Activity, 
  Users,
  Zap,
  Mail,
  Bell
} from 'lucide-react';

const StatCard = ({ icon: Icon, title, subtitle, position, delay }) => (
  <motion.div 
    className={`stat-card ${position}`}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5, type: "spring" }}
  >
    <div className="stat-icon">
      <Icon size={24} />
    </div>
    <div className="stat-text">
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  </motion.div>
);

const DashboardPreview = () => {
  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.15, duration: 0.4, type: "spring" }
    })
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: "easeOut" }
    })
  };

  const pulseVariants = {
    animate: (i) => ({
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: { 
        delay: 1 + i * 0.3, 
        duration: 1.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const dataFlowVariants = {
    animate: (i) => ({
      x: [0, 55],
      opacity: [0, 1, 1, 0],
      transition: {
        delay: 1.5 + i * 0.4,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "linear"
      }
    })
  };

  return (
    <motion.div 
      className="main-dashboard"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Header bar */}
      <div className="dashboard-header">
        <motion.div 
          className="dashboard-logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Activity size={18} color="#2EBFA5" />
        </motion.div>
        <motion.div 
          className="dashboard-title"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 0.4, duration: 0.4 }}
        />
        <motion.div 
          className="dashboard-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="status-dot"></span>
          Live
        </motion.div>
      </div>

      {/* Workflow visualization */}
      <div className="dashboard-workflow">
        <svg className="workflow-lines" viewBox="0 0 300 80" preserveAspectRatio="xMidYMid meet">
          {/* Connection lines */}
          <motion.path
            d="M 50 40 L 110 40"
            stroke="#2EBFA5"
            strokeWidth="2"
            fill="none"
            custom={0}
            initial="initial"
            animate="animate"
            variants={lineVariants}
          />
          <motion.path
            d="M 145 40 L 205 40"
            stroke="#2EBFA5"
            strokeWidth="2"
            fill="none"
            custom={1}
            initial="initial"
            animate="animate"
            variants={lineVariants}
          />
          <motion.path
            d="M 240 40 L 290 40"
            stroke="#2EBFA5"
            strokeWidth="2"
            fill="none"
            custom={2}
            initial="initial"
            animate="animate"
            variants={lineVariants}
          />
        </svg>

        {/* Flow nodes */}
        <div className="workflow-nodes">
          {/* Input node */}
          <motion.div 
            className="workflow-node input-node"
            custom={0}
            initial="initial"
            animate="animate"
            variants={nodeVariants}
          >
            <Calendar size={22} color="#6366f1" />
            <motion.div 
              className="node-ring"
              custom={0}
              animate="animate"
              variants={pulseVariants}
            />
          </motion.div>

          {/* Data flow particle 1 */}
          <motion.div 
            className="data-flow-particle"
            style={{ left: '50px' }}
            custom={0}
            animate="animate"
            variants={dataFlowVariants}
          >
            <Zap size={10} color="#2EBFA5" />
          </motion.div>

          {/* Processing node */}
          <motion.div 
            className="workflow-node process-node"
            custom={1}
            initial="initial"
            animate="animate"
            variants={nodeVariants}
          >
            <Activity size={22} color="#2EBFA5" />
            <motion.div 
              className="node-ring accent"
              custom={1}
              animate="animate"
              variants={pulseVariants}
            />
          </motion.div>

          {/* Data flow particle 2 */}
          <motion.div 
            className="data-flow-particle"
            style={{ left: '145px' }}
            custom={1}
            animate="animate"
            variants={dataFlowVariants}
          >
            <Mail size={10} color="#2EBFA5" />
          </motion.div>

          {/* Notification node */}
          <motion.div 
            className="workflow-node notify-node"
            custom={2}
            initial="initial"
            animate="animate"
            variants={nodeVariants}
          >
            <Bell size={22} color="#f59e0b" />
            <motion.div 
              className="node-ring warning"
              custom={2}
              animate="animate"
              variants={pulseVariants}
            />
          </motion.div>

          {/* Data flow particle 3 */}
          <motion.div 
            className="data-flow-particle"
            style={{ left: '240px' }}
            custom={2}
            animate="animate"
            variants={dataFlowVariants}
          >
            <CheckCircle size={10} color="#10b981" />
          </motion.div>

          {/* Output node */}
          <motion.div 
            className="workflow-node output-node"
            custom={3}
            initial="initial"
            animate="animate"
            variants={nodeVariants}
          >
            <Users size={22} color="#10b981" />
            <motion.div 
              className="node-ring success"
              custom={3}
              animate="animate"
              variants={pulseVariants}
            />
          </motion.div>
        </div>

        {/* Labels */}
        <div className="workflow-labels">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >Booking</motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >PerFlo AI</motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >Reminder</motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >Patient</motion.span>
        </div>
      </div>

      {/* Footer stats */}
      <motion.div 
        className="dashboard-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="mini-stat">
          <span className="mini-stat-value">247</span>
          <span className="mini-stat-label">Automated Today</span>
        </div>
        <div className="mini-stat">
          <span className="mini-stat-value">99.8%</span>
          <span className="mini-stat-label">Success Rate</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const handleNavigation = (href) => {
    window.location.href = href;
  };

  return (
    <section className="hero">
      <div className="hero-blob"></div>
      <div className="hero-blob-2"></div>
      <div className="container">
        <div className="grid-2">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Stop Drowning in Admin Work. Start Growing.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We build result-driven automation systems for healthcare practices. 
              Reclaim 15+ hours a week and reduce no-shows by 40%.
            </motion.p>
            <motion.div 
              className="cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button className="btn-primary" onClick={() => handleNavigation('#audit')}>
                Book a Free Audit <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => handleNavigation('#services')}>
                See Use Cases
              </button>
            </motion.div>
          </motion.div>

          <div className="hero-visual">
            <StatCard 
              icon={CheckCircle} 
              title="40% Drop" 
              subtitle="In Patient No-Shows" 
              position="top" 
              delay={0.6}
            />
            <StatCard 
              icon={Clock} 
              title="15 Hours" 
              subtitle="Saved Per Week" 
              position="bottom" 
              delay={0.8}
            />
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
