import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem lorem loremlorem lorem lorem loremvv loremloremv loremv lorem vlorem vlorem lorem vlorem lorem lorem lorem lorem',
};

export const Dark = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem lorem loremlorem lorem lorem loremvv loremloremv loremv lorem vlorem vlorem lorem vlorem lorem lorem lorem lorem',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
