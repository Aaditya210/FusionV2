

const energyData = {
    chart: {
      caption: "Yearly Energy Production Rate",
      subcaption: "Top 6 Developed Countries",
      numbersuffix: " TWh",
      showsum: "1",
      xaxisname:"Countries",
      plottooltext: "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "candy",
      drawcrossline: "1",
      bgColor: "FFFFFF",
      canvasBgColor: "000000",
      captionFontColor:"#000000"
    },
    categories: [
      {
        category: [
          { label: "Canada" },
          { label: "China" },
          { label: "Russia" },
          { label: "Australia" },
          { label: "United States" },
          { label: "France" }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Coal",
        data: [
          { value: "400" },
          { value: "830" },
          { value: "500" },
          { value: "420" },
          { value: "790" },
          { value: "380" }
        ],
        color: "#FF5733"
      },
      {
        seriesname: "Hydro",
        data: [
          { value: "350" },
          { value: "620" },
          { value: "410" },
          { value: "370" },
          { value: "720" },
          { value: "310" }
        ],
        color: "#33C3FF"
      },
      {
        seriesname: "Nuclear",
        data: [
          { value: "210" },
          { value: "400" },
          { value: "450" },
          { value: "180" },
          { value: "570" },
          { value: "270" }
        ],
        color: "#9C27B0"
      },
      {
        seriesname: "Gas",
        data: [
          { value: "180" },
          { value: "330" },
          { value: "230" },
          { value: "160" },
          { value: "440" },
          { value: "350" }
        ],
        color: "#FFC107"
      },
      {
        seriesname: "Oil",
        data: [
          { value: "60" },
          { value: "200" },
          { value: "200" },
          { value: "50" },
          { value: "230" },
          { value: "150" }
        ],
        color: "#4CAF50"
      }
    ]
  };
  
  export default energyData;
  