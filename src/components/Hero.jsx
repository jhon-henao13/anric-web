import React from 'react';
import { motion } from 'framer-motion';
import bgHero from '../assets/background-hero.jpg';

export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center justify-start overflow-hidden bg-black pt-20">
      
      {/* Background Image con Gradiente Overlay para alto contraste */}
      <div class="absolute inset-0 z-0">
        <img 
          src={bgHero} 
          alt="ANRIC Almacén e Hidráulicos" 
          class="w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        {/* Degradado oscuro a la izquierda para garantizar legibilidad del texto */}
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        
      </div>

      {/* Contenido Principal */}
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div class="max-w-3xl">
          
          {/* Headline con Fuente Anton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="space-y-3"
          >
            <h1 class="font-anton text-4xl sm:text-6xl md:text-7xl tracking-wider uppercase text-white leading-none drop-shadow-md">
              TU ALMACÉN,
            </h1>
            <h1 class="font-anton text-4xl sm:text-6xl md:text-7xl tracking-wider uppercase text-anric-red leading-none drop-shadow-lg">
              SIEMPRE EN MOVIMIENTO
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            class="mt-6 text-gray-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl drop-shadow"
          >
            Patines hidráulicos y montacargas. te asesoramos para optimizar tu operación en todo México.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Botón Principal (Cotizar) */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#cotizar"
              class="bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-lg px-7 py-3 rounded-md shadow-xl transition-all flex items-center justify-center gap-2 border border-red-500/30 glow-red"
            >
              Cotizar Ahora <span class="text-xl">→</span>
            </motion.a>

            {/* Botón Secundario Translucido (Descargar Catálogo) */}
            <motion.a
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.96 }}
              href="#catalogo"
              class="bg-black/40 hover:bg-white/10 text-white font-bold text-base px-7 py-3.5 rounded-md border-2 border-white/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Descargar Catálogo
            </motion.a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}