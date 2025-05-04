import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth,
            currentUser => {setUser(currentUser)
                console.log(currentUser)
            }
        )
        return ()=> unsubscribe()
    }, [])

    const authData = {
        user,
        registerUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;