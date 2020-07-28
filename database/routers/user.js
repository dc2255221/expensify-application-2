const express = require('express');
const router = new express.Router();
// const User = require('../models/user');
const auth = require('../middleware/auth');
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    logoutUser, 
    logoutAll, 
    updateUserProfile, 
    deleteUser 
} = require('../controllers/user');

// signup user
router.post('/users', registerUser)

// login user
router.post('/users/login', loginUser)

// read profile of currently authenticated user
router.get('/users/me', auth, getUserProfile)

// logout currently authenticated user's current session 
router.post('/users/logout', auth, logoutUser)

// logout currently authenticated user from of all sessions
router.post('/users/logoutAll', auth, logoutAll)

// update profile of currently authenticated user
router.patch('/users/me', auth, updateUserProfile)

// delete profile of currently authenticated user
router.delete('/users/me', auth, deleteUser)

module.exports = router;