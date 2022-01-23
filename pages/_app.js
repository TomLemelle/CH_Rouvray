import '../styles/main.scss';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <style global>{`
        body {
          background: rgb(243,243,251);
        }
      `}
      </style>
    </SessionProvider>
  )
}

export default MyApp
