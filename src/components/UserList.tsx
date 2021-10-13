import React from "react";
import {useSelectorTyped} from "../hooks/useSelectorTyped";

export const UserList: React.FC = () => {
    const {users, loading, error} = useSelectorTyped(state => state.user)

    return (
        <div>

        </div>
    )
}