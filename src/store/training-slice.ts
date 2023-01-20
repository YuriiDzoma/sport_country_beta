import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TrainingState } from 'store/training-slice.types';


const initialState: TrainingState = {
    programs: [],
    exercisesWiki: [],
    isLoading: false,
    error: '',
}

export const trainingSlice = createSlice({
    name: 'trainingPage',
    initialState,
    reducers: {
        programsFetching(state) {
            state.isLoading = true;
        },
        programsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.programs = action.payload
        },
        programsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        exercisesFetching(state) {
            state.isLoading = true;
        },
        exercisesFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.exercisesWiki = action.payload
        },
        exercisesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }

});

export default trainingSlice.reducer;

/// not finished !