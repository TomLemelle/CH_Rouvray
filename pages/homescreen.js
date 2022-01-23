import { getSession } from 'next-auth/react'

const AccessDenied = ({session}) => {
    return (
        <div>
            <h1>Accès refusé</h1>
            <p>
                <a href='/'>Vous devez être connecté pour voir cette page</a>
            </p>
            <p>{JSON.stringify(session, null, 2)}</p>
        </div>
    )
}

export default async (req, res, {session}) => {
    const session = await getSession({req})
    console.log('session', session)
    res.end()
    if (!session) { return <AccessDenied/> }

    return (
        <Layout>
            <h1>Server side rendering</h1>
            <p>{JSON.stringify(session, null, 2)}</p>
        </Layout>
    )
}