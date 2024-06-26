import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    
      <Auth0Provider
        domain="https://dev-r07u7mel6oip3xhm.us.auth0.com"
        clientId="KW0casNS7zcVWLtZPtTBjLDU8dGKinSu"
        authorizationParams={{
          audience: "https://cspjainilauthapi.jainilpatel.tech",
          redirect_uri: `${window.location.origin}/login`,
        }}
        useRefreshTokens
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
