import {authState} from "store/auth-slice.types";
import {createSlice} from "@reduxjs/toolkit";


const initialState: authState = {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'authPage',
    initialState,
    reducers: {
    },
    extraReducers: {
    }
});

export default authSlice.reducer;
export const {} = authSlice.actions