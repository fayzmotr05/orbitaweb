import React, { useState } from 'react';
import { Target, PenTool, Video, Share2, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 'strategy',
    icon: Target,
    title: 'STRATEGY',
    desc: 'Фундамент системы. Маркетинговая стратегия, CJM, позиционирование.',
    fits: 'Тем, кто не понимает, куда двигаться дальше.',
    task: 'Определить кратчайший путь к деньгам.',
    dont: 'Стартапам без продукта на этапе идеи.'
  },
  {
    id: 'branding',
    icon: PenTool,
    title: 'BRANDING',
    desc: 'Визуальная и смысловая упаковка. Айдентика, Tone of Voice, брендбук.',
    fits: 'Компаниям, которые выглядят "как все".',
    task: 'Повысить добавленную стоимость продукта.',
    dont: 'Бизнесам, у которых не отлажен продукт.'
  },
  {
    id: 'production',
    icon: Video,
    title: 'PRODUCTION',
    desc: 'Креативный цех. Фото, видео, моушн, 3D.',
    fits: 'Брендам, которым нужен виральный контент.',
    task: 'Захватить внимание и пробить баннерную слепоту.',
    dont: 'Тем, кто ищет "видео за 5000 рублей".'
  },
  {
    id: 'smm',
    icon: Share2,
    title: 'SMM & CONTENT',
    desc: 'Дистрибуция смыслов. Соцсети, инфлюенс-маркетинг.',
    fits: 'Бизнесу, где важен LTV и лояльность.',
    task: 'Прогрев аудитории и построение комьюнити.',
    dont: 'B2B заводам с чеком $1M (там другие инструменты).'
  },
  {
    id: 'performance',
    icon: TrendingUp,
    title: 'PERFORMANCE',
    desc: 'Платный трафик. Google, Meta, Yandex, Telegram Ads.',
    fits: 'Готовым системам, которым нужно топливо.',
    task: 'Масштабируемый поток лидов.',
    dont: 'Если нет воронки продаж и отдела продаж.'
  }
];

const ProductSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState(products[0].id);

  // Safe fallback to first product if somehow activeTab becomes invalid
  const activeProduct = products.find(p => p.id === activeTab) ?? products[0];

  return (
    <section className="py-24 bg-zinc-950 text-white" id="products" aria-labelledby="products-heading">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <h2 id="products-heading" className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Продуктовая Система
          </h2>
          <p className="text-zinc-500 font-mono mt-4 md:mt-0">
            [ НЕ УСЛУГИ, А МОДУЛИ ]
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-2"
          >
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                role="tab"
                aria-selected={activeTab === p.id}
                aria-controls={`panel-${p.id}`}
                className={`text-left p-6 border transition-all duration-300 flex items-center justify-between group ${
                  activeTab === p.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <p.icon className={`w-6 h-6 ${activeTab === p.id ? 'text-black' : 'text-orange-500'}`} aria-hidden="true" />
                  <span className="font-bold tracking-wider">{p.title}</span>
                </div>
                {activeTab === p.id && <motion.div layoutId="activeTabIndicator" className="w-2 h-2 bg-black rounded-full" aria-hidden="true" />}
              </button>
            ))}
          </motion.div>

          {/* Details Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 relative overflow-hidden"
          >
             {/* Decorative BG */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/20 rounded-full blur-[80px] -z-10" />

             <AnimatePresence mode='wait'>
               <motion.div
                 key={activeProduct.id}
                 id={`panel-${activeProduct.id}`}
                 role="tabpanel"
                 aria-labelledby={`tab-${activeProduct.id}`}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
               >
                 <div className="mb-8">
                   <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                     {activeProduct.title}
                     <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">MODULE</span>
                   </h3>
                   <p className="text-xl text-zinc-300">{activeProduct.desc}</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase">Бизнес-задача</h4>
                      <p className="text-white text-lg border-l-2 border-orange-500 pl-4">{activeProduct.task}</p>
                    </div>
                    <div>
                       <h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase">Кому подходит</h4>
                       <p className="text-zinc-300">{activeProduct.fits}</p>
                    </div>
                 </div>

                 <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row gap-6">
                    <div className="flex items-start gap-3">
                       <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                       <div>
                         <span className="block font-bold text-sm text-green-500 uppercase mb-1">Покупать, если</span>
                         <span className="text-zinc-400 text-sm">Вы готовы инвестировать в актив, а не тратить.</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                       <div>
                         <span className="block font-bold text-sm text-red-500 uppercase mb-1">Не покупать, если</span>
                         <span className="text-zinc-400 text-sm">{activeProduct.dont}</span>
                       </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSystem;