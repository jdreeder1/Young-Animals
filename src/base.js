import Rebase from 're-base'; //React firebase specific package that lets us mirror our state to our firebase changes
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIp55jCB0uLsnhv2PebLOz-DIH-qLRqz0",
    authDomain: "young-animals.firebaseapp.com",
    databaseURL: "https://young-animals-default-rtdb.firebaseio.com",
    /*projectId: "young-animals",
    storageBucket: "young-animals.appspot.com",
    messagingSenderId: "125134676964",
    appId: "1:125134676964:web:11cfb4cc32a42f02675df1",
    measurementId: "G-1MFQVDGTGE"*/
  });

//rebase bindings
const base = Rebase.createClass(firebaseApp.database());

//firebase.analytics();
// Initialize Firebase
//this is a named export
export { firebaseApp };

//this is a default export
export default base;  
