import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyD0YeKKwQPr6TFG9DGHfn3jBXJF5wbP69E",
  authDomain: "workout-35eff.firebaseapp.com",
  databaseURL: "https://workout-35eff.firebaseio.com",
  projectId: "workout-35eff",
  storageBucket: "workout-35eff.appspot.com",
  messagingSenderId: "512278412605",
  appId: "1:512278412605:web:8de0e13bd18722d92c9954"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()