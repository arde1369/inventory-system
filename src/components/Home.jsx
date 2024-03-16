import { useSelector } from "react-redux"

export function Home() {
    const loggedInUser = useSelector((state) => state.auth.loggedInUser)

    return(
        <main>
            <h1>Home Page</h1>
            <p>Logged in as {loggedInUser}</p>
        </main>
    )
}