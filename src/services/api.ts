import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://seashell-app-6ylyu.ondigitalocean.app/graphql',
  cache: new InMemoryCache(),
});

export default client;