export default function CaringMessages() {
  return (
    <section className="caring-messages px-4 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="message-card rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
        <p className="message-text text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12">
          Rest up, eat chocolate, binge your faves. I've got you! 😘
        </p>
        
        <div className="icons-container flex flex-wrap justify-center gap-6 md:gap-12">
          {/* Chocolate Icon */}
          <div className="icon-wrapper flex flex-col items-center gap-2">
            <svg
              className="icon w-16 h-16 md:w-20 md:h-20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="16" width="48" height="40" rx="4" fill="#8B4513" />
              <rect x="8" y="16" width="48" height="8" rx="2" fill="#D2691E" />
              <line x1="20" y1="28" x2="20" y2="52" stroke="#654321" strokeWidth="2" />
              <line x1="32" y1="28" x2="32" y2="52" stroke="#654321" strokeWidth="2" />
              <line x1="44" y1="28" x2="44" y2="52" stroke="#654321" strokeWidth="2" />
              <line x1="12" y1="36" x2="52" y2="36" stroke="#654321" strokeWidth="2" />
              <line x1="12" y1="44" x2="52" y2="44" stroke="#654321" strokeWidth="2" />
            </svg>
          </div>

          {/* Teddy Bear Icon */}
          <div className="icon-wrapper flex flex-col items-center gap-2">
            <svg
              className="icon w-16 h-16 md:w-20 md:h-20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="16" fill="#D2691E" />
              <circle cx="18" cy="20" r="8" fill="#D2691E" />
              <circle cx="46" cy="20" r="8" fill="#D2691E" />
              <circle cx="26" cy="28" r="2" fill="#000" />
              <circle cx="38" cy="28" r="2" fill="#000" />
              <ellipse cx="32" cy="34" rx="3" ry="2" fill="#000" />
              <path d="M 28 38 Q 32 40 36 38" stroke="#000" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Hot Water Bottle Icon */}
          <div className="icon-wrapper flex flex-col items-center gap-2">
            <svg
              className="icon w-16 h-16 md:w-20 md:h-20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="12" width="24" height="6" rx="3" fill="#FF6B9D" />
              <rect x="16" y="18" width="32" height="36" rx="8" fill="#FF69B4" />
              <ellipse cx="32" cy="36" rx="12" ry="14" fill="#FF85C1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
