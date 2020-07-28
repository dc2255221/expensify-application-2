import axios from 'axios';
import {
    SET_CURRENT_USER,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    SEND_PASSWORD_RESET_EMAIL
} from './types';

export const setCurrentUser =(decoded) => ({
    type: SET_CURRENT_USER,
    user: decoded
});

export const requestSignup = () => ({
    type: SIGNUP_REQUEST
});

export const receiveSignup = (user) => ({
    type: SIGNUP_SUCCESS,
    user
});

export const signupError = (error) => ({
    type: SIGNUP_ERROR,
    error
}); 

export const requestLogin = () => ({
    type: LOGIN_REQUEST
});

export const receiveLogin = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error
});

export const requestLogout = () => ({
    type: LOGOUT_REQUEST
})

export const receiveLogout = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutError = (error) => ({
    type: LOGOUT_ERROR,
    error
}); 

export const sendPasswordResetEmail = () => ({
    type: SEND_PASSWORD_RESET_EMAIL
});

export const registerUser = (userData) => { 
    return async (dispatch) => {
        console.log('registerUser is called');
        try {
            let res = await axios.post('/users', userData)
            let { user } = res.data;
            dispatch(receiveSignup(user));
        } catch (e) {
            dispatch(signupError(e));
        }
    };
};

export const loginUser = (email, password) => {
    return async (dispatch) => {
        console.log('signinUser is called');
        try {
            let res = await axios.post('/users/login', { email, password })
            let { user, token } = res.data;
            dispatch(receiveLogin(user));
        } catch (e) {
            dispatch(loginError(e));
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        console.log('logoutUser is called');
        try {
            await axios.post('/users/logout');
            dispatch(receiveLogout());
        } catch (e) {
            dispatch(logoutError(e));
        }
    }
}