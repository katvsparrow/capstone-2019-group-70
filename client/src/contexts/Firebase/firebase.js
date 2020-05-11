import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9_SoW5PlblCdcL7286w9Zvy2aUsxJzHU",
    authDomain: "jewish-womens-wills.firebaseapp.com"
}

class Firebase {
    /* Initialize Firebase app */
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    /* 
     * Authentication methods 
     * Reference: https://firebase.google.com/docs/reference/js/firebase.auth.AUTH
    */
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
        
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {
        this.auth.signOut();    
    }

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPassWordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase; 