import {createAsyncThunk} from "@reduxjs/toolkit";
import {addDoc, collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import {auth, db, provider} from "config/config";
import {Program} from "store/training-slice.types";
import {signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {setIsAuth} from "store/auth-slice";
import {AppDispatch} from "store/store";
import {setProfile} from "store/profile-slice";
import {addUser} from "store/users-slice";

export const getUsers = async () => {
    try {
        const response = await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                return newData;
            });
        return response;
    } catch (e) {
        console.log(e)
    }
}

export const signWithGoogle = async (dispatch: AppDispatch) => {
    getUsers().then(response => {
        signInWithPopup(auth, provider).then((result) => {

            // @ts-ignore
            const isUser = response.find((user) => user.userId === result.user.uid);

            const user = {
                id: '',
                userId: result.user.uid,
                name: result.user.displayName,
                surname: '',
                location: '',
                dateOfBirth: '',
                email: result.user.email,
                userPhoto: result.user.photoURL,
            }
            if (isUser === undefined) {
                addDoc(collection(db, "users"), {...user},)
                    .then(data => {console.log(data)});
                dispatch(addUser(user))
            }
            dispatch(setProfile(result.user.uid))
        }).catch((error) => {
            console.log(error);
        })
    })
}

export const logOut = async (dispatch: AppDispatch) => {
    signOut(auth).then(() => {
        dispatch(setProfile(null))
    }).catch((error) => {
        console.log(error)
    });
}

onAuthStateChanged(auth, (user) => {

    if (user) {
        const uid = user.uid;
        // dispatch(setIsAuth(true))
    } else {
        // dispatch(setIsAuth(false))
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
//
// export const fetchUsers = createAsyncThunk(
//     'users/fetchAll',
//     async (_,thunkAPI) => {
//         try {
//             return await getDocs(collection(db, "users"))
//                 .then((querySnapshot) => {
//                     return  querySnapshot.docs
//                         .map((doc) => ({...doc.data(), id: doc.id}));
//                 });
//         } catch (e) {
//             return thunkAPI.rejectWithValue('loading error')
//         }
//     }
// );

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
