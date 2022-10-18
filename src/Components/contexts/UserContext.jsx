/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import '../../firebase.config';

export const AuthContext = createContext();

function UserContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser({ ...currentUser });
            setLoading(false);
        });

        return () => unsub();
    }, []);
    // signup fuctinality
    const signUpUser = async (email, password, name) => {
        const auth = getAuth();
        try {
            setError(null);
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
            });
            sendEmailVerification(auth.currentUser);
        } catch (err) {
            setError(err);
        }
    };
    // signin functionality
    const signInUser = async (email, password, navigate) => {
        setLoading(true);
        const auth = getAuth();
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log(auth.currentUser);
                navigate();
            })
            .catch((err) => {
                setError(err);
            });
    };
    // signout functionality
    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth);
    };
    return (
        <AuthContext.Provider value={{ user, signUpUser, error, signInUser, signOutUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default UserContext;
