// src/components/Componentes de prueba/ScrollStack.tsx
import React from 'react';
import '../../styles/EstilosDaniel/ScrollStack.css';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = "" }) => {
  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;