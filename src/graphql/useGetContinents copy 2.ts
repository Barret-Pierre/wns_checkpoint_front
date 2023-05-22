import { gql } from "@apollo/client";

export const GET_CONTRY_INFOS = gql`
  query Country($code: ID!) {
    country(code: $code) {
      capital
      emoji
      name
      currency
    }
  }
`;
