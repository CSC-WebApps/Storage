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

console.log(db)
// insert object with automatic id
var student = {
  name: "Hello",
  email: "student@gmail.com",
  score: 100
};
let ref = database.ref(db, 'students');
database.push(ref, student);

firebase.deleteApp(app)
  .then(function() {
    console.log("App deleted successfully");
  })
  .catch(function(error) {
    console.log("Error deleting app:", error);
  });