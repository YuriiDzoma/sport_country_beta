import {profileState} from "store/profile-slice.types";
import {createSlice} from "@reduxjs/toolkit";


const initialState: profileState = {
    profile: null
}

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload;
        }
    },
    extraReducers: {

    }
});

export default profileSlice.reducer;
export const {setProfile} = profileSlice.actions