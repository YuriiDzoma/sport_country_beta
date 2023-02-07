import {createAsyncThunk} from "@reduxjs/toolkit";
import {addDoc, collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "config/config";

export const fetchPrograms = createAsyncThunk(
    'programs/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await getDocs(collection(db, "programs"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                    return newData;
                });
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('loading error')
        }
    }
);

export const fetchExercisesGroups = createAsyncThunk(
    'exercisesGroups/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await getDocs(collection(db, "muscleGroups"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                    return newData;
                });
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('loading error')
        }
    }
);

export const addProgramToFB = async (values: any)  =>  {
    try {
         await addDoc(collection(db, "programs"), {...values},)
            .then(data => {console.log(data)});
        return values;
    } catch (e) {
        console.log(e);
    }
};

export const deleteProgramInFB = async (programId: string) => {
    try {
        await deleteDoc(doc(db, "programs", programId))
            .then(response => {return response});
        return programId;
    } catch (e) {
        console.log(e);
    }
};

export const editProgramInFB = async (programId: string | undefined, values: any) => {
    try {
        if(!programId) return false;
        const collectionRef = doc(db, 'programs', programId);
        let updateObject = {...values};
        await setDoc(collectionRef, updateObject, {...values});
        return updateObject;
    } catch (e) {
        console.log(e);
    }
};

// export const saveProcessToFB = async (programId: any, values: any) => {
//     try {
//         console.log(values);
//         if(!programId) return false;
//         const collectionRef = doc(db, 'programs', programId);
//         let updateObject = {...values};
//         await setDoc(collectionRef, updateObject, {...values});
//         return updateObject;
//     } catch (e) {
//         console.log(e);
//     }
// };