import { credential } from "firebase-admin";
import {initializeApp} from "firebase-admin/app";
import {Firestore} from "firebase-admin/firestore";

// similar to what I did in firebase function
// passing in credential bc we're telling the service we use in cloudrun to use default credential
// which will give us access to the firestore instance
initializeApp({credential: credential.applicationDefault()});

// do not need to specify which instance, bc only one is allowed per gcp project
const firestore = new Firestore();

// Note: This requires setting an env variable in Cloud Run
/** if (process.env.NODE_ENV !== 'production') {
  firestore.settings({
      host: "localhost:8080", // Default port for Firestore emulator
      ssl: false
  });
} */


const videoCollectionId = 'videos';

export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed',
  title?: string,
  description?: string
}

async function getVideo(videoId: string) {
  const snapshot = await firestore.collection(videoCollectionId).doc(videoId).get();// calling await bc we dont want to return the data until this line is executed
  return (snapshot.data() as Video) ?? {};
   // data()return a promise of a document, or undefined; return empty object if undefined
}

// writing go Firestore
export function setVideo(videoId: string, video: Video) {
  return firestore
    .collection(videoCollectionId)
    .doc(videoId)
    .set(video, { merge: true }) 
    // merge: true : if the video already exists for that id, and we're only passing in, for example description
    // will only overwrite that field but not delete the original doc
}

export async function isVideoNew(videoId: string) {
  const video = await getVideo(videoId);
  return video?.status === undefined;
}
