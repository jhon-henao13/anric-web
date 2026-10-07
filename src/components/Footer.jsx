import React from 'react';
import { motion } from 'framer-motion';

// Importación del logo de Footer indicado
import logoFooter from '../assets/logo-footer.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    patines: [
      { name: "Patines o Traspaletas", href: "#patines-hidraulicos" },
      { name: "Patines Hidráulicos", href: "#patines-hidraulicos" },
      { name: "Patines Eléctricos", href: "#patines-electricos" },
    ],
    apiladores: [
      { name: "Apiladores Eléctricos", href: "#apiladores" },
      { name: "Apiladores Hidráulicos", href: "#apiladores" },
      { name: "Apiladores Semi-eléctricos", href: "#apiladores" },
    ],
    montacargas: [
      { name: "Montacargas", href: "#montacargas" },
      { name: "Montacargas Eléctricos", href: "#montacargas" },
      { name: "Montacargas de Combustión", href: "#montacargas" },
    ],
    mantenimiento: [
      { name: "Patines", href: "#mantenimiento" },
      { name: "Apiladores", href: "#mantenimiento" },
      { name: "Montacargas", href: "#mantenimiento" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/anricmx",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/anricmx/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Correo",
      href: "mailto:contacto@anric.com.mx",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/525512345678",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      name: "Llamada",
      href: "tel:+525512345678",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-neutral-950 text-white pt-16 pb-8 overflow-hidden select-none border-t border-neutral-800/80">
      
      {/* Fondo con resplandor rojo industrial sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-anric-red/15 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-anric-red/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BLOQUE SUPERIOR: LOGO Y RESUMEN MARCA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 mb-12 border-b border-neutral-800/80 gap-6">
          <div className="flex items-center gap-4">
            <img 
              src={logoFooter} 
              alt="ANRIC Equipos Industriales" 
              className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Soluciones integrales para la movilización de carga pesada, venta, renta y mantenimiento de maquinaria logística en todo México.
          </p>
        </div>

        {/* GRILLA PRINCIPAL DE NAVEGACIÓN (5 COLUMNAS DE LA IMAGEN) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          
          {/* Columna 1: Patines */}
          <div>
            <h4 className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white mb-4 border-l-2 border-anric-red pl-2.5">
              Patines
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.patines.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Apiladores */}
          <div>
            <h4 className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white mb-4 border-l-2 border-anric-red pl-2.5">
              Apiladores
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.apiladores.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Montacargas */}
          <div>
            <h4 className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white mb-4 border-l-2 border-anric-red pl-2.5">
              Montacargas
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.montacargas.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Mantenimiento */}
          <div>
            <h4 className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white mb-4 border-l-2 border-anric-red pl-2.5">
              Mantenimiento
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.mantenimiento.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 5: Síguenos (Iconos sociales) */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white mb-4 border-l-2 border-anric-red pl-2.5">
              Síguenos
            </h4>
            <div className="flex flex-wrap gap-2.5 items-center">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center transition-all duration-200 hover:bg-anric-red hover:border-anric-red hover:shadow-[0_0_15px_rgba(199,7,0,0.6)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* LÍNEA SEPARADORA PUNTEADA Y PIE DE PÁGINA FINAL */}
        <div className="pt-8 border-t border-dashed border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="tracking-wide">
            © {currentYear} <span className="text-white font-bold">ANRIC</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <span>•</span>
            <a href="#terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
}