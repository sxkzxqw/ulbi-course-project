import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import Portal from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props

    const [isClosing, setIsClosing] = useState(false);
    const [isLazy, setIsLazy] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

    const ANIMATION_DELAY_MODAL = 200;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen])

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false);
            }, ANIMATION_DELAY_MODAL);
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const { theme } = useTheme()

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null;
    }

    const element = document.getElementById('modal');

    return (
        <Portal element={element}>
            <div className={classNames(styles.modal, mods, [className, theme, 'app_modal'])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;