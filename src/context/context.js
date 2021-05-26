import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);

    return (
        <GithubContext.Provider value={{ githubUser }}>
            {children}
        </GithubContext.Provider>
    );
};

export const useGlobalContext = () => {
    return React.useContext(GithubContext);
};

export { GithubContext, GithubProvider };
