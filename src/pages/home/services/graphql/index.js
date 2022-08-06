/* eslint-disable import/prefer-default-export */
import { useQuery, useMutation } from '@apollo/client';
import * as Schema from './schema';

export const Media = (variables) => useQuery(Schema.Media, { variables });
