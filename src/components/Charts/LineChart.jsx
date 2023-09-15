import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    colors: ['#96C291'],
    chart: {
      id: 'basic-bar',
      animations: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    xaxis: {
      categories: ['Loc. 1', 'Loc. 2', 'Loc. 3', 'Loc. 4'],
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: 'cabin-1',
      data: [80, 40, 70, 50],
    },
  ];

  return (
    <div className="">
      <div className="">
        <Chart options={options} series={series} type="area" width="130" height="130" />
      </div>
    </div>
  );
};

export default LineChart;