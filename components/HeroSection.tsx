'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  const icons = [
    { Icon: Code, delay: 0 },
    { Icon: Database, delay: 0.2 },
    { Icon: BarChart3, delay: 0.4 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4C6FFF]/5 via-transparent to-[#4C6FFF]/10" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {icons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-[#4C6FFF]/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 2
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Yashraj Jadhav
        </motion.h1>
        
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Data Scientist • Analytics Storyteller • ML & Experimentation
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-500 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Los Angeles, CA
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          MSBA @ USC Marshall (&apos;26). Data scientist focused on experimentation, ML, and causal inference. 
          I turn messy data into clear decisions with ML, experimentation, and storytelling.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 dark:text-gray-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
