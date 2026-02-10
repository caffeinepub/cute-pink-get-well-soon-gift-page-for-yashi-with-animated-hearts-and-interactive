import { useEffect, useState } from 'react';
import HeartsRain from './components/HeartsRain';
import CaringMessages from './components/CaringMessages';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';
import WishesPage from './pages/WishesPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Route to wishes admin page
  if (currentPath === '/wishes') {
    return <WishesPage />;
  }

  // Default route - main gift experience
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Hearts rain animation overlay */}
      <HeartsRain />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="hero-section px-4 py-12 md:py-20 text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hey Yashi, CutiePie 🌸<br />
            Sending you all the hugs!💕
          </h1>
        </section>

        {/* Caring Messages Section */}
        <CaringMessages />

        {/* Interactive Gift Box Section */}
        <section className="gift-section px-4 py-12 md:py-16">
          <GiftBox />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
