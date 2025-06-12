
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.976 1.246 2.243 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.332-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.565 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.385 3.678 1.366c-.98.98-1.234 2.092-1.293 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.313 2.393 1.293 3.373.981.981 2.093 1.234 3.373 1.293C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.312 3.373-1.293.981-.98 1.234-2.092 1.293-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.312-2.393-1.293-3.373-.98-.981-2.092-1.234-3.373-1.293C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.691 8.807 4.066 6.864 1.64 3.905c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: '#',
      icon: (
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.147 0 12 0 12s0 3.853.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.575 20.5 12 20.5 12 20.5s7.425 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.853 24 12 24 12s0-3.853-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  const openWhatsApp = () => {
    const phoneNumber = "6289637394846"; // Ganti dengan nomor aktual
    const message = "Halo, saya memiliki pertanyaan tentang motor Anda.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contact" className="py-16 px-4 footer-red pb-32 md:pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-start"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/logo-white.png"
                alt="Logo"
                className="h-10 w-auto max-w-full"
              />
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjusfx3GodFB6c5nOH5KxF5Q-Xsucjump8-qPZd3J1GLr1hkWXDOONH7-nJtXo3_bQRRUBmtf5RDGkRkYH1OpBbUGqK73IsAzeWsoWN1uIvdemPlXXJUWR0NeXlcYLMrf2x5iOxvBQVxz4/s1600/honda-putih+logo.png"
                alt="honda logo"
                className="h-8 w-auto max-w-full"
              />
            </div>
            <p className="text-white mb-4 leading-relaxed text-sm md:text-base">
              Mitra terpercaya Anda untuk motor premium. Kami memberikan kualitas, keandalan, dan pelayanan yang luar biasa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={openWhatsApp}
              className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 text-red-600 bg-white hover:bg-white text-sm md:text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.506z"/>
              </svg>
              <span>&nbsp;Hubungi Kami</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Informasi Kontak</h4>
            <div className="space-y-3 text-white">
              <p>📍 Jl. Motor No. 123, Jakarta 12345</p>
              <p>📞 +62 812-3456-7890</p>
              <p>✉️ info@motodealer.com</p>
              <p>🕒 Sen-Sab: 09.00-19.00</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 glass-morphism rounded-lg hover:bg-white/40 transition-all duration-300"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm font-medium text-white">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white">
            © {new Date().getFullYear()}. Semua hak dilindungi | Copyright by{' '}
            <a href="https://instagram.com/hiddev.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-300">
              hiddev.id
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
