import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      value: "+10",
      title: "AÑOS DE EXPERIENCIA",
      icon: (
        <svg class="w-10 h-10 stroke-anric-red fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Ícono de Medalla / Certificación */}
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          <path d="M9 8l2 2 4-4" />
        </svg>
      )
    },
    {
      value: "+500",
      title: "EQUIPOS ENTREGADOS",
      icon: (
        <svg class="w-10 h-10 stroke-anric-red fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Ícono de Cargas / Almacén / Patín */}
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      value: "+300",
      title: "CLIENTES SATISFECHOS",
      icon: (
        <svg class="w-10 h-10 stroke-anric-red fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Ícono de Grupo / Clientes */}
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      value: "100%",
      title: "SERVICIO TÉCNICO GARANTIZADO",
      icon: (
        <svg class="w-10 h-10 stroke-anric-red fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Ícono de Escudo / Garantía */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section class="bg-gray-500 text-white py-16 lg:py-20 border-y border-neutral-900 relative overflow-hidden">
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-anric-red/5 blur-3xl pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          class="text-center mb-12 sm:mb-16"
        >
          <h2 class="font-anton text-3xl sm:text-4xl lg:text-5xl tracking-widest uppercase text-white leading-tight">
            NUESTRA EXPERIENCIA, TU RESPALDO
          </h2>
          {/* Decorador de línea roja central */}
          <div class="w-12 h-1 bg-anric-red mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>

        {/* Grilla de 4 Estadísticas */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              class={`flex items-center justify-center lg:justify-start gap-5 px-4 lg:px-8 py-4 ${
                index !== stats.length - 1 
                  ? 'lg:border-r lg:border-neutral-800' 
                  : ''
              }`}
            >
              {/* Ícono vectorial rojo */}
              <div class="flex-shrink-0 p-2 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-md group-hover:border-anric-red/50 transition-colors">
                {stat.icon}
              </div>

              {/* Número y Descripción */}
              <div class="flex flex-col">
                <span class="font-anton text-4xl sm:text-5xl text-anric-red tracking-tight leading-none">
                  {stat.value}
                </span>
                <span class="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mt-1.5 leading-snug max-w-[160px]">
                  {stat.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}