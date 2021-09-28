import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAuqAq_dCdNFONe8_Yk8INddM12p3Zxnkg",
  authDomain: "test3-5a2dc.firebaseapp.com",
  projectId: "test3-5a2dc",
  storageBucket: "test3-5a2dc.appspot.com",
  messagingSenderId: "537826078022",
  appId: "1:537826078022:web:eb8eb1620b35d4e5804947",
  measurementId: "G-5SYPRQJRNE"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;