import React from 'react';
import { motion } from 'framer-motion';

export default function AdvisorCTA() {
  const handleAdvisorClick = () => {
    const message = "Hola, me gustaría recibir asesoría personalizada para elegir el equipo hidráulico adecuado para mi operación.";
    window.open(`https://wa.me/525512345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full mt-20 mb-8 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 min-h-[320px] md:min-h-[380px] flex items-center justify-center p-8 md:p-14 group shadow-2xl"
    >
      {/* 1. TEXTURA DE FONDO E ILUMINACIÓN AMBIENTAL (Glow Effects) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black z-0" />
      
      {/* Resplandor rojo central dinámico */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[180px] md:h-[250px] bg-anric-red/20 blur-[120px] pointer-events-none rounded-full group-hover:bg-anric-red/30 transition-all duration-700" />

      {/* Malla decorativa sutil de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* 2. CONTENIDO PRINCIPAL CENTRADO */}
      <div className="relative z-10 max-w-3xl text-center flex flex-col items-center justify-center space-y-6 md:space-y-8">
        
        {/* Etiqueta superior opcional */}
        <span className="text-anric-red text-xs md:text-sm font-semibold uppercase tracking-[0.2em] bg-anric-red/10 border border-anric-red/30 px-4 py-1.5 rounded-full">
          Asesoría Especializada
        </span>

        {/* Título Principal (Estructura y Jerarquía idéntica a la imagen) */}
        <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide !leading-[1.3] drop-shadow-md">
          ¿No estás seguro de qué equipo necesita tu operación?
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans font-light leading-relaxed">
          Nuestro equipo técnico te ayuda a seleccionar el tonelaje, dimensiones y especificaciones exactas para maximizar la eficiencia de tu bodega.
        </p>

        {/* 3. BOTÓN ESTILO "PILL" (Píldora premium alineado con la referencia) */}
        <motion.button
          onClick={handleAdvisorClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-base md:text-lg tracking-tight shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer"
        >
          {/* Icono discreto de comunicación / WhatsApp */}
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          
          <span>Hablar con un Asesor</span>

          {/* Flecha interactiva */}
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 text-neutral-900" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>

      </div>
    </motion.section>
  );
}