import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { ThemeButton } from '../../../shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>Lorem*10fsememkfsemkfmemskfkmsmkemkfmeskmfkkm feksm fkmeskm kmesm kmkfsekmfkme smkmkf mksemkmk emksmk kmsekmfe</Modal>
        </div>
    );
};
