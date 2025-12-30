import React from 'react';
import { Brain, TrendingUp, Palette, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: "STRATEGY LEAD",
    icon: Brain,
    focus: "Market Analysis & Growth Points",
    quote: "Мы не гадаем на кофейной гуще. Мы считаем, анализируем и строим карту захвата рынка."
  },
  {
    title: "PERFORMANCE LEAD",
    icon: TrendingUp,
    focus: "Traffic Acquisition & ROAS",
    quote: "Клики, лайки и охваты не имеют значения, если они не конвертируются в прибыль."
  },
  {
    title: "CREATIVE DIRECTOR",
    icon: Palette,
    focus: "Visual Language & Brand Weight",
    quote: "Дизайн должен не просто 'выглядеть дорого', он должен продавать ценность продукта."
  },
  {
    title: "GROWTH MANAGER",
    icon: Users,
    focus: "Client Success & Scaling",
    quote: "Я не передаю задачи. Я отвечаю за то, чтобы ваша система работала без сбоев."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white" aria-labelledby="team-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 id="team-heading" className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
              КОМАНДА СИСТЕМЫ
            </h2>
            <p className="text-xl text-zinc-400">
              Вы нанимаете не "фрилансеров", а инженерную группу. <br/>
              За каждым проектом закреплен Squad, отвечающий за конкретные метрики.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
            aria-hidden="true"
          >
             <Rocket className="w-12 h-12 text-zinc-800" />
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Роли в команде"
        >
          {roles.map((role, i) => (
            <motion.article
              variants={item}
              key={i}
              className="group p-8 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              role="listitem"
            >
              <div className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 mb-8 group-hover:border-orange-500/50 group-hover:scale-110 transition-all">
                <role.icon className="w-6 h-6 text-zinc-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold mb-2 tracking-wide text-white">{role.title}</h3>

              <div className="h-px w-8 bg-zinc-800 my-4 group-hover:w-full group-hover:bg-orange-900 transition-all" aria-hidden="true"></div>

              <p className="text-xs text-zinc-500 font-mono mb-6 uppercase tracking-wider">{role.focus}</p>

              <blockquote className="text-zinc-300 text-sm leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                "{role.quote}"
              </blockquote>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
