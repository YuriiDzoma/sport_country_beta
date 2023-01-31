import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import trainingSlice from 'store/training-slice';
import wikiExercisesSlice from 'store/wikiExercises-slice';

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
    })
}
const rootReducers = combineReducers({
    training: trainingSlice,
    wikiExercise: wikiExercisesSlice,
    firestore: firebaseReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


