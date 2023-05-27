import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";
import React from 'react';

describe('Button ui', () => {
    test('test button render', () => {
        render(<Button theme={ThemeButton.CLEAR}>buttonTest</Button>);
        expect(screen.getByText('buttonTest')).toBeInTheDocument();
    });

    test('test button render with params', () => {
        render(<Button theme={ThemeButton.CLEAR}>buttonTest</Button>);
        expect(screen.getByText('buttonTest')).toHaveClass('clear');
    });
});
