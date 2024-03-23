import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {Firestore} from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";

initializeApp();
// locally已經firebase login, 所以deploy的時候，已經有自己的credential

const firestore = new Firestore();

export const createUser = functions.auth.user().onCreate((user) => {
  // event-driven; will be called automatically everytime we create a new user
  const userInfo = {
    uid: user.uid,
    email: user.email,
    photoUrl: user.photoURL,
  };

  firestore.collection("users").doc(user.uid).set(userInfo);
  // 如果colleciton跟doc本來不存在，會創建
  logger.info(`User Created: ${JSON.stringify(userInfo)}`);
  return;
});
