import React from "react";

const img =
    "https://lh3.googleusercontent.com/a-/AOh14GgZYADxXS-HgyHaQGCDFdfhwirz6ifWzIbDYysn=s96-c";

const Navbar = () => {
    return (
        <nav className="nav">
            <img src={img} alt="" />
            <h4>
                Welcome , <strong>Thanh Thien</strong>
            </h4>
            <button>Logout</button>
        </nav>
    );
};

export default Navbar;
