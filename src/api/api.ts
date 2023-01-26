import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
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