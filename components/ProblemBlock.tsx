import React from 'react';
import { AlertTriangle, Unplug, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProblemBlock: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white" aria-labelledby="problems-heading">
      <div className="container mx-auto px-6">
        <motion.h2
          id="problems-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 uppercase tracking-tight"
        >
          Почему <span className="text-zinc-500">90% агентств</span> не дают рост?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Основные проблемы агентств"
        >
          <motion.article variants={item} className="bg-zinc-950 p-8 border border-zinc-800 hover:border-red-900/50 transition-colors" role="listitem">
            <Unplug className="w-10 h-10 text-red-500 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">Разрыв контекста</h3>
            <p className="text-zinc-400 leading-relaxed">
              Таргетолог не знает стратегии. Дизайнер не смотрит на цифры. SMM пишет ради лайков, а не продаж.
              <br/><br/>
              <span className="text-white">Итог:</span> Лебедь, рак и щука. Бюджет слит.
            </p>
          </motion.article>

          <motion.article variants={item} className="bg-zinc-950 p-8 border border-zinc-800 hover:border-red-900/50 transition-colors" role="listitem">
            <AlertTriangle className="w-10 h-10 text-red-500 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">Имитация работы</h3>
            <p className="text-zinc-400 leading-relaxed">
              Отчеты ради отчетов. CTR, охваты, лайки — красивые метрики тщеславия, которые нельзя положить в кассу.
              <br/><br/>
              <span className="text-white">Итог:</span> Вы платите за процесс, а не за деньги в кассе.
            </p>
          </motion.article>

          <motion.article variants={item} className="bg-zinc-950 p-8 border border-zinc-800 hover:border-red-900/50 transition-colors" role="listitem">
            <TrendingDown className="w-10 h-10 text-red-500 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">Отсутствие системы</h3>
            <p className="text-zinc-400 leading-relaxed">
              Хаотичные тесты гипотез без понимания фундамента. Сегодня запускаем одно, завтра другое.
              <br/><br/>
              <span className="text-white">Итог:</span> Нестабильный результат и невозможность масштабирования.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemBlock;
