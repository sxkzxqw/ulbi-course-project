import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface props {
    children?: ReactNode;
    element?: HTMLElement;
}

const Portal: FC<props> = ({ children, element = document.body }) => {
    return (
        createPortal(children, element)
    );
};

export default Portal;