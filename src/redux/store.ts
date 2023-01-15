import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import trainingSlice from 'redux/training-slice';

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
    })
}
const rootReducers = combineReducers({
    training: trainingSlice,
    firestore: firebaseReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
