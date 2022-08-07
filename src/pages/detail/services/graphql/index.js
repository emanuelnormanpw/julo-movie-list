/* eslint-disable import/prefer-default-export */
import { useQuery, useMutation } from '@apollo/client';
import * as Schema from './schema';

export const detailMovie = (variables) => useQuery(Schema.detailMovie, { variables });
