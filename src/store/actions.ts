import {
  addProgramToFB,
  deleteProgramInFB,
  editProgramInFB,
  fetchMyPrograms,
  getUsers
} from 'api/api';
import { AppDispatch } from 'store/store';
import {addProgramToGlobalState, resetFetching, setFetching} from 'store/training-slice';
import { Program } from 'store/training-slice.types';
import {
  editUserProgramInState,
  setUsersLoading,
  setUserPrograms,
  setUsers,
} from 'store/users-slice';
import { pushExercises } from 'store/wikiExercises-slice';
import { exercise } from 'store/wikiExercises-slyce.types';
import {editProgramInState, removeProgramFromState, setMyProgram} from "store/profile-slice";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(setUsersLoading(true));
  getUsers()
    .then((response) => dispatch(setUsers(response)))
    .catch(Error);
  dispatch(setUsersLoading(false));
};

export const setMyPrograms = (user: string) => async (dispatch: AppDispatch) => {
  if (user) {
    fetchMyPrograms(user).then((response) => dispatch(setMyProgram(response)))
  }
}

export const setClientProgram = (user: string) => async (dispatch: AppDispatch) => {
  if (user) {
    fetchMyPrograms(user).then((response) => dispatch(setMyProgram(response)))
  }
}

export const fetchUserPrograms = (user: string) => async (dispatch: AppDispatch) => {
  if (user) {
    fetchMyPrograms(user).then((response) => dispatch(setUserPrograms(response)))
  }
}

export const setNewGlobalProgram = (values: Program) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  const newProgram = {
    ...values,
  };
  addProgramToFB(newProgram).then((response) => dispatch(addProgramToGlobalState(response)));
  dispatch(resetFetching());
};

export const deleteProgram = (user: string, values: string) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  deleteProgramInFB(user, values)
    .then((response) => dispatch(removeProgramFromState(response)))
    .catch(Error);
  dispatch(resetFetching());
};

export const editProgram = (user: string, programId: string | undefined, values: Program) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  if (user) {
    editProgramInFB(user, programId, values)
        .then((response) => dispatch(editProgramInState(response)))
        .catch(Error);
  }
  dispatch(resetFetching());
};

export const editUserProgram = (user: string, programId: string | undefined, values: Program) => async (dispatch: AppDispatch) => {
  dispatch(setFetching());
  if (user) {
    editProgramInFB(user, programId, values)
        .then((response) => dispatch(editUserProgramInState(response)))
        .catch(Error);
  }
  dispatch(resetFetching());
};

export const setExercises = (values: exercise[]) => async (dispatch: AppDispatch) => {
  dispatch(pushExercises(values));
};

export const addWorkHistory = (user: string, dayNumber: number, values: Program) => async (dispatch: AppDispatch) => {

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
  if (user) {
    editProgramInFB(user, programId, editedProgram)
        .then((response) => dispatch(editProgramInState(response)))
        .catch(Error);
  }
};
