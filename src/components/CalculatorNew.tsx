import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator as CalcIcon, TrendingUp, Sparkles } from 'lucide-react';

export const CalculatorNew: React.FC = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(10000);
  const [isCalculated, setIsCalculated] = useState(false);
  const [freedomFigure, setFreedomFigure] = useState(0);

  // Sovereign multiplier: 30x annual expenses (conservative 3.33% withdrawal rate)
  const calculate = () => {
    const annual = monthlyExpenses * 12;
    const target = annual * 30;
    setFreedomFigure(target);
    setIsCalculated(true);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const yearsToFreedom = Math.ceil(freedomFigure / (monthlyExpenses * 12 * 0.15)); // Assuming 15% savings rate

  return (
    <section id="calculator" className="relative py-32 lg:py-40 bg-gradient-to-b from-sovereign to-[#0F0F0F] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '6s' }} 
        />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-burgundy/10 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 border border-gold/30 bg-gold/5 rounded-full mb-6">
            <span className="text-xs text-gold uppercase tracking-[0.2em]">The Calculator</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-light text-ivory mb-6">
            Your <span className="bg-gradient-to-r from-gold to-[#F4D03F] bg-clip-text text-transparent">Freedom Figure</span>
          </h2>
          
          <p className="text-xl text-stone-300 font-light leading-relaxed">
            Calculate the exact asset base required for complete financial sovereignty.
            <br />
            No guesswork. Just mathematics.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-12 lg:p-16 backdrop-blur-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burgundy/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
              {/* Left: Input */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <CalcIcon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-ivory">Monthly Lifestyle</h3>
                    <p className="text-sm text-stone-300">Current or desired expenses</p>
                  </div>
                </div>

                {/* Input field */}
                <div className="relative mb-6">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-gold/50 font-light">$</div>
                  <input
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => {
                      setMonthlyExpenses(Number(e.target.value));
                      setIsCalculated(false);
                    }}
                    className="w-full bg-black/30 border border-white/20 focus:border-gold text-ivory text-3xl font-light py-6 pl-16 pr-6 outline-none transition-all"
                  />
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={monthlyExpenses}
                  onChange={(e) => {
                    setMonthlyExpenses(Number(e.target.value));
                    setIsCalculated(false);
                  }}
                  className="w-full h-1 bg-stone-dark/30 rounded-lg appearance-none cursor-pointer mb-8"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((monthlyExpenses - 2000) / (50000 - 2000)) * 100}%, rgba(42, 42, 42, 0.3) ${((monthlyExpenses - 2000) / (50000 - 2000)) * 100}%, rgba(42, 42, 42, 0.3) 100%)`
                  }}
                />

                {/* Quick select buttons */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[5000, 10000, 20000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setMonthlyExpenses(amount);
                        setIsCalculated(false);
                      }}
                      className={`py-3 text-sm border transition-all ${
                        monthlyExpenses === amount
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-white/10 text-stone-300 hover:border-gold/50 hover:text-gold'
                      }`}
                    >
                      {formatCurrency(amount)}
                    </button>
                  ))}
                </div>

                {/* Calculate button */}
                <button
                  onClick={calculate}
                  className="group relative w-full py-5 bg-gold text-sovereign font-medium overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    <Sparkles className="w-5 h-5" />
                    Calculate Freedom Figure
                  </span>
                  <div className="absolute inset-0 bg-ivory transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </div>

              {/* Right: Result */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isCalculated ? (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center p-12 border border-dashed border-white/10"
                    >
                      <TrendingUp className="w-16 h-16 text-stone-dark mx-auto mb-4" />
                      <p className="text-stone-300 font-light">
                        Enter your monthly expenses and calculate your freedom figure
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative p-12 bg-gradient-to-br from-gold/10 to-burgundy/10 border border-gold/30"
                    >
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />
                      
                      <div className="relative z-10 text-center">
                        <div className="text-xs text-gold uppercase tracking-[0.3em] mb-4">
                          Your Freedom Figure
                        </div>
                        
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-6xl lg:text-7xl font-light text-gold mb-6"
                        >
                          {formatCurrency(freedomFigure)}
                        </motion.div>

                        <p className="text-sm text-stone-300 leading-relaxed mb-8">
                          This asset base generates <span className="text-ivory font-medium">{formatCurrency(monthlyExpenses)}</span> monthly 
                          through sovereign cash flow strategies, indefinitely.
                        </p>

                        {/* Additional insights */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                          <div>
                            <div className="text-2xl font-light text-ivory mb-1">
                              {formatCurrency(monthlyExpenses * 12)}
                            </div>
                            <div className="text-xs text-stone uppercase">Annual Freedom Income</div>
                          </div>
                          <div>
                            <div className="text-2xl font-light text-ivory mb-1">
                              ~{yearsToFreedom} years
                            </div>
                            <div className="text-xs text-stone uppercase">Timeline to Freedom</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-stone-300 mb-6">
            Ready to architect your path to sovereignty?
          </p>
          <a 
            href="https://pages.portfoliowealth.io/book-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-gold text-gold hover:bg-gold hover:text-sovereign transition-all duration-300 font-medium"
          >
            Book Strategy Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};
