import { gql } from "@apollo/client";

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
	  page: pageBy(uri: $uri) {
	    id
	    title
	    slug
	    uri
        blocksJSON
	  }
	}
`;
