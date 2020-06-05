import app from 'firebase/app';
import UserAPI from 'api/user'
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
    doCreateUserWithEmailAndPassword = async(email, password, username) => {
        try {
            let cred = await this.auth.createUserWithEmailAndPassword(email, password);
            cred.user.updateProfile({
                displayName: username
            });

            const res = await UserAPI.createUser(cred.user.uid, username);
            return res; 
        } catch {
            return 'Cannot create account'
        }
    }
        
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {
        this.auth.signOut();    
    }

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = async (currentPassword, newPassword) => {
        try {
            // Attempt to reauthenticate 
            const user = this.auth.currentUser; 
            const cred = app.auth.EmailAuthProvider(user.email, currentPassword);
            user.reauthenticateWithCredential(cred);
            await user.updatePassword(newPassword);
        } catch(err){
            return err.message;
        }
    }
}

export default Firebase; 