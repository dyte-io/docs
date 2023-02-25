import { useEffect, useState } from 'react';

export default function useBreakpoint() {
  const [size, setSize] = useState<'sm' | 'lg'>('lg');

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const resizeObserver = new ResizeObserver(() => {
      setSize(document.body.clientWidth > 996 ? 'lg' : 'sm');
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return size;
}
