import { useEffect } from 'react';

export const HashChange = ({ onLoad, onChange }) => {
  useEffect(() => {
    onLoad && onLoad();
    window.addEventListener('hashchange', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
    };
  }, []);

  return null;
};
