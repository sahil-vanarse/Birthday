import React from 'react';
import { Music, Music as MusicOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
        console.log('Audio playback failed:', e);
      });
    }
    
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <motion.header 
      className="py-4 px-6 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-primary-600">Ishikaa's Birthday</span>
      </div>
      
      <button 
        onClick={toggleMusic}
        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? <MusicOff className="text-primary-500" /> : <Music className="text-primary-500" />}
      </button>
    </motion.header>
  );
};

export default Header;