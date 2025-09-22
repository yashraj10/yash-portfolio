'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface TimelineItemProps {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
  className?: string;
}

export default function TimelineItem({
  company,
  role,
  location,
  start,
  end,
  bullets,
  tags,
  className = '',
}: TimelineItemProps) {
  return (
    <motion.div
      className={`relative pl-8 pb-8 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-[#4C6FFF] rounded-full transform -translate-x-1.5"></div>
      
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {role}
            </h3>
            <p className="text-[#4C6FFF] font-medium">{company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            {start} – {end}
          </div>
        </div>
        
        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="default" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
