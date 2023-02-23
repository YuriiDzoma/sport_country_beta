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
      state.currentUser = action.payload;
    },

    setMyProgram(state, action) {
      state.myPrograms = action.payload;
    },
    removeProgramFromState(state, action) {
      state.myPrograms = state.myPrograms.filter((item) => item.id !== action.payload);
    },
    editProgramInState(state, action) {
      state.myPrograms = state.myPrograms.map((program) => {
        if (program === action.payload.id) {
          program = action.payload;
        }
        return program;
      });
    },
  },
  extraReducers: {},
});

export default profileSlice.reducer;
export const {
  setCurrentUser,
  setMyProgram,
  removeProgramFromState,
  editProgramInState,
  setFetchingProfile,
  resetFetchingProfile
} = profileSlice.actions;
