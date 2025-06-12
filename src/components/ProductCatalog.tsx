
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const motorcycles = [
  {
    id: 1,
    name: "CBR250 Sport",
    price: "Rp 80.000.000",
    image: "/cbr250.jpg",
    specs: ["Mesin 250cc", "Rem ABS", "Lampu LED"]
  },
  {
    id: 2,
    name: "Cruiser Classic",
    price: "Rp 187.500.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specs: ["Mesin 1200cc", "Finishing Chrome", "Jok Nyaman"]
  },
  {
    id: 3,
    name: "Adventure Trail",
    price: "Rp 228.000.000",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specs: ["Mesin 800cc", "Siap Off-road", "Navigasi GPS"]
  },
  {
    id: 4,
    name: "Urban Commuter",
    price: "Rp 75.000.000",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specs: ["Mesin 250cc", "Hemat Bahan Bakar", "Ringan"]
  },
  {
    id: 5,
    name: "Retro Cafe",
    price: "Rp 147.000.000",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specs: ["Mesin 500cc", "Gaya Vintage", "Transmisi Manual"]
  },
  {
    id: 6,
    name: "Electric Future",
    price: "Rp 165.000.000",
    image: "https://images.unsplash.com/photo-1616788355499-98cb4423099d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    specs: ["Motor Listrik", "Jarak 320km", "Pengisian Cepat"]
  }
];

const ProductCatalog = () => {
  return (
    <section id="products" className="py-20 px-4 pb-32 md:pb-20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Koleksi Motor Kami
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Temukan pilihan motor premium kami yang dirancang untuk setiap pengendara dan petualangan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle, index) => (
            <motion.div
              key={motorcycle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard motorcycle={motorcycle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
