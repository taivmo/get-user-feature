import { useEffect } from 'react';

import { CancelTokenSource } from 'axios';

export const useCancelRequest = (source: CancelTokenSource) => {
  useEffect(() => {
    return () => {
      source.cancel('Component got unmounted');
    };
  });
};
