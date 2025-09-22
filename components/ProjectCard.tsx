import React from 'react';
import Badge from './Badge';

interface ProjectCardProps {
  title: string;
  time: string;
  summary: string;
  outcome?: string;
  stack: string[];
  links?: string[];
  className?: string;
}

export default function ProjectCard({
  title,
  time,
  summary,
  outcome,
  stack,
  links = [],
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {time}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {summary}
      </p>
      
      {outcome && (
        <div className="mb-4 p-3 bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/20 rounded-lg">
          <p className="text-sm font-medium text-[#4C6FFF] dark:text-[#4C6FFF]">
            <span className="font-semibold">Outcome:</span> {outcome}
          </p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, index) => (
          <Badge key={index} variant="outline" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
      
      {links.length > 0 && (
        <div className="flex gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              className="text-[#4C6FFF] hover:text-[#3B5CE8] text-sm font-medium transition-colors"
            >
              View {index === 0 ? 'Project' : 'Code'} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
