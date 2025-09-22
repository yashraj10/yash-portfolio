import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  email: string;
  linkedin: string;
}

export default function Footer({ email, linkedin }: FooterProps) {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Yashraj Jadhav. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-[#4C6FFF] transition-colors"
              aria-label="Send email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-[#4C6FFF] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
