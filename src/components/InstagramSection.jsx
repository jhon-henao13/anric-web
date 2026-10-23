import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InstagramSection() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Lista de Reels extraídos de los enlaces
    const reels = [
    {
      id: "359685996675562",
      url: "https://www.facebook.com/reel/359685996675562",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F359685996675562%2F&show_text=false&width=310",
      title: "Apilador hidráulico para tarimas",
      likes: "124"
    },
    {
      id: "2256616221828397",
      url: "https://www.facebook.com/reel/2256616221828397",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2256616221828397%2F&show_text=false&width=310",
      title: "Montacargas en operación",
      likes: "98"
    },
    {
      id: "1671526747422335",
      url: "https://www.facebook.com/reel/1671526747422335",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1671526747422335%2F&show_text=false&width=310",
      title: "Prueba de elevación y fuerza",
      likes: "215"
    },
    {
      id: "2174762589986899",
      url: "https://www.facebook.com/reel/2174762589986899",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2174762589986899%2F&show_text=false&width=310",
      title: "Detalle técnico de patín hidráulico",
      likes: "180"
    },
    {
      id: "2160841501029592",
      url: "https://www.facebook.com/reel/2160841501029592",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2160841501029592%2F&show_text=false&width=310",
      title: "Apilador ligero 400kg 1.5m",
      likes: "310"
    },
    {
      id: "4372066919687010",
      url: "https://www.facebook.com/reel/4372066919687010",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4372066919687010%2F&show_text=false&width=310",
      title: "Equipos en acción",
      likes: "150"
    },
    {
      id: "1184173813293646",
      url: "https://www.facebook.com/reel/1184173813293646",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1184173813293646%2F&show_text=false&width=310",
      title: "Demostración de carga",
      likes: "200"
    },
    {
      id: "890050993240195",
      url: "https://www.facebook.com/reel/890050993240195",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F890050993240195%2F&show_text=false&width=310",
      title: "Prueba de rendimiento",
      likes: "180"
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
              SÍGUENOS EN <span className='text-blue-700'>FACEBOOK</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Descubre nuestros equipos en acción y demostraciones reales <span className="text-anric-red font-bold">@anricmx</span>
            </p>
            
          </div>

          <a 
            href="https://www.facebook.com/anricmx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:brightness-110 text-white font-extrabold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/30 active:scale-95 text-sm uppercase tracking-wider"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                    allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
                    height="470" // <-- Asegura la altura vertical
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