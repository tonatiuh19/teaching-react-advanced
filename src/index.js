import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-tonatiuh19.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("App")
);
