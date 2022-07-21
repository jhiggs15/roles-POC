import { gql } from '@apollo/client';

export const getUsers = gql`
query People {
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