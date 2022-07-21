import { useMutation } from "@apollo/client";
import { useState } from "react";
import { createPermission, createPermissionArgs } from "./mutations/createPermissions";
import { createRole, createRoleArgs } from "./mutations/createRole";
import { createUser, createUserArgs } from "./mutations/createUser";
import { deleteUser, deleteUserArgs } from "./mutations/deleteUser";
import { deleteRole, deleteRoleArgs } from "./mutations/deleteRole";
import { deletePermission, deletePermissionArgs } from "./mutations/deletePermission";
import { createArgs, createLink, createLinkArgs } from "./mutations/linkNodes";

export const CreateRoles = () => {

    const [createUserMutation,] = useMutation(createUser);
    const [deleteUserMutation,] = useMutation(deleteUser);
    const [deleteRoleMutation,] = useMutation(deleteRole);
    const [createRoleMutation,] = useMutation(createRole);
    const [createPermissionMutation,] = useMutation(createPermission);
    const [deletePermissionMutation,] = useMutation(deletePermission);
    const [name, setName] = useState("")
    const [roleName, setRoleName] = useState("")
    const [roleName2, setRoleName2] = useState("")
    const [permName, setPermName] = useState("")

    const [createLinkMutation] = useMutation(createLink);
    

    return (
        <div>
        <div style={{display: "flex", flexDirection : "row", justifyContent: "space-between"}}>
            <div>
                <form>
                    <label>
                        Name:
                        <input value={name} onChange={(event) => setName(event.target.value)} type="text" name="name" />
                    </label>
                </form>

                <button onClick={async () => await createUserMutation(createUserArgs(name))} >Create User</button>
                <button onClick={async () => await deleteUserMutation(deleteUserArgs(name))} >Delete User</button>

            </div>
            
            <div>
                <form>
                    <label>
                        Role Name:
                        <input value={roleName} onChange={(event) => setRoleName(event.target.value)} type="text" name="name" />
                    </label>
                </form>
                <button onClick={async() => await createRoleMutation(createRoleArgs(roleName, roleName2))}>Create Role</button>
                <button onClick={async() => await deleteRoleMutation(deleteRoleArgs(roleName))}>Delete Role</button>
                <form>
                    <label>
                        Role Name:
                        <input value={roleName2} onChange={(event) => setRoleName2(event.target.value)} type="text" name="name" />
                    </label>
                </form>




            </div>

            <div>
                <form>
                    <label>
                        Permission Name:
                        <input value={permName} onChange={(event) => setPermName(event.target.value)} type="text" name="name" />
                    </label>
                </form>

                <button onClick={async() => await createPermissionMutation(createPermissionArgs(permName))}>Create Permission</button>
                <button onClick={async() => await deletePermissionMutation(deletePermissionArgs(permName))}>Delete Permission</button>
            </div>

        </div>
        <button style={{marginTop: 30}} onClick={async() => await createLinkMutation(createLinkArgs(name, roleName, roleName2, permName))}> Link </button>


        </div>
    )
}