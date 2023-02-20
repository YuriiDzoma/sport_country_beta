import { addProgramToFB, deleteProgramInFB, editProgramInFB, getUsers } from 'api/api';
import { AppDispatch } from 'store/store';
import { editProgramInState, removeProgramFromState, resetFetching, setFetching } from 'store/training-slice';
import { Program } from 'store/training-slice.types';
import { resetLoading, setLoading, setUsers } from 'store/users-slice';
import { pushExercises } from 'store/wikiExercises-slice';
import { exercise } from 'store/wikiExercises-slyce.types';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading());

  getUsers()
    .then((response) => dispatch(setUsers(response)))
    .catch(Error);
  dispatch(resetLoading());
};

export const setNewProgram = (values: Program) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  const newProgram = {
    ...values,
  };
  addProgramToFB(newProgram);
  dispatch(resetFetching());
};

export const deleteProgram = (values: string) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  deleteProgramInFB(values)
    .then((response) => dispatch(removeProgramFromState(response)))
    .catch(Error);
  dispatch(resetFetching());
};

export const editProgram = (programId: string | undefined, values: Program) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  editProgramInFB(programId, values)
    .then((response) => dispatch(editProgramInState(response)))
    .catch(Error);
  dispatch(resetFetching());
};

export const setExercises = (values: exercise[]) => async (dispatch: AppDispatch) => {
  dispatch(pushExercises(values));
};

export const addWorkHistory = (dayNumber: number, values: Program) => async (dispatch: AppDispatch) => {
  const programId = values.id;
  const editedProgram = {
    ...values,
    days: [
      ...values.days.map((day: any) => {
        if (day.day === dayNumber) {
          const date = values.days[dayNumber - 1].workProcess.date.split('-').reverse();
          values.days[dayNumber - 1].workProcess.date = `${date[0]}.${date[1]}.${date[2].slice(-2)}`;
          day.workHistory = [...day.workHistory, { ...values.days[dayNumber - 1].workProcess }];
          day.workProcess = {
            date: '',
            weights: [
              ...day.workProcess.weights.map((exercise: any) => {
                return {
                  exerciseNumber: exercise.exerciseNumber,
                  weights: '',
                };
              }),
            ],
          };
        }
        return day;
      }),
    ],
  };
  editProgramInFB(programId, editedProgram)
    .then((response) => dispatch(editProgramInState(response)))
    .catch(Error);
};
