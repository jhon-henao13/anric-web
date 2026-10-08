import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header class="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-xs transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div class="flex-shrink-0 flex items-center">
            <Link to="/" class="flex items-center gap-3 group">
              <img 
                src={logoImg} 
                alt="ANRIC Equipos Hidráulicos" 
                class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>

          {/* Menú Desktop */}
          <nav class="hidden md:flex items-center space-x-10">
            <Link to="/productos" className="hover:text-anric-red transition-colors">Productos</Link>
            <Link to="/nosotros" className="text-gray-200 hover:text-white font-medium text-base transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-anric-red hover:after:w-full after:transition-all">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-gray-200 hover:text-white font-medium text-base transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-anric-red hover:after:w-full after:transition-all">
              Contacto
            </Link>
          </nav>

          {/* Contacto directo y CTA */}
          <div class="hidden lg:flex items-center space-x-6">
            <a 
              href="mailto:ventas@anric.com.mx" 
              class="text-gray-200 hover:text-white text-sm font-normal underline decoration-gray-500 underline-offset-4 hover:decoration-white transition-all"
            >
              ventas@anric.com.mx
            </a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#cotizar"
              class="bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-base px-5 py-2 rounded-md shadow-lg transition-all flex items-center gap-2 tracking-wide border border-red-500/30"
            >
              Cotizar Ahora <span class="text-lg">→</span>
            </motion.a>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div class="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              class="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Abrir Menú"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            class="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800 px-4 pt-4 pb-6 space-y-4"
          >
            <a href="#productos" onClick={() => setMobileMenuOpen(false)} class="block text-gray-200 hover:text-white text-lg font-medium">Productos</a>
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} class="block text-gray-200 hover:text-white text-lg font-medium">Nosotros</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} class="block text-gray-200 hover:text-white text-lg font-medium">Contacto</a>
            <a href="mailto:ventas@anric.com.mx" class="block text-gray-400 text-sm py-1">ventas@anric.com.mx</a>
            <a 
              href="#cotizar" 
              onClick={() => setMobileMenuOpen(false)} 
              class="inline-block w-full text-center bg-anric-red hover:bg-anric-red-hover text-white font-bold py-3 rounded-md shadow-md"
            >
              Cotizar Ahora →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}