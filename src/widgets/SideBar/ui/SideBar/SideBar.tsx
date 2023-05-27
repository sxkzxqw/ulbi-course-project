import { useState } from 'react';
import styles from './SideBar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwithcer } from 'shared/ui/LangSwitcher/LangSwithcer';
import React from 'react';

interface SidebarProps {
    className?: string;
}

export const SideBar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    }
    return (
        <aside
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
            data-testid='sidebar'
        >
            <button
                data-testid='toggleSidebarButton'
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwithcer className={styles.languages} />
            </div>
        </aside>
    );
};