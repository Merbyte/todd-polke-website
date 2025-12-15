import React, { useEffect } from 'react';
import { NavbarNew } from './components/NavbarNew';
import { HeroNew } from './components/HeroNew';
import { ProblemNew } from './components/ProblemNew';
import { SolutionNew } from './components/SolutionNew';
import { TestimonialsNew } from './components/TestimonialsNew';
import { CalculatorNew } from './components/CalculatorNew';
import { FooterNew } from './components/FooterNew';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom cursor effect (optional enhancement)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursor.remove();
    };
  }, []);

  return (
    <div className="relative bg-sovereign text-ivory antialiased overflow-x-hidden">
      {/* Custom cursor */}
      <style>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(212, 175, 55, 0.5);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease;
          transform: translate(-50%, -50%);
        }
        
        @media (max-width: 1024px) {
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
      
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none z-50 bg-noise" />
      
      <NavbarNew />
      <HeroNew />
      <ProblemNew />
      <SolutionNew />
      <TestimonialsNew />
      <CalculatorNew />
      <FooterNew />
    </div>
  );
};

export default App;
