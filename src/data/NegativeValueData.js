

export const nValue = {
    chart: {
      caption: "Energy Consumption and Growth",
      pyaxisname: "Energy Production [MWh]",
      syaxisname: "Growth Ratio",
      numbersuffix: "MWh",
      numdivlines: "7",
      adjustdiv: "0",
      syaxismaxvalue: "5",
      syaxisminvalue: "-3",
      yaxisminvalue: "-30",
      yaxismaxvalue: "30",
      theme: "candy",
      drawcustomlegendicon: "1",
      plottooltext: "$label, $seriesname: $dataValue",
      palettecolors: "#A5A5A5,#5EB863,#DD8341",
      bgColor:"#FFFFFF",
      captionFontColor:"#000000"
    },
    categories: [
      {
        category: [
          { label: "January" },
          { label: "February" },
          { label: "March" },
          { label: "April" },
          { label: "May" },
          { label: "June" }
        ]
      }
    ],
    dataset: [
      {
        dataset: [
          {
            seriesname: "Fossil Fuels Wasted",
            data: [
              { value: "-10" },
              { value: "-9" },
              { value: "-7" },
              { value: "-12" },
              { value: "-15" },
              { value: "-13" }
            ]
          },
          {
            seriesname: "Renewable Energy Increased",
            data: [
              { value: "15" },
              { value: "18" },
              { value: "22" },
              { value: "25" },
              { value: "20" },
              { value: "30" }
            ]
          },
          {
            seriesname: "Energy Retained",
            data: [
              { value: "5" },
              { value: "4" },
              { value: "6" },
              { value: "7" },
              { value: "5" },
              { value: "4" }
            ]
          }
        ]
      }
    ],
    lineset: [
      {
        seriesname: "Growth Ratio",
        showvalues: "0",
        color: "#FDCB50",
        anchorbgcolor: "#FDCB50",
        showanchors: "0",
        data: [
          { value: "1.5" },
          { value: "2" },
          { value: "3.5" },
          { value: "2.5" },
          { value: "1.8" },
          { value: "2.2" }
        ]
      }
    ]
  };
  