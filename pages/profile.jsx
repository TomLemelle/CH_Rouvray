import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import Auth from "../context/Auth"
import CheckIfLogin from "../components/CheckIfLogIn"

export default function Profile () {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    const router = useRouter()

    useEffect(() => {
        if(!isAuthenticated) router.push('/')
    })
    return (
        <h1>Profile</h1>
    )
}