import React from 'react';

import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error ? error.message : null}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
