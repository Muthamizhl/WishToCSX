import { useState } from 'react';
import Locker from './components/Locker';
import Hero from './components/Hero';
import LoyaltySection from './components/LoyaltySection';
import MissingYouSection from './components/MissingYouSection';
import FamilyWishes from './components/FamilyWishes';
import GallerySection from './components/GallerySection';
import EternalOdyssey from './components/SantaSection';
import MessageSection from './components/MessageSection';
import WishSection from './components/WishSection';
import Footer from './components/Footer';
import './App.css';

import Navbar from './components/Navbar';
import DecorativeElements from './components/DecorativeElements';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => {
    setIsLocked(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      <DecorativeElements />
      {isLocked ? (
        <Locker onUnlock={handleUnlock} />
      ) : (
        <div className="content-wrapper">
          <Navbar />
          <Hero />
          <LoyaltySection />
          <MissingYouSection />
          <FamilyWishes />
          <GallerySection />
          <EternalOdyssey />
          <MessageSection />
          <WishSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
