import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const MediaSortbyID = gql`
query ($page: Int, $perPage: Int, $id_in: [Int]) {
    Page(page: $page, perPage: $perPage) {
      media(id_in: $id_in) {
        id
        coverImage {
            large
        }
        isAdult
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
