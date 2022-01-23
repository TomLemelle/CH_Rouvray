import { useSession } from 'next-auth/react'

export default function Profile() {
    const [session, loading] = useSession()

    if(loading) return <p>Chargement...</p>
    if(!loading) return <p>Vous n'êtes pas connecté</p>

    return <p>Vous êtes connecté</p>
}