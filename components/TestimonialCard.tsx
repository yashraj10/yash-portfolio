import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  className = '',
}: TestimonialCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial Content */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        "{content}"
      </blockquote>
      
      {/* Author Info */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="font-semibold text-gray-900 dark:text-white">
          {name}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {role} at {company}
        </div>
      </div>
    </div>
  );
}