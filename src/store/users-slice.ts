import {createSlice} from '@reduxjs/toolkit';

import {Follower, UsersState} from 'store/users-slice.types';

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
  userPrograms: [],
  userFollowers: [],
  userFavoriteProgram: {
    programId: null,
    id: null,
  },
};
export const usersSlice = createSlice({
  name: 'usersPage',
  initialState,
  reducers: {
    setUsersLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserPrograms(state, action) {
      state.userPrograms = action.payload;
    },
    setUserFavoriteProgram(state, action) {
      state.userFavoriteProgram = action.payload;
    },
    setFollowers(state, action) {
      state.userFollowers = action.payload;
    },

    setMyFollowers(state, action) {
      state.isLoading = true;
      state.users = state.users.map((user) => {
        const follower = action.payload.find((item: Follower) => item.friendId === user.id ? item.id : null )
          return  {
            ...user,
            isFriend: action.payload.some((friend: Follower) => friend.friendId === user.id),
            followerId: follower ? follower.id : 'not friend'
          }
      });
      state.isLoading = false;
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
  },
});

export default usersSlice.reducer;
export const {
  addUserProgramToState,
  editUserProgramInState,
  setUserPrograms,
  setFollowers,
  setMyFollowers,
  setUsers,
  setUsersLoading,
  setUserFavoriteProgram} = usersSlice.actions;
