import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounter } from '../model/selectors/getCounter/getCounter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='value-title'>value = {counterValue}</h1>
            <button onClick={increment} data-testid='increment-btn'>
                increment
            </button>
            <button onClick={decrement} data-testid='decrement-btn'>
                decrement
            </button>
        </div>
    );
};