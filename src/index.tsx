import React from 'react';
import { render } from "react-dom";
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
    <BrowserRouter> {/* Routes */}
        <ErrorBoundary> {/* Error catcher */}
            <ThemeProvider> {/* App Theme state */}
                <App /> {/* App */}
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
)