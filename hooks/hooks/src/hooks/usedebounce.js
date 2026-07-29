import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  // Initial value should be the current value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Create a timer
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: remove previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;