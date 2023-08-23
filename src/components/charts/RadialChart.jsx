import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {

  const [state] = useState({
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },

      title: {
        text: 'Order Items',
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#fff'
          },
    },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  });

  return (
    <div id="chart" className=" bg-slate-200 dark:bg-slate-800 rounded-lg shadow-md px-2 py-4">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialChart;
