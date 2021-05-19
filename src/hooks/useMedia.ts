import { useEffect, useState } from 'react';

export default function useMedia(query: string): boolean {
  const media = window.matchMedia(`(${query})`);
  const [matches, setMatches] = useState(media.matches);

  useEffect(() => {
    const handler = () => setMatches(media.matches);

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [media]);

  return matches;
}
