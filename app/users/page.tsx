import React from "react"

interface User {
    id: number
    name: string
}

async function UsersPage() {
    const res = await fetch("http://127.0.0.1:5000/users", {cache: "default"})
    const users: User[] = await res.json()

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default UsersPage
