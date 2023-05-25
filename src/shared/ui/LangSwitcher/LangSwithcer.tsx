import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from '../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwithcer = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(styles.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    )
};