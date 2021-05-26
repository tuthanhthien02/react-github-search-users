import React from "react";
import { Navbar, Info, Search, User, Followers } from "../components";

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
        </main>
    );
};

export default Dashboard;
