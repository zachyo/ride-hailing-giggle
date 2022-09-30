// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ZU9vKCJ-QniakZVrUFTHFLZQAMNDtwM",
  authDomain: "weride-b654b.firebaseapp.com",
  projectId: "weride-b654b",
  storageBucket: "weride-b654b.appspot.com",
  messagingSenderId: "46318819271",
  appId: "1:46318819271:web:b1319e49b013d19437abe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export const createUserProfileDoc = async (user, additionalData) => {
  if (!user) return;
  const createdAt = new Date();
  try {
    const userRef = await addDoc(collection(db, "users"), {
      createdAt,
      user,
      ...additionalData,
    });

    console.log("Document written with ID: ", userRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { app, auth };
