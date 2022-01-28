import Sidebar from '../components/Sidebar'
import Tabs from '../components/Tabs';
import { useSession, getSession } from 'next-auth/react'

export default function Upload() {

    const { data: session, status } = useSession()

    if(status === 'loading') { return <p>Chargement...</p> }
    if(status === 'unauthenticated') { return <p>Accès refusé</p> }

    return (
        <section className="upload">
            <Sidebar />
            <div className="content-wrapper">
                <Tabs />
            </div>
        </section>
    )

}