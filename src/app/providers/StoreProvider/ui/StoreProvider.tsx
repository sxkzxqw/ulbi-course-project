import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface props {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<props> = (props) => {
    const { initialState, children } = props;

    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};