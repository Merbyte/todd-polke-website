import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const NavbarNew: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Solution', href: '#solution' },
    { label: 'Results', href: '#testimonials' },
    { label: 'Calculator', href: '#calculator' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-sovereign/80 backdrop-blur-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="relative z-50 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center flex-shrink-0">
                <span className="text-sovereign font-bold text-sm">TP</span>
              </div>
              <div className="flex flex-col">
                <div className="text-base lg:text-xl font-display font-light text-ivory group-hover:text-gold transition-colors whitespace-nowrap">
                  TODD POLKE
                </div>
                <div className="text-[8px] text-stone uppercase tracking-[0.2em] whitespace-nowrap">
                  Wealth Architect
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative text-sm text-stone hover:text-gold transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://pages.portfoliowealth.io/omds-opt-in-2024"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block px-8 py-3 bg-gold text-sovereign font-medium hover:bg-ivory transition-all duration-300"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-ivory" />
            ) : (
              <Menu className="w-6 h-6 text-ivory" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        className="lg:hidden overflow-hidden bg-sovereign/95 backdrop-blur-2xl border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-lg text-ivory hover:text-gold transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://pages.portfoliowealth.io/omds-opt-in-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-gold text-sovereign font-medium text-center block"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
