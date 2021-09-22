import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
 
   
        apiKey: "AIzaSyBwPXESm8iNswOYkKBi4JcPd_kBxl3-zhE",
        authDomain: "e-commerce-site-ea7ad.firebaseapp.com",
        projectId: "e-commerce-site-ea7ad",
        storageBucket: "e-commerce-site-ea7ad.appspot.com",
        messagingSenderId: "136971515207",
        appId: "1:136971515207:web:7731df0ea88a8382660862"
      
})

const db= firebaseApp.firestore();
const auth= firebaseApp.auth();

export {db, auth};