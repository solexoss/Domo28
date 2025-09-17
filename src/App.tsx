import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <ProductGallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;