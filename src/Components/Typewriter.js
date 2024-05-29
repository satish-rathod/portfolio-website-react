import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, onTypingDone }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const updateText = () => {
      setCurrentText(deleting ? text.slice(0, currentIndex - 1) : text.slice(0, currentIndex + 1));
      setCurrentIndex(deleting ? currentIndex - 1 : currentIndex + 1);
    };

    if (!deleting && currentIndex === text.length) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && currentIndex === 0) {
      setDeleting(false);
      onTypingDone();
    } else {
      const timeout = setTimeout(updateText, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, deleting, onTypingDone]);

  return <span>{currentText}</span>;
};

export default Typewriter;