import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';

import authSlice from 'store/auth-slice';
import profileSlice from 'store/profile-slice';
import trainingSlice from 'store/training-slice';
import usersSlice from 'store/users-slice';
import wikiExercisesSlice from 'store/wikiExercises-slice';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
const rootReducers = combineReducers({
  training: trainingSlice,
  wikiExercise: wikiExercisesSlice,
  profilePage: profileSlice,
  users: usersSlice,
  authPage: authSlice,
  firestore: firebaseReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
