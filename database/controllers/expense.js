const Expense = require('../models/expense');

const createExpense = async (req, res) => {
    const expense = new Expense({
        ...req.body,
        owner: req.user._id
    });
    try {
        await expense.save();
        res.status(201).send(expense);
    } catch (e) {
        res.status(400).send(e);
    }
}

const getAllExpenses = async (req, res) => {
    const match = {};
    const sort = {};
    let searchTerm = '';
    if (req.query.category) {
        match.category = req.query.category;
    }
    if (req.query.text) {
        searchTerm = req.query.text
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':');
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1; 
    }
    try {
        // const expenses = await Expense.find({ owner: req.user._id, $text: { $search: `${searchTerm}`, $caseSensitive: false }})
        const expenses = await Expense
            .find({ owner: req.user._id, 
                $or: [
                    { description: { $regex: `${searchTerm}`, $options: "i" } },
                    { note: { $regex: `${searchTerm}`, $options: "i" } } 
                ]
            })
            .populate({
                path: 'expenses',
                match,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort
                }
            });
        res.send(expenses);
    } catch (e) {
        res.status(500).send(e);
    }
}

const getExpense = async (req, res) => {
    try {
        const expense = await Expense.findOne({ _id: req.params.id, owner: req.user._id });
        if (!expense) {
            res.status(404).send({ error: `Can't find expense`});
        }
        res.send(expense);
    } catch (e) {
        res.status(500).send(e);
    }
}

const updateExpense = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "amount", "date", "category", "note"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' });
    }
    try {
        const expense = await Expense.findOne({ _id: req.params.id, owner: req.user._id });
        if (!expense) {
            res.status(404).send();
        }
        updates.forEach((update) => {
            expense[update] = req.body[update]
        })
        await expense.save();
        res.send(expense);
    } catch (e) {
        res.status(400).send(e);
    }
}

const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!expense) {
            res.status(404).send();
        }
        res.send(expense);
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = {
    createExpense,
    getAllExpenses, 
    getExpense, 
    updateExpense, 
    deleteExpense
}