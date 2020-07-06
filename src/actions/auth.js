// This action is what will start our login. 
import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const requestSignup = () => ({
    type: 'SIGNUP_REQUEST'
});

export const receiveSignup = (user) => ({
    type: 'SIGNUP_SUCCESS',
    user
});

export const signupError = (error) => ({
    type: 'SIGNUP_ERROR',
    error
}) 

export const requestLogin = () => ({
    type: 'LOGIN_REQUEST'
});

export const receiveLogin = (user) => ({
    type: 'LOGIN_SUCCESS',
    user
});

export const loginError = (error) => ({
    type: 'LOGIN_ERROR',
    error
});

export const requestLogout = () => ({
    type: 'LOGOUT_REQUEST'
})

export const receiveLogout = () => ({
    type: 'LOGOUT_SUCCESS'
});

export const logoutError = (error) => ({
    type: 'LOGOUT_ERROR',
    error
}); 

export const sendPasswordResetEmail = () => ({
    type: 'SEND_PASSWORD_RESET_EMAIL'
});

// export const verifyRequest = () => ({
//     type: 'VERIFY_REQUEST'
// });
  
// export const verifySuccess = () => ({
//     type: 'VERIFY_SUCCESS'
// });

export const startSignupWithEmailAndPassword = (email, password) => {
    console.log('startSignupWithEmailAndPassword is called');
    return (dispatch) => {
        dispatch(requestSignup());
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(receiveSignup(result.user));
            })
            .catch((error) => {
                dispatch(signupError(error));
            });
    };
};

export const startLoginWithEmailAndPassword = (email, password) => {
    console.log('startLoginWithEmailAndPassword is called');
    return (dispatch) => {
        dispatch(requestLogin());
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((result)=> {
                dispatch(receiveLogin(result.user));
            }).catch((error) => {
                dispatch(loginError(error));
            });
    };
};

export const startLoginWithGoogle = () => {
    console.log('startLoginWithGoogle called');
    return (dispatch) => {
        dispatch(requestLogin());
        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((result) => {
                const user = result.user;
                dispatch(receiveLogin(user));
            })
            .catch((error) => {
                dispatch(loginError(error));
                if (error.code === 'auth/popup-blocked') {
                    console.log('signInWithRedirect called');
                    firebase.auth().signInWithRedirect(provider)
                    .then((result) => {
                        dispatch(receiveLogin(result.user));    
                    })
                    .catch((error) => {
                        dispatch(loginError(error));
                    })
                } else if (error.code === 'auth/account-exists-with-different-credential') { // User's email already exists.
                    console.log('fetchSignInMethodsForEmail called');
                    firebase.auth().fetchSignInMethodsForEmail(error.email)
                    .then((methods) => {
                        if (methods[0] === "facebook.com") {
                            return firebase.auth().signInWithPopup(googleAuthProvider)
                            .then((result) => {
                                result.user.linkAndRetrieveDataWithCredential(error.credential)
                                .then((user) => {
                                    goToApp();
                                    dispatch(receiveLogin(user));
                                })
                                .catch((error) => {
                                    dispatch(loginError(error));
                                });
                            });
                        }; 
                    })
                    .catch((error) => {
                        dispatch(loginError(error));
                    })
                } 
            });
    };
};

export const startLoginWithFacebook = () => {
    console.log('startLoginWithFacebook called');
    return (dispatch) => {
        dispatch(requestLogin());
        return firebase
            .auth()
            .signInWithPopup(facebookAuthProvider)
            .then((result) => {
                const user = result.user;
                dispatch(receiveLogin(user));
            }).catch((error) => { 
                dispatch(loginError(error));
                if (error.code === 'auth/popup-blocked') {
                    firebase.auth().signInWithRedirect(provider)
                    .then((result) => {
                        dispatch(receiveLogin(result.user));    
                    })
                    .catch((error) => {
                        dispatch(loginError(error));
                    })
                } else if (error.code === 'auth/account-exists-with-different-credential') { 
                    firebase.auth().fetchSignInMethodsForEmail(error.email)
                    .then((methods) => {
                        if (methods[0] === "password") {
                            dispatch(loginError({ message: 'Please enter password'}));
                            firebase.auth().signInWithEmailAndPassword(error.email, password)
                                .then((user) => {
                                    return user.linkWithCredential(error.credential);
                                })
                                .then(() => {
                                    goToApp(); // Google account successfully linked to the existing Firebase user.
                                });
                                return;
                        }   
                        else if (methods[0] === "google.com") {
                            return firebase.auth().signInWithPopup(googleAuthProvider)
                                .then((result) => {
                                    result.user.linkAndRetrieveDataWithCredential(error.credential)
                                    .then((user) => {
                                        goToApp();
                                        dispatch(receiveLogin(user));
                                    });
                                })
                                .catch((error) => {
                                    dispatch(loginError(error));
                                });
                        };
                    }).catch((error) => {
                        dispatch(loginError(error));
                    })
                }; 
            });
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();   
    };
};

export const startSendPasswordResetEmail = (email) => {
    console.log('startSendPasswordResetEmail is called');
    return (dispatch) => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                dispatch(sendPasswordResetEmail());
            })
            .catch((error) => {
                dispatch(loginError(error));
            });
    };
};