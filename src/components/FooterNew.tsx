import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export const FooterNew: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About', href: '#' },
      { label: 'Our Story', href: '#' },
      { label: 'Results', href: '#testimonials' },
      { label: 'Contact', href: '#' },
    ],
    Resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Freedom Calculator', href: '#calculator' },
      { label: 'PWOS Framework', href: '#solution' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-sovereign border-t border-white/10">
      {/* Top section */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center">
                  <span className="text-sovereign font-bold">TP</span>
                </div>
                <div>
                  <div className="text-2xl font-display font-light text-ivory">
                    TODD POLKE
                  </div>
                  <div className="text-[8px] text-stone uppercase tracking-[0.3em]">
                    Architect of Sovereignty
                  </div>
                </div>
              </div>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-sm">
                Engineering wealth systems for high performers who refuse to settle for the middle. 
                Build sovereignty. Escape the trap.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 hover:border-gold bg-white/[0.02] hover:bg-gold/10 flex items-center justify-center text-stone hover:text-gold transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([category, links], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-[0.2em] text-gold mb-6">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-stone-300 hover:text-gold transition-colors inline-block group"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-light text-ivory mb-4">
                The Sovereignty Newsletter
              </h3>
              <p className="text-stone-300 font-light mb-8">
                Weekly insights on wealth architecture, financial sovereignty, and escaping the middle.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/[0.02] border border-white/10 focus:border-gold text-ivory placeholder-stone-dark outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold text-sovereign font-medium hover:bg-ivory transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-dark">
            <div className="flex flex-wrap items-center gap-6">
              <span>© {currentYear} Todd Polke. All rights reserved.</span>
              <a href="mailto:hello@toddpolke.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                hello@toddpolke.com
              </a>
            </div>
            
            <div className="text-xs">
              <p className="text-center md:text-right max-w-xl">
                DISCLAIMER: Not financial advice. Past performance is not indicative of future results. 
                Educational purposes only. You are the architect of your own risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
