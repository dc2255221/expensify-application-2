import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";

class Link extends Component {
  constructor() {
    super();
    this.state = {
      transactions: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleOnSuccess(public_token) {
    // send token to client server
    axios.post("/auth/public_token", {
      public_token: public_token
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  handleClick() {
    axios.get("/transactions")
    .then((response) => {
      this.setState({ transactions: response.data });
      console.log('transactions', response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <PlaidLink
          clientName="React Plaid Setup"
          env="development"
          product={["auth", "transactions"]}
          publicKey="17e35635756e731964f9cfd5871596"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
        </div>
      </div>
    );
  }
}

export default Link;