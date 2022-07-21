import { gql } from '@apollo/client';

export const createPermissionArgs = (name) => {
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
export const createPermission = gql`
mutation Mutation($input: [PermissionCreateInput!]!) {
  createPermissions(input: $input) {
    info {
      nodesCreated
    }
  }
}
`