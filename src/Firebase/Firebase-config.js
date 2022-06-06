import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmbF90qiw_e-UOxkk7wuPD8WUegJgPS6I",
  authDomain: "muroexeecommerce.firebaseapp.com",
  projectId: "muroexeecommerce",
  storageBucket: "muroexeecommerce.appspot.com",
  messagingSenderId: "40487279145",
  appId: "1:40487279145:web:6f3d96f60bd9d500e51a38",
  measurementId: "G-ZFL2YGCDMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//1- Authentication
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// ---- Sign In With Google ----
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    });
};
export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    });
};
// ---- Sign Out ----
export const signOutFunc = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

//2- Database
const db = getFirestore(app);

// ---- Create User Document Into DATABASE ----
export const createUserDoc = async (userAuth, restData) => {
  if (!userAuth) return;

  const docRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const creationDate = new Date();
    try {
      await setDoc(docRef, {
        creationDate,
        displayName,
        email,
        ...restData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return docRef;
};
