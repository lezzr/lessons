import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDa-ch_e7ugWxr2tatK65zpUxNWv9nUmEQ",
    authDomain: "gb-chatt.firebaseapp.com",
    databaseURL: "https://gb-chatt-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-chatt",
    storageBucket: "gb-chatt.appspot.com",
    messagingSenderId: "937407694233",
    appId: "1:937407694233:web:cf7267830f63d7b68b7f08",
    measurementId: "G-FQ5W3LMCGK"
};

// export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firebaseApp = firebase.initializeApp(firebaseConfig)


export const db = firebaseApp.database()


