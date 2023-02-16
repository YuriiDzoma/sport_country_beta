import {profileState} from "store/profile-slice.types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: profileState = {
    currentUser: null
}

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: {

    }
});

export default profileSlice.reducer;
export const {setCurrentUser} = profileSlice.actions