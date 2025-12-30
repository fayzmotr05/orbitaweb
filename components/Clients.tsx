import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    "PAYME", "UZUM", "CLICK", "KORZINKA", "AKFA GROUP", "ARTEL", "BEELINE", "UCELL", "KAPITALBANK", "EVOS"
  ];

  return (
    <section
      className="py-16 bg-zinc-950 border-y border-zinc-900 overflow-hidden"
      aria-label="Наши клиенты"
    >
      <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Нам доверяют лидеры рынка
        </p>
      </div>

      {/* Accessible list for screen readers */}
      <div className="sr-only">
        <h2>Наши клиенты</h2>
        <ul>
          {clients.map((client, idx) => (
            <li key={idx}>{client}</li>
          ))}
        </ul>
      </div>

      {/* Visual marquee animation (hidden from screen readers) */}
      <div className="relative flex overflow-x-hidden group w-full" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap flex gap-24 items-center pr-24">
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="text-4xl md:text-6xl font-bold text-zinc-800 uppercase hover:text-white transition-colors cursor-default select-none tracking-tighter"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-24 items-center pr-24">
          {clients.map((client, idx) => (
            <span
              key={`clone-${idx}`}
              className="text-4xl md:text-6xl font-bold text-zinc-800 uppercase hover:text-white transition-colors cursor-default select-none tracking-tighter"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
