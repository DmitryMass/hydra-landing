import { FC, useState, useEffect } from 'react';

export const ScrollTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-7 right-7 w-8 h-8 z-20 p-1 animate-pulse cursor-pointer ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      TOP
    </div>
  );
};