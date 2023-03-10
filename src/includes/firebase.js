import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCmrDsXaXqtJ-_bBhE6mijvEJRXGrQV1-8",
    authDomain: "music-123a9.firebaseapp.com",
    projectId: "music-123a9",
    storageBucket: "music-123a9.appspot.com",
    messagingSenderId: "353431526100",
    appId: "1:353431526100:web:2a3e6ba688ef0af5a97941"
};
    

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage,
};