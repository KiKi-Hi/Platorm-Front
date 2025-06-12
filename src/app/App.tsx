import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppRouter from "@app/Router";
import {ErrorPage} from "@view/pages/error/ErrorPage";
import ErrorBoundary from "@view/pages/error/components/ErrorBoundary";

const App = () => {
    const router = createBrowserRouter(AppRouter);
    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
};

export default App;