const express = require('express');
const router = new express.Router();
// const Expense = require('../models/expense');
const auth = require('../middleware/auth');
const {
    createExpense,
    getAllExpenses,
    getExpense,
    updateExpense,
    deleteExpense
} = require('../controllers/expense');

// create expense for currently authenticated user
router.post('/expenses', auth, createExpense)

// retrieve expenses for currently authenticated user
// GET /expenses?category=groceries
// GET /expenses?text=co
// GET /expenses?limit=10&skip=20
// GET /expenses?sortBY=date:desc
// GET /expenses?sortBY=amount:desc
// GET /expenses?sortBy=createdAt:desc
router.get('/expenses', auth, getAllExpenses)

// retrieve expense if expense belongs to currently authenticated user
router.get('/expenses/:id', auth, getExpense)

// update expense if expense belongs to currently authenticated user
router.patch('/expenses/:id', auth, updateExpense)

// delete expense if expense belongs to currently authenticated user
router.delete('/expenses/:id', auth, deleteExpense)

module.exports = router;