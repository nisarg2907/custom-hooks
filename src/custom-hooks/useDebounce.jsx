// debouncing as a concept is what i m really well aware of

import { useState, useEffect } from "react";
export const useDebounce = (input, delay) => {
  const [debouncedVal, setDebounceval] = useState(input);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceval(input);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [input]);

  return debouncedVal;
};
