import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Marimekko from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { mData } from "../data/MarimekkoData";

ReactFC.fcRoot(FusionCharts, Marimekko, FusionTheme);

function MarimekkoChart() {
  const chartConfigs = {
    type: "marimekko",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: mData,
  };

  return <ReactFC {...chartConfigs} />;
}

export default MarimekkoChart;
