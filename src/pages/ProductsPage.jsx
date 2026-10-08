import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1); // Nuevo estado para paginación
  const ITEMS_PER_PAGE = 9; // Límite de productos por página

  // Datos de todos los productos (Page 1, 2 y 3)
  const products = [
    // --- PAGE 1 ORIGINAL ---
    { id: 1, name: 'Patín Hidráulico Angosto y Estándar 3T', category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0014_Grupo-23-1-300x300.jpg' },
    { id: 2, name: 'Patín Hidráulico Angosto y Estándar Amarillo 3T', category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0015_Grupo-22-1-300x300.jpg' },
    { id: 3, name: 'Patín con freno', category: 'Patines Especiales', price: 10580.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/patinconfrenoanric-1-300x300.jpg' },
    { id: 4, name: 'Patín Hidráulico 5T', category: 'Patines Alta Capacidad', price: 16750.00, tonnage: 5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0019_Grupo-18-1-300x300.jpg' },
    { id: 5, name: 'Patín Hidráulico 7T', category: 'Patines Alta Capacidad', price: 21130.00, tonnage: 7, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0025_Grupo-12-1-300x300.jpg' },
    { id: 6, name: 'Patín Hidráulico Acero Inoxidable 2T', category: 'Patines Especiales', price: 40550.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0020_Grupo-17-1-300x300.jpg' },
    { id: 7, name: 'Patín Hidráulico Angosto y Estándar 3T Poliuretano', category: 'Patines Hidráulicos', price: 6700.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0018_Grupo-19-1-300x300.jpg' },
    { id: 8, name: 'Patín Hidráulico Batman 3T', category: 'Patines Hidráulicos', price: 11310.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0028_Grupo-9-1-300x300.jpg' },
    { id: 9, name: 'Patín Hidráulico Batman Cama Baja 3T', category: 'Patines Cama Baja', price: 12090.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0027_Grupo-10-1-300x300.jpg' },
    
    // --- PAGE 2 NUEVOS ---
    { id: 10, name: 'Patin Hidráulico Cama Baja 2T', category: 'Patines Cama Baja', price: 10310.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0021_Grupo-16-1-300x300.jpg' },
    { id: 11, name: 'Patin Hidráulico Cama Extra Baja', category: 'Patines Cama Baja', price: 14740.00, tonnage: 1.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0024_Grupo-13-1-300x300.jpg' },
    { id: 12, name: 'Patín Hidráulico con Impresora', category: 'Patines Especiales', price: 45175.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0023_Grupo-14-1-300x300.jpg' },
    { id: 13, name: 'Patín Hidráulico Extra Angosto 3T', category: 'Patines Hidráulicos', price: 9840.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/Patin-extra-angosto-1-300x300.jpg' },
    { id: 14, name: 'Patin Hidraulico Galvanizado 2.5T', category: 'Patines Especiales', price: 12390.00, tonnage: 2.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0017_Grupo-20-1-300x300.jpg' },
    { id: 15, name: 'Patin Hidraulico Largo 2T', category: 'Patines Hidráulicos', price: 13090.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/PatinLargoanric-1-300x300.jpg' },
    { id: 16, name: 'Patin Hidráulico Mini 2.5T', category: 'Patines Hidráulicos', price: 7615.00, tonnage: 2.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0034_Grupo-3-1-300x300.jpg' },
    { id: 17, name: 'Patin Hidráulico Tijera 1.5T', category: 'Patines Especiales', price: 17400.00, tonnage: 1.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0016_Grupo-21-1-300x300.jpg' },
    { id: 18, name: 'Patín Hidráulico Todo Terreno', category: 'Patines Especiales', price: 28665.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0036_Grupo-1-1-300x300.jpg' },
    
    // --- PAGE 3 NUEVOS ---
    { id: 19, name: 'Patín Para Tambos', category: 'Patines Especiales', price: 16670.00, tonnage: 0.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0030_Grupo-7-1-300x300.jpg' }
  ];

  const categories = ['Todos', 'Patines Hidráulicos', 'Patines Alta Capacidad', 'Patines Especiales', 'Patines Cama Baja'];

  // Lógica de Filtro y Ordenamiento
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(p => activeCategory === 'Todos' || p.category === activeCategory);
    
    switch (sortBy) {
      case 'price-asc': return result.sort((a, b) => a.price - b.price);
      case 'price-desc': return result.sort((a, b) => b.price - a.price);
      case 'ton-desc': return result.sort((a, b) => b.tonnage - a.tonnage);
      case 'ton-asc': return result.sort((a, b) => a.tonnage - b.tonnage);
      default: return result;
    }
  }, [activeCategory, sortBy]);


  // Resetear a la página 1 si el usuario cambia el filtro o el orden
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, sortBy]);

  // Cálculo de productos para la página actual
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  // Formateador de moneda
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
  };

  const handleCardClick = (id) => {
    // Aquí iría la redirección a la ficha del producto, ej: navigate(`/producto/${id}`)
    console.log(`Navegando a detalle del producto ${id}`);
  };

  const handleQuoteClick = (e, productName) => {
    e.stopPropagation(); // Evita que se dispare el click de la tarjeta
    const message = `Hola, me interesa cotizar el equipo: ${productName}`;
    window.open(`https://wa.me/525512345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white relative">
      {/* Resplandor de fondo ambiental */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-anric-red/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER: Título y Subtítulo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-anton text-5xl md:text-7xl uppercase text-anric-red tracking-wide leading-tight">
            EXPLORA NUESTROS <br className="hidden md:block"/> PRODUCTOS
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            Soluciones de carga para cada nivel de exigencia. Calidad, resistencia y rendimiento industrial.
          </p>
        </motion.div>

        {/* CONTROLES: Filtros y Ordenamiento */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-y border-neutral-800 py-6"
        >
          {/* Categorías (Pills) */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-anric-red border-anric-red text-white shadow-[0_0_15px_rgba(199,7,0,0.4)]' 
                    : 'bg-transparent border-neutral-700 text-gray-400 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ordenamiento (Dropdown) */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <span className="text-gray-400 text-sm whitespace-nowrap">Ordenar por:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-900 border border-neutral-700 text-white text-sm rounded-lg focus:ring-anric-red focus:border-anric-red block w-full lg:w-[200px] p-2.5 outline-none cursor-pointer appearance-none"
            >
              <option value="default">Recomendados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="ton-desc">Capacidad: Mayor a Menor</option>
              <option value="ton-asc">Capacidad: Menor a Mayor</option>
            </select>
          </div>
        </motion.div>

        {/* GRID DE PRODUCTOS */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                onClick={() => handleCardClick(product.id)}
                className="group cursor-pointer bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden hover:border-anric-red transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,7,0,0.15)] flex flex-col h-full"
              >
                {/* Contenedor de Imagen (Fondo blanco para los JPGs) */}
                <div className="relative bg-white w-full h-64 p-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Etiqueta flotante de Tonelaje */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {product.tonnage} Toneladas
                  </div>
                </div>

                {/* Info del Producto */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-gradient-to-b from-neutral-900 to-black">
                  <div>
                    <span className="text-anric-red text-xs font-bold uppercase tracking-wider mb-2 block">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-anric-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-light text-gray-300 mb-6">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  {/* Botón Cotizar Ahora */}
                  <button 
                    onClick={(e) => handleQuoteClick(e, product.name)}
                    className="w-full py-3.5 bg-neutral-800 hover:bg-anric-red text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Cotizar Ahora
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
            
          </AnimatePresence>
        </motion.div>

        {/* CONTROLES DE PAGINACIÓN */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({ top: 400, behavior: 'smooth' }); // Opcional: Auto-scroll al inicio de la lista
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentPage === index + 1
                    ? 'bg-anric-red text-white shadow-[0_0_15px_rgba(199,7,0,0.5)] border border-anric-red'
                    : 'bg-transparent text-gray-400 border border-neutral-700 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No se encontraron productos en esta categoría.
          </div>
        )}

      </div>
    </div>
  );
}