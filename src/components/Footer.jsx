import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer class="bg-black border-t border-gray-900 text-gray-400 text-sm py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div class="flex items-center gap-4">
          <img src={logoImg} alt="ANRIC" class="h-8 w-auto opacity-80" />
          <span class="text-xs text-gray-500">© {new Date().getFullYear()} ANRIC Equipos Hidráulicos. Todos los derechos reservados.</span>
        </div>

        {/* Links Rápidos */}
        <div class="flex items-center space-x-6 text-xs text-gray-400">
          <a href="#productos" class="hover:text-white transition-colors">Productos</a>
          <a href="#nosotros" class="hover:text-white transition-colors">Nosotros</a>
          <a href="#contacto" class="hover:text-white transition-colors">Contacto</a>
          <a href="mailto:ventas@anric.com.mx" class="hover:text-white transition-colors">ventas@anric.com.mx</a>
        </div>

      </div>
    </footer>
  );
}