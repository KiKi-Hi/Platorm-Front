import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorybookPage from '@view/pages/Storybook';
import KeyboardPage from "@view/pages/KeyboardPage";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<KeyboardPage />} />
            <Route path="/storybook" element={<StorybookPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;