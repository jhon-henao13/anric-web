import React from 'react';
import { motion } from 'framer-motion';
import AdvisorCTA from '../components/AdvisorCTA';
// Importación de imágenes locales de mantenimiento
import imgPatines from '../assets/mantenimiento-patin.jpg';
import imgMontacargasGas from '../assets/mantenimiento-montacargas.jpg';
import imgMontacargasElectrico from '../assets/mantenimiento-montacargas-electrico.webp';


export default function MaintenancePage() {
  const whatsappNumber = "525542900168";

  const services = [
    {
      id: "patines",
      title: "MANTENIMIENTO DE PATINES",
      subtitle: "DE PATINES",
      image: imgPatines,
      items: [
        "Corrección de fugas de aceite hidráulico",
        "Enderezado y soldadura de estructura",
        "Niveledo de aceite hidráulico",
        "Lubricar componentes del sistema hidráulico",
        "Cambio de bujes",
        "Cambio de pernos",
        "Seguro Spirol",
        "Aplicación de esmalte industrial"
      ]
    },
    {
      id: "montacargas-gas",
      title: "MANTENIMIENTO DE MONTACARGAS GAS / GASOLINA",
      subtitle: "DE MONTACARGAS GAS / GASOLINA",
      image: imgMontacargasGas,
      items: [
        "Lavado a presión",
        "Afinación",
        "Cambio de aceite",
        "Cambio de filtro",
        "Engrasado",
        "Cambio de bujes",
        "Relleno de niveles"
      ]
    },
    {
      id: "montacargas-electrico",
      title: "MANTENIMIENTO DE MONTACARGAS ELÉCTRICO",
      subtitle: "DE MONTACARGAS ELÉCTRICO",
      image: imgMontacargasElectrico,
      items: [
        "Lavado a presión",
        "Lavado con dialéctico",
        "Relleno de niveles",
        "Revisión de arnés",
        "Engrasado general",
        "Calibración",
        "Limpieza y ajuste de platinos",
        "Limpieza y ajuste de contactores",
        "Revisión general al sistema eléctrico",
        "Revisión de panel de control",
        "Revisión de tablero de instrumentos",
        "Revisión de motor de tracción",
        "Revisión de motobomba",
        "Revisión de frenos",
        "Revisión del sistema hidráulico",
        "Revisión de llantas",
        "Revisión de batería y cargador de la misma",
        "Revisión del equipo de seguridad"
      ]
    }
  ];

  const handleQuoteService = (serviceTitle) => {
    const message = `Hola ANRIC, me gustaría agendar / cotizar el servicio de: ${serviceTitle}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white relative select-none">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-anric-red/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-anric-red text-xs font-semibold uppercase tracking-[0.2em] bg-anric-red/10 border border-anric-red/30 px-4 py-1.5 rounded-full inline-block mb-4">
            Servicio Técnico Especializado
          </span>
          <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-white leading-tight">
            MANTENIMIENTO PREVENTIVO <br className="hidden sm:block" /> Y CORRECTIVO
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Mantén tus equipos hidráulicos y montacargas en óptimas condiciones operativas con el respaldo y experiencia de nuestro equipo técnico.
          </p>
          <div className="w-16 h-1 bg-anric-red mx-auto mt-6 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>

        {/* LISTA DE SERVICIOS (CARDS MANTENIMIENTO) */}
        <div className="space-y-12 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 hover:border-anric-red/60 hover:shadow-[0_0_30px_rgba(199,7,0,0.15)] transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* COLUMNA MARCO DE IMAGEN */}
                <div className="lg:col-span-5">
                  <div className="relative w-full h-72 sm:h-80 bg-white rounded-2xl overflow-hidden p-0 flex items-center justify-center border border-neutral-700/50 group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply rounded-2xl"
                    />
                  </div>
                </div>

                {/* COLUMNA DETALLES Y CHECKLIST */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
                      MANTENIMIENTO
                    </h2>
                    <p className="font-anton text-xl sm:text-2xl text-anric-red uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Lista de Items con viñeta Check */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <span className="text-anric-red font-extrabold text-sm flex-shrink-0">✓</span>
                        <span className="font-light leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botón de Acción */}
                  <div className="pt-4 border-t border-neutral-800/80">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuoteService(service.title)}
                      className="px-6 py-3.5 bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                      <span>Solicitar Servicio Técnico</span>
                      <span className="text-base">→</span>
                    </motion.button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* BANNER DE ASESORÍA / DUDAS TÉCNICAS */}
        <AdvisorCTA />

      </div>
    </div>
  );
}