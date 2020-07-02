// This action is what will start our login. 

import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startSignupWithEmailAndPassword = () => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
};

export const startLoginWithEmailAndPassword = () => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    };
};

export const startLoginWithGoogle = () => {
    return () => {
        console.log('started Google');
        return firebase.auth().signInWithPopup(googleAuthProvider).catch((error) => { // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email; // The email of the user's account used.
            var credential = error.credential; // The firebase.auth.AuthCredential type that was used.
            if (errorCode === 'auth/account-exists-with-different-credential') { // User's email already exists.
                firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
                    // console.log(methods);
                    if (methods[0] === "facebook.com") {
                        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
                            result.user.linkAndRetrieveDataWithCredential(credential).then((usercred) => {
                                goToApp();
                            });
                        }).catch((error) => {
                            console.log(error);
                        });
                    };
                });
            };
        });
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        console.log('started Facebook');
        return firebase.auth().signInWithPopup(facebookAuthProvider).catch((error) => { 
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email; 
            var credential = error.credential; 
            if (errorCode === 'auth/account-exists-with-different-credential') { 
                firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
                    // console.log(methods);
                    if (methods[0] === "google.com") {
                        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
                            result.user.linkAndRetrieveDataWithCredential(credential).then((usercred) => {
                                goToApp();
                            });
                        }).catch((error) => {
                            console.log(error);
                        });
                    };
                });
            }; 
        });
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();   
    };
};