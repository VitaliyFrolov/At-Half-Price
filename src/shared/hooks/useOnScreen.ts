import { useEffect, useMemo, useState, RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
  ), []);


  useEffect(() => {
      ref.current && observer.observe(ref.current);
      return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
