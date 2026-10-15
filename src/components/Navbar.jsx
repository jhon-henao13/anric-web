import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  const [scrolled, setScrolled] = useState(false);

  // Escuchar el evento de scroll para cambiar el fondo dinámicamente
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces de navegación con iconos para un acabado industrial/premium
  const navLinks = [
    { name: 'Productos', path: '/productos', icon: '⚙️' },
    { name: 'Mantenimiento', path: '/mantenimiento', icon: '🛠️' },
    { name: 'Nosotros', path: '/nosotros', icon: '🏢' },
    { name: 'Contacto', path: '/contacto', icon: '📩' },
  ];

  // Variantes de animación Framer Motion para entrada escalonada
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -12 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (

    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled || mobileMenuOpen
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-0' 
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent border-transparent py-1'
    }`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src={logoImg} 
                alt="ANRIC Equipos Hidráulicos" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(199,7,0,0.3)]" 
              />
            </Link>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-base font-medium transition-colors relative py-1 ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-anric-red transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Contacto directo y CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col text-right">
              <a 
                href="mailto:ventas@anric.com.mx" 
                className="text-gray-300 hover:text-white text-xs xl:text-sm font-normal underline decoration-gray-600 underline-offset-4 hover:decoration-anric-red transition-all"
              >
                ventas@anric.com.mx
              </a>
              <a 
                href="mailto:Anric.hidraulicos@gmail.com" 
                className="text-gray-400 hover:text-white text-xs font-normal underline decoration-gray-600 underline-offset-4 hover:decoration-anric-red transition-all"
              >
                Anric.hidraulicos@gmail.com
              </a>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#cotizar"
              className="bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-base px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(199,7,0,0.4)] transition-all flex items-center gap-2 tracking-wide border border-red-500/30"
            >
              Cotizar Ahora <span className="text-lg">→</span>
            </motion.a>
          </div>

          {/* Botón Hamburguesa Móvil Animado */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white focus:outline-none active:scale-95 transition-all duration-200"
              aria-label="Abrir Menú"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'w-6 rotate-45 translate-y-[7px] bg-anric-red' : 'w-6'
                }`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'w-0 opacity-0' : 'w-4 self-start'
                }`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px] bg-anric-red' : 'w-6'
                }`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil Premium */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-red-900/30 shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="px-5 pt-3 pb-7 space-y-2.5 max-w-lg mx-auto">
              
              {/* Separador superior con efecto de resplandor */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-anric-red/50 to-transparent mb-4" />

              {/* Lista Enlaces */}
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link 
                      to={link.path} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 group border ${
                        isActive 
                          ? 'bg-anric-red/15 border-anric-red/40 text-white shadow-[0_0_12px_rgba(199,7,0,0.2)]' 
                          : 'bg-white/[0.03] border-white/5 text-gray-300 hover:bg-white/[0.08] hover:text-white hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg opacity-80 group-hover:scale-110 transition-transform">{link.icon}</span>
                        <span className="text-base font-semibold tracking-wide">{link.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-anric-red animate-pulse" />
                        )}
                        <span className="text-gray-500 group-hover:text-anric-red group-hover:translate-x-1 transition-all text-sm">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Sección de Contacto Directo Móvil */}
              <motion.div variants={itemVariants} className="pt-2 space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
                    <a 
                      href="mailto:ventas@anric.com.mx" 
                      className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-anric-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">ventas@anric.com.mx</span>
                    </a>
                    
                    <span className="hidden sm:inline text-gray-600">•</span>

                    <a 
                      href="mailto:Anric.hidraulicos@gmail.com" 
                      className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-anric-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">Anric.hidraulicos@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Botón CTA Destacado */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.a 
                  whileTap={{ scale: 0.97 }}
                  href="#cotizar" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-anric-red to-anric-red-hover text-white font-extrabold text-base py-3.5 rounded-xl shadow-[0_4px_20px_rgba(199,7,0,0.4)] border border-red-500/40 tracking-wider uppercase transition-all"
                >
                  <span>Cotizar Ahora</span>
                  <span className="text-lg">→</span>
                </motion.a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}