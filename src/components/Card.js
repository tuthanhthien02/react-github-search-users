import React from "react";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const img =
    "https://lh3.googleusercontent.com/a-/AOh14GgZYADxXS-HgyHaQGCDFdfhwirz6ifWzIbDYysn=s96-c";

const Card = () => {
    return (
        <div className="user__card">
            <header>
                <img src={img} alt="" />
                <div>
                    <h4>Thanh Thien</h4>
                    <p>@excalibur</p>
                </div>
                <a href="">follow</a>
            </header>
            <p className="user__card-bio">my bio</p>
            <div className="user__card-links">
                <p>
                    <MdBusiness /> company
                </p>
                <p>
                    <MdLocationOn /> company
                </p>
                <a href="">
                    <MdLink /> blog
                </a>
            </div>
        </div>
    );
};

export default Card;
