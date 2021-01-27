import React, { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Loading, ErrorFallback } from './components';
import { useGetAppData } from './hooks/use-app-data-example';
import { AppRoutes } from './routes';

import './styles/app.scss';

function App() {
  const { loading } = useGetAppData();

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>{<AppRoutes />}</ErrorBoundary>
    </Suspense>
  );
}

export default App;
