import React from 'react';
import '../styles/animations.css';

interface GlassContainerProps {
  children: React.ReactNode;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children }) => {
  return (
    <div 
      className="glass-effect rounded-2xl p-8 max-w-md mx-auto relative overflow-hidden"
      style={{
        animation: 'glassAppear 1s ease-out',
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%)
        `,
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        boxShadow: `
          0 8px 32px 0 rgba(31, 38, 135, 0.37),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `
      }}
    >
      {/* Glass shine effect */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-60"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `
        }}
      ></div>
    </div>
  );
};

export default GlassContainer;