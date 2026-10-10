import React from 'react';
import { motion } from 'framer-motion';

// Componentes Reutilizados y Nuevos
import StatsSection from '../components/StatsSection';
import WhyUsSection from '../components/WhyUsSection';
import WorkProcessSection from '../components/WorkProcessSection';
import ClientsTrustSection from '../components/ClientsTrustSection';

export default function AboutUs() {
  const handleQuoteClick = () => {
    window.open("https://wa.me/525548619200?text=Hola,%20quisiera%20recibir%20asesoría%20sobre%20equipos%20hidráulicos", "_blank");
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 select-none overflow-hidden">
      
      {/* 1. SECCIÓN HERO: ¿QUIÉNES SOMOS? */}
      <section className="relative py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Texto Izquierdo */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              
              <h1 className="font-anton text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-white leading-tight">
                ¿QUIÉNES <span className="text-anric-red">SOMOS?</span>
              </h1>
            </div>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Somos una empresa mexicana especializada en la venta, renta y servicio de equipos hidráulicos para manejo, elevación y transporte de carga.
            </p>

            <p className="text-gray-400 text-base font-light leading-relaxed">
              Desde hace más de 10 años ayudamos a empresas de todo México a optimizar sus operaciones con equipos confiables, resistentes y un servicio técnico que responde cuando más lo necesitas.
            </p>

            <div className="pt-2 border-l-4 border-anric-red pl-4">
              <p className="font-anton text-xl sm:text-2xl uppercase tracking-wider text-white">
                En <span className="text-anric-red">ANRIC</span>, tu operación nunca se detiene.
              </p>
            </div>
          </motion.div>

          {/* Imagen Derecha (Operario en almacén) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                alt="Técnico ANRIC Almacén" 
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. NUESTRA EXPERIENCIA, TU RESPALDO (Estadísticas) */}
      <StatsSection />

      {/* 3. ¿QUÉ NOS DIFERENCIA? (Pilares) */}
      <WhyUsSection />

      {/* 4. NUESTRA FORMA DE TRABAJAR (Proceso de 4 pasos) */}
      <WorkProcessSection />

      {/* 5. LA CONFIANZA DE GRANDES EMPRESAS (Logos de Clientes) */}
      <ClientsTrustSection />

      {/* 6. BANNER CTA FINAL: ¿LISTO PARA OPTIMIZAR TU OPERACIÓN? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
        >
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-anric-red/20 blur-[150px] pointer-events-none rounded-full" />

          {/* Texto del CTA */}
          <div className="max-w-xl space-y-6 z-10 text-center lg:text-left">
            <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-none text-white">
              ¿LISTO PARA OPTIMIZAR <br />
              <span className="text-anric-red">TU OPERACIÓN?</span>
            </h2>

            <p className="text-gray-300 text-base font-light leading-relaxed">
              Contáctanos hoy mismo y recibe asesoría sin compromiso. Un especialista te ayudará a encontrar la solución ideal para tu negocio.
            </p>

            <div>
              <motion.button
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white hover:bg-neutral-100 text-black font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-300 border border-white uppercase tracking-wider cursor-pointer"
              >
                Contactar a un Asesor
              </motion.button>
            </div>
          </div>

          {/* Imagen Ilustrativa Montacargas */}
          <div className="z-10 w-full max-w-md lg:max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
              alt="Montacargas Industrial ANRIC" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] rounded-2xl border border-neutral-800"
            />
          </div>
        </motion.div>
      </section>

    </div>
  );
}