import React from "react";
import { Navbar, Info, Search, User, Repos } from "../components";

const Dashboard = () => {
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
