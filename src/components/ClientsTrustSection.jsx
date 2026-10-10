import React from 'react';
import { motion } from 'framer-motion';

// Importación de las marcas desde la carpeta src/assets/brands
import bimboImg from '../assets/brands/bimbo.png';
import cemexImg from '../assets/brands/cemex.png';
import dhlImg from '../assets/brands/dhl.png';
import nestleImg from '../assets/brands/nestle.webp';
import pepsicoImg from '../assets/brands/pepsico.webp';

export default function ClientsTrustSection() {
  const clients = [
    { name: "BIMBO", image: bimboImg },
    { name: "DHL", image: dhlImg },
    { name: "Nestlé", image: nestleImg },
    { name: "CEMEX", image: cemexImg },
    { name: "PEPSICO", image: pepsicoImg }
  ];

  // Duplicamos el array para lograr el efecto de scroll infinito continuo y fluido
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white/90 border-y border-neutral-900 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-black">
            LA CONFIANZA DE GRANDES EMPRESAS
          </h2>
          <div className="w-16 h-1 bg-anric-red mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>
      </div>

      {/* Contenedor del Carrusel con máscara de desvanecimiento a los costados */}
      <div className="relative w-full overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <motion.div
          className="flex items-center gap-8 sm:gap-12 w-max"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{ transition: { duration: 40 } }} // Opcional: desacelera ligeramente al poner el mouse
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/95 border border-neutral-800/80 rounded-2xl py-5 px-8 w-44 sm:w-52 h-24 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-anric-red/60 hover:shadow-[0_0_25px_rgba(199,7,0,0.25)] transition-all duration-300 group cursor-pointer"
            >
              <img 
                src={client.image} 
                alt={client.name} 
                className="max-h-12 sm:max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}