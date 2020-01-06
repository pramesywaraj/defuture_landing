import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCANcHicZt4OsuaMcjkb9qPrIol3eYUDRg",
    authDomain: "defuturelanding.firebaseapp.com",
    databaseURL: "https://defuturelanding.firebaseio.com",
    projectId: "defuturelanding",
    storageBucket: "defuturelanding.appspot.com",
    messagingSenderId: "655146817681",
    appId: "1:655146817681:web:d6fbac37b64b83f7b18730",
    measurementId: "G-1HH0G7V40Q"
};
firebase.initializeApp(config);
firebase.analytics();
firebase.firestore().settings(settings);

export default firebase;