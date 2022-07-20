import { gql } from '@apollo/client';

export const getUsers = gql`
query People {
  people {
    name
  }
}
`