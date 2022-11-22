import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlyk-_VCzU4tst5PjDci67zD01PZ1FvNM",
    authDomain: "payment-app-test.firebaseapp.com",
    projectId: "payment-app-test",
    storageBucket: "payment-app-test.appspot.com",
    messagingSenderId: "142750691757",
    appId: "1:142750691757:web:5a6b9c5bca35ffd987f124"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);



// db operations
export const addNewUser = async (uid: string, payload: Object) => {
    await setDoc(doc(db, "users", uid), payload);
    return await getUserByUid(uid);
}

export const getUserByUid = async (uid: string) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}
