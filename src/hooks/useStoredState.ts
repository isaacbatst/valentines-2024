import { useEffect, useState } from "react";

export const useStoredState = <T extends unknown>(key: string, defaultValue: T, prefix = 'valentines-2024:') => {
  const prefixedKey = `${prefix}${key}`;
  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    if(typeof window === 'undefined') return
    const storedValue = localStorage.getItem(prefixedKey);
    if (storedValue) {
      setState(JSON.parse(storedValue));
    } else {
      setState(defaultValue);
    }    
  }, [])

  useEffect(() => {
    if(state === null) return
    if(typeof window === 'undefined') return
    localStorage.setItem(prefixedKey, JSON.stringify(state));
  }, [prefixedKey, state]);

  return [state, setState] as const;
}