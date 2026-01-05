
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1kUpjN571-EZIP9LUyMJhDlkKKvQN36g",
  authDomain: "hireme-d05f8.firebaseapp.com",
  projectId: "hireme-d05f8",
  storageBucket: "hireme-d05f8.firebasestorage.app",
  messagingSenderId: "202405942866",
  appId: "1:202405942866:web:8ff7232ea54ab0fd31b18b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
