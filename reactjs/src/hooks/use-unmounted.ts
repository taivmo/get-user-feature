import { MutableRefObject, useEffect } from 'react';

export const useUnmounted = (isUnmounted: MutableRefObject<boolean>) => {
  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  });
};
