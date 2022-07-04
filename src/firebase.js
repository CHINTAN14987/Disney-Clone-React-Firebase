import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCUSAxS2t_UyCwoAzWSqP22DtfHiCSyAIQ",
  authDomain: "disneyclone-1a632.firebaseapp.com",
  projectId: "disneyclone-1a632",
  storageBucket: "disneyclone-1a632.appspot.com",
  messagingSenderId: "866441898585",
  appId: "1:866441898585:web:c230b468d9e25a13b5df48",
  measurementId: "G-PTGQ7JKEF0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
