import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleGift = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md w-full">
      <motion.h3
        className="text-center font-script text-2xl md:text-3xl text-primary-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        A Special Gift For You
      </motion.h3>
      
      <div className="relative">
        {!isOpen ? (
          <motion.div
            className="relative cursor-pointer flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleGift}
          >
            <motion.div
              className="w-64 h-64 bg-primary-500 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden"
              animate={{
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift size={80} className="text-white" />
              </div>
              
              <div className="absolute top-0 left-0 right-0 h-20 bg-accent-400 flex items-center justify-center">
                <div className="absolute left-1/2 top-full w-8 h-40 bg-accent-400 -translate-x-1/2"></div>
              </div>
              
              <div className="absolute top-0 bottom-0 left-0 right-0 border-8 border-accent-400 rounded-xl pointer-events-none"></div>
            </motion.div>
            
            <motion.p 
              className="mt-4 font-medium text-gray-700"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Click to open your gift!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-secondary-100 to-primary-100 p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-script text-2xl text-primary-600 mb-4">Dear Ishikaa,</h4>
                <p className="text-gray-700 mb-6">
                  On your special day, I want to wish you a birthday filled with endless joy and beautiful moments. 
                  May this year bring you countless reasons to smile and achieve all your dreams. 
                  You're an amazing person who deserves all the happiness in the world!
                </p>
                <p className="font-script text-xl text-secondary-600 mb-2">With warmest wishes,</p>
                <p className="font-medium">Sahil</p>
              </motion.div>
              
              <motion.button
                className="mt-6 btn btn-primary"
                onClick={toggleGift}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GiftBox;