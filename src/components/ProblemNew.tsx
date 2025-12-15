import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AlertTriangle, TrendingDown, Lock } from 'lucide-react';

const Card3D: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export const ProblemNew: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Linear Accumulation",
      description: "The middle class is trapped in a 40-year cycle of linear growth while wealth compounds exponentially elsewhere.",
      stat: "2.3%",
      statLabel: "Average annual returns"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Golden Handcuffs",
      description: "High income doesn't equal wealth. You're one recession away from realizing you built someone else's dream.",
      stat: "78%",
      statLabel: "Live paycheck to paycheck"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Hope as Strategy",
      description: "Traditional advice relies on market timing and prayers. We engineer certainty through systematic architecture.",
      stat: "$0",
      statLabel: "Value of hope in markets"
    }
  ];

  return (
    <section id="problem" ref={containerRef} className="relative py-32 lg:py-40 bg-sovereign overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-burgundy rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-block px-4 py-1.5 border border-burgundy/30 bg-burgundy/5 rounded-full mb-6">
            <span className="text-xs text-burgundy uppercase tracking-[0.2em]">The Diagnosis</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-light text-ivory mb-8 leading-tight">
            The Middle is Not
            <br />
            <span className="italic">a Safe Place</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-stone-300 font-light leading-relaxed max-w-2xl">
            It's a meticulously engineered trap disguised as the "responsible" path. 
            While you're optimizing for 401k matches, wealth architects are playing an entirely different game.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <Card3D key={index} delay={index * 0.1}>
              <div 
                className="relative h-full p-8 lg:p-10 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-ivory/10 group hover:border-burgundy/30 transition-all duration-500"
                style={{
                  transform: "translateZ(20px)",
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8)'
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-burgundy/10 border border-burgundy/20 flex items-center justify-center mb-8 text-burgundy group-hover:scale-110 transition-transform duration-500">
                    {problem.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-ivory mb-4">{problem.title}</h3>
                  <p className="text-stone-300 font-light leading-relaxed mb-8">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-6 border-t border-ivory/10">
                    <div className="text-4xl font-light text-burgundy mb-1">{problem.stat}</div>
                    <div className="text-xs text-stone uppercase tracking-wider">{problem.statLabel}</div>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="relative p-12 lg:p-16 bg-gradient-to-br from-burgundy/10 to-transparent border-l-2 border-burgundy">
            <div className="absolute top-8 left-8 text-7xl text-burgundy/20 font-serif">"</div>
            <p className="text-2xl lg:text-3xl font-light text-ivory leading-relaxed relative z-10 italic">
              If you don't design your own wealth architecture, you'll default to someone else's plan. 
              And their plan ends with you retired at 65, not sovereign at 45.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-sm text-gold uppercase tracking-wider">Todd Polke</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
