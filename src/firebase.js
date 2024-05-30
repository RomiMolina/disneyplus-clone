

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBaac6XENZFSyq_ufS37T7PMh2EV0rSl7A",
    authDomain: "disneyplus-clone-60fe8.firebaseapp.com",
    projectId: "disneyplus-clone-60fe8",
    storageBucket: "disneyplus-clone-60fe8.appspot.com",
    messagingSenderId: "645565160534",
    appId: "1:645565160534:web:334910750c2e000d71eff7",
    measurementId: "G-ZZVE9J19JL"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore(); 

export { firebaseApp, auth, provider , db };

