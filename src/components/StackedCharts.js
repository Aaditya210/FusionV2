import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import StackedColumn2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import energyData from '../data/energyData';


ReactFC.fcRoot(FusionCharts, StackedColumn2D, FusionTheme);

function StackedChart() {
    const chartConfigs = {
        type: "stackedcolumn2d",
        width: "700",  
        height: "400", 
        dataFormat: "json", 
        dataSource: energyData 
    };

  return <ReactFC {...chartConfigs} />;
}

export default StackedChart;
