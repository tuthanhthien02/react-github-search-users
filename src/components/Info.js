import React from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
    return (
        <section className="info section">
            <div className="info__wrapper section-center">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </section>
    );
};

const Item = () => {
    return (
        <article className="info__item">
            <span>
                <GoRepo />
            </span>
            <div>
                <h3>Repos</h3>
                <p>165</p>
            </div>
        </article>
    );
};

export default Info;
