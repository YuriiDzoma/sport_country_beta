import {addDoc, deleteDoc, collection, doc, getDocs, setDoc} from 'firebase/firestore';
import { db } from 'config/config';
import { trainingSlice } from 'store/training-slice';
import { AppDispatch } from 'store/store';
import { v4 } from "uuid";

export const fetchPrograms = () => async (dispatch: AppDispatch) => {
    dispatch(trainingSlice.actions.programsFetching());
    await getDocs(collection(db, "programs"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            dispatch(trainingSlice.actions.programsFetchingSuccess(newData));
        })
}

export const fetchExercisesGroups = () => async (dispatch: AppDispatch) => {
    dispatch(trainingSlice.actions.exercisesFetching());
    await getDocs(collection(db, "muscleGroups"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            dispatch(trainingSlice.actions.exercisesFetchingSuccess(newData));
        })
}

export const setNewProgram = async (values: any)  =>  await addDoc(collection(db, "programs"), {...values,id: v4(), comments: []},)
    .then(response => {return response;});

export const deleteProgram = async (programId: string) => await deleteDoc(doc(db, "programs", programId));

export const editProgram = async (programId: string | undefined, values: any) => {
    try {
        if(!programId) return false;
        const collectionRef = doc(db, 'programs', programId);
        let updateObject = {...values};
        await setDoc(collectionRef, updateObject, {...values});
        return true;
    } catch (error) {
        return false;
    }
};