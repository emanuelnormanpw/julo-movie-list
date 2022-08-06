/* eslint-disable import/prefer-default-export */
import { useQuery, useMutation } from '@apollo/client';
import * as Schema from './schema';

export const MediaTrend = (variables) => useQuery(Schema.MediaTrend, { variables });
