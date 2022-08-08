/* eslint-disable import/prefer-default-export */
import { useQuery, useMutation } from '@apollo/client';
import * as Schema from './schema';

export const Media = (variables, config) => useQuery(Schema.Media, {
    variables,
    ...config,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
});
