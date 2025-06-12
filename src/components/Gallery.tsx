import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
];

const Gallery: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 text-center mb-4">
  Galeri Testimoni
</h2>
      <p className="text-center text-black-600 mb-8">
        Lihat koleksi motor yang telah kami kirimkan kepada pelanggan kami.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={src}
              alt={`Galeri ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
