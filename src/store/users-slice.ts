import { createSlice } from '@reduxjs/toolkit';

import { UsersState } from 'store/users-slice.types';

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
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
    addUser(state, action) {
      const isUser = state.users.find((user) => user.id === action.payload.id);
      if (isUser === undefined) {
        state.users = [...state.users, action.payload];
      }
    },
    resetLoading(state) {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
export const { addUser, setUsers, setLoading, resetLoading } = usersSlice.actions;
