const express = require('express');
const path = require('path');
// require('../database/mongoose'); 
// const userRouter = require('../database/routers/user');
// const expenseRouter = require('../database/routers/expense');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;
const { receivePublicToken, getTransactions } = require("./controller");

app.use(express.static(publicPath));
app.use(express.json());

// Get the public token and exchange it for an access token
app.post("/auth/public_token", receivePublicToken);
// Get Transactions
app.get("/transactions", getTransactions);

// app.use(userRouter);
// app.use(expenseRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});


