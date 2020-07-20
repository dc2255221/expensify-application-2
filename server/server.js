const express = require('express');
require('../database/mongoose'); 
const path = require('path');

const userRouter = require('../database/routers/user');
const expenseRouter = require('../database/routers/expense');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

// const { receivePublicToken, getTransactions } = require("./controller");

app.use(express.static(publicPath));

// // Get the public token and exchange it for an access token
// app.post("/auth/public_token", receivePublicToken);
// // Get Transactions
// app.get("/transactions", getTransactions);

app.use(express.json());
app.use(userRouter);
app.use(expenseRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});


