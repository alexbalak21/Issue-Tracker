import Link from "next/link"
import UserCard from "./components/button"

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <Link href="/users">Users</Link>
            <UserCard />
        </main>
    )
}
