import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        try {
            const response = await axios.post<User>('http://localhost:2000/login', {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));

            return response.data;

        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue('Введен некорректный логин/пароль');
        }
    }
)