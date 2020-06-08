import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDesAatuiqg8O6LobxBwufbwul9dB2pDsQ",
    authDomain: "expensify-2c9f4.firebaseapp.com",
    databaseURL: "https://expensify-2c9f4.firebaseio.com",
    projectId: "expensify-2c9f4",
    storageBucket: "expensify-2c9f4.appspot.com",
    messagingSenderId: "1062655689803",
    appId: "1:1062655689803:web:64ba516583a8357a31b9ce",
    measurementId: "G-EBLDG5ZJ20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }; 