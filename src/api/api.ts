import {createAsyncThunk} from '@reduxjs/toolkit';
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc} from 'firebase/firestore';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";

import {db} from 'config/config';
import {Program} from 'store/training-slice.types';

const storage = getStorage();

export const setUserAvatar = async (userId: string, value: any) => {
  try {
    const metadata = {
      contentType: 'image/jpeg'
    };
    const storageRef = ref(storage, 'userPhoto/' + userId);
    uploadBytesResumable(storageRef, value, metadata);

  } catch (e) {
    console.log(e)
  }
}

export const getUserAvatar = async (userId: string) => {
  try {
    return getDownloadURL(ref(storage, 'userPhoto/' + userId))
  } catch (e) {
    console.log(e)
  }

}

export const getCurrentUser = async (id: string) => {
  try {
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {...docSnap.data(), id: id};
    } else {
      console.log("No such document!");
    }

  } catch (e) {
    console.log(e)
  }
}

export const getUsers = async () => {
  try {
    return await getDocs(collection(db, 'users')).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    console.log(e);
  }
};

export const setUserNewData = async (user: string, values: any) => {
  try {
    if (!user) return false;
    const collectionRef = doc(db, 'users', user);
    const updateObject = { ...values };
    await setDoc(collectionRef, updateObject, { ...values });
    return updateObject;
  } catch (e) {
    console.log(e);
  }
}

export const fetchMyPrograms = async (user: string) => {
  try {
    return await getDocs(collection(db, `usersPrograms/${user}/programs`)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserFriends = async (userId: string) => {
  try {
    return await getDocs(collection(db, `usersFollowers/${userId}/followers`)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserNotifications = async (userId: string) => {
  try {
    return await getDocs(collection(db, `usersNotifications/${userId}/followers`)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    console.log(e);
  }
}

export const getUserPublications = async (userId: string) => {
  try {
    return await getDocs(collection(db, `usersPublications/${userId}/publications`)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    console.log(e);
  }
}

export const fetchPrograms = createAsyncThunk('programs/fetchAll', async (_, thunkAPI) => {
  try {
    return await getDocs(collection(db, 'programs')).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    return thunkAPI.rejectWithValue('loading error');
  }
});

export const fetchExercisesGroups = createAsyncThunk('exercisesGroups/fetchAll', async (_, thunkAPI) => {
  try {
    return await getDocs(collection(db, 'muscleGroups')).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  } catch (e) {
    return thunkAPI.rejectWithValue('loading error');
  }
});

export const addProgramToFB = async (values: Program) => {
  try {
    await addDoc(collection(db, 'programs'), { ...values })
    return values;
  } catch (e) {
    console.log(e);
  }
};

export const addPublicationToFB = async (user: string, values: any) => {
  try {
    return await addDoc(collection(db, `usersPublications/${user}/publications`), { ...values }).then((doc) => {
      return { ...values, id: doc.id };
    });

  } catch (e) {
    console.log(e);
  }
};



export const createNewProgram = async (user: string | null, values: Program) => {
  try {
    await addDoc(collection(db, `usersPrograms/${user}/programs`), { ...values }).then(() => {
      console.log('program added');
    });
    return values;
  } catch (e) {
    console.log(e);
  }
};

export const addNewFriend = async (myProfileID: string | null, friendId: any) => {
  try {
    await addDoc(collection(db, `usersFollowers/${myProfileID}/followers`), {friendId}).then(() => {
      console.log('followed');
    });
    return friendId;
  } catch (e) {
    console.log(e);
  }
};

export const createNotification = async (followerId: any, friendId: any) => {
  try {
    const docRef = doc(db, `usersNotifications/${friendId}/followers`, followerId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.data()) {
      setDoc(docRef, { flag: true });
    }
  } catch (e) {
    console.log(e)
  }
}

export const removeNotification = async (myProfileID: any, friendId: string) => {
  try {
    await deleteDoc(doc(db, `usersNotifications/${friendId}/followers`, myProfileID));
    return myProfileID;
  } catch (e) {
    console.log(e);
  }
};

export const removeFriend = async (myProfileID: string | null, friendId: string) => {
  try {
    await deleteDoc(doc(db, `usersFollowers/${myProfileID}/followers`, friendId)).then((response) => {
      return response;
    });
    return friendId;
  } catch (e) {
    console.log(e);
  }
};

export const setFavoriteProgram = async (userId: string, programId: any) => {
  try {
    if (!userId) return false;
    const collectionRef = doc(db, `favoriteProgram`, userId);
    const updateObject = { programId };
    await setDoc(collectionRef, updateObject, {...programId});
    return updateObject;
  } catch (e) {
    console.log(e);
  }
};

export const getFavoriteProgram = async (user: string) => {
  try {
    const docRef = doc(db, "favoriteProgram", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {...docSnap.data(), id: user};
    } else {
      console.log("No such document!");
    }

  } catch (e) {
    console.log(e)
  }
}

export const deleteProgramInFB = async (user: string, programId: string) => {
  try {
    await deleteDoc(doc(db, `usersPrograms/${user}/programs`, programId)).then((response) => {
      return response;
    });
    return programId;
  } catch (e) {
    console.log(e);
  }
};

export const deletePublication = async (user: string, postId: string) => {
  try {
    await deleteDoc(doc(db, `usersPublications/${user}/publications`, postId)).then((response) => {
      return response;
    });
    return postId;
  } catch (e) {
    console.log(e);
  }
};

export const editProgramInFB = async (user: string, programId: string | undefined, values: any) => {
  try {
    if (!programId) return false;
    const collectionRef = doc(db, `usersPrograms/${user}/programs`, programId);
    const updateObject = { ...values };
    await setDoc(collectionRef, updateObject, { ...values });
    return updateObject;
  } catch (e) {
    console.log(e);
  }
};

export const editPublication = async (user: string, postId: string, values: any) => {
  try {
    if (!postId) return false;
    const collectionRef = doc(db, `usersPublications/${user}/publications`, postId);
    const updateObject = { ...values };
    await setDoc(collectionRef, updateObject, { ...values });
    return updateObject;
  } catch (e) {
    console.log(e);
  }
};