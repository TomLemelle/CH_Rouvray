import Image from "next/image"
import Link from "next/link"
import { signOut } from 'next-auth/react'
import { logout } from "../services/AuthApi"
import { useContext } from "react"
import Auth from "../context/Auth"

const Sidebar = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)

    const handleLogout = () => {
        logout()
        setIsAuthenticated(false)
    }

    return (
        <section className="sidebar">
            <div className="user-top">
                <Image className='user-image' src='/user-face.png' alt='picture of the user' width={86} height={86}/>
                
                <div className='user-name'>
                    Alvaro Guerra <Image src='/chevron-down.png' alt='icon chevron vers le bas' width={13} height={7} />
                </div>
            </div>

            <ul className="sidebar-links">
                <li className="links">
                    <Image src='/postes.png' alt='icon poste' width={24} height={24} />
                    <Link href='#'>
                        <a className='link'>Postes / Annonces</a>
                    </Link>
                </li>
                <li className="links">
                    <Image src='/bell.png' alt='icon notification' width={24} height={24} />
                    <Link href='#'>
                        <a className='link'>Notifications</a>
                    </Link>
                </li>
                <li className="links">
                    <Image src='/upload.png' alt='icon upload' width={24} height={24} />
                    <Link href='#'>
                        <a className='link'>Déposer un fichier</a>
                    </Link>
                </li>
                <li className="links">
                    <Image src='/messagerie.png' alt='icon messagerie' width={24} height={24} />
                    <Link href='#'>
                        <a className='link'>Messagerie</a>
                    </Link>
                </li>
                <li className="links">
                    <Image src='/calendar.png' alt='icon calendrier' width={24} height={24} />
                    <Link href='#'>
                        <a className='link'>Calendrier</a>
                    </Link>
                </li>
            </ul>

            <div className="sidebar-disconnect-link">
               <Image src='/disconnect.png' alt='icon déconnexion' width={24} height={24} />
                <Link href='#'>
                    <a className='link' onClick={handleLogout}>Se déconnecter</a>
                </Link>
            </div>
        </section>
    )
}

export default Sidebar;