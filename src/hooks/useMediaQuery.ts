import { useLayoutEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
   const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });


  useLayoutEffect(() => {

    if(typeof window === 'undefined') return; 

    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch();
    media.addEventListener('change', updateMatch);
    return () => media.removeEventListener('change', updateMatch);
  }, [query]);


  return matches;
}
