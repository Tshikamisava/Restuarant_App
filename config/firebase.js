// Import the functions you need from the SDKs you need
import firebase from 'react-native-firebase';

import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAvO44vLyV6cu2uoKIE_hcxnTSe8ETC-GM",
  authDomain: "restuarent-ec715.firebaseapp.com",
  projectId: "restuarent-ec715",
  storageBucket: "restuarent-ec715.appspot.com",
  messagingSenderId: "431024750751",
  appId: "1:431024750751:web:57e9dbebe86a2f7c8462aa",
  measurementId: "G-1827C8DT8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };