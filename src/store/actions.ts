import {AppDispatch} from "store/store";
import {setFetching, resetFetching, addProgram, removeProgram} from "store/training-slice";
import {addProgramToFB, deleteProgramInFB} from "api/api";
import {v4} from "uuid";

export const setNewProgram = (values: any) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    const newProgram = {
        ...values,
        id: v4(),
        comments: [],
    }
    addProgramToFB(newProgram).then(response => dispatch(addProgram(response)));
    dispatch(resetFetching());
}

export const deleteProgram = (values: string) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    deleteProgramInFB(values).then(response => dispatch(removeProgram(response)));
    dispatch(resetFetching());
}