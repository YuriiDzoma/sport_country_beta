import {addDoc, collection, doc, getDocs, setDoc} from 'firebase/firestore';
import { db } from 'config/config';
import { trainingSlice } from 'store/training-slice';
import { AppDispatch } from 'store/store';

export const fetchPrograms = () => async (dispatch: AppDispatch) => {
    dispatch(trainingSlice.actions.programsFetching());
    await getDocs(collection(db, "programs"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            dispatch(trainingSlice.actions.programsFetchingSuccess(newData));
        })
}

export const setNewProgram = async (values: any)  =>  await addDoc(collection(db, "programs"), {...values},)
    .then(response => {return response;});


export const editProgram = async (programId: any, values: any) => {
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