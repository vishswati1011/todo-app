// src/ApolloClient.js
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }), // Your GraphQL endpoint
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloClientProvider;
