import { gql } from "@apollo/client";

export const GET_CONTINENT_WITH_COUNTRY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        emoji
        name
      }
    }
  }
`;
