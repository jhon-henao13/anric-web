import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import patinHidraulicoEraser from '../assets/equipos/patin-hidraulico-eraser.png';
import patinHidraulicoBg from '../assets/equipos/patin-hidraulico-bg.png';

import patinElectricoEraser from '../assets/equipos/patin-electrico-eraser.png';
import patinElectricoBg from '../assets/equipos/patin-electrico-bg.png';

import apiladorEraser from '../assets/equipos/apilador-eraser.png';
import apiladorBg from '../assets/equipos/apilador-bg.png';

import montacargasEraser from '../assets/equipos/montacargas-eraser.png';
import montacargasBg from '../assets/equipos/montacargas-bg.png';

import mesaElevacionEraser from '../assets/equipos/mesa-elevacion-eraser.png';
import mesaElevacionBg from '../assets/equipos/mesa-elevacion-bg.png';

export default function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      id: "patines-hidraulicos",
      title: "PATINES HIDRÁULICOS",
      description: "La solución esencial para movimiento diario de tarimas y carga.",
      imageEraser: patinHidraulicoEraser,
      imageBg: patinHidraulicoBg,
      bgColor: "bg-[#e3c2c0]", // Rosa/rojo ceniza pastel
      categoryUrl: "#patines-hidraulicos",
    },
    {
      id: "patines-electricos",
      title: "PATINES ELÉCTRICOS",
      description: "Más productividad y menor esfuerzo en recorridos frecuentes.",
      imageEraser: patinElectricoEraser,
      imageBg: patinElectricoBg,
      bgColor: "bg-[#d4d6d8]", // Gris plata neutro
      categoryUrl: "#patines-electricos",
    },
    {
      id: "apiladores",
      title: "APILADORES",
      description: "Eleva y posiciona carga con precisión en espacios reducidos.",
      imageEraser: apiladorEraser,
      imageBg: apiladorBg,
      bgColor: "bg-[#ffffff]", // Blanco puro
      categoryUrl: "#apiladores",
    },
    {
      id: "montacargas",
      title: "MONTACARGAS",
      description: "Equipos para operaciones industriales de mayor exigencia.",
      imageEraser: montacargasEraser,
      imageBg: montacargasBg,
      bgColor: "bg-[#decbc0]", // Beige / Terracota suave
      categoryUrl: "#montacargas",
    },
    {
      id: "mesas-elevacion",
      title: "MESAS DE ELEVACIÓN",
      description: "Ergonomía y seguridad para elevar cargas a la altura de trabajo.",
      imageEraser: mesaElevacionEraser,
      imageBg: mesaElevacionBg,
      bgColor: "bg-[#cccccc]", // Gris medio
      categoryUrl: "#mesas-elevacion",
    },
  ];

  const handleCategoryClick = (url) => {
    // Redirección al clic hacia la categoría correspondiente
    window.location.href = url;
  };

  return (
    <section id="categorias" class="relative py-20 bg-black text-white overflow-hidden select-none">
      
      {/* Fondo con brillo ambiental decorativo */}
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-anric-red/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          class="text-center mb-12 sm:mb-16"
        >
          <h2 class="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-normal uppercase text-white leading-tight">
            EXPLORA NUESTRAS CATEGORÍAS
          </h2>
          <p class="text-gray-300 text-xl sm:text-2xl font-normal mt-2 tracking-wider mt-5">
            Equipos para tu operación
          </p>
        </motion.div>

        {/* Grilla / Contenedor Interactivo de 5 Columnas */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            const isBlurred = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCategoryClick(item.categoryUrl)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative cursor-pointer transition-all duration-500 ease-out flex flex-col items-center ${
                  isBlurred ? 'blur-[3px] opacity-30 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {/* TARJETA DINÁMICA DE CATEGORÍA */}
                <motion.div 
                  layout
                  className={`w-full overflow-hidden transition-all duration-500 ease-out border ${
                    isHovered 
                      ? 'bg-neutral-900/90 border-anric-red shadow-[0_0_30px_rgba(199,7,0,0.35)] rounded-3xl p-4 scale-105 z-20' 
                      : 'bg-transparent border-transparent rounded-full p-2'
                  }`}
                >
                  
                  {/* MARCO DE IMAGEN (Morphing de Círculo a Recuadro Bordado) */}
                  <motion.div 
                    layout
                    className={`relative w-full overflow-hidden transition-all duration-500 ${
                      isHovered 
                        ? 'h-48 rounded-2xl border border-white/10 bg-neutral-900' 
                        : `aspect-square rounded-full border-2 border-white/20 ${item.bgColor} hover:border-anric-red`
                    }`}
                  >
                    <motion.img 
                      layout
                      src={isHovered ? item.imageBg : item.imageEraser} 
                      alt={item.title} 
                      className={`w-full h-full transition-all duration-500 ${
                        isHovered 
                          ? 'object-cover object-center scale-100' 
                          : 'object-contain object-center p-4 scale-100'
                      }`}
                    />
                  </motion.div>

                  {/* VISTA DETALLADA DEL EQUIPO (Aparece únicamente al hacer Hover) */}
                  <AnimatePresence>
                    {isHovered ? (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="mt-4 text-left space-y-2 px-1"
                      >
                        <h3 class="font-anton text-xl tracking-wider text-white uppercase leading-tight">
                          {item.title}
                        </h3>
                        <p class="text-xs text-gray-300 font-normal leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Indicador CTA Redirigir */}
                        <div class="pt-2 flex items-center text-anric-red font-bold text-xs uppercase tracking-wider group">
                          <span>Ver catálogo</span>
                          <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    ) : (
                      /* En vista normal en móviles/pantallas pequeñas se puede conservar el título inferior si no hay hover activo */
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-center block lg:hidden"
                      >
                        <span class="font-anton text-sm text-gray-300 tracking-wider">
                          {item.title}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}