// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOIw-fFTJw9vmXY0dYpMv1n-wVJ4q_Lag",
    authDomain: "e-alert-pro.firebaseapp.com",
    projectId: "e-alert-pro",
    storageBucket: "e-alert-pro.appspot.com",
    messagingSenderId: "1023817610592",
    appId: "1:1023817610592:web:356fd0cf61dce22be6da05",
    measurementId: "G-BBRQ4TY5SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var db = firebase.firestore();

// Initialize Google Map
var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map
    });
}

// Listen for location changes
db.collection("users").doc("userId").onSnapshot(function(doc) {
    var location = doc.data().location;
    var newPos = new google.maps.LatLng(location.latitude, location.longitude);
    marker.setPosition(newPos);
    map.setCenter(newPos);
});

// Call initMap to initialize the map
initMap();
