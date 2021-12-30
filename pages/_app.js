import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global>{`
        body {
          background: rgb(243,243,251);
        }
      `}
      </style>
    </>
    
  )
}

export default MyApp
