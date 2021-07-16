import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz5zDsZn-w_vqXTRwIRoMzXPIfTjnBP_A",
    authDomain: "linkedin-clone-52a4b.firebaseapp.com",
    projectId: "linkedin-clone-52a4b",
    storageBucket: "linkedin-clone-52a4b.appspot.com",
    messagingSenderId: "842740839869",
    appId: "1:842740839869:web:169ad0cf53e961cc5cced4",
    measurementId: "G-MNYJV0KEJV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};