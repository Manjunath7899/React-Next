import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [debounceSearch, setDebounceSearch] = useState<T>(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebounceSearch(value);
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, delay]);

  return { debounceSearch };
};
