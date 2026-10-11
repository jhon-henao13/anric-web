import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, WHATSAPP_NUMBER } from '../data/products';
import AdvisorCTA from '../components/AdvisorCTA';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => products.find(p => p.id === Number(id)), [id]);

  // Si no existe el producto, redirigir
  useEffect(() => {
    if (!product) navigate('/productos', { replace: true });
  }, [product, navigate]);

  // Scroll al top al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Productos relacionados: misma categoría, excluyendo el actual
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = products.filter(
      p => p.category === product.category && p.id !== product.id
    );
    if (sameCategory.length >= 4) return sameCategory.slice(0, 4);
    // Completar con otros productos si faltan
    const others = products.filter(
      p => p.category !== product.category && p.id !== product.id
    );
    return [...sameCategory, ...others].slice(0, 4);
  }, [product]);

  if (!product) return null;

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);

  const handleQuoteClick = () => {
    const message = `Hola, me interesa cotizar el equipo: *${product.name}* (Modelo ${product.specs?.[0]?.value || 'N/A'}). ¿Podrían brindarme más información?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-neutral-900 relative overflow-hidden">
      {/* Resplandor de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-anric-red/5 blur-[180px] pointer-events-none    rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-anric-red/5 blur-[150px] pointer-events-none    rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BREADCRUMB */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-neutral-400 mb-8"
        >
          <Link to="/productos" className="hover:text-anric-red transition-colors">Productos</Link>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-500">{product.category}</span>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900 truncate max-w-[200px]">{product.name}</span>
        </motion.nav>

        {/* HERO: Imagen + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-28">
              
              <div className="relative bg-[#f5f3ef] rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]">
                {/* Etiqueta de tonelaje */}
                <div className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-neutral-200">
                  {product.tonnage} Toneladas
                </div>
                {/* Etiqueta de categoría */}
                <div className="absolute top-5 right-5 z-10 bg-anric-red text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  {product.category}
                </div>

                <div className="aspect-square p-2 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Mini info flotante */}
              <div className="hidden lg:flex items-center gap-3 mt-4 text-xs text-gray-500">
                <svg className="w-4 h-4 text-anric-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Envío a todo México · Garantía 1 año · Factura fiscal</span>
              </div>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="text-anric-red text-sm font-bold uppercase tracking-[0.2em] mb-3">
              {product.category}
            </span>

            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide !leading-[1.1] text-neutral-900 mb-6">
              {product.name}
            </h1>

            {/* Precio */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-neutral-200">
              <span className="text-4xl md:text-5xl font-light text-anric-red">
                {formatPrice(product.price)}
              </span>
              <span className="text-neutral-400 text-sm">MXN + IVA</span>
            </div>

            {/* Descripción */}
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Highlights rápidos */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
                <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Capacidad</p>
                <p className="text-xl font-bold text-neutral-900">{product.tonnage} T</p>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
                <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Garantía</p>
                <p className="text-xl font-bold text-neutral-900">1 año</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleQuoteClick}
              className="group relative w-full py-5 bg-anric-red hover:bg-red-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(199,7,0,0.4)] hover:shadow-[0_0_50px_rgba(199,7,0,0.6)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">Cotizar Ahora por WhatsApp</span>
            </button>

            {/* Info de contacto adicional */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Respuesta en menos de <span className="text-white font-semibold">15 minutos</span> en horario laboral
            </p>
          </motion.div>
        </div>

        {/* ASPECTOS TÉCNICOS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">

            <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-wide text-neutral-900">
              Aspectos <span className="text-anric-red">Técnicos</span>
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-neutral-200 to-transparent" />
            
          </div>

          <div className="bg-neutral-50/70 border border-neutral-200 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {product.specs?.map((spec, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-6 py-5 border-b border-neutral-200 hover:bg-white transition-colors ${
                    i % 2 === 0 ? 'md:border-r md:border-neutral-200' : ''
                  }`}
                >
                  <span className="text-sm text-neutral-500 uppercase tracking-wider font-medium">
                    {spec.label}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-neutral-900 text-right ml-4">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          
        </motion.section>

        {/* OTROS PRODUCTOS (Related) */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-10">

              <h2 className="font-anton text-3xl md:text-4xl uppercase tracking-wide text-neutral-900">
                Otros <span className="text-anric-red">Productos</span>
              </h2>
              <div className="flex-grow h-px bg-gradient-to-r from-neutral-200 to-transparent" />
              <Link to="/productos" className="hidden sm:flex items-center gap-2 text-sm text-neutral-500 hover:text-anric-red transition-colors">

                
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


              {relatedProducts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  
                  <Link
                    to={`/producto/${rp.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-square rounded-2xl bg-[#f5f3ef] overflow-hidden mb-4">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-semibold mb-1.5">
                        {rp.category}
                      </p>
                      <h3 className="text-sm font-medium text-neutral-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-anric-red transition-colors">
                        {rp.name}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-900">
                        {formatPrice(rp.price)}
                        <span className="text-neutral-400 font-normal text-xs ml-1.5">MXN</span>
                      </p>
                    </div>
                  </Link>


                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 text-sm text-anric-red font-semibold"
              >
                Ver todos los productos
                
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </motion.section>
        )}

        <AdvisorCTA />
      </div>
    </div>
  );
}