import { useState, useEffect } from 'react';

const TypingEffect = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 100,
  showCursor = true,
  cursorChar = '|',
  onComplete = () => {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, delay + (currentIndex * speed));

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    }
  }, [showCursor]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {showCursor && (
        <span 
          className={`ml-1 ${showCursorState ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypingEffect;
