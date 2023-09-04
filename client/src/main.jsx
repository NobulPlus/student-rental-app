import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-egjd3yez0dphv7cs.us.auth0.com"
     clientId="zSESAzLkbp4W3gFtB0LQleA6b6n0XGx0"
     authorizationParams={{
      redirect_uri: "https://studentacc.vercel.app"
     }}
     audience="http://localhost:9000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
