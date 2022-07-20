import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { Screen } from "./Screen";


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {


  return (
    <ApolloProvider client={apolloClient}>
      <Screen />

    </ApolloProvider>

  );
}

export default App;
