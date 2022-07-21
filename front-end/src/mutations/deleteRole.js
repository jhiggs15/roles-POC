import { gql } from '@apollo/client';


export const deleteRoleArgs = (name) => {
    return (
        {variables : 
            {
                "where": {
                  name
                }
              }
        
        }
    )

}

export const deleteRole = gql`
mutation Mutation($where: RoleWhere) {
  deleteRoles(where: $where) {
    nodesDeleted
  }
}
`