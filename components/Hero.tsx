import React from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-orange-600 blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Growth Systems</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            ЕСЛИ НУЖЕН ПОДРЯДЧИК — <br />
            <span className="text-zinc-500">РЫНОК БОЛЬШОЙ.</span> <br />
            ЕСЛИ НУЖЕН РОСТ — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              МЫ РАБОТАЕМ С ЭТИМ.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-10 font-light border-l-2 border-orange-500 pl-6"
          >
            Мы не продаём отдельные услуги SMM или таргета. <br/>
            Мы собираем <span className="text-white font-medium">инженерные системы роста</span> бизнеса.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
            role="group"
            aria-label="Основные действия"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              ЗАПРОСИТЬ РАЗБОР
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#cases"
              className="px-8 py-4 border border-zinc-700 text-white font-medium text-lg hover:bg-zinc-900 transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" aria-hidden="true" />
              СМОТРЕТЬ КЕЙСЫ
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-zinc-500 text-sm font-mono"
            aria-hidden="true"
          >
            // ТОЛЬКО РЕЗУЛЬТАТ. БЕЗ ВОДЫ.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
