import {Profile} from "./profile-reducer.types";


let initialState: Profile = {
    profile: null,
}

const profileReducer = (state = initialState, action: any) => {
    return state;
}

export default profileReducer;