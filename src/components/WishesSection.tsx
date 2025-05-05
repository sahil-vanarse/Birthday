import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Star, Heart } from 'lucide-react';

const wishesData = [
  {
    id: 1,
    icon: <Sparkles className="text-accent-400" />,
    title: 'Shine Bright',
    content: 'May your life continue to sparkle with joy, success, and endless possibilities. Your radiant smile lights up every room!'
  },
  {
    id: 2,
    icon: <Star className="text-accent-400" />,
    title: 'Dream Big',
    content: 'May all your wishes come true and your path be filled with achievements. You have the power to reach for the stars!'
  },
  {
    id: 3,
    icon: <Heart className="text-accent-400" />,
    title: 'Cherished Moments',
    content: 'Here\'s to creating more beautiful memories and celebrating the amazing person you are. Happy Birthday, Ishikaa!'
  }
];

const WishesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="heading-secondary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Birthday Wishes for Ishikaa
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {wishesData.map((wish) => (
            <motion.div 
              key={wish.id} 
              variants={itemVariants}
              className="card p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary-50 rounded-full mb-4">
                  {wish.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-600">{wish.title}</h3>
                <p className="text-gray-600">{wish.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="font-script text-2xl md:text-3xl text-primary-500 mb-4">
              "Wishing you a year ahead filled with laughter, love, and all the success you deserve. 
              May each day bring you closer to your dreams!"
            </p>
            <p className="text-lg text-gray-600">Your friend, Sahil ❤️</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;