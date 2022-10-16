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
import app from '../../firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

function UserContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({ name: 'nahid' });
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser({ ...currentUser });
            setLoading(false);
        });

        return unsub;
    }, []);
    // signup fuctinality
    const signUpUser = async (email, password, name) => {
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
    const signInUser = (email, password) => {
        try {
            setError(null);
            return signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err);
            return err;
        }
    };
    // signout functionality
    const signOutUser = () => signOut(auth);
    return (
        <AuthContext.Provider value={{ user, signUpUser, error, signInUser, signOutUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default UserContext;
