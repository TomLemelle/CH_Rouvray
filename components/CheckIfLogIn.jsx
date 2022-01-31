import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import Auth from "../context/Auth"

const CheckIfLogin = ({children}) => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    const router = useRouter()

    useEffect(() => {
        if(!isAuthenticated) router.push('/')
    })

    return (
        <>
            {isAuthenticated && <>{children}</>}
        </>
    )
}

export default CheckIfLogin