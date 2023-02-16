import {profileState} from "store/profile-slice.types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: profileState = {
    currentUser: null,
    isLoading: false,
}

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        setFetchingProfile(state) {
            state.isLoading = true
        },
        resetFetchingProfile(state) {
            state.isLoading = false
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    },
    extraReducers: {

    }
});

export default profileSlice.reducer;
export const {setCurrentUser, setFetchingProfile, resetFetchingProfile} = profileSlice.actions