import { createSelector } from '@reduxjs/toolkit';
import {RootState} from "store/store";

export const selectProgramById = createSelector(
  [(state: RootState) => state.training.programs, (state, id: string | undefined) => id],
  (programs, id) => programs.find((program) => id && program.id === id)
);
