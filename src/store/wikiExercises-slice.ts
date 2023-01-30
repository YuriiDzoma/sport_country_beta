import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchExercisesGroups} from "api/api";
import {WikiExercisesState} from "store/wikiExercises-slyce.types";

const initialState: WikiExercisesState = {
    muscleGroups: [],
    exercises: [],
    isLoading: false,
    error: '',
}
export const wikiExercisesSlice = createSlice({
    name: 'trainingPage',
    initialState,
    reducers: {
        setExercises(state, action) {
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
        },
        [fetchExercisesGroups.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default wikiExercisesSlice.reducer;
export const {setExercises} = wikiExercisesSlice.actions