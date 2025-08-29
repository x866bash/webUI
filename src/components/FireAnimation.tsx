import React, { useEffect, useState } from 'react';
import '../styles/animations.css';

interface FireAnimationProps {
  isVisible: boolean;
  type: 'entrance' | 'exit';
  onComplete?: () => void;
}

const FireAnimation: React.FC<FireAnimationProps> = ({ isVisible, type, onComplete }) => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate fire particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);

      // Complete animation after duration
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, type === 'entrance' ? 3000 : 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 pointer-events-none ${type === 'entrance' ? 'animate-fireEntrance' : 'animate-fireExit'}`}>
      {/* Fire Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, #ff6b35 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #f7931e 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #ffcc02 0%, transparent 50%),
            linear-gradient(45deg, #ff4500, #ff6b35, #f7931e, #ffcc02)
          `,
          animation: `fireFlame 0.5s infinite ease-in-out`
        }}
      />
      
      {/* Fire Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fire-particle"
          style={{
            left: `${particle.left}%`,
            bottom: '-10px',
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      {/* Additional Fire Effects */}
      <div className="absolute inset-0 opacity-80">
        <div 
          className="w-full h-full"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                #ff4500 0deg, 
                #ff6b35 60deg, 
                #f7931e 120deg, 
                #ffcc02 180deg, 
                #ff6b35 240deg, 
                #ff4500 300deg, 
                #ff4500 360deg)
            `,
            animation: 'fireSpread 2s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default FireAnimation;