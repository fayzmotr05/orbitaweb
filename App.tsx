import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemBlock from './components/ProblemBlock';
import ProductSystem from './components/ProductSystem';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Team from './components/Team';
import { ArrowRight, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Process Section Component
const Process: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900" aria-labelledby="process-heading">
      <div className="container mx-auto px-6">
        <motion.h2
          id="process-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 uppercase"
        >
          Как работает ORBITA
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between text-center md:text-left"
          role="list"
          aria-label="Этапы работы"
        >
          {['АУДИТ', 'СТРАТЕГИЯ', 'УПАКОВКА', 'ТРАФИК', 'КОНТЕНТ', 'МАСШТАБ'].map((step, i) => (
            <React.Fragment key={step}>
              <motion.div
                variants={item}
                className="flex flex-col items-center md:items-start p-4 bg-zinc-900/50 border border-zinc-800 w-full hover:border-orange-900 transition-colors"
                role="listitem"
              >
                <span className="text-xs text-zinc-500 font-mono mb-2">0{i + 1}</span>
                <span className="font-bold">{step}</span>
              </motion.div>
              {i < 5 && (
                <motion.div variants={item} aria-hidden="true">
                  <ArrowRight className="hidden md:block text-zinc-700 w-6 h-6 flex-shrink-0" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Cases Section Component
const Cases: React.FC = () => (
  <section id="cases" className="py-24 bg-zinc-900 text-white" aria-labelledby="cases-heading">
    <div className="container mx-auto px-6">
      <motion.h2
        id="cases-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold uppercase mb-12"
      >
        Результаты (Кейсы)
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group bg-zinc-950 border border-zinc-800 hover:border-white transition-all p-8 cursor-pointer"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">REAL ESTATE DEV</h3>
            <span className="bg-green-900/30 text-green-400 px-2 py-1 text-xs font-mono" aria-label="Результат: плюс 240 процентов ROI">+240% ROI</span>
          </div>
          <p className="text-zinc-400 mb-6">Комплексная продажа элитной недвижимости через связку Performance + Бренд-фильм.</p>
          <div className="border-t border-zinc-800 pt-4 flex gap-2 text-xs text-zinc-500 font-mono">
            <span>STRATEGY</span> / <span>PRODUCTION</span> / <span>ADS</span>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group bg-zinc-950 border border-zinc-800 hover:border-white transition-all p-8 cursor-pointer"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">FINTECH APP</h3>
            <span className="bg-green-900/30 text-green-400 px-2 py-1 text-xs font-mono" aria-label="Результат: 15 тысяч установок">15k INSTALLS</span>
          </div>
          <p className="text-zinc-400 mb-6">Вывод продукта на рынок СНГ. Инфлюенс-маркетинг и агрессивный User Acquisition.</p>
          <div className="border-t border-zinc-800 pt-4 flex gap-2 text-xs text-zinc-500 font-mono">
            <span>STRATEGY</span> / <span>SMM</span> / <span>PERFORMANCE</span>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
);

// Contact Form Component - Simple localStorage version
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.contact.trim()) {
      setStatus('error');
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate submission delay
    setTimeout(() => {
      try {
        // Store in localStorage
        const leads = JSON.parse(localStorage.getItem('orbita_leads') || '[]');
        leads.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('orbita_leads', JSON.stringify(leads));

        setStatus('success');
        setFormData({ name: '', contact: '' });

        // Reset success state after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } catch {
        setStatus('error');
        setErrorMessage('Ошибка сохранения. Попробуйте позже.');
      }
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-white text-black" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight"
          >
            ХВАТИТ ТЕРЯТЬ ВРЕМЯ НА "ТЕСТЫ". <br/>
            <span className="text-orange-600">ДАВАЙТЕ ОБСУДИМ РОСТ.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 mb-12"
          >
            Мы не подходим тем, кто ищет "дешево". Мы подходим тем, кто ищет результат.
            Запросите стратегический разбор вашего бизнеса.
          </motion.p>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 max-w-md"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="sr-only">Ваше имя</label>
              <input
                id="name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                disabled={status === 'loading'}
                className="w-full bg-zinc-100 border-b-2 border-zinc-300 p-4 focus:outline-none focus:border-black transition-colors disabled:opacity-50"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">Telegram / WhatsApp</label>
              <input
                id="contact"
                type="text"
                placeholder="Telegram / WhatsApp"
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                disabled={status === 'loading'}
                className="w-full bg-zinc-100 border-b-2 border-zinc-300 p-4 focus:outline-none focus:border-black transition-colors disabled:opacity-50"
                aria-required="true"
              />
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-100 border border-red-300 text-red-700 text-sm rounded" role="alert">
                {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-700 text-sm rounded flex items-center gap-2" role="status">
                <CheckCircle className="w-5 h-5" />
                Заявка отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-black text-white font-bold py-5 text-lg hover:bg-orange-600 transition-colors uppercase tracking-widest mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Запросить разбор
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900"
        role="navigation"
        aria-label="Главное меню"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tighter" aria-label="ORBITA - На главную">ORBITA</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
             <a href="#products" className="hover:text-white transition-colors">СИСТЕМА</a>
             <a href="#cases" className="hover:text-white transition-colors">КЕЙСЫ</a>
             <a href="#contact" className="hover:text-white transition-colors">КОНТАКТЫ</a>
          </div>
          <a href="#contact" className="px-4 py-2 border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
            Обсудить проект
          </a>
        </div>
      </motion.nav>

      <main id="main-content">
        <Hero />
        <Clients />
        <ProblemBlock />
        <Process />
        <ProductSystem />
        <Team />
        <Cases />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
