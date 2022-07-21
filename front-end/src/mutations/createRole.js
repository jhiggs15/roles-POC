import { gql } from '@apollo/client';

export const createRoleArgs = (name, parentRole) => {
  const parentConnection = parentRole == "" ? "Super Admin" : parentRole
    return (
        {variables : 
          {
            "input": [
              {
                "name": name
              }
            ],
            "where": {
              "name": parentConnection
            },
            "connect": {
              "inheritedRoles": [
                {
                  "where": {
                    "node": {
                      "name": name
                    }
                  }
                }
              ]
            }
          }
        
        
        }
    )

}
export const createRole = gql`
mutation Mutation($input: [RoleCreateInput!]!, $where: RoleWhere, $connect: RoleConnectInput) {
  createRoles(input: $input) {
    info {
      nodesCreated
    }
  }
  updateRoles(where: $where, connect: $connect) {
    info {
      relationshipsCreated
    }
  }
}
`