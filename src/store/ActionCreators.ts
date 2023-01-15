import { collection, getDocs } from 'firebase/firestore';
import { db } from 'api/api';
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