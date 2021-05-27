import React from "react";
import loadingImage from "../images/preloader.gif";
import { useGlobalContext } from "../context/context";
import { Navbar, Info, Search, User, Repos } from "../components";

const Dashboard = () => {
    const { isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <main className="">
                <Navbar />
                <Search />
                <img
                    src={loadingImage}
                    alt="loading image"
                    className="loading-img"
                />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
