import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const detailMovie = gql`
query ($page: Int, $perPage: Int, $id: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(id: $id) {
        id
        coverImage {
            large
        }
        isAdult
        description
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
