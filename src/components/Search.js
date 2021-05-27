import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import { MdSearch } from "react-icons/md";

const Search = () => {
    const { requests, searchGithubUser } = useGlobalContext();
    const [user, setUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGithubUser(user);
    };

    return (
        <section className="search section">
            <div className="search__wrapper section-center">
                <form action="" onSubmit={handleSubmit}>
                    <div className="search__form-control">
                        <MdSearch />
                        <input
                            type="text"
                            placeholder="enter github user"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                        <button>Search</button>
                    </div>
                </form>
                <h3>requests: {requests} / 60</h3>
            </div>
        </section>
    );
};

export default Search;
