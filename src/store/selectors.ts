import { createSelector } from '@reduxjs/toolkit';
import {RootState} from "store/store";

export const selectProgramById = createSelector(
  [(state: RootState) => state.training.programs, (state, id: string | undefined) => id],
  (programs, id) => programs.find((program) => id && program.id === id)
);

export const getIsFetching = (state: RootState) => state.training.isLoading;
export const getPrograms = (state: RootState) => state.training.programs;
export const getMuscleGroups = (state: RootState) => state.training.exercisesWiki;
