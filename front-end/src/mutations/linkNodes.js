import { gql } from '@apollo/client';


export const createLinkArgs = (personName, role1, role2, permission) => {
    return (
        {
            variables: {
                    "where": {
                      "name": personName
                    },
                    "connect": {
                      "roles": [
                        {
                          "where": {
                            "node": {
                              "name": role1
                            }
                          }
                        }
                      ]
                    },
                    "updateRolesWhere2": {
                      "name": role1
                    },
                    "updateRolesConnect2": {
                      "rolePermissions": [
                        {
                          "where": {
                            "node": {
                              "name": permission
                            }
                          }
                        }
                      ]
                    },
                  }
        }
    )
}




export const createLink = gql`
mutation UpdatePeople($where: PersonWhere, $connect: PersonConnectInput, $updateRolesWhere2: RoleWhere, $updateRolesConnect2: RoleConnectInput) {
  personToRole:updatePeople(where: $where, connect: $connect) {
    info {
      relationshipsCreated
    }
  }
  roleToPermission: updateRoles(where: $updateRolesWhere2, connect: $updateRolesConnect2) {
    info {
      relationshipsCreated
    }
  }
}
    
`