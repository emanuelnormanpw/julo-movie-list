import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const Media = gql`
query ($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(type: $type, sort: $sort) {
        id
        coverImage {
            large
        }
        isAdult
        genres
        seasonYear
        title {
          romaji
          english
          native
        }
        type
        genres
      }
    }
  }
`;
