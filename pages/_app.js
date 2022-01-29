import { useState } from "react";
import "../styles/main.scss";
import { hasAuthenticated } from "../services/AuthApi";
import Auth from "../context/Auth";

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Component {...pageProps} />
      <style global>
        {`
        body {
          background: rgb(243,243,251);
        }
      `}
      </style>
    </Auth.Provider>
  );
}

export default MyApp;
