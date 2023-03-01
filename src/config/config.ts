import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  NextOrObserver,
} from 'firebase/auth';

import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBN4oH_lwQJAz1KxEeF_bCcrzJ6hjG4HI',
  authDomain: 'sport-country-app.firebaseapp.com',
  databaseURL: 'https://sport-country-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sport-country-app',
  storageBucket: 'sport-country-app.appspot.com',
  messagingSenderId: '712794285781',
  appId: '1:712794285781:web:90371943d42634ec78e45c',
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    const programId = 'empty'

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalInformation,
      });
      const collectionRef = doc(db, `favoriteProgram`, userAuth.uid);
      const updateObject = { programId };
      // @ts-ignore
      await setDoc(collectionRef, updateObject, {...programId});
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  console.log(auth);

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangeListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
