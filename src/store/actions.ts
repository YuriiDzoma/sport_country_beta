import {AppDispatch} from "store/store";
import {
    setFetching,
    resetFetching,
    addProgramToState,
    removeProgramFromState,
    editProgramInState,
} from "store/training-slice";
import {addProgramToFB, deleteProgramInFB, editProgramInFB} from "api/api";
import {pushExercises} from "store/wikiExercises-slice";
import {Program} from "store/training-slice.types";
import {exercise} from "store/wikiExercises-slyce.types";


export const setNewProgram = (values: Program) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    const newProgram = {
        ...values,
    }
    addProgramToFB(newProgram).then(response => dispatch(addProgramToState(response)));
    dispatch(resetFetching());
}

export const deleteProgram = (values: string) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    deleteProgramInFB(values).then(response => dispatch(removeProgramFromState(response)));
    dispatch(resetFetching());
}

export const editProgram = (programId: string | undefined, values: Program) => async (dispatch: AppDispatch) => {
    dispatch(setFetching());
    editProgramInFB(programId, values).then(response => dispatch(editProgramInState(response)));
    dispatch(resetFetching());
}

export const setExercises = (values: exercise[]) => async (dispatch: AppDispatch) => {
    dispatch(pushExercises(values))
}

export const addWorkHistory = (dayNumber: number, values: Program) => async (dispatch: AppDispatch) => {
    const programId = values.id
    const editedProgram = {
        ...values,
        days: [...values.days.map((day: any) => {
            if (day.day === dayNumber) {
                day.workHistory = [...day.workHistory, {...values.days[dayNumber-1].workProcess}];
                day.workProcess = {
                    date: '',
                    weights: [...day.workProcess.weights.map((exercise: any, index: number) => {
                        return {
                            exerciseNumber: index+1,
                            weights: '',
                        }
                    })]
                }
            }
            return day;
        })]
    }
    editProgramInFB(programId, editedProgram).then(response => dispatch(editProgramInState(response)));
}
