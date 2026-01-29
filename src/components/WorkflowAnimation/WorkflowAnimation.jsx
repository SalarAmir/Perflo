import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Bot, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const WorkflowAnimation = () => {
  // Pipeline steps
  const steps = [
    { 
      icon: FileText, 
      label: 'Patient Request', 
      color: '#6366f1',
      description: 'Form submitted'
    },
    { 
      icon: Bot, 
      label: 'AI Processing', 
      color: '#2EBFA5',
      description: 'Auto-validated'
    },
    { 
      icon: Calendar, 
      label: 'Smart Scheduling', 
      color: '#f59e0b',
      description: 'Slot assigned'
    },
    { 
      icon: MessageSquare, 
      label: 'Auto Reminder', 
      color: '#ec4899',
      description: 'SMS & Email sent'
    },
    { 
      icon: CheckCircle2, 
      label: 'Confirmed!', 
      color: '#10b981',
      description: 'Patient notified'
    },
  ];

  // Animation variants for the data packets flowing through
  const packetVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
      x: [0, 80 * (i + 1)],
      transition: {
        duration: 2,
        delay: i * 0.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }
    })
  };

  // Step icon animation
  const stepVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "backOut"
      }
    }),
    pulse: (i) => ({
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 0 rgba(46, 191, 165, 0)',
        '0 0 20px 10px rgba(46, 191, 165, 0.3)',
        '0 0 0 0 rgba(46, 191, 165, 0)'
      ],
      transition: {
        duration: 1.5,
        delay: i * 0.4 + 1,
        repeat: Infinity,
        repeatDelay: 2
      }
    })
  };

  // Connector line animation
  const lineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Flowing particle on the line
  const particleVariants = {
    animate: (i) => ({
      x: [0, 60],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.8,
        delay: i * 0.4 + 0.8,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "linear"
      }
    })
  };

  return (
    <div className="workflow-animation-container">
      <motion.div 
        className="workflow-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="workflow-badge">
          <Sparkles size={16} />
          <span>See It In Action</span>
        </div>
        <h3>How Your Practice Transforms</h3>
        <p>Watch a patient request flow through our automation system in real-time</p>
      </motion.div>

      <div className="workflow-pipeline">
        {/* Background glow effect */}
        <motion.div 
          className="pipeline-glow"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Pipeline steps */}
        <div className="pipeline-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step node */}
              <motion.div 
                className="pipeline-step"
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stepVariants}
              >
                <motion.div 
                  className="step-icon-wrapper"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                    borderColor: step.color 
                  }}
                  custom={index}
                  animate="pulse"
                  variants={stepVariants}
                >
                  <step.icon size={28} color={step.color} />
                </motion.div>
                <motion.div 
                  className="step-label"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {step.label}
                </motion.div>
                <motion.div 
                  className="step-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {step.description}
                </motion.div>

                {/* Active indicator */}
                <motion.div 
                  className="step-active-ring"
                  style={{ borderColor: step.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="pipeline-connector">
                  <motion.div 
                    className="connector-line"
                    custom={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={lineVariants}
                  />
                  
                  {/* Flowing data particle */}
                  <motion.div 
                    className="data-particle"
                    custom={index}
                    animate="animate"
                    variants={particleVariants}
                  >
                    <Zap size={12} color="#2EBFA5" />
                  </motion.div>

                  {/* Arrow indicator */}
                  <motion.div 
                    className="connector-arrow"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    <ArrowRight size={16} color="var(--accent)" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Time saved indicator */}
        <motion.div 
          className="time-saved-badge"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        >
          <motion.div 
            className="time-saved-icon"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={20} color="#2EBFA5" />
          </motion.div>
          <div className="time-saved-text">
            <span className="time-value">30 seconds</span>
            <span className="time-label">vs 15 minutes manually</span>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div 
        className="workflow-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="stat-item">
          <motion.span 
            className="stat-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            100%
          </motion.span>
          <span className="stat-label">Automated</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <motion.span 
            className="stat-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            0
          </motion.span>
          <span className="stat-label">Manual Steps</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <motion.span 
            className="stat-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            24/7
          </motion.span>
          <span className="stat-label">Always Running</span>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkflowAnimation;
