// This action is what will start our login. 

import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {
        console.log('started Google')
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginFacebook = () => {
    return () => {
        console.log('started Facebook');
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();   
    }
}