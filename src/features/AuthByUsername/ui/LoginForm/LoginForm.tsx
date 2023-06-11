import React, { FC, memo, useCallback } from 'react';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/sevices/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const LoginForm: FC = memo(() => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback((value?: string) => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <form className={styles.form}>
            <Text title={t('Форма авторизации')} />
            {error &&
                <Text text={'Ошибка'} theme={TextTheme.ERROR} />
            }
            <Input type='text' className={styles.input} placeholder={t('Введите username')} autofocus={true} onChange={onChangeUsername} value={username} />
            <Input type='text' className={styles.input} placeholder={t('Введите пароль')} autofocus={false} onChange={onChangePassword} value={password} />
            <Button className={styles.loginBtn} theme={ThemeButton.OUTLINE} onClick={() => { onLogin() }} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </form>
    );
});

export default LoginForm;