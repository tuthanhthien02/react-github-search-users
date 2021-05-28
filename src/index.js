import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-s0ctp7wp.us.auth0.com
// BJwTJVWXp5fsCVUnFDMUO1nTDFdzBBgh

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-s0ctp7wp.us.auth0.com"
            clientId="BJwTJVWXp5fsCVUnFDMUO1nTDFdzBBgh"
            redirectUri={window.location.origin}
        >
            <GithubProvider>
                <App />
            </GithubProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
