import { createSlice } from '@reduxjs/toolkit';

import { UsersState } from 'store/users-slice.types';

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
  userPrograms: []
};
export const usersSlice = createSlice({
  name: 'usersPage',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserPrograms(state, action) {
      state.userPrograms = action.payload;
    },
    addUser(state, action) {
      const isUser = state.users.find((user) => user.id === action.payload.id);
      if (isUser === undefined) {
        state.users = [...state.users, action.payload];
      }
    },
    editUserProgramInState(state, action) {
      state.userPrograms = state.userPrograms.map((program) => {
        if (program === action.payload.id) {
          program = action.payload;
        }
        return program;
      });
    },
    addUserProgramToState(state, action) {
      state.userPrograms = [...state.userPrograms, action.payload]
    },
    resetLoading(state) {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
export const { addUser,
  addUserProgramToState,
  editUserProgramInState,
  setUserPrograms,
  setUsers,
  setLoading,
  resetLoading } = usersSlice.actions;
