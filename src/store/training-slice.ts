import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TrainingState } from 'store/training-slice.types';
import {fetchExercisesGroups, fetchPrograms} from "api/api";

const initialState: TrainingState = {
    programs: [],
    exercisesWiki: [],
    isLoading: false,
    error: '',
}

export const trainingSlice = createSlice({
    name: 'trainingPage',
    initialState,
    reducers: {},
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
        [fetchExercisesGroups.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchExercisesGroups.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.exercisesWiki = action.payload;
        },
        [fetchExercisesGroups.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default trainingSlice.reducer;
