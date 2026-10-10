import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { products, categories, WHATSAPP_NUMBER } from '../data/products';
import AdvisorCTA from '../components/AdvisorCTA';

export default function ProductsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('default');
  const [activePage, setActivePage] = useState(1);
  const TOTAL_PAGES = 3;    
  // Estados del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const AUTOPLAY_MS = 4000; // Velocidad del auto-slide

  // Datos de todos los productos (Page 1, 2 y 3)
  const products = [
    // --- PAGE 1 ---
    { id: 1, page: 1, name: 'Patín Hidráulico Angosto y Estándar 3T', category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0014_Grupo-23-1-300x300.jpg' },
    { id: 2, page: 1, name: 'Patín Hidráulico Angosto y Estándar Amarillo 3T', category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0015_Grupo-22-1-300x300.jpg' },
    { id: 3, page: 1, name: 'Patín con freno', category: 'Patines Especiales', price: 10580.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/patinconfrenoanric-1-300x300.jpg' },
    { id: 4, page: 1, name: 'Patín Hidráulico 5T', category: 'Patines Alta Capacidad', price: 16750.00, tonnage: 5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0019_Grupo-18-1-300x300.jpg' },
    { id: 5, page: 1, name: 'Patín Hidráulico 7T', category: 'Patines Alta Capacidad', price: 21130.00, tonnage: 7, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0025_Grupo-12-1-300x300.jpg' },
    { id: 6, page: 1, name: 'Patín Hidráulico Acero Inoxidable 2T', category: 'Patines Especiales', price: 40550.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0020_Grupo-17-1-300x300.jpg' },
    { id: 7, page: 1, name: 'Patín Hidráulico Angosto y Estándar 3T Poliuretano', category: 'Patines Hidráulicos', price: 6700.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0018_Grupo-19-1-300x300.jpg' },
    { id: 8, page: 1, name: 'Patín Hidráulico Batman 3T', category: 'Patines Hidráulicos', price: 11310.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0028_Grupo-9-1-300x300.jpg' },
    { id: 9, page: 1, name: 'Patín Hidráulico Batman Cama Baja 3T', category: 'Patines Cama Baja', price: 12090.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0027_Grupo-10-1-300x300.jpg' },
  
    // --- PAGE 2 ---
    { id: 10, page: 2, name: 'Patin Hidráulico Cama Baja 2T', category: 'Patines Cama Baja', price: 10310.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0021_Grupo-16-1-300x300.jpg' },
    { id: 11, page: 2, name: 'Patin Hidráulico Cama Extra Baja', category: 'Patines Cama Baja', price: 14740.00, tonnage: 1.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0024_Grupo-13-1-300x300.jpg' },
    { id: 12, page: 2, name: 'Patín Hidráulico con Impresora', category: 'Patines Especiales', price: 45175.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0023_Grupo-14-1-300x300.jpg' },
    { id: 13, page: 2, name: 'Patín Hidráulico Extra Angosto 3T', category: 'Patines Hidráulicos', price: 9840.00, tonnage: 3, image: 'https://anric.com.mx/wp-content/uploads/2022/08/Patin-extra-angosto-1-300x300.jpg' },
    { id: 14, page: 2, name: 'Patin Hidraulico Galvanizado 2.5T', category: 'Patines Especiales', price: 12390.00, tonnage: 2.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0017_Grupo-20-1-300x300.jpg' },
    { id: 15, page: 2, name: 'Patin Hidraulico Largo 2T', category: 'Patines Hidráulicos', price: 13090.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/PatinLargoanric-1-300x300.jpg' },
    { id: 16, page: 2, name: 'Patin Hidráulico Mini 2.5T', category: 'Patines Hidráulicos', price: 7615.00, tonnage: 2.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0034_Grupo-3-1-300x300.jpg' },
    { id: 17, page: 2, name: 'Patin Hidráulico Tijera 1.5T', category: 'Patines Especiales', price: 17400.00, tonnage: 1.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0016_Grupo-21-1-300x300.jpg' },
    { id: 18, page: 2, name: 'Patín Hidráulico Todo Terreno', category: 'Patines Especiales', price: 28665.00, tonnage: 2, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0036_Grupo-1-1-300x300.jpg' },
  
    // --- PAGE 3 ---
    { id: 19, page: 3, name: 'Patín Para Tambos', category: 'Patines Especiales', price: 16670.00, tonnage: 0.5, image: 'https://anric.com.mx/wp-content/uploads/2022/08/recortes-anric_0030_Grupo-7-1-300x300.jpg' }
  ];

  const categories = ['Todos', 'Patines Hidráulicos', 'Patines Alta Capacidad', 'Patines Especiales', 'Patines Cama Baja'];

  // Lógica de Filtro, Paginación y Ordenamiento
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(
      p => (activeCategory === 'Todos' || p.category === activeCategory) && p.page === activePage
    );
  
    switch (sortBy) {
      case 'price-asc': return [...result].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...result].sort((a, b) => b.price - a.price);
      case 'ton-desc': return [...result].sort((a, b) => b.tonnage - a.tonnage);
      case 'ton-asc': return [...result].sort((a, b) => a.tonnage - b.tonnage);
      default: return result;
    }
  }, [activeCategory, sortBy, activePage]);


  // Resetear a la página 1 si el usuario cambia el filtro o el orden
  // Detectar items por vista según breakpoint (responsive)
  useEffect(() => {
    const updateItemsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);
  
  // Índice máximo permitido (para no dejar huecos al final)
  const maxIndex = Math.max(0, filteredAndSortedProducts.length - itemsPerView);
  
  // Resetear al inicio cuando cambian filtros, orden, página o layout
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, sortBy, itemsPerView, activePage]);
  
  // Asegurar que el índice nunca se salga del rango
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);
  
  // Navegación
  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));

  // Cambio de página (grupo de productos)
  const handlePageChange = (page) => {
    setActivePage(page);
    setCurrentIndex(0);
    // Scroll suave al inicio de la sección de productos
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };
  
  // Autoplay con pausa al hover / cuando hay pocos productos
  useEffect(() => {
    if (isPaused || filteredAndSortedProducts.length <= itemsPerView) return;
    const interval = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex, itemsPerView, filteredAndSortedProducts.length]);


  // Formateador de moneda
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
  };

  const handleCardClick = (id) => {
    navigate(`/producto/${id}`);
  };

  const handleQuoteClick = (e, productName) => {
    e.stopPropagation();
    const message = `Hola, me interesa cotizar el equipo: *${productName}*. ¿Podrían brindarme más información?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white/90 text-white relative">
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
          <p className="text-gray-700 mt-4 text-lg max-w-2xl">
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
                    : 'bg-transparent border-neutral-700 text-gray-700 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ordenamiento (Dropdown) */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <span className="text-gray-700 text-sm whitespace-nowrap">Ordenar por:</span>
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
        {/* CARRUSEL DE PRODUCTOS */}
        {filteredAndSortedProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Flechas de navegación */}
            {filteredAndSortedProducts.length > itemsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  aria-label="Producto anterior"
                  className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center hover:bg-anric-red hover:border-anric-red hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
            
                <button
                  onClick={nextSlide}
                  aria-label="Producto siguiente"
                  className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center hover:bg-anric-red hover:border-anric-red hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Viewport del carrusel con fade lateral premium */}
            <div className="overflow-hidden relative">
              {/* Gradientes laterales sutiles (profundidad visual) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-20 hidden sm:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-20 hidden sm:block" />
        
              {/* Track deslizante */}
              <motion.div
                key={`${activeCategory}-${sortBy}-${itemsPerView}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex will-change-transform"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  transition: 'transform 800ms cubic-bezier(0.65, 0, 0.35, 1)',
                }}
              >
                {filteredAndSortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 px-3 sm:px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div
                      onClick={() => handleCardClick(product.id)}
                      className="group cursor-pointer bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden hover:border-anric-red transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,7,0,0.2)] flex flex-col h-full hover:-translate-y-1"
                    >
                      {/* Contenedor de Imagen */}
                      <div className="relative bg-white w-full h-64 p-6 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
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
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight group-hover:text-anric-red transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xl md:text-2xl font-light text-gray-300 mb-6">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                
                        <button
                          onClick={(e) => handleQuoteClick(e, product.name)}
                          className="w-full py-3.5 bg-neutral-800 hover:bg-anric-red text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                          Cotizar Ahora
                          <svg
                            className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Indicadores tipo "pill" animados */}
            {maxIndex > 0 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Ir al grupo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIndex === i
                        ? 'w-10 bg-anric-red shadow-[0_0_12px_rgba(199,7,0,0.7)]'
                        : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
            )}


            {/* PAGINACIÓN POR GRUPOS (PAGE 1, 2, 3) */}
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() => handlePageChange(Math.max(1, activePage - 1))}
                disabled={activePage === 1}
                aria-label="Página anterior"
                className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  activePage === 1
                    ? 'border-neutral-800 text-neutral-700 cursor-not-allowed'
                    : 'border-neutral-700 text-gray-300 hover:border-anric-red hover:text-anric-red hover:scale-105'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  aria-label={`Ir a la página ${page}`}
                  aria-current={activePage === page ? 'page' : undefined}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border ${
                    activePage === page
                      ? 'bg-anric-red border-anric-red text-white shadow-[0_0_20px_rgba(199,7,0,0.5)] scale-110'
                      : 'bg-transparent border-neutral-700 text-gray-400 hover:bg-neutral-800 hover:text-white hover:border-neutral-500'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, activePage + 1))}
                disabled={activePage === TOTAL_PAGES}
                aria-label="Página siguiente"
                className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  activePage === TOTAL_PAGES
                    ? 'border-neutral-800 text-neutral-700 cursor-not-allowed'
                    : 'border-neutral-700 text-gray-300 hover:border-anric-red hover:text-anric-red hover:scale-105'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>


          </motion.div>
          
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-2">
              No se encontraron productos en esta categoría para esta página.
            </p>
            <p className="text-gray-600 text-sm">
              Prueba con otra categoría o cambia de página.
            </p>
          </div>
        )}

        <AdvisorCTA />


      </div>
    </div>
  );
}