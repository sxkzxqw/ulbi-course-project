import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type, placeholder = 'text', autofocus, ...otherProps } = props;


    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }
    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocused = () => {
        setIsFocused(true);
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    const ref = useRef<HTMLInputElement>()

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus])

    return (
        <div className={classNames(styles.input_wrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>
                {`${placeholder}>`}
            </div>}
            <div className={styles.caret_wrapper}>
                <input
                    ref={ref}
                    className={classNames(styles.input, {}, [])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocused}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused &&
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    >
                    </span>
                }
            </div>
        </div >
    );
});