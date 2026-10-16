import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories, WHATSAPP_NUMBER } from '../data/products';
import AdvisorCTA from '../components/AdvisorCTA';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Categoría inicial leída desde la URL (?categoria=XXX)
  const initialCategory = useMemo(() => {
    const cat = searchParams.get('categoria');
    return cat && categories.includes(cat) ? cat : 'Todos';
  }, [searchParams]);

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default');

  // Sincronizar si la URL cambia después (ej. clic en otra categoría desde Home)
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(
      p => activeCategory === 'Todos' || p.category === activeCategory
    );

    switch (sortBy) {
      case 'price-asc':  return [...result].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...result].sort((a, b) => b.price - a.price);
      case 'ton-desc':   return [...result].sort((a, b) => b.tonnage - a.tonnage);
      case 'ton-asc':    return [...result].sort((a, b) => a.tonnage - b.tonnage);
      default:           return result;
    }
  }, [activeCategory, sortBy]);

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);

  const handleQuoteClick = (e, productName) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hola, me interesa cotizar el equipo: *${productName}*. ¿Podrían brindarme más información?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };


  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    // Mantener la URL sincronizada para poder compartir enlaces
    if (cat === 'Todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };


  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="font-anton text-5xl md:text-7xl uppercase text-anric-red tracking-wide leading-[0.95]">
            Explora nuestros <br className="hidden md:block" /> productos
          </h1>
          <p className="text-neutral-500 mt-5 text-lg max-w-2xl">
            Soluciones de carga para cada nivel de exigencia. Calidad, resistencia y rendimiento industrial.
          </p>
        </motion.div>

        {/* FILTROS — estilo limpio con pills outline */}
        {/* FILTROS — Horizontal Scroll Premium en Móvil & Clean Wrap en Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-10 pb-2 border-b border-neutral-100"
        >
          {/* Categorías con Scroll Horizontal Flotante */}
          <div className="relative w-full sm:w-auto overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2.5 min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}

                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap border ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-md shadow-neutral-900/10 scale-[1.02]'
                        : 'bg-neutral-50/60 border-neutral-200/80 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selector de Ordenamiento Responsivo */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              Ordenar:
            </span>
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto bg-neutral-50/80 hover:bg-neutral-100/80 border border-neutral-200/80 text-neutral-900 text-xs sm:text-sm font-medium rounded-full focus:ring-2 focus:ring-anric-red/20 focus:border-anric-red px-4 py-2.5 pr-9 outline-none cursor-pointer transition-all duration-200 appearance-none"
              >
                <option value="default">Recomendados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="ton-desc">Capacidad: Mayor a Menor</option>
                <option value="ton-asc">Capacidad: Menor a Mayor</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRID DE PRODUCTOS */}
        {filteredAndSortedProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <Link to={`/producto/${product.id}`} className="group block">
                    {/* Imagen sobre fondo claro */}
                    <div className="relative aspect-square rounded-2xl bg-[#f5f3ef] overflow-hidden mb-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-contain p-1 md:p-2 transition-transform duration-700 group-hover:scale-105 rounded-[6rem]"
                      />

                      {/* Botón cotizar al hover (desktop) */}
                      <button
                        onClick={(e) => handleQuoteClick(e, product.name)}
                        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-full hover:bg-anric-red shadow-lg"
                      >
                        Cotizar
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </button>
                    </div>

                    {/* Info debajo — minimalista */}
                    <div className="px-1">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-neutral-400 font-semibold mb-2">
                        {product.category}
                      </p>
                      <h3 className="text-sm md:text-[15px] font-medium text-neutral-900 leading-snug mb-2 line-clamp-2 group-hover:text-anric-red transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-base font-semibold text-neutral-900">
                        {formatPrice(product.price)}
                        <span className="text-neutral-400 font-normal text-xs ml-1.5">MXN</span>
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <p className="text-neutral-400 text-lg mb-2">No se encontraron productos en esta categoría.</p>
            <p className="text-neutral-300 text-sm">Prueba con otra categoría.</p>
          </div>
        )}

        <div className="mt-20">
          <AdvisorCTA />
        </div>
      </div>
    </div>
  );
}