import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate random shapes for the background
  const shapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? 'circle' : 'square',
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.2 + 0.1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.type === 'circle' ? 'rounded-full' : 'rounded-lg'}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: 
              shape.id % 3 === 0 
                ? 'var(--tw-color-primary-200)' 
                : shape.id % 3 === 1 
                  ? 'var(--tw-color-secondary-200)'
                  : 'var(--tw-color-accent-200)',
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;