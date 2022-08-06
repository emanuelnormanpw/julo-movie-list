/* eslint-disable import/prefer-default-export */
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://graphql.anilist.co',
});

export const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
});
