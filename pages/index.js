import Head from 'next/head'
import Index from './index/Index'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {

  const { data: session } = useSession() 

  if(session) {
    return (
      <>
        <Head>
            <title>CH Rouvray</title>
        </Head>
        <button onClick={() => signOut()}>Se deconnecter</button>
        <Index />
      </>
    )
  }
  return (
    <>
      <Head>
          <title>CH Rouvray</title>
      </Head>
      <button onClick={() => signIn()}>Se connecter</button>
      <Index />
    </>
    
  )
}