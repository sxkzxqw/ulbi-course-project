import { render } from "@testing-library/react";
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '../../../config/i18n/i18nForTests';
import React from 'react';


export function renderWithTranslation(Component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {Component}
        </I18nextProvider>
    )
}