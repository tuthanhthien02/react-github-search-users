import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
    return (
        <section className="search section">
            <div className="search__wrapper section-center">
                <form action="">
                    <div className="search__form-control">
                        <MdSearch />
                        <input type="text" placeholder="enter github user" />
                        <button>Search</button>
                    </div>
                </form>
                <h3>requests: 60 / 60</h3>
            </div>
        </section>
    );
};

export default Search;
