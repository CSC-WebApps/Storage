// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");
const database = require('firebase/database');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require('./firebase.json');
firebaseConfig.databaseURL = "https://csc-webapps-default-rtdb.firebaseio.com/";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = database.getDatabase(app);


module.exports = {firebase: app, database, database, db: db};