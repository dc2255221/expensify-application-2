const express = require('express');
require('../database/mongoose'); // connect to MongoDB
const path = require('path');
const passport = require('passport');

const userRouter = require('../database/routers/user');
const expenseRouter = require('../database/routers/expense');
const plaidRouter = require('../database/routers/plaid');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

// Serve up public folder containing index.html and bundle.js file
app.use(express.static(publicPath));

// Parse incoming requests with JSON payload
app.use(express.json());

// Initialize passport
app.use(passport.initialize());

// Passport config
// require("./config/passport")(passport);

// Routes
app.use(userRouter);
app.use(expenseRouter);
app.use(plaidRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});


