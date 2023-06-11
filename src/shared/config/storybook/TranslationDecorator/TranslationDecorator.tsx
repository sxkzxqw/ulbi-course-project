import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import { Suspense } from 'react';
import i18next from 'i18next';

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18next} >
        <Suspense fallback=''>
            <StoryComponent />
        </Suspense>
    </I18nextProvider >
)