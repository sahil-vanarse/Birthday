import React from 'react';
import { motion } from 'framer-motion';

interface BalloonProps {
  color: string;
  size: number;
  left: string;
  delay: number;
  duration: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, size, left, delay, duration }) => {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left }}
      initial={{ y: '100vh' }}
      animate={{ y: `-${100 + Math.random() * 20}vh` }}
      transition={{ 
        delay,
        duration, 
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 1
      }}
    >
      <div className="relative">
        <div 
          className="rounded-full" 
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            backgroundColor: color,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(255, 255, 255, 0.3)'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 w-1 h-20 bg-white/50" 
          style={{ transform: 'translateX(-50%)' }}
        ></div>
      </div>
    </motion.div>
  );
};

interface BalloonGroupProps {
  count: number;
}

const BalloonGroup: React.FC<BalloonGroupProps> = ({ count }) => {
  const colors = [
    '#f679a6',  // primary-400
    '#9c8cf9',  // secondary-400
    '#ffba1f',  // accent-400
    '#ef4984',  // primary-500
    '#6a3dea',  // secondary-600
  ];

  const balloons = Array.from({ length: count }).map((_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 30 + 40,
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 15
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <Balloon 
          key={balloon.id}
          color={balloon.color}
          size={balloon.size}
          left={balloon.left}
          delay={balloon.delay}
          duration={balloon.duration}
        />
      ))}
    </div>
  );
};

export default BalloonGroup;