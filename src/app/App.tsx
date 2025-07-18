import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouter from './Router';
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import store from "@app/store";

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
          <Provider store={store}>
          <RouterProvider router={router} />
          </Provider>
      </QueryClientProvider>
  );
}

export default App;
