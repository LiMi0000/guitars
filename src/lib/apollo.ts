import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    // I was going to leave the URL here but since in needs to be in the .env file, I will not include it here.
    // In case of not working please check/create the .env file or include the URL directly here.
    uri: import.meta.env.VITE_GRAPHQL_API_URL,
    cache: new InMemoryCache(),
});
