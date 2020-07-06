const authReducersDefaultState = {
    user: null,
    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    signupError: null,
    loginError: null,
    logoutError: null,
    isAuthenticated: false,
    createdNewUser: false,
    sendPasswordResetEmail: false
    //isVerfiying: false
};

export default (state = authReducersDefaultState, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            return {
                ...state,
                isSigningUp: true,
                signupError: null,
                sendPasswordResetEmail: false
            }
        case 'SIGNUP_SUCCESS': 
            return {
                ...state,
                isSigningUp: false,
                createdNewUser: true,
                user: action.user
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                isSigningUp: false,
                isAuthenticated: false,
                createdNewUser: false,
                signupError: action.error
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
                loginError: null,
                sendPasswordResetEmail: false
            }
        case 'LOGIN_SUCCESS': 
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
                sendPasswordResetEmail: false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: action.error,
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                createdNewUser: false,
                user: null,
                sendPasswordResetEmail: false
            }
        case 'LOGOUT_ERROR':
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true,
                error: action.error
            }
        case 'SEND_PASSWORD_RESET_EMAIL':
            return {
                ...state,
                sendPasswordResetEmail: true
            }
        default:
            return state;
    }
};