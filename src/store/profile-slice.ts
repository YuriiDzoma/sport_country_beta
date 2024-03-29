import { createSlice } from '@reduxjs/toolkit';

import { profileState } from 'store/profile-slice.types';

const initialState: profileState = {
  currentUser: undefined,
  myPrograms: [],
  myFollowers: [],
  isLoading: false,
  myFavoriteProgram: null,
  notifications: [],
};

export const profileSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    setFetchingProfile(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    setNotifications(state, action) {
      state.notifications = action.payload.map((item: any) => item.id)
    },
    clearNotifications(state, action) {
      state.notifications = state.notifications.filter(item => item !== action.payload);
    },
    setMyProgram(state, action) {
      state.myPrograms = action.payload;
    },
    setMyFavoriteProgram(state, action) {
      state.myFavoriteProgram = action.payload;
    },
    addProgramToState(state, action) {
      state.myPrograms = [...state.myPrograms, action.payload]
    },
    removeProgramFromState(state, action) {
      state.myPrograms = state.myPrograms.filter((item) => item.id !== action.payload);
    },
    editProgramInState(state, action) {
      state.myPrograms = state.myPrograms.map((program) => {
        if (program.id === action.payload.id) {
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
  updateCurrentUser,
  setMyProgram,
  addProgramToState,
  setNotifications,
  clearNotifications,
  setMyFavoriteProgram,
  removeProgramFromState,
  editProgramInState,
  setFetchingProfile,
} = profileSlice.actions;
