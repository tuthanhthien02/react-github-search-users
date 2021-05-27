import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GithubProvider } from "./context/context";
// dev-s0ctp7wp.us.auth0.com
// BJwTJVWXp5fsCVUnFDMUO1nTDFdzBBgh

ReactDOM.render(
    <React.StrictMode>
        <GithubProvider>
            <App />
        </GithubProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
