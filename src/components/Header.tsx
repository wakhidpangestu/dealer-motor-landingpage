
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Package, ShoppingCart, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'products', label: 'Produk', icon: Package },
    { id: 'order', label: 'Pesan', icon: ShoppingCart },
    { id: 'contact', label: 'Kontak', icon: Phone }
  ];

  return (
    <>
      {/* Desktop Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-morphism shadow-glass md:block hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
            
            <nav className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile iOS-style Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-morphism border-t border-white/20"
      >
        <div className="grid grid-cols-4 py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center justify-center py-2 px-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon size={20} className="mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
