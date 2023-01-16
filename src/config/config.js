import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

import { setDoc, doc, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBN4oH_lwQJAz1KxEeF_bCcrzJ6hjG4HI",
    authDomain: "sport-country-app.firebaseapp.com",
    databaseURL: "https://sport-country-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sport-country-app",
    storageBucket: "sport-country-app.appspot.com",
    messagingSenderId: "712794285781",
    appId: "1:712794285781:web:90371943d42634ec78e45c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const setNewProgram = async (values)  =>  await addDoc(collection(db, "programs"), {...values},)
    .then(response => {return response;});


export const editProgram = async (programId, values) => {
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
