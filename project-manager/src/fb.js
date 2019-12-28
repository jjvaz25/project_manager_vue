import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAa1cM4tljC3mf2v-wSzdo2QmQxitJI52w",
  authDomain: "project-manager-spartan-mule.firebaseapp.com",
  databaseURL: "https://project-manager-spartan-mule.firebaseio.com",
  projectId: "project-manager-spartan-mule",
  storageBucket: "project-manager-spartan-mule.appspot.com",
  messagingSenderId: "518139534355",
  appId: "1:518139534355:web:404d76a8eff9d52ba5f3e6",
  measurementId: "G-J6RJS4FDX4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db;