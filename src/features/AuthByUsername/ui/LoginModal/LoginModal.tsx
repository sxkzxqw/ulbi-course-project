import React, { FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(styles.loginModal, {}, [className])} lazy={true}>
            <LoginForm />
        </Modal>
    );
};