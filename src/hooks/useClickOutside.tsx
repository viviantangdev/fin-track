// src/hooks/useClickOutside.ts
import { useEffect } from 'react';

// Custom hook for detecting clicks outside of any HTMLElement (more general)
function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(); // Trigger the callback if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]); // Only re-run effect if ref or callback changes
}

export default useClickOutside;