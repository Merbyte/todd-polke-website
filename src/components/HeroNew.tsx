import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const HeroNew: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-burgundy/20 animate-gradient" />
      </div>
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-noise" />
      
      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="py-32 lg:py-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm mb-8"
              >
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-xs font-light tracking-[0.2em] text-gold uppercase">
                  Escape the Middle Movement
                </span>
              </motion.div>

              <h1 className="font-display text-7xl lg:text-8xl xl:text-9xl font-bold text-ivory mb-8 leading-[0.9] tracking-tight">
                Escape
                <br />
                <span className="italic font-normal">The</span>
                <br />
                <span className="bg-gradient-to-r from-gold via-[#F4D03F] to-gold bg-clip-text text-transparent">
                  Middle
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-stone-300 font-light leading-relaxed mb-12 max-w-xl">
                Build sovereign portfolios that match your true financial potential. 
                <span className="italic text-ivory block mt-2">Wealth isn't built. It's engineered.</span>
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="https://pages.portfoliowealth.io/omds-opt-in-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gold text-sovereign font-medium overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get My Free Training
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-ivory transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
                
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-ivory/20 text-ivory hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
                >
                  Calculate Freedom Figure
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-20 grid grid-cols-3 gap-8 border-t border-ivory/10 pt-8"
              >
                {[
                  { value: "$500M+", label: "Assets Under Strategy" },
                  { value: "15+", label: "Years Experience" },
                  { value: "1000+", label: "Clients Guided" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-light text-gold mb-1">{stat.value}</div>
                    <div className="text-xs text-stone uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[80vh]"
            >
              {/* Floating card */}
              <div className="relative w-full max-w-md">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-ivory/10 backdrop-blur-xl"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="text-xs text-gold uppercase tracking-[0.3em] mb-4">
                      Your Path to Sovereignty
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { label: "Traditional Path", value: 65, color: "stone" },
                        { label: "PWOS Method", value: 95, color: "gold" }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-ivory">{item.label}</span>
                            <span className="text-gold">{item.value}%</span>
                          </div>
                          <div className="h-1 bg-stone-dark/50 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ delay: 1 + i * 0.2, duration: 1.5, ease: "easeOut" }}
                              className={`h-full ${item.color === 'gold' ? 'bg-gold' : 'bg-stone'}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-ivory/10 text-center">
                      <div className="text-4xl font-light text-gold mb-2">$3.6M</div>
                      <div className="text-xs text-stone uppercase tracking-wider">
                        Average Freedom Figure
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-gold to-burgundy" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-stone uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
