import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig ={
    apiKey: "AIzaSyAeL4qYe85dJILsW-XNOkKnS9VzQQZrKKc",
    authDomain: "bairpair-14e2f.firebaseapp.com",
    projectId: "bairpair-14e2f",
    storageBucket: "bairpair-14e2f.appspot.app",
    messagingSenderId: "246162032481",
    appId: "1:246162032481:web:d11bf0d35187b5e19fe720",
    measurementId: "G-SCM59JNB79"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);