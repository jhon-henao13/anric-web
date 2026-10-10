import React from 'react';
import { motion } from 'framer-motion';

export default function WhyUsSection() {
  const differentiators = [
    {
      id: "asesoria",
      title: "ASESORÍA PERSONALIZADA",
      description: "Te ayudamos a elegir el equipo ideal para tus necesidades y presupuesto.",
      icon: (
        <svg className="w-8 h-8 text-anric-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728" />
        </svg>
      )
    },
    {
      id: "refacciones",
      title: "REFACCIONES DISPONIBLES",
      description: "Contamos con refacciones originales para todas nuestras marcas y modelos.",
      icon: (
        <svg className="w-8 h-8 text-anric-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "servicio-tecnico",
      title: "SERVICIO TÉCNICO ESPECIALIZADO",
      description: "Técnicos capacitados para mantener tus equipos siempre en óptimas condiciones.",
      icon: (
        <svg className="w-8 h-8 text-anric-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: "cobertura",
      title: "COBERTURA NACIONAL",
      description: "Enviamos equipos a todo México de forma rápida y segura.",
      icon: (
        <svg className="w-8 h-8 text-anric-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      id: "garantia",
      title: "EQUIPOS GARANTIZADOS",
      description: "Todos nuestros equipos cuentan con garantía y respaldo ANRIC.",
      icon: (
        <svg className="w-8 h-8 text-anric-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.033A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="que-nos-diferencia" className="relative py-20 bg-white/90 text-white overflow-hidden select-none">
      
      {/* Luz ambiental decorativa roja en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-anric-red/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-black leading-tight">
            ¿QUÉ NOS DIFERENCIA?
          </h2>
          <div className="w-16 h-1 bg-anric-red mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>

        {/* GRILLA DE 5 COLUMNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-black/90 hover:border-anric-red/80 hover:shadow-[0_10px_30px_rgba(199,7,0,0.2)] group"
            >
              {/* Contenedor del Icono con animación de pulso al hover */}
              <div className="w-16 h-16 rounded-full bg-neutral-950/80 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-anric-red/50 group-hover:scale-110 group-hover:bg-anric-red/10 transition-all duration-300">
                {item.icon}
              </div>

              {/* Título del Pilar */}
              <h3 className="font-anton text-lg sm:text-xl text-white uppercase tracking-wider leading-tight mb-3 group-hover:text-anric-red transition-colors duration-200 min-h-[52px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Descripción breve */}
              <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed">
                {item.description}
              </p>

              {/* Borde inferior brillante sutil */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-anric-red group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}