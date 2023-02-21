import { createSlice } from '@reduxjs/toolkit';

import { profileState } from 'store/profile-slice.types';

const initialState: profileState = {
  currentUser: null,
  myPrograms: [],
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    setFetchingProfile(state) {
      state.isLoading = true;
    },
    resetFetchingProfile(state) {
      state.isLoading = false;
    },
    setCurrentUser(state, action) {
      state.currentUser = {
        createdAt: action.payload.createdAt,
        id: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
        email: action.payload.email
      }
    },
  },
  extraReducers: {},
});

export default profileSlice.reducer;
export const { setCurrentUser, setFetchingProfile, resetFetchingProfile } = profileSlice.actions;
