import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useLocalStorage from '../hooks/useLocalStorage';

interface WishPanelProps {
  onWishSent: () => void;
}

export default function WishPanel({ onWishSent }: WishPanelProps) {
  const [wish, setWish] = useLocalStorage('yashi-wish', '');
  const [wishSent, setWishSent] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (wish) {
      setInputValue(wish);
      setWishSent(true);
    }
  }, [wish]);

  const handleSendWish = () => {
    if (inputValue.trim()) {
      setWish(inputValue);
      setWishSent(true);
      onWishSent();
    }
  };

  return (
    <div className="wish-panel rounded-3xl p-6 md:p-10 backdrop-blur-sm">
      <h2 className="wish-title text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
        Congratulations Yashi! 🎉✨<br />
        You have got ONE WISH to ask!<br />
        MY LADY? 💖
      </h2>

      <div className="wish-input-container max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Type your wish here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="wish-input text-lg md:text-xl h-14 md:h-16"
          disabled={wishSent}
        />

        <Button
          onClick={handleSendWish}
          disabled={!inputValue.trim() || wishSent}
          className="send-wish-button w-full h-14 md:h-16 text-lg md:text-xl font-bold"
          size="lg"
        >
          {wishSent ? 'Wish Sent! ✨' : 'Send Wish'}
        </Button>

        {wishSent && (
          <div className="response-message text-center mt-6 animate-fade-in">
            <p className="text-xl md:text-2xl font-semibold text-pink-700 dark:text-pink-300">
              Your wish is my command! I'll make it happen ASAP ! 🥰
            </p>
            <p className="text-sm md:text-base mt-2 text-pink-600 dark:text-pink-400">
              (Your wish has been saved! ✓)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
