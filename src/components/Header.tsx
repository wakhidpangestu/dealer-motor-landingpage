import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Package, ShoppingCart, Phone, } from 'lucide-react';
import {
  HomeIcon,
  ShoppingBagIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Desktop menu with lucide-react icons
  const menuItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'products', label: 'Katalog', icon: Package },
    { id: 'gallery', label: 'Galeri', icon: CameraIcon },
    { id: 'order', label: 'Pesan', icon: ShoppingCart },
    { id: 'contact', label: 'Kontak', icon: Phone }
  ];

  // Mobile menu with heroicons
  const mobileMenuItems = [
    { id: 'home', label: 'Beranda', icon: HomeIcon },
    { id: 'products', label: 'Katalog', icon: ShoppingBagIcon },
    { id: 'gallery', label: 'Galeri', icon: CameraIcon },
    { id: 'order', label: 'Pesan', icon: ChatBubbleLeftRightIcon },
    { id: 'contact', label: 'Kontak', icon: PhoneIcon }
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
        <div className="grid grid-cols-5 py-2">
          {mobileMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center justify-center py-2 px-1 text-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-6 h-6 mb-1" />
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
