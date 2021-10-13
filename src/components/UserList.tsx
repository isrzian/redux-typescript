import React, {useEffect} from "react";
import {useSelectorTyped} from "../hooks/useSelectorTyped";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, loading, error} = useSelectorTyped(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading)
        return <h1>Loading...</h1>

    if (error)
        return <h1>ERROR! {error}</h1>

    console.log(users)
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}