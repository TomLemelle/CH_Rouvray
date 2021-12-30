import Head from 'next/head'
import Link from 'next/link'
import Index from './index/Index'

export default function Home() {
  return (
    <>
      <Head>
          <title>CH Rouvray</title>
      </Head>
    
      <Index />

    </>
    
  )
}