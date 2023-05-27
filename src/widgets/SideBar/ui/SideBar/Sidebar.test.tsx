import { fireEvent, render, screen } from "@testing-library/react";
import { SideBar } from './SideBar';
import React from 'react';
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';


describe('Sidebar', () => {
    test('test sidebar render', () => {
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test sidebar render', () => {
        renderWithTranslation(<SideBar />)
        const toggleButton = screen.getByTestId('toggleSidebarButton');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
