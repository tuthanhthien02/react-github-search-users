import React from "react";
import Card from "./Card";
import Followers from "./Followers";

const User = () => {
    return (
        <section className="user section">
            <div className="user__wrapper section-center">
                <Card />
                <Followers />
            </div>
        </section>
    );
};

export default User;
