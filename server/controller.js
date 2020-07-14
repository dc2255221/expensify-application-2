var plaid = require("plaid");
var moment = require("moment");

const PLAID_CLIENT_ID = "5f0308e700f5020011f9c3f2";
const PLAID_SECRET = "b673716dbc7b48d4777fb9ee50e882";
const PLAID_PUBLIC_KEY = "17e35635756e731964f9cfd5871596";
var PLAID_ENV = "sandbox";

// Initialize the Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  { version: "2019-05-29", clientApp: "Plaid Quickstart" }
);

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null

const receivePublicToken = (req, res) => {
  // First, receive the public token and set it to a variable
  PUBLIC_TOKEN = req.body.public_token;
  // Second, exchange the public token for an access token
  client.exchangePublicToken(PUBLIC_TOKEN, (error, apiResponse) => {
      ACCESS_TOKEN = apiResponse.access_token;
      ITEM_ID = apiResponse.item_id;
      await res.json({ access_token: ACCESS_TOKEN, item_id: ITEM_ID });
      console.log("access token below");
      console.log(ACCESS_TOKEN);
  });
};

const getTransactions = (req, res) => {
  // Pull transactions for the last 30 days
  let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");
  console.log("made it past variables");
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, { count: 250, offset: 0}, (error, result) => {
      res.json({ transactions: result });
      // TRANSACTIONS LOGGED BELOW! 
      // They will show up in the terminal that you are running nodemon in.
      console.log('transactions: ', result);
    }
  );
};

module.exports = { receivePublicToken, getTransactions };