import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import App from "./App";

require('dotenv').config();

const client = new ApolloClient({
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`
  },
  uri: "https://api.github.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
