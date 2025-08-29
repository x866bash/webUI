import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FireAnimation from '../components/FireAnimation';
import BorutoCharacter from '../components/BorutoCharacter';
import GlassContainer from '../components/GlassContainer';
import '../styles/animations.css';

export default function Index() {
  const [showFireEntrance, setShowFireEntrance] = useState(true);
  const [showFireExit, setShowFireExit] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Show main content after fire entrance animation
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleFireEntranceComplete = () => {
    setShowFireEntrance(false);
  };

  const handleKembaliClick = () => {
    setShowFireExit(true);
    setTimeout(() => {
      window.location.href = 'https://x866bash-github-io.vercel.app/';
    }, 2000);
  };

  const handleInfoClick = () => {
    window.open('https://kalkulasi-data-website.vercel.app/', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          background: `
            linear-gradient(45deg, 
              #ff6b35 0%, 
              #f7931e 15%, 
              #ffcc02 30%, 
              #4169e1 45%, 
              #000080 60%, 
              #8a2be2 75%, 
              #ff4500 90%, 
              #ff6b35 100%),
            radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(65, 105, 225, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.2) 0%, transparent 70%)
          `,
          backgroundSize: '400% 400%, 100% 100%, 100% 100%, 100% 100%',
          animation: 'backgroundShift 20s ease infinite'
        }}
      />

      {/* Character Silhouettes Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {/* Character silhouettes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-20 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #ffd700, #ff6b35)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Fire Animations */}
      <FireAnimation 
        isVisible={showFireEntrance} 
        type="entrance" 
        onComplete={handleFireEntranceComplete}
      />
      <FireAnimation 
        isVisible={showFireExit} 
        type="exit" 
      />

      {/* Main Content */}
      {showMainContent && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 
              className="text-8xl font-bold mb-4"
              style={{
                background: 'linear-gradient(45deg, #ffd700, #ff6b35, #8a2be2, #4169e1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                animation: 'pulseGlow 2s infinite'
              }}
            >
              WEBSITE UI
            </h1>
          </div>

          {/* Character */}
          <div className="mb-8">
            <BorutoCharacter />
          </div>

          {/* Glass Container with Content */}
          <GlassContainer>
            <div className="text-center space-y-6">
              <h2 
                className="text-2xl font-bold text-white mb-6"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                }}
              >
                INFO WEBSITE SAYA
              </h2>
              
              <Button
                onClick={handleInfoClick}
                className="w-full mb-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
                  animation: 'pulseGlow 3s infinite'
                }}
              >
                🔥 INFO WEBSITE SAYA 🔥
              </Button>
              
              <Button
                onClick={handleKembaliClick}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  boxShadow: '0 0 20px rgba(65, 105, 225, 0.5)',
                  animation: 'pulseGlow 3s infinite'
                }}
              >
                ⚡ KEMBALI ⚡
              </Button>
            </div>
          </GlassContainer>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full floating opacity-70"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full floating opacity-70" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full floating opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-7 h-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-full floating opacity-70" style={{ animationDelay: '0.5s' }}></div>
        </div>
      )}
    </div>
  );
}