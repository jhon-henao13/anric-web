import React from 'react';
import { motion } from 'framer-motion';

export default function WorkProcessSection() {
  const steps = [
    {
      number: "1",
      title: "ENTENDEMOS TU OPERACIÓN",
      description: "Escuchamos tus necesidades y el tipo de carga a mover.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "RECOMENDAMOS",
      description: "Te sugerimos el equipo ideal para tus procesos con mayor seguridad.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "3",
      title: "ENTREGAMOS",
      description: "Coordinamos envío rápido y seguro a cualquier punto de México.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      number: "4",
      title: "TE DAMOS SOPORTE",
      description: "Estamos contigo con servicio técnico y refacciones siempre que lo necesites.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-white leading-tight">
            NUESTRA FORMA DE TRABAJAR
          </h2>
          <div className="w-16 h-1 bg-anric-red mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>

        {/* Pasos en 4 Columnas con Conectores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Conector Flecha sutil para pantallas grandes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 text-anric-red/60 z-0">
                  <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}

              {/* Círculo con Número de Paso destacado */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center group-hover:border-anric-red group-hover:shadow-[0_0_25px_rgba(199,7,0,0.4)] transition-all duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-anric-red text-white font-anton text-sm flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              {/* Título y Descripción */}
              <h3 className="font-anton text-xl uppercase tracking-wider text-white mb-3 group-hover:text-anric-red transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}