import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Section({
  children,
  className = '',
  id,
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-16 ${className}`}
    >
      {children}
    </Component>
  );
}
