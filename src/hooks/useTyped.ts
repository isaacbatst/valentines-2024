import { RefObject, useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export const useTyped = <T>(ref: RefObject<T>, typedOptions: TypedOptions) => {
  const typed = useRef<Typed | null>(null);
  
  useEffect(() => {
    if(!ref.current) return;
    typed.current = new Typed(ref.current, typedOptions);
    
    return () => {
      typed.current?.destroy();
    };
  }, [ref, typedOptions]);

  return typed.current;
}