import { gql } from '@apollo/client';


export const deleteUserArgs = (name) => {
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

export const deleteUser = gql`
mutation Mutation($where: PersonWhere) {
  deletePeople(where: $where) {
    nodesDeleted
  }
}
`