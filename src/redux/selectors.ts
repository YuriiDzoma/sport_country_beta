import { createSelector } from '@reduxjs/toolkit';
import {AppStore, RootState} from "redux/store";

export const selectProgramById = createSelector(
  [(state: RootState) => state.training.programs, (state, id: string | undefined) => id],
  (programs, id) => programs.find((program) => id && program.id === id)
);
