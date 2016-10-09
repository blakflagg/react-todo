import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBaqNSJKvAdBgrFSQXMEZGDViESM4IWVHk",
        authDomain: "todo1-4518a.firebaseapp.com",
        databaseURL: "https://todo1-4518a.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "365183785131"
    }
    firebase.initializeApp(config);
}catch(e){

}

export var gitHubProvider =  new firebase.auth.GithubAuthProvider();

export var firebaseRef = firebase.database().ref();

export default firebase;
