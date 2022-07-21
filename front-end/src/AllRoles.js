import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { getUsers } from "./queries/getUsers";

export const AllRoles = () => {
    const [getUserFunction, { data, loading, error}] = useLazyQuery(getUsers, {fetchPolicy: "network-only"});

    useEffect(()=> {
        if(!loading) {
            getUserFunction().then((value) => {
                console.log(value)
            })
        }


    }, [])



    const getPermissions = (permissions) => {
        return(
            <p>
                {
                    permissions.map(permission => permission.name).join(", ")
                }
            </p>
        )

    }

    const generateRolesDisplay = (roles) => {
        return roles.map(role => {
            return (
                <div>
                    <h2>Role Name</h2>
                    <p>{role.name}</p>

  
                </div>

            )
        })

    }

    const generateDisplay = () => {
        console.log(data)
        if(!loading) {
            return data.people.map(person => {
                return (
                    <div style={{outline: "auto", padding : 10}}>
                        <h1>Name</h1>
                        <p>{person.name}</p>
                        <h1>Permissioms</h1>
                        {getPermissions(person.permissions)}
                        <h1>Roles</h1>
                        {generateRolesDisplay(person.roles)}
                    </div>
                )
    
            })
        }

    }

    return (
        <div>
            {typeof data == "undefined" ?
                null
                :
                generateDisplay()
             }
        </div>
    )
}