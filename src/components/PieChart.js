import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import portfolioData from '../data/portfolioData';

ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

function PieChart() {
  const chartConfigs = {
    type: "pie3d",  
    width: "700", 
    height: "400", 
    dataFormat: "json", 
    dataSource: portfolioData  
  };

  return <ReactFC {...chartConfigs} />;  
}

export default PieChart;
