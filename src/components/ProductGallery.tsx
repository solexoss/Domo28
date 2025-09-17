import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'i40',
    name: 'Serrure Intelligente I40',
    image: '/images/WhatsApp Image 2025-09-11 at 15.47.22 (1).jpeg',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure premium avec écran tactile et reconnaissance faciale avancée'
  },
  {
    id: 'i29',
    name: 'Serrure Intelligente I29',
    image: '/images/WhatsApp Image 2025-09-11 at 15.47.22.jpeg',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Design élégant avec interface utilisateur intuitive et sécurité renforcée'
  },
  {
    id: 'k10',
    name: 'Serrure Intelligente K10',
    image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (6).jpeg',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Face ID',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Modèle robuste avec écran haute définition et mécanisme de sécurité avancé'
  },
  {
    id: 'x5-cam',
    name: 'Serrure Intelligente X5 CAM',
    image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (5).jpeg',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Serrure poignée avec design minimaliste et technologie NFC intégrée'
  },
  {
    id: 'x5-ultra',
    name: 'Serrure Intelligente X5 ULTRA',
    image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (4).jpeg',
    features: [
      'Application mobile',
      'Empreinte digitale',
      'Carte NFC',
      'Clé traditionnelle',
      'Mot de passe'
    ],
    description: 'Version ultra-compacte avec clavier numérique et reconnaissance biométrique'
  }
];

const ProductGallery = () => {
  return (
    <section id="produits" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Serrures Intelligentes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de serrures connectées, alliant sécurité maximale 
            et facilité d'utilisation. Installation professionnelle incluse.
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Besoin d'aide pour choisir ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contactez nos experts pour un conseil personnalisé et un devis gratuit
            </p>
            <button 
              onClick={() => window.open('https://wa.me/33660245937', '_blank')}
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Conseil gratuit sur WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;