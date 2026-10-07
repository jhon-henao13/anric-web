import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

// Páginas importadas
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans flex flex-col">
        <Navbar />
        
        {/* Aquí se renderizará el contenido dinámico de cada ruta */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductsPage />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;