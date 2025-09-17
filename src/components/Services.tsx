import React from 'react';
import { Wrench, Shield, Clock, Users, Award, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Installation Professionnelle',
      description: 'Nos techniciens certifiés installent votre serrure intelligente avec précision et soin.',
      color: 'text-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantie 2 ans',
      description: 'Tous nos produits sont couverts par une garantie complète de 2 ans pièces et main d\'œuvre.',
      color: 'text-blue-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Intervention Rapide',
      description: 'Installation sous 48h après validation du devis. Service d\'urgence disponible.',
      color: 'text-green-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Formation Utilisateur',
      description: 'Formation complète à l\'utilisation de votre nouvelle serrure intelligente.',
      color: 'text-purple-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise Reconnue',
      description: 'Plus de 500 installations réussies. Équipe d\'experts en domotique.',
      color: 'text-indigo-500'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Support Technique',
      description: 'Assistance technique disponible 7j/7 pour tous vos besoins.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un service complet de A à Z : conseil, installation professionnelle, 
            formation et maintenance pour votre tranquillité d'esprit.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section processus d'installation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Processus d'Installation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Une installation professionnelle en 4 étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Devis gratuit', description: 'Contactez-nous pour un devis personnalisé' },
              { step: '2', title: 'Prise de rendez-vous', description: 'Planification de l\'intervention sous 48h' },
              { step: '3', title: 'Installation', description: 'Installation professionnelle par nos experts' },
              { step: '4', title: 'Formation', description: 'Formation complète à l\'utilisation' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.open('https://wa.me/33660245937', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Commencer mon projet</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;