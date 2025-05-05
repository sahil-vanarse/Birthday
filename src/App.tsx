import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WishesSection from './components/WishesSection';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';
import BalloonGroup from './components/BalloonGroup';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <AnimatedBackground />
      <BalloonGroup count={10} />
      
      <Header />
      
      <main>
        <HeroSection />
        <div id="wishes-section">
          <WishesSection />
        </div>
        <div className="section flex justify-center">
          <GiftBox />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;