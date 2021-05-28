import React, { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const img =
    "https://lh3.googleusercontent.com/a-/AOh14GgZYADxXS-HgyHaQGCDFdfhwirz6ifWzIbDYysn=s96-c";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
        useAuth0();
    const isUser = isAuthenticated && user;
    const navEl = useRef(null);

    return (
        <nav className="nav" ref={navEl}>
            {isUser && user.picture && (
                <img src={user.picture} alt={user.name} />
            )}

            {isUser && user.name && (
                <h4>
                    Welcome , <strong>{user.name}</strong>
                </h4>
            )}

            {isUser ? (
                <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Logout
                </button>
            ) : (
                <button onClick={loginWithRedirect}>Login</button>
            )}
        </nav>
    );
};

export default Navbar;
