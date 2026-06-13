import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { use } from "react";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCl1JrR-_QBX78-taCchJ6gtDAeB0Icr0M",
  authDomain: "netflix-clone-870a5.firebaseapp.com",
  projectId: "netflix-clone-870a5",
  storageBucket: "netflix-clone-870a5.firebasestorage.app",
  messagingSenderId: "611963741663",
  appId: "1:611963741663:web:6a8203e59e4c274048506a",
  measurementId: "G-QZV7FMEK4X"
};

// Import Your Own FireBase Authentication

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name , email , password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth , email , password);
        const user = res.user
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email , password) => {
    try{
        await signInWithEmailAndPassword(auth , email , password);
    }
    catch(err){
        console.log(err)
        toast.error(err.code.split('/')[1].split('-').join(" "))
    }
}

const logout = async () => {
    signOut(auth)
}

export {auth , db , login , signup , logout}