// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: "column3d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            chart: {
                caption: "Most Popular",
                yAxisName: "Stars",
                xAxisName: "Repos",
                yAxisNameFontSize: "16px",
                xAxisNameFontSize: "16px",
            },
            // Chart Data
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;