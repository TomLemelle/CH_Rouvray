import React from 'react'
import LogForm from '../../components/LogForm'

export default function Index() {


    return (
        <section className='home'>
            <ul className='index-page'>
                <li className='p-b-85'>
                    <h1>CENTRE HOSPITALLIER DU <span>ROUVRAY</span></h1>
                </li>
                <li className='p-tb-85'>
                    <p>
                        application en ligne permettant le transfère de fichiers, facilite la communication entre tuteurs
                        et donne accès a un système de notifications pour les dates importantes
                    </p>
                </li>
                <li className='p-tb-85 register-li'>
                    <a className="log-with-g register">S'inscrire</a>
                </li>
                <li className='last-li-home' >
                    <a className="log-with-g login">Déjà un compte ?</a>
                </li>
            </ul>

            <LogForm onSubmit={e => console.log(e)}/>
            
        </section>
    )
}

