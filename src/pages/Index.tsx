import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import CustomOrder from '../components/CustomOrder';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';
import Gallery from '../components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <Gallery />
        <CustomOrder />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
