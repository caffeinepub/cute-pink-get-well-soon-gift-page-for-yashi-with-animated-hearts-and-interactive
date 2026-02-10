import HeartsRain from '../components/HeartsRain';
import CaringMessages from '../components/CaringMessages';
import GiftBox from '../components/GiftBox';
import Footer from '../components/Footer';

export default function Home() {
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
