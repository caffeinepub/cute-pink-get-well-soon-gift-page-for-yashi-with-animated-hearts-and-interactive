import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSubmitWish } from '../hooks/useQueries';

interface WishPanelProps {
  onWishSent: () => void;
}

export default function WishPanel({ onWishSent }: WishPanelProps) {
  const [wishSent, setWishSent] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const submitWishMutation = useSubmitWish();

  const handleSendWish = async () => {
    if (inputValue.trim()) {
      setErrorMessage('');
      try {
        await submitWishMutation.mutateAsync(inputValue);
        setWishSent(true);
        onWishSent();
      } catch (error) {
        console.error('Failed to submit wish:', error);
        setErrorMessage('Failed to send wish. Please try again.');
      }
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
          disabled={wishSent || submitWishMutation.isPending}
        />

        <Button
          onClick={handleSendWish}
          disabled={!inputValue.trim() || wishSent || submitWishMutation.isPending}
          className="send-wish-button w-full h-14 md:h-16 text-lg md:text-xl font-bold"
          size="lg"
        >
          {submitWishMutation.isPending ? 'Sending...' : wishSent ? 'Wish Sent! ✨' : 'Send Wish'}
        </Button>

        {errorMessage && (
          <div className="error-message text-center mt-4 animate-fade-in">
            <p className="text-lg text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          </div>
        )}

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
