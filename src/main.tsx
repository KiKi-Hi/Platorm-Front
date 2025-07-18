import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import {ThemeProvider} from "@emotion/react";
import {theme} from "@view/styles/theme";
import GlobalStyles from '@view/styles/GlobalStyles';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    );
}
