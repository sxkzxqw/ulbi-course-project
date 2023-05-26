import React from 'react';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

const PageError = () => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={styles.pageError}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage} className={styles.button}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export default PageError;