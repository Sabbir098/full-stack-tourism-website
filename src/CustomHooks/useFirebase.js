import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializingAuthentication from "../firebase/firebase.init";

initializingAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
       signInWithPopup(auth, googleProvider)
       .then(result => {
        setUser(result.user);     
    })
        
        .catch(error => {
            const message = error.message
            setError(message)
        })

       
    }
    return {signInUsingGoogle, user, error};
}

export default useFirebase;