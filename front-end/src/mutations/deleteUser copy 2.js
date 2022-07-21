import { gql } from '@apollo/client';


export const deletePermissionArgs = (name) => {
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

export const deletePermission = gql`
mutation Mutation($where: PermissionWhere) {
  deletePermissions(where: $where) {
    nodesDeleted
  }
}
`