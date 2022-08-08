/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import * as Schema from './schema';

export const MediaSortbyID = (variables) => useQuery(Schema.MediaSortbyID, { variables });
