import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPrograms } from 'api/api';
import { TrainingState } from 'store/training-slice.types';

const initialState: TrainingState = {
  programs: [],
  isLoading: false,
  error: '',
};

export const trainingSlice = createSlice({
  name: 'trainingPage',
  initialState,
  reducers: {
    setFetching(state) {
      state.isLoading = true;
    },
    resetFetching(state) {
      state.isLoading = false;
    },
    // addProgramToState(state, action) {
    //   // state.programs = [...state.programs, action.payload]
    // },
    removeProgramFromState(state, action) {
      state.programs = state.programs.filter((item) => item.id !== action.payload);
    },
    editProgramInState(state, action) {
      state.programs = state.programs.map((program) => {
        if (program === action.payload.id) {
          program = action.payload;
        }
        return program;
      });
    },
    saveTrainingProcess(state, action) {
      console.log(action);
    },
  },
  extraReducers: {
    [fetchPrograms.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPrograms.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.programs = action.payload;
    },
    [fetchPrograms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default trainingSlice.reducer;
export const { setFetching, resetFetching, removeProgramFromState, editProgramInState, saveTrainingProcess } =
  trainingSlice.actions;
