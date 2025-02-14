import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import MSCombiDY2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { nValue } from "../data/NegativeValueData";


ReactFC.fcRoot(FusionCharts, MSCombiDY2D, FusionTheme);

function DualAxisChart() {
  const chartConfigs = {
    type: "msstackedcolumn2dlinedy", 
    width: "100%", 
    height: "500", 
    dataFormat: "json",
    dataSource: nValue
  };

  return <ReactFC {...chartConfigs} />;
}

export default DualAxisChart;
