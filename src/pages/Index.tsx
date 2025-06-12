
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import CustomOrder from '../components/CustomOrder';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <CustomOrder />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
