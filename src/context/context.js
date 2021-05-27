import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockFollowers from "./mockData.js/mockFollowers";
import mockRepos from "./mockData.js/mockRepos";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [followers, setFollowers] = useState(mockFollowers);
    const [repos, setRepos] = useState(mockRepos);

    // requests limit, loading
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    //  error message
    const [error, setError] = useState({ show: false, msg: "" });

    const toggleError = (show = false, msg = "") => {
        setError({ show, msg });
    };

    const checkRequestsLimit = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let {
                rate: { remaining },
            } = data;

            setRequests(remaining);

            if (remaining === 0) {
                toggleError(
                    true,
                    "sorry, you have exceeded your hourly rate limit!"
                );
            }
        });
    };

    const searchGithubUser = async (user) => {
        toggleError();
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch(
            (error) => console.log(error)
        );
        if (response) {
            setGithubUser(response.data);
            const { followers_url, repos_url } = response.data;

            // // get followers
            // axios(`${followers_url}?per_page=100`).then((response) =>
            //     setFollowers(response.data)
            // );

            // // get repositories
            // axios(`${repos_url}?per_page=100`).then((response) =>
            //     setRepos(response.data)
            // );

            await Promise.allSettled([
                axios(`${repos_url}?per_page=100`),
                axios(`${followers_url}?per_page=100`),
            ])
                .then((results) => {
                    const status = "fulfilled";
                    const [repos, followers] = results;

                    if (repos.status === status) {
                        setRepos(repos.value.data);
                    }

                    if (followers.status === status) {
                        setFollowers(followers.value.data);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            toggleError(true, "there is no user with that username");
        }
        checkRequestsLimit();
        setIsLoading(false);
    };

    useEffect(checkRequestsLimit, []);

    return (
        <GithubContext.Provider
            value={{
                githubUser,
                followers,
                repos,
                isLoading,
                requests,
                error,
                searchGithubUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export const useGlobalContext = () => {
    return React.useContext(GithubContext);
};

export { GithubContext, GithubProvider };
