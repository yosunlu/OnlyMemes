// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/cordova";
import { getFunctions } from 'firebase/functions';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXaBYBb8Xa3AEV-h1kL4Goe73GPfM-tYI",
  authDomain: "onlememes.firebaseapp.com",
  projectId: "onlememes",
  appId: "1:121237360365:web:7ab42f4b1950e882a946e4"
};

// Initialize Firebase; call this here so getVideos can be exported to functions
// 原本 const functions = get functions(）會寫在這，但是firebase沒有被page.tsx render，所以app 沒有被initialize
// 解法是在functions.ts(getVidoes被定義的地方)import functions, 在這裏export
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions(); // get the getVideo function

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
// (user: User | null) => void，這意味著整個箭頭函數接收一個名為user的參數
// 這個參數可能是User類型或者null，並且這個函數不返回任何值（即，它的返回類型是void）。
// 函數體內部可能會有像setUser(user)這樣的語句，用於執行某些操作（比如更新狀態），但這些操作不會有返回值。