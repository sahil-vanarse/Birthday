import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-8 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center text-lg">
          Made with 
          <motion.span 
            className="mx-2 inline-block"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Heart className="fill-white" />
          </motion.span> 
          by Sahil
        </p>
        <p className="mt-2 text-white/80 text-sm">© {new Date().getFullYear()} - Happy Birthday Ishikaa!</p>
      </div>
    </motion.footer>
  );
};

export default Footer;