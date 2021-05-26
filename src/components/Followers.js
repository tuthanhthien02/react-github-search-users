import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";

const Followers = () => {
    const { followers } = useGlobalContext();

    return (
        <div className="user__followers">
            <div className="user__followers-wrapper">
                {followers.map((follower, index) => {
                    return <FollowerItem key={index} {...follower} />;
                })}
            </div>
        </div>
    );
};

const FollowerItem = ({ avatar_url, html_url, login }) => {
    return (
        <article>
            <img src={avatar_url} alt={login} />
            <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
            </div>
        </article>
    );
};

export default Followers;
