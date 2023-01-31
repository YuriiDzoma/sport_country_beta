import {AppDispatch} from "store/store";
import {setFetching, resetFetching, addProgramToState, removeProgramFromState, editProgramInState} from "store/training-slice";
import {addProgramToFB, deleteProgramInFB, editProgramInFB} from "api/api";
import {v4} from "uuid";
import {pushExercises} from "store/wikiExercises-slice";

export const setNewProgram = (values: any) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    const newProgram = {
        ...values,
        id: v4(),
        comments: [],
    }
    addProgramToFB(newProgram).then(response => dispatch(addProgramToState(response)));
    dispatch(resetFetching());
}

export const deleteProgram = (values: string) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    deleteProgramInFB(values).then(response => dispatch(removeProgramFromState(response)));
    dispatch(resetFetching());
}

export const editProgram = (programId: string | undefined, values: any) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    editProgramInFB(programId, values).then(response => dispatch(editProgramInState(response)));
    dispatch(resetFetching());
}

export const setExercises = (values: any) => async (dispatch: AppDispatch) => {
    dispatch(pushExercises(values))
}