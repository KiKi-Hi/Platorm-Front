import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '@view/pages/error/ErrorPage';
import ErrorBoundary from '@view/pages/error/components/ErrorBoundary';
import AppRouter from './Router';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            refetchOnWindowFocus: false,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
        },
    },
});

function App() {
  const router = createBrowserRouter(AppRouter);
  return (
      <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<ErrorPage />}>
              <RouterProvider router={router} />
          </ErrorBoundary>
      </QueryClientProvider>
  );
}

export default App;
