import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AllRoles } from "./AllRoles";
import { CreateRoles } from "./CreateRoles";
import { getUsers } from "./queries/getUsers";

export const Screen = () => {
    const [create, setCreate] = useState(false)

    return (
        <div>
            <h1>Welcome to the Roles-POC!</h1>
            <button style={{margin: 20}} onClick={() => setCreate(!create)}>{create? "Swap to view" : "Swap to create"}</button>
            {
                create ? 
                <CreateRoles />
                :
                <AllRoles/>
            }

        </div>
    )
}