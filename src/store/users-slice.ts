import {createSlice} from '@reduxjs/toolkit';

import {Follower, UsersState} from 'store/users-slice.types';

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
  userPrograms: [],
  userFollowers: [],
  userPublications: [],
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
    updateUserData(state, action) {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
            user = {
            ...user,
            displayName: action.payload.displayName,
            country: action.payload.country,
            region: action.payload.region,
            city: action.payload.city,
          }
          return user
        } return user
      })
    },
    setUserPrograms(state, action) {
      state.userPrograms = action.payload;
    },
    setUserFavoriteProgram(state, action) {
      state.userFavoriteProgram = action.payload;
    },
    setFollowers(state, action) {
      state.userFollowers = action.payload;
      state.isLoading = false;
    },
    setPublications(state, action) {
      state.userPublications = [...action.payload].sort((a, b) =>
          a.date > b.date ? -1 : 1,
      );
    },
    addPublications(state, action) {
      state.userPublications = [action.payload, ...state.userPublications, ]
    },
    removePost(state, action) {
      state.userPublications = state.userPublications.filter((item) => item.id !== action.payload);
    },
    deleteFollower(state, action) {
      state.users = state.users.map((user)=> {
        if (user.followerId === action.payload) {
          user.isFriend = false;
        }
        return user;
      })
      state.userFollowers = state.userFollowers.filter((follower) => follower.id !== action.payload)
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
  setPublications,
  addPublications,
  removePost,
  setFollowers,
  deleteFollower,
  setMyFollowers,
  setUsers,
  updateUserData,
  setUsersLoading,
  setUserFavoriteProgram} = usersSlice.actions;
