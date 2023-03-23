import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

export const selectProgramById = createSelector(
  [(state: RootState) => state.profilePage.myPrograms, (state, id: string | undefined) => id],
  (programs, id) => programs.find((program) => id && program.id === id)
);

export const selectUserProgramById = createSelector(
    [(state: RootState) => state.users.userPrograms, (state, id: string | undefined) => id],
    (programs, id) => programs.find((program) => id && program.id === id)
);

export const getUserById = createSelector(
  [(state: RootState) => state.users.users, (state, id: string | undefined) => id],
  (users, id) => users.find((user) => id && user.id === id)
);

export const getIsFetching = (state: RootState) => state.training.isLoading;
export const getPrograms = (state: RootState) => state.training.programs;
export const getMuscleGroups = (state: RootState) => state.wikiExercise.muscleGroups;
export const getExercises = (state: RootState) => state.wikiExercise.exercises;
export const currentUser = (state: RootState) => state.profilePage.currentUser;
export const getUsers = (state: RootState) => state.users.users;
export const getIsFetchingUsers = (state: RootState) => state.users.isLoading;
export const getIsFetchingProfile = (state: RootState) => state.profilePage.isLoading;
export const getMyAllPrograms = (state: RootState) => state.profilePage.myPrograms;
export const getUserPrograms = (state: RootState) => state.users.userPrograms;
export const getFavoriteProgram = (state: RootState) => state.users.userFavoriteProgram;
export const getUserFollowers = (state: RootState) => state.users.userFollowers;
export const getNotifications = (state: RootState) => state.profilePage.notifications;
