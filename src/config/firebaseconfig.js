import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCK5eR8tCEszCAVItVk_4P1WHY2dhymYq4",
    authDomain: "projetinho2023-fc4ec.firebaseapp.com",
    projectId: "projetinho2023-fc4ec",
    storageBucket: "projetinho2023-fc4ec.appspot.com",
    messagingSenderId: "264756585959",
    appId: "1:264756585959:web:5dbe435cd949f37ca14942"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore() 

  export default database