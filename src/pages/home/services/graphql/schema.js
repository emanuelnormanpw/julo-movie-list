import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const MediaTrend = gql`
query MediaTrend($mediaId: Int){
    MediaTrend(mediaId: $mediaId){
        media {
          title {
            english
          }
        }
      }
}
`;
