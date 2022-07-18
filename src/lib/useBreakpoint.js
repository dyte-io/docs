import { useEffect, useState } from 'react';

export default function useBreakpoint() {
  const [size, setSize] = useState(/** @type {'sm' | 'lg'} */ ('lg'));

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const onResize = () => {
      const { clientWidth: width } = document.body;
      if (width > 996) setSize('lg');
      else setSize('sm');
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return size;
}
