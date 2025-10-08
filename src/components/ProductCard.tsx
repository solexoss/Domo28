import React from 'react';
import { Smartphone, Fingerprint, CreditCard, Key, Lock, Eye } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  features: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const getFeatureIcon = (feature: string) => {
  switch (feature) {
    case 'Application mobile':
      return <Smartphone className="w-4 h-4" />;
    case 'Empreinte digitale':
      return <Fingerprint className="w-4 h-4" />;
    case 'Face ID':
      return <Eye className="w-4 h-4" />;
    case 'Carte NFC':
      return <CreditCard className="w-4 h-4" />;
    case 'Clé traditionnelle':
      return <Key className="w-4 h-4" />;
    case 'Mot de passe':
      return <Lock className="w-4 h-4" />;
    default:
      return <Lock className="w-4 h-4" />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Bonjour ! Je suis intéressé(e) par la ${product.name}. Pourriez-vous me donner plus d'informations et un devis ?`
    );
    window.open(`https://wa.me/33660245937?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      {/* Image du produit */}
      <div className="relative h-80 overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6 dark:bg-gray-800 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {/* Caractéristiques */}
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Caractéristiques :</h4>
          <div className="flex flex-wrap gap-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded-full text-xs text-gray-600 dark:text-gray-300">
                <div className="text-orange-500">
                  {getFeatureIcon(feature)}
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Installation incluse */}
        <div className="flex items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 py-3 px-4 rounded-lg mb-6">
          <span className="text-sm font-medium">✓ Installation incluse</span>
        </div>

        {/* Bouton de contact */}
        <button 
          onClick={handleWhatsAppContact}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mt-auto"
        >
          <span>💬</span>
          <span>Demander un devis</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;