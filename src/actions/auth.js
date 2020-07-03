// This action is what will start our login. 
import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startSignupWithEmailAndPassword = (email, password) => {
    console.log('startSignupWithEmailAndPassword');
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // const user = firebase.auth().currentUser;
                // user.sendEmailVerification().then(() => {
                //     if (user.emailVerified) {
                        console.log('successfully create user with email and password');
                //     } else {
                //         console.log('Email has been sent but not verified yet');
                //     }
                // }).catch((error) => {
                //     console.log(error.message);
                // });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    };
};

export const startLoginWithEmailAndPassword = (email, password) => {
    console.log('startLoginWithEmailAndPassword called');
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
            console.log('successfully logged in with email and password');
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
    };
};

export const startLoginWithGoogle = () => {
    console.log('startLoginWithGoogle called');
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
        .then((result) => {
            console.log('successfully logged in with Google');
            var user = result.user; // The signed-in user info.
            console.log('user', user);
        })
        .catch((error) => { // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email; // The email of the user's account used.
            var credential = error.credential; // The firebase.auth.AuthCredential type that was used.
            console.log(errorMessage);
            if (errorCode === 'auth/account-exists-with-different-credential') { // User's email already exists.
                firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
                    if (methods[0] === "facebook.com") {
                        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
                            result.user.linkAndRetrieveDataWithCredential(credential).then((usercred) => {
                                goToApp();
                            });
                        }).catch((error) => {
                            console.log(error.message);
                        });
                    } 
                });
            };
        });
    };
};

export const startLoginWithFacebook = () => {
    console.log('startLoginWithFacebook called');
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider).then(() => {
            console.log('successfully logged in with Facebook');
        }).catch((error) => { 
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email; 
            var credential = error.credential; 
            if (errorCode === 'auth/account-exists-with-different-credential') { 
                firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
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