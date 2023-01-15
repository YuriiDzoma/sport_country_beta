import {combineReducers, legacy_createStore as createStore} from "redux";
import trainingReducer from "./training-reducer";
import {firebaseReducer} from "react-redux-firebase";


let rootReducers = combineReducers({
    training: trainingReducer,
    firebase: firebaseReducer,
});

type RootReducer = typeof rootReducers;
export type AppStateType = ReturnType<RootReducer>

let store = createStore(rootReducers);


// @ts-ignore
window.store = store;

export default store;
