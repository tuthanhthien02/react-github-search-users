import React from "react";
const img =
    "https://lh3.googleusercontent.com/a-/AOh14GgZYADxXS-HgyHaQGCDFdfhwirz6ifWzIbDYysn=s96-c";

const Followers = () => {
    return (
        <div className="user__followers">
            <div className="user__followers-wrapper">
                <FollowerItem />
                <FollowerItem />
                <FollowerItem />
                <FollowerItem />
                <FollowerItem />
            </div>
        </div>
    );
};

const FollowerItem = () => {
    return (
        <article>
            <img src={img} alt="" />
            <div>
                <h4>follower</h4>
                <a href="">link to follower</a>
            </div>
        </article>
    );
};

export default Followers;
