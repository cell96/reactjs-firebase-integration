import app from 'firebase/app';
import 'firebase/auth';
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDUrz1Kgbo41T72osxtCwTlvvaFRZzg3EA",
    authDomain: "messenger-f6a65.firebaseapp.com",
    databaseURL: "https://messenger-f6a65.firebaseio.com",
    projectId: "messenger-f6a65",
    storageBucket: "",
    messagingSenderId: "639537374740"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}


export default Firebase;
