import React from 'react';
import '../styles/animations.css';

const BorutoCharacter: React.FC = () => {
  return (
    <div className="relative">
      {/* Character Transformation */}
      <div className="karma-mode floating relative">
        {/* Character Base */}
        <div 
          className="w-32 h-40 mx-auto relative"
          style={{
            background: `
              linear-gradient(135deg, 
                #ffd700 0%, 
                #ffb347 25%, 
                #4169e1 50%, 
                #000080 75%, 
                #8a2be2 100%)
            `,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: '0 0 30px rgba(138, 43, 226, 0.5)'
          }}
        >
          {/* Face */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full">
            {/* Eyes */}
            <div className="absolute top-4 left-2 w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="absolute top-4 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
            {/* Whisker marks */}
            <div className="absolute top-5 left-0 w-1 h-0.5 bg-gray-700"></div>
            <div className="absolute top-5 right-0 w-1 h-0.5 bg-gray-700"></div>
          </div>
          
          {/* Hair */}
          <div 
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-12"
            style={{
              background: 'linear-gradient(45deg, #ffd700, #ffb347)',
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
            }}
          ></div>
          
          {/* Karma Mark (appears during transformation) */}
          <div 
            className="absolute top-1 right-2 w-3 h-6 opacity-0"
            style={{
              background: 'linear-gradient(90deg, #8a2be2, #4b0082)',
              clipPath: 'polygon(0% 0%, 100% 20%, 80% 100%, 20% 80%)',
              animation: 'pulseGlow 2s infinite'
            }}
          ></div>
        </div>
        
        {/* Body */}
        <div 
          className="w-24 h-32 mx-auto -mt-4"
          style={{
            background: 'linear-gradient(180deg, #ff6b35, #000080)',
            borderRadius: '20px 20px 40px 40px'
          }}
        >
          {/* Jacket details */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-orange-400 rounded"></div>
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded"></div>
        </div>
      </div>
      
      {/* Energy Aura Effect */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full rounded-full opacity-30"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(138, 43, 226, 0.3) 0%, 
                rgba(65, 105, 225, 0.2) 50%, 
                transparent 100%)
            `,
            animation: 'pulseGlow 3s infinite'
          }}
        ></div>
      </div>
    </div>
  );
};

export default BorutoCharacter;
