import {authState} from "store/auth-slice.types";
import {createSlice} from "@reduxjs/toolkit";


const initialState: authState = {
    currentUser: null,
}

export const authSlice = createSlice({
    name: 'authPage',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: {
    }
});

export default authSlice.reducer;
export const {setCurrentUser} = authSlice.actions