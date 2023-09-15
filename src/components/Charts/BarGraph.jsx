import React from 'react';
import Chart from "react-apexcharts";

const BarGraph = () => {
  const options = {
    colors: ['#65451F', '#765827', '#C8AE7D', '#EAC696', '#F2EAD3'],
    chart: {
      id: "basic-bar",
      animations: {
        enabled: false, 
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      title: {
        text: 'LOCATIONS',
        style: {
          fontSize: '16px',
          fontWeight: 600,
        },
      },
      categories: ["Loc. 1", "Loc. 2", "Loc. 3", "Loc. 4", "Loc. 5", "Loc. 6", "Loc. 7", "Loc. 8"]
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'CABIN REVENUE($)',
        style: {
          fontSize: '16px',
          fontWeight: 600,
        },
      },
    },
    legend: {
      position: 'right',
      verticalAlign: 'center',
    },
  };

  const series = [
    {
      name: "cabin-1",
      data: [80, 40, 70, 50, 30, 60, 90, 61]
    },
    {
      name: "cabin-2",
      data: [70, 30, 85, 90, 59, 20, 80, 60]
    },
    {
      name: "cabin-3",
      data: [90, 60, 75, 40, 20, 60, 90, 80]
    },
    {
      name: "cabin-4",
      data: [80, 10, 90, 20, 89, 30, 60, 100]
    },
    {
      name: "cabin-5",
      data: [10, 80, 95, 40, 69, 30, 100, 59]
    },
  ];

  return (
    <div className="">
      <div className="">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="950"
          height="300"
        />
      </div>
    </div>
  );
};

export default BarGraph;