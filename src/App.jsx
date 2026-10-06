import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdviceSection from './components/AdviceSection';
import StatsSection from './components/StatsSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div class="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <AdviceSection />
        <StatsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;