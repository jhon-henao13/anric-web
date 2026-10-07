import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InstagramSection() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Lista de Reels extraídos de los enlaces
  const reels = [
    {
      id: "DE2pKxGxiRv",
      url: "https://www.instagram.com/reels/DE2pKxGxiRv/",
      embedUrl: "https://www.instagram.com/p/DE2pKxGxiRv/embed",
      title: "Apilador hidráulico para tarimas",
      likes: "124"
    },
    {
      id: "DC-PDtkylXT",
      url: "https://www.instagram.com/reels/DC-PDtkylXT/",
      embedUrl: "https://www.instagram.com/p/DC-PDtkylXT/embed",
      title: "Montacargas en operación",
      likes: "98"
    },
    {
      id: "DCFLBpnyljb",
      url: "https://www.instagram.com/reels/DCFLBpnyljb/",
      embedUrl: "https://www.instagram.com/p/DCFLBpnyljb/embed",
      title: "Prueba de elevación y fuerza",
      likes: "215"
    },
    {
      id: "C_MJhzGyp0s",
      url: "https://www.instagram.com/reels/C_MJhzGyp0s/",
      embedUrl: "https://www.instagram.com/p/C_MJhzGyp0s/embed",
      title: "Detalle técnico de patín hidráulico",
      likes: "180"
    },
    {
      id: "C-veu8nvArx",
      url: "https://www.instagram.com/reels/C-veu8nvArx/",
      embedUrl: "https://www.instagram.com/p/C-veu8nvArx/embed",
      title: "Apilador ligero 400kg 1.5m",
      likes: "310"
    }
  ];

  // Desplazamiento automático continuo del carrusel (se pausa si el usuario pasa el cursor)
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrameId;

    const scroll = () => {
      if (!isHovered && container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          container.scrollLeft = 0; // Reinicio suave
        } else {
          container.scrollLeft += 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="instagram" className="relative py-20 bg-white text-black overflow-hidden select-none">
      
      {/* Resplandor ambiental rojo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-anric-red/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO CON BOTÓN A INSTAGRAM */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b border-neutral-800 pb-8"
        >
          <div className="text-center sm:text-left">
            <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-black leading-tight">
              SÍGUENOS EN INSTAGRAM
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Descubre nuestros equipos en acción y demostraciones reales <span className="text-anric-red font-bold">@anricmx</span>
            </p>
          </div>

          <a 
            href="https://www.instagram.com/anricmx/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-anric-red hover:brightness-110 text-white font-extrabold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-pink-600/30 active:scale-95 text-sm uppercase tracking-wider"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir Perfil
          </a>
        </motion.div>

        {/* CONTROLES NAVEGACIÓN Y CARRUSEL */}
        <div className="relative">
          
          {/* Botón Izquierda */}
          <button 
            onClick={scrollLeft}
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-anric-red border border-neutral-700 text-white w-10 h-10 rounded-full items-center justify-center shadow-xl transition-all duration-200"
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Botón Derecha */}
          <button 
            onClick={scrollRight}
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-anric-red border border-neutral-700 text-white w-10 h-10 rounded-full items-center justify-center shadow-xl transition-all duration-200"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* CONTENEDOR CARRUSEL AUTOMÁTICO */}
          <div 
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id + index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 w-[280px] sm:w-[310px] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl hover:border-anric-red/80 hover:shadow-[0_0_25px_rgba(199,7,0,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* IFRAME EMBED OFICIAL DE INSTAGRAM */}
                <div className="relative w-full h-[470px] bg-black overflow-hidden">
                  <iframe 
                    src={reel.embedUrl}
                    title={reel.title}
                    className="w-full h-full border-none"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>

                {/* PIE DE TARJETA ESTILO ANRIC */}
                <div className="p-3.5 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-gray-300 font-semibold truncate max-w-[180px]">
                    {reel.title}
                  </span>
                  <a 
                    href={reel.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-anric-red hover:underline flex items-center gap-1"
                  >
                    Ver Reel ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}