import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Crown, Binary, Eye, ArrowUpRight } from 'lucide-react';

const GlassCard: React.FC<{ 
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); handleMouseLeave(); }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="relative h-full p-10 backdrop-blur-xl bg-white/[0.02] border border-white/10 overflow-hidden">
        {/* Glassmorphism gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Animated border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-gold via-burgundy to-gold opacity-20 blur-xl"
          style={{ transform: "translateZ(-10px)" }}
        />

        <div className="relative z-10">
          {/* Number badge */}
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-light text-gold">0{index + 1}</span>
          </div>

          {/* Icon */}
          <motion.div
            animate={{ 
              rotateZ: isHovered ? [0, -5, 5, 0] : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 flex items-center justify-center mb-8 text-gold"
          >
            {icon}
          </motion.div>

          {/* Content */}
          <h3 className="text-3xl font-display font-light text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-stone-300 leading-relaxed font-light mb-8">
            {description}
          </p>

          {/* Learn more link */}
          <div className="flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="uppercase tracking-wider">Explore Framework</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SolutionNew: React.FC = () => {
  const features = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Sovereignty",
      description: "Complete autonomy over your financial destiny. No reliance on broken institutions, market timing, or government promises. Your wealth, your rules."
    },
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Systems",
      description: "Wealth is not built on luck or hope. It is engineered through reproducible, battle-tested frameworks that compound predictably over time."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Truth",
      description: "Data over delusion. We strip away the comfortable lies of the middle class and face reality head-on with brutal honesty."
    }
  ];

  return (
    <section id="solution" className="relative py-32 lg:py-40 bg-gradient-to-b from-sovereign via-[#0F0F0F] to-sovereign overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '8s' }} 
        />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-burgundy/20 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} 
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }} 
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-block px-4 py-1.5 border border-gold/30 bg-gold/5 rounded-full mb-6">
            <span className="text-xs text-gold uppercase tracking-[0.2em]">The Framework</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-light text-ivory mb-8 leading-tight">
            Portfolio Wealth
            <br />
            <span className="bg-gradient-to-r from-gold via-[#F4D03F] to-gold bg-clip-text text-transparent">
              Operating System
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-stone-300 font-light leading-relaxed">
            A systematic approach to wealth architecture. We don't guess.
            <br />
            We <span className="italic text-ivory">verify, structure, and execute</span>.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-24">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-12 lg:p-16 backdrop-blur-xl bg-white/[0.02] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-burgundy/5" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-light text-ivory mb-12 text-center">The PWOS Process</h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Audit", desc: "Complete financial x-ray" },
                  { step: "02", title: "Architect", desc: "Design sovereign structure" },
                  { step: "03", title: "Activate", desc: "Deploy capital systems" },
                  { step: "04", title: "Amplify", desc: "Scale to sovereignty" }
                ].map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative text-center md:text-left"
                  >
                    <div className="text-5xl lg:text-6xl font-light text-gold/30 mb-3 font-display">{phase.step}</div>
                    <div className="text-xl lg:text-2xl text-ivory mb-2 font-light">{phase.title}</div>
                    <div className="text-sm text-stone-300 font-light">{phase.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
