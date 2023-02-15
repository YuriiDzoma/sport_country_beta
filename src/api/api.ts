import {createAsyncThunk} from "@reduxjs/toolkit";
import {addDoc, collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import {auth, db, provider} from "config/config";
import {Program} from "store/training-slice.types";
import {signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const signWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user
    }).catch((error) => {
        console.log(error);
    })
}

export const logOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
        console.log(error)
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
        console.log('true')
    } else {
        console.log('false')
    }
});

export const fetchPrograms = createAsyncThunk(
    'programs/fetchAll',
    async (_,thunkAPI) => {
        try {
            return await getDocs(collection(db, "programs"))
                .then((querySnapshot) => {
                    return querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                });
        } catch (e) {
            return thunkAPI.rejectWithValue('loading error')
        }
    }
);

export const fetchExercisesGroups = createAsyncThunk(
    'exercisesGroups/fetchAll',
    async (_,thunkAPI) => {
        try {
            return await getDocs(collection(db, "muscleGroups"))
                .then((querySnapshot) => {
                    return querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                });
        } catch (e) {
            return thunkAPI.rejectWithValue('loading error')
        }
    }
);

export const addProgramToFB = async (values: Program)  =>  {
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

// export const login = async () => {
//     try {
//         const provider = new GoogleAuthProvider();
//         const {user} = await auth.signInWithPopup(provider)
//         console.log(user)
//     } catch (e) {
//             console.log(e);
//         }
// }
