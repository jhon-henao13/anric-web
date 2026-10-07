import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importación de las imágenes locales desde /src/assets/equipos/patin-hidraulico/
import img5t from '../assets/equipos/patin-hidraulico/5t.png';
import imgBatman3t from '../assets/equipos/patin-hidraulico/batman-camabaja-3t.png';
import imgAngosto3t from '../assets/equipos/patin-hidraulico/angosto-estandar-3t.png';
import imgTijera15t from '../assets/equipos/patin-hidraulico/tijera.png';

export default function BestSellersSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const whatsappNumber = "525512345678"; // Reemplazar con tu número real de WhatsApp

  const products = [
    {
      id: "patin-5t",
      title: "PATÍN HIDRÁULICO 5T",
      price: "$16,750.00",
      image: img5t,
      specs: [
        "Capacidad de carga: 5,000 kg (5 Toneladas)",
        "Estructura reforzada de alta resistencia",
        "Ruedas de poliuretano/hierro para uso rudo",
        "Bomba hidráulica sellada prueba de fugas"
      ]
    },
    {
      id: "patin-batman-3t",
      title: "PATÍN HIDRÁULICO BATMAN CAMA BAJA 3T",
      price: "$12,090.00",
      image: imgBatman3t,
      specs: [
        "Capacidad de carga: 3,000 kg",
        "Perfil super bajo para tarimas especiales/europeas",
        "Altura mínima de horquillas reducida",
        "Chasis de acero estructural con recubrimiento de pintura epóxica"
      ]
    },
    {
      id: "patin-angosto-3t",
      title: "PATÍN HIDRÁULICO ANGOSTO-ESTÁNDAR 3T",
      price: "$6,200.00",
      image: imgAngosto3t,
      specs: [
        "Capacidad de carga: 3,000 kg",
        "Ancho de horquillas versátil para pasillos reducidos",
        "Maneral ergonómico de 3 posiciones (Lifting, Neutral, Lowering)",
        "Mantenimiento sencillo y repuestos 100% disponibles"
      ]
    },
    {
      id: "patin-tijera-15t",
      title: "PATIN HIDRÁULICO TIJERA 1.5T",
      price: "$17,400.00",
      image: imgTijera15t,
      specs: [
        "Capacidad de carga: 1,500 kg",
        "Función 2 en 1: Patín de traslado y Mesa elevadora de tijera",
        "Altura máxima de elevación ergonómica",
        "Estabilizadores automáticos al elevar la carga"
      ]
    }
  ];

  const handleWhatsAppOrder = (productTitle) => {
    const message = encodeURIComponent(`¡Hola ANRIC! Me interesa realizar un pedido del equipo: ${productTitle}. ¿Me podrían dar más detalles?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="mas-vendidos" className="relative py-20 bg-black text-white overflow-hidden select-none">
      
      {/* Fondo con resplandor ambiental sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-96 bg-anric-red/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la Sección */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-white leading-tight">
            MÁS VENDIDOS
          </h2>
          <div className="w-16 h-1 bg-anric-red mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(199,7,0,0.8)]"></div>
        </motion.div>

        {/* Grilla de Productos de 4 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#212121]/90 border border-neutral-700/60 rounded-3xl p-4 flex flex-col justify-between hover:border-anric-red/80 hover:shadow-[0_0_25px_rgba(199,7,0,0.25)] transition-all duration-300 group"
            >
              <div>
                {/* Contenedor de la Imagen con Marcas de Agua / Fondo */}
                <div className="relative w-full h-52 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                {/* Nombre del Producto */}
                <h3 className="font-anton text-xl sm:text-2xl text-white uppercase tracking-wider leading-tight min-h-[56px] flex items-center mb-2">
                  {product.title}
                </h3>

                {/* Precio */}
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="font-anton text-2xl sm:text-3xl text-anric-red tracking-tight">
                    {product.price}
                  </span>
                  <span className="text-xs font-extrabold text-gray-300 tracking-wider uppercase">
                    MXN • IVA
                  </span>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-700/50">
                <button
                  onClick={() => handleWhatsAppOrder(product.title)}
                  className="bg-anric-red hover:bg-anric-red-hover text-white font-extrabold text-xs sm:text-sm py-3 px-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-red-900/50 active:scale-95 text-center leading-tight flex items-center justify-center"
                >
                  Hacer Pedido
                </button>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white font-extrabold text-xs sm:text-sm py-3 px-2 rounded-xl transition-all duration-200 active:scale-95 text-center leading-tight flex items-center justify-center"
                >
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL / POPUP DE DETALLES DEL PRODUCTO */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900 border border-neutral-700 rounded-3xl max-w-lg w-full p-6 relative shadow-2xl overflow-hidden"
            >
              {/* Botón Cerrar Modal */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                <div className="w-32 h-32 bg-white rounded-xl p-2 flex-shrink-0">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-anton text-2xl text-white uppercase leading-tight">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-anric-red font-anton text-2xl mt-1">
                    {selectedProduct.price} <span className="text-xs text-gray-400 font-sans">MXN + IVA</span>
                  </p>
                </div>
              </div>

              {/* Especificaciones */}
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider border-b border-neutral-800 pb-1">
                  Especificaciones Técnicas
                </h4>
                <ul className="space-y-2 pt-1">
                  {selectedProduct.specs.map((spec, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-anric-red font-bold">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón Pedido Modal */}
              <button
                onClick={() => {
                  handleWhatsAppOrder(selectedProduct.title);
                  setSelectedProduct(null);
                }}
                className="w-full bg-anric-red hover:bg-anric-red-hover text-white font-extrabold py-3.5 rounded-xl transition-colors shadow-lg text-center uppercase tracking-wide"
              >
                Cotizar este equipo por WhatsApp
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}