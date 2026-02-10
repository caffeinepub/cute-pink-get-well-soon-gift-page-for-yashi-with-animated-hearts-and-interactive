import { useState } from 'react';
import WishPanel from './WishPanel';
import FireworksCanvas from './FireworksCanvas';

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWishSent = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000);
  };

  return (
    <div className="gift-box-container max-w-2xl mx-auto relative">
      {showFireworks && <FireworksCanvas />}
      
      <div className="gift-box-wrapper perspective-1000">
        <div
          className={`gift-box ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
          onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
          role="button"
          tabIndex={0}
          aria-label={isOpen ? 'Close gift box' : 'Open gift box'}
        >
          {/* Gift Box Base */}
          <div className="box-base">
            <div className="box-front"></div>
            <div className="box-back"></div>
            <div className="box-left"></div>
            <div className="box-right"></div>
            <div className="box-bottom"></div>
          </div>

          {/* Gift Box Lid */}
          <div className="box-lid">
            <div className="lid-top"></div>
            <div className="lid-front"></div>
            <div className="lid-back"></div>
            <div className="lid-left"></div>
            <div className="lid-right"></div>
            
            {/* Ribbon */}
            <div className="ribbon-vertical"></div>
            <div className="ribbon-horizontal"></div>
            
            {/* Bow */}
            <div className="bow">
              <div className="bow-left"></div>
              <div className="bow-right"></div>
              <div className="bow-center"></div>
            </div>
          </div>

          {/* Confetti particles */}
          {isOpen && (
            <div className="confetti-container">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="confetti-particle"
                  style={{
                    left: `${50 + (Math.random() - 0.5) * 20}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    backgroundColor: ['#ff69b4', '#ffc0cb', '#ffb6c1', '#ff85c1', '#ffd700'][
                      Math.floor(Math.random() * 5)
                    ],
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Wish Panel - shown when box is open */}
        {isOpen && (
          <div className="wish-panel-container mt-8 animate-fade-in">
            <WishPanel onWishSent={handleWishSent} />
          </div>
        )}
      </div>

      {!isOpen && (
        <p className="text-center mt-6 text-lg md:text-xl text-pink-700 dark:text-pink-300 animate-pulse">
          Click the gift box! 🎁✨
        </p>
      )}
    </div>
  );
}
