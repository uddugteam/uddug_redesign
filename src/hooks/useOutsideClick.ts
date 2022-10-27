import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  initialVisible: boolean = false
) => {
  const [isShow, setIsShow] = useState<boolean>(initialVisible);
  const ref = useRef<T>(null);

  const handleClickOutside: EventListenerOrEventListenerObject = e => {
    if (ref.current && !ref.current.contains(e.target as Node))
      setIsShow(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return { ref, isShow, setIsShow };
};
