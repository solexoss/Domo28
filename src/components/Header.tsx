import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappContact = () => {
    window.open('https://wa.me/33660245937', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-sm">D28</div>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              DOMO<span className="text-orange-500">28</span>
            </span>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('produits')}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Produits
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={whatsappContact}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </nav>

          {/* Menu mobile */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile déployé */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('produits')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Produits
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </button>
              <button 
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDarkMode ? 'Mode clair' : 'Mode sombre'}</span>
              </button>
              <button 
                onClick={whatsappContact}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contacter WhatsApp</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;