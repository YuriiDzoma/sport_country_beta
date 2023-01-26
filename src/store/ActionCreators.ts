import {addDoc, deleteDoc, collection, doc, setDoc} from 'firebase/firestore';
import { db } from 'config/config';
import { v4 } from "uuid";

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