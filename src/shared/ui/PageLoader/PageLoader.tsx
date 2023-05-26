import React, { FC } from 'react';
import styles from './PageLoader.module.scss';
import Loader from '../Loader/Loader';

export const PageLoader: FC = () => {
    return (
        <div className={styles.pageLoader}>
            <Loader />
        </div>
    );
};