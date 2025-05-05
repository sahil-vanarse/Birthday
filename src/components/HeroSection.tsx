import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Gift, Cake, Heart, Music, VolumeX } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [confettiActive, setConfettiActive] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const handleWishesClick = () => {
    const element = document.querySelector('#wishes-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleShareLove = async () => {
    const shareData = {
      title: 'Happy Birthday Ishikaa! 🎂',
      text: "Join me in wishing Ishikaa a very Happy Birthday! 🎂✨",
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Enhanced fallback with social sharing options
        const text = encodeURIComponent(shareData.text + ' ' + shareData.url);
        const shareLinks = {
          whatsapp: `https://wa.me/?text=${text}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
          twitter: `https://twitter.com/intent/tweet?text=${text}`
        };

        // Create a simple modal for share options
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
          <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 class="text-lg font-semibold mb-4">Share via</h3>
            <div class="space-y-3">
              <a href="${shareLinks.whatsapp}" target="_blank" rel="noopener noreferrer" 
                 class="block w-full text-center py-2 bg-green-500 text-white rounded hover:bg-green-600">
                WhatsApp
              </a>
              <a href="${shareLinks.facebook}" target="_blank" rel="noopener noreferrer"
                 class="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Facebook
              </a>
              <a href="${shareLinks.twitter}" target="_blank" rel="noopener noreferrer"
                 class="block w-full text-center py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                Twitter
              </a>
            </div>
            <button class="mt-4 w-full py-2 border border-gray-300 rounded hover:bg-gray-100"
                    onclick="this.parentElement.parentElement.remove()">
              Close
            </button>
          </div>
        `;
        document.body.appendChild(modal);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 8000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <audio
        ref={audioRef}
        src="https://www.chosic.com/wp-content/uploads/2020/05/Happy-Birthday-To-You-Happy-birthday-Song.mp3"
        loop
      />
      
      {confettiActive && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={800}
          gravity={0.1}
          colors={['#f679a6', '#9c8cf9', '#ffba1f', '#6a3dea', '#ef4984']}
        />
      )}
      
      <div className="max-w-4xl mx-auto text-center px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Cake size={80} className="text-primary-500" />
            </motion.div>
          </div>
          <h1 className="heading-primary">
            Happy Birthday Ishikaa!
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-700">
            May your special day be filled with endless joy, laughter, and beautiful moments that become cherished memories!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              onClick={handleWishesClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center btn btn-primary"
            >
              <Gift className="mr-2" size={20} />
              <span>Send Wishes</span>
            </motion.button>
            
            <motion.button
              onClick={handleShareLove}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center btn btn-secondary"
            >
              <Heart className="mr-2" size={20} />
              <span>Share Love</span>
            </motion.button>

            <motion.button
              onClick={toggleMusic}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center btn btn-outline"
            >
              {isPlaying ? (
                <VolumeX className="mr-2" size={20} />
              ) : (
                <Music className="mr-2" size={20} />
              )}
              <span>{isPlaying ? 'Mute Music' : 'Play Music'}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;