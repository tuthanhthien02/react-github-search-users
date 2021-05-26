import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const img =
    "https://lh3.googleusercontent.com/a-/AOh14GgZYADxXS-HgyHaQGCDFdfhwirz6ifWzIbDYysn=s96-c";

const Card = () => {
    const { githubUser } = useGlobalContext();
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        bio,
        location,
        twitter_username,
    } = githubUser;

    return (
        <div className="user__card">
            <header>
                <img src={avatar_url} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>@{twitter_username}</p>
                </div>
                <a href={html_url}>follow</a>
            </header>
            <p className="user__card-bio">{bio}</p>
            <div className="user__card-links">
                <p>
                    <MdBusiness /> {company}
                </p>
                <p>
                    <MdLocationOn /> {location}
                </p>
                <a href={blog}>
                    <MdLink /> {blog}
                </a>
            </div>
        </div>
    );
};

export default Card;
