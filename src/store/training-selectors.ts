import {AppStateType} from "./redux-store";


export const getPrograms = (state: AppStateType) => {
    return state.training.programs;
}

export const getExercises = (state: AppStateType) => {
    return state.training.exercisesWiki;
}

export const getFirebaseData = (state: AppStateType) => {
    return state.firebase;
}