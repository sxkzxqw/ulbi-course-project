import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { ThemeButton } from '../../../shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authData
                ? <>
                    <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>
                </>
                : <>
                    <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
                        {t('Войти')}
                    </Button>
                    <LoginModal isOpen={isOpen} onClose={onToggleModal} />
                </>
            }
        </div>
    );
};
