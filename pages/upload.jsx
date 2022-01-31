import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Tabs from '../components/Tabs';
import Auth from '../context/Auth';
import CheckIfLogin from '../components/CheckIfLogIn'

export default function Upload() {

    return (
        <CheckIfLogin>
            <section className="upload">
                <Sidebar />
                <div className="content-wrapper">
                    <Tabs />
                </div>
            </section>
        </CheckIfLogin>
    )

}