import React from "react";
import ReactDOM from "react-dom";
// GraphQL
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// root
import App from "./App";
import "./index.css"

require('dotenv').config();

const client = new ApolloClient({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`
  },
  uri: "https://api.github.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
