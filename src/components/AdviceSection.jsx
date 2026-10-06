import React from 'react';
import { motion } from 'framer-motion';
import twoSectionImg from '../assets/twosection.png';

export default function AdviceSection() {
  // Número de WhatsApp configurado para la acción rápida
  const whatsappNumber = "525512345678"; 
  const message = encodeURIComponent("¡Hola ANRIC! Necesito asesoría para saber qué equipo necesita mi operación.");

  const features = [
    {
      title: "ERGONOMÍA",
      description: "Reduce el esfuerzo físico y evita lesiones en tus operarios."
    },
    {
      title: "DURABILIDAD",
      description: "Equipos de alto rendimiento para la exigencia diaria."
    },
    {
      title: "SERVICIO 360°",
      description: "Acompañamiento desde la cotización hasta el mantenimiento preventivo."
    }
  ];

  return (
    <section id="nosotros" class="relative py-20 bg-white text-black overflow-hidden">
      
      {/* Fondo de luz sutil decorativo */}
      <div class="absolute top-1/2 -left-40 w-96 h-96 bg-anric-red/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div class="absolute inset-x-0 top-[38%] md:top-[42%] h-[210px] sm:h-[230px] md:h-[250px] bg-[#CCCCCC] pointer-events-none z-0"></div>
      
      <div class="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 relative z-10">

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center">
            
            {/* COLUMNA IZQUIERDA: Imagen con Recorte Asimétrico Característico */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              class="lg:col-span-6 flex justify-end"
            >
              <div class="relative w-full max-w-lg group">
                
                {/* Glow envolvente en hover */}
                <div class="absolute -inset-1 bg-gradient-to-r from-anric-red/30 to-red-600/10 rounded-[32px] rounded-tr-[110px] blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
                
                  <img 
                    src={twoSectionImg} 
                    alt="Operación ANRIC Almacén" 
                    class="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: Contenido y Características */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              class="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              
              {/* Encabezado */}
              <div class="space-y-3">
                <h2 class="font-anton text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-black !leading-tight">
                  ¿NO ESTÁS SEGURO DE QUÉ EQUIPO NECESITA TU OPERACIÓN?
                </h2>
                
                <p class="text-gray-700 text-base sm:text-lg font-normal leading-relaxed">
                  Cuéntanos qué cargas mueves, tus recorridos y el tipo de operación. Nosotros encontramos la alternativa más segura y eficiente para ti.
                </p>
              </div>

              {/* Lista de Beneficios con Checkmarks Rojos */}
              <div class="space-y-1 pt-2">
                {features.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    class="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    {/* Checkmark Icon Exacto en Rojo */}
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-7 h-7 rounded-lg bg-anric-red/15 border border-anric-red/40 flex items-center justify-center text-anric-red group-hover:bg-anric-red group-hover:text-white transition-all duration-300 shadow-sm">
                        <svg class="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>

                    {/* Texto de la característica */}
                    <div class="text-sm sm:text-base">
                      <span class="font-extrabold text-black uppercase tracking-tighter block sm:inline mr-2">
                        {item.title}
                      </span>
                      <span class="text-gray-800 font-normal text-lg">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Botón CTA - Hablar con un Asesor */}
              <div class="pt-4 mx-auto">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-3 bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-lg px-5 py-3.5 rounded-lg shadow-lg glow-red transition-all border border-red-500/30 w-full sm:w-auto text-center"
                >
                  <span>Hablar con un Asesor</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

            </motion.div>

          </div>

      </div>
    </section>
  );
}