import React from "react";
import { Helmet } from "react-helmet";
import loadingImage from "../images/preloader.gif";
import { useGlobalContext } from "../context/context";
import { Navbar, Info, Search, User, Repos } from "../components";

const Dashboard = () => {
    const { isLoading, githubUser } = useGlobalContext();

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
            <Helmet>
                <title>{`${githubUser?.name}`}</title>
            </Helmet>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
