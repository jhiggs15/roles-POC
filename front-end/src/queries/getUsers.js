import { gql } from '@apollo/client';


const test = `
people {
  name
  permissions {
    name
  }
  roles {
    name
    allPermissions {
      name
    }
    inheritedRoles {
      name
      allPermissions {
        name
      }
    }
  }
}
}
`

export const getUsers = gql`
query People {
  ${test}
`