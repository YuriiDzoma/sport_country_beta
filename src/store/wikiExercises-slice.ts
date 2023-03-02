import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchExercisesGroups } from 'api/api';
import { WikiExercisesState } from 'store/wikiExercises-slyce.types';

const initialState: WikiExercisesState = {
  muscleGroups: [],
  exercises: [],
  isLoading: false,
  error: '',
};
export const wikiExercisesSlice = createSlice({
  name: 'wikiExercisesPage',
  initialState,
  reducers: {
    pushExercises(state, action) {
      state.exercises = [];
      state.exercises = action.payload;
    },
  },
  extraReducers: {
    [fetchExercisesGroups.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchExercisesGroups.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.muscleGroups = action.payload;
      state.exercises = [...state.muscleGroups[0].exercises];
    },
    [fetchExercisesGroups.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default wikiExercisesSlice.reducer;
export const { pushExercises } = wikiExercisesSlice.actions;
