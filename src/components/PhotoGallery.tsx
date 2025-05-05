import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxTilt from 'react-parallax-tilt';

const photos = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/9467793/pexels-photo-9467793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Celebration moments'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Birthday joy'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/7177149/pexels-photo-7177149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Special memories'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Friends forever'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/7180788/pexels-photo-7180788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Birthday wishes'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Happy moments'
  }
];

const PhotoGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-gradient-to-br from-secondary-50 to-primary-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="heading-secondary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Celebrating Ishikaa's Special Day
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {photos.map((photo) => (
            <motion.div key={photo.id} variants={itemVariants}>
              <ParallaxTilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="20px"
                className="card h-full transform transition-transform duration-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-center font-medium text-gray-700">{photo.caption}</p>
                </div>
              </ParallaxTilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;