import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construir mensaje directo a WhatsApp como fallback o integración rápida
    const textMessage = `*Nueva Consulta desde la Web Anric*\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp/Tel:* ${formData.phone}\n*Mensaje:* ${formData.message}`;
    window.open(`https://wa.me/525548619200?text=${encodeURIComponent(textMessage)}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white relative overflow-hidden">
      {/* Resplandor de fondo ambiental */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-anric-red/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-anric-red/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-12 mt-10 text-center md:text-left"
        >
          {/* <span className="text-anric-red text-xs font-semibold uppercase tracking-[0.2em] bg-anric-red/10 border border-anric-red/30 px-4 py-1.5 rounded-full inline-block mb-4">
            Atención Inmediata
          </span> */}
          <h1 className="font-anton text-5xl md:text-7xl uppercase text-white tracking-wide leading-tight">
            CONTÁC<span className="text-anric-red">TANOS</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl font-light">
            ¿Necesitas una cotización personalizada? Llena el formulario explicando tu requerimiento y un asesor técnico se pondrá en contacto muy pronto.
          </p>
        </motion.div>

        {/* BARRAS DE INFORMACIÓN RÁPIDA (Top highlights de la imagen) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 border-y border-neutral-800 py-6"
        >
          <div className="flex items-center gap-4 bg-neutral-950/60 border border-neutral-800/80 p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-anric-red/10 border border-anric-red/30 flex items-center justify-center text-anric-red">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Horario de Atención</p>
              <p className="text-white font-semibold text-sm sm:text-base">LUN - VIE: 9:00 - 18:00</p>
            </div>
          </div>

          <a href="tel:5548619200" className="flex items-center gap-4 bg-neutral-950/60 border border-neutral-800/80 hover:border-anric-red/50 p-4 rounded-2xl transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-anric-red/10 border border-anric-red/30 flex items-center justify-center text-anric-red group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Llamada Directa</p>
              <p className="text-white font-semibold text-sm sm:text-base group-hover:text-anric-red transition-colors">Tel. 55 4861 9200</p>
            </div>
          </a>

          <a href="mailto:ventas@anric.com.mx" className="flex items-center gap-4 bg-neutral-950/60 border border-neutral-800/80 hover:border-anric-red/50 p-4 rounded-2xl transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-anric-red/10 border border-anric-red/30 flex items-center justify-center text-anric-red group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Correo Electrónico</p>
              <p className="text-white font-semibold text-sm sm:text-base group-hover:text-anric-red transition-colors">ventas@anric.com.mx</p>
            </div>
          </a>
        </motion.div>

        {/* CONTENIDO PRINCIPAL EN 2 COLUMNAS (Info + Mapa vs Formulario) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMNA IZQUIERDA: Ubicación e Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-anton uppercase text-white tracking-wide border-b border-neutral-800 pb-4">
                Nuestra Ubicación
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-anric-red/10 border border-anric-red/30 flex items-center justify-center text-anric-red shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Dirección Fiscal y Bodega</h3>
                  <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                    Calle Coahuila MZ. 52 LT. 5 <br />
                    Col. Lázaro Cárdenas, Atizapán de Zaragoza <br />
                    Edo. México, C.P. 54500
                  </p>
                </div>
              </div>

              {/* MAPA DE GOOGLE MAPS EMBEBIDO CON ESTILO OSCURO */}
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl group">
                <iframe
                  title="Ubicación Anric"
                  src="https://maps.google.com/maps?q=Calle%20Coahuila%20MZ.%2052%20LT.%205%20Col.%20Lazaro%20Cardenas%20Atizapan%20de%20Zaragoza%20Edo.%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-300 border border-neutral-700">
                  Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Formulario Premium de Cotización */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <h2 className="text-2xl md:text-3xl font-anton uppercase text-white tracking-wide mb-2">
                Solicitar Cotización
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Escribe tus datos e indícanos qué modelo o tonelaje de patín hidráulico estás buscando.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-anric-red focus:ring-1 focus:ring-anric-red transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-anric-red focus:ring-1 focus:ring-anric-red transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="55 1234 5678"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-anric-red focus:ring-1 focus:ring-anric-red transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Mensaje / Requerimiento *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe los equipos que necesitas o las dimensiones/capacidad de carga que buscas..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-anric-red focus:ring-1 focus:ring-anric-red transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-anric-red hover:bg-anric-red-hover text-white font-anton uppercase text-lg tracking-wider rounded-xl shadow-[0_0_20px_rgba(199,7,0,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Enviar Mensaje</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>

                {submitted && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-400 text-sm text-center font-medium mt-2"
                  >
                    ✓ Mensaje enviado correctamente. Te contactaremos en breve.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}