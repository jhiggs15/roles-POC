import { useQuery } from "@apollo/client";
import { getUsers } from "./queries/getUsers";

export const Screen = () => {
    const { data, loading, error} = useQuery(getUsers);

    return (
        <div>
            <h1>Welcome to the Roles-POC!</h1>
            {JSON.stringify(data)}
        </div>
    )
}