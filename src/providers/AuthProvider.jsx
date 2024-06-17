import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { app } from "../../../A12/product-hunt-client/src/firebase/firebase.config";
import { createContext } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        createUser, 
        signIn,
        logOut, 
        googleSignIn, 
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;