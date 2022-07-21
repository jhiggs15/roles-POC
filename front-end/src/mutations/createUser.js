import { gql } from '@apollo/client';

export const createUserArgs = (name) => {
    return (
        {variables : 
            {
                "input": [
                    {
                      name
                    }
                  ]
            }
        
        
        }
    )

}
export const createUser = gql`
mutation Mutation($input: [PersonCreateInput!]!) {
  createPeople(input: $input) {
    info {
      nodesCreated
    }
  }
}
`