import { gql } from '@apollo/client';
import SeoFragment from '../fragments/seo';

export const GET_PAGE = gql`
    query GET_PAGE($uri: String) {
        page: pageBy(uri: $uri) {
            id
            title
            slug
            uri
            blocksJSON
            seo {
                ...SeoFragment
            }
        }
    }
    ${SeoFragment}
`;
