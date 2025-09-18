import React from 'react';
import { Shield, Smartphone, Fingerprint, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappContact = () => {
    window.open('https://wa.me/33660245937', '_blank');
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300 pt-16">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-300 dark:bg-orange-700 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="space-y-8">
          {/* Logo et titre principal */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Serrures
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
                Intelligentes
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
              Sécurisez votre domicile avec nos serrures connectées de dernière génération. 
              Installation professionnelle incluse pour une tranquillité d'esprit totale.
            </p>
          </div>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Smartphone className="w-6 h-6 text-orange-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Contrôle via App</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Fingerprint className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Empreinte & Face ID</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Installation Incluse</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <button 
              onClick={scrollToProducts}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Découvrir nos produits</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={whatsappContact}
              className="group bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Devis gratuit</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">💬</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;