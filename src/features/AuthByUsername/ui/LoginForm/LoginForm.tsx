import React, { FC } from 'react';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

const LoginForm: FC = () => {
    const { t } = useTranslation()
    return (
        <form className={styles.form}>
            <Input type='text' className={styles.input} placeholder={t('Введите username')} autofocus={true} />
            <Input type='text' className={styles.input} placeholder={t('Введите пароль')} autofocus={false} />
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </form>
    );
};

export default LoginForm;