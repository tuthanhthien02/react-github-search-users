import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";
import {
    ExampleChart,
    Pie3D,
    Doughnut2D,
    Column3D,
    Bar3D,
} from "../components/Charts";

const Repos = () => {
    const { repos } = useGlobalContext();
    let languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        // if language is null do nothing
        if (!language) return total;

        // if language is not in the list, then add a new one
        if (!total[language]) {
            total[language] = {
                label: language,
                value: 1,
                stars: stargazers_count,
            };
            // custom color for each data later.... :<
            if (total[language].label === "JavaScript") {
                total[language] = { ...total[language], color: "#f0f046" };
            }
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            };
        }
        return total;
    }, {});

    // most languages being used
    const mostUsed = Object.values(languages)
        .sort((a, b) => {
            return b.value - a.value;
        })
        .slice(0, 5);
    // most starts per language
    const mostPopular = Object.values(languages)
        .sort((a, b) => {
            return b.stars - a.stars;
        })
        .map((item) => {
            return { ...item, value: item.stars };
        })
        .slice(0, 5);
    // forks and stars
    let { forks, stars } = repos.reduce(
        (total, item) => {
            const { stargazers_count, name, forks } = item;

            total.stars[stargazers_count] = {
                label: name,
                value: stargazers_count,
            };

            total.forks[forks] = { label: name, value: forks };

            return total;
        },
        { forks: {}, stars: {} }
    );

    forks = Object.values(forks).slice(-5).reverse();
    stars = Object.values(stars).slice(-5).reverse();

    return (
        <section className="repos section">
            <div className="repos__wrapper section-center">
                <Pie3D data={mostUsed} />
                <Column3D data={stars} />
                <Doughnut2D data={mostPopular} />
                <Bar3D data={forks} />
            </div>
        </section>
    );
};

export default Repos;
