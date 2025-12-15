import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I found out in one of your 3-day event presentations that there's more to investing in property to create financial freedom. You said so many times to first build a strong foundation starting with yourself and it really had a positive ripple effect around my partner and our three children. It's such a great feeling!",
    author: "James Hare",
    title: "Property Investor",
    company: "Australia",
    rating: 5,
    result: "3 properties in 12 months"
  },
  {
    quote: "Through a 12 month period, Todd has shown us how to change our lives. Not only with two investment properties under our belt but more importantly a psychological shift for the better. I can't thank Todd enough for assisting us unto the track we are on today. It's more than a track; it's our golden highway and future.",
    author: "Shanta, Jeff & Lily",
    title: "Property Investors",
    company: "Australia",
    rating: 5,
    result: "2 properties + mindset shift"
  },
  {
    quote: "Todd has taught me how to think differently on all levels and to question everything. To constantly strive, making improvements in every area of life. Encouraging me to work outside my comfort zone to be brave, to face my fears and regardless, take the required action. My world has been totally flipped!",
    author: "Belinda Smith",
    title: "Founder of OOHM",
    company: "Renovation Rockstars",
    rating: 5,
    result: "Complete life transformation"
  }
];

export const TestimonialsNew: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 lg:py-40 bg-sovereign overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/30 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 border border-gold/30 bg-gold/5 rounded-full mb-6">
            <span className="text-xs text-gold uppercase tracking-[0.2em]">Client Results</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-bold text-ivory mb-6">
            Sovereign <span className="italic font-normal">Success</span>
          </h2>
          
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
            Real transformations from high performers who refused to settle for average.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[600px] lg:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full"
              >
                <div className="h-full p-8 lg:p-12 backdrop-blur-xl bg-white/[0.02] border border-white/10">
                  {/* Decorative quote icon */}
                  <div className="mb-8 flex items-center justify-center lg:justify-start">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-gold" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center lg:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl lg:text-2xl font-light text-ivory leading-relaxed mb-8 italic text-center lg:text-left">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Result badge */}
                  <div className="mb-8 flex justify-center lg:justify-start">
                    <div className="inline-block px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
                      <span className="text-sm text-gold uppercase tracking-wider font-medium">
                        {testimonials[currentIndex].result}
                      </span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 justify-center lg:justify-start pt-6 border-t border-white/10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center text-gold text-lg font-light flex-shrink-0">
                      {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-lg text-ivory font-light">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-stone-300">
                        {testimonials[currentIndex].title}
                      </div>
                      <div className="text-xs text-gold">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 lg:bottom-8 lg:right-8 lg:left-auto lg:translate-x-0 flex gap-4 z-20">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-gold/50 transition-all flex items-center justify-center group"
              >
                <ChevronLeft className="w-5 h-5 text-ivory group-hover:text-gold transition-colors" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-gold/50 transition-all flex items-center justify-center group"
              >
                <ChevronRight className="w-5 h-5 text-ivory group-hover:text-gold transition-colors" />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-32 lg:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="group"
              >
                <div className={`h-1 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-gold' 
                    : 'w-8 bg-stone-dark group-hover:bg-stone'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "1,000+", label: "Clients Guided" },
            { value: "$500M+", label: "Assets Strategized" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 backdrop-blur-sm bg-white/[0.02] border border-white/10">
              <div className="text-3xl lg:text-4xl font-light text-gold mb-2">{stat.value}</div>
              <div className="text-xs text-stone uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
