import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';

// LineChart
const LineChart = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    colors: ['#4788ff'],
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  return <Chart options={options} series={options.series} type="line" height={350} />;
};

// PieChart
const PieChart = () => {
  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    series: [44, 55, 13, 43, 22],
    colors: ['#4788ff', '#ff4b4b', '#876cfe', '#37e6b0', '#c8c8c8'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return <Chart options={options} series={options.series} type="pie" width={380} />;
};

// ColumnChart
const ColumnChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      colors: ['#4788ff', '#37e6b0', '#ff4b4b'],
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48],
        },
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val} thousands`,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#apex-column'), options);
    chart.render();

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    // Cleanup function to avoid memory leaks
    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="apex-column"></div>;
};

// BubbleChart
const BubbleChart = () => {
  useEffect(() => {
    const generateData = (baseval, count, yrange) => {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = baseval;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * 61) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    };

    const options = {
      chart: {
        height: 350,
        type: 'bubble',
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Product1',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 40 }),
        },
        {
          name: 'Product2',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 40 }),
        },
        {
          name: 'Product3',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 40 }),
        },
      ],
      fill: {
        type: 'gradient',
      },
      colors: ['#4788ff', '#37e6b0', '#37e6b0'],
      title: {
        text: '3D Bubble Chart',
      },
      xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 40,
      },
      theme: {
        palette: 'palette2',
      },
    };

    const chart = new ApexCharts(document.querySelector('#apex-bubble-chart'), options);
    chart.render();

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    // Clean up on unmount
    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="apex-bubble-chart"></div>;
};

// MixedChart
const MixedChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        },
      },
      colors: ['#ff4b4b', '#37e6b0', '#4788ff'],
      series: [
        {
          name: 'Facebook',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        '01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003',
        '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003',
        '09/01/2003', '10/01/2003', '11/01/2003',
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val) => (val !== undefined ? `${val.toFixed(0)} views` : val),
        },
      },
      legend: {
        labels: {
          useSeriesColors: true,
        },
        markers: {
          customHTML: [() => '', () => '', () => ''],
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#apex-mixed-chart'), options);
    chart.render();

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    // Clean up on unmount
    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="apex-mixed-chart"></div>;
};

// AdvancedChart
const AdvancedChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Bob',
          data: [
            { x: 'Design', y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()] },
            { x: 'Code', y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()] },
            { x: 'Code', y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()] },
            { x: 'Test', y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()] },
            { x: 'Test', y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()] },
            { x: 'Validation', y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()] },
            { x: 'Design', y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()] }
          ]
        },
        {
          name: 'Joe',
          data: [
            { x: 'Design', y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()] },
            { x: 'Test', y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()] },
            { x: 'Code', y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] },
            { x: 'Deployment', y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()] },
            { x: 'Design', y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()] }
          ]
        },
        {
          name: 'Dan',
          data: [
            { x: 'Code', y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()] },
            { x: 'Validation', y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()] },
          ]
        }
      ],
      colors: ["#4788ff", "#ff4b4b", "#37e6b0"],
      chart: {
        height: 450,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%'
        }
      },
      xaxis: {
        type: 'datetime'
      },
      stroke: {
        width: 1
      },
      fill: {
        type: 'solid',
        opacity: 0.6
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#advanced-chart"), options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="advanced-chart"></div>;
};

// Line Area Chart Component
const LineAreaChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: ['#4788ff', '#ff4b4b'],
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00',
          '2018-09-19T01:30:00',
          '2018-09-19T02:30:00',
          '2018-09-19T03:30:00',
          '2018-09-19T04:30:00',
          '2018-09-19T05:30:00',
          '2018-09-19T06:30:00',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#apex-line-area'), options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="apex-line-area"></div>;
};

// Bar Chart Component
const BarChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#4788ff'],
      series: [
        {
          data: [470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      xaxis: {
        categories: ['Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
      },
    };

    const chart = new ApexCharts(document.querySelector('#apex-bar'), options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="apex-bar"></div>;
};

// CandlestickChart
const CandlestickChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "candlestick"
    },
    colors: ["#4788ff", "#37e6b0", "#37e6b0"],
    series: [{
      data: [{
        x: new Date(15387786e5),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      }, {
        x: new Date(15387804e5),
        y: [6632.01, 6643.59, 6620, 6630.11]
      }, {
        x: new Date(15387822e5),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      }, {
        x: new Date(1538784e6),
        y: [6635.65, 6651, 6629.67, 6638.24]
      }, {
        x: new Date(15387858e5),
        y: [6638.24, 6640, 6620, 6624.47]
      }, {
        x: new Date(15387876e5),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      }, {
        x: new Date(15387894e5),
        y: [6624.61, 6632.2, 6617, 6626.02]
      }, {
        x: new Date(15387912e5),
        y: [6627, 6627.62, 6584.22, 6603.02]
      }, {
        x: new Date(1538793e6),
        y: [6605, 6608.03, 6598.95, 6604.01]
      }, {
        x: new Date(15387948e5),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      }, {
        x: new Date(15387966e5),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      }, {
        x: new Date(15387984e5),
        y: [6608.91, 6618.99, 6608.01, 6612]
      }, {
        x: new Date(15388002e5),
        y: [6612, 6615.13, 6605.09, 6612]
      }, {
        x: new Date(1538802e6),
        y: [6612, 6624.12, 6608.43, 6622.95]
      }, {
        x: new Date(15388038e5),
        y: [6623.91, 6623.91, 6615, 6615.67]
      }, {
        x: new Date(15388056e5),
        y: [6618.69, 6618.74, 6610, 6610.4]
      }, {
        x: new Date(15388074e5),
        y: [6611, 6622.78, 6610.4, 6614.9]
      }, {
        x: new Date(15388092e5),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      }, {
        x: new Date(1538811e6),
        y: [6623.48, 6627, 6618.38, 6620.35]
      }, {
        x: new Date(15388128e5),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      }, {
        x: new Date(15388146e5),
        y: [6615.53, 6617.93, 6610, 6615.19]
      }, {
        x: new Date(15388164e5),
        y: [6615.19, 6621.6, 6608.2, 6620]
      }, {
        x: new Date(15388182e5),
        y: [6619.54, 6625.17, 6614.15, 6620]
      }, {
        x: new Date(153882e7),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      }, {
        x: new Date(15388218e5),
        y: [6625.95, 6626, 6611.66, 6617.58]
      }, {
        x: new Date(15388236e5),
        y: [6619, 6625.97, 6595.27, 6598.86]
      }, {
        x: new Date(15388254e5),
        y: [6598.86, 6598.88, 6570, 6587.16]
      }, {
        x: new Date(15388272e5),
        y: [6588.86, 6600, 6580, 6593.4]
      }, {
        x: new Date(1538829e6),
        y: [6593.99, 6598.89, 6585, 6587.81]
      }, {
        x: new Date(15388308e5),
        y: [6587.81, 6592.73, 6567.14, 6578]
      }, {
        x: new Date(15388326e5),
        y: [6578.35, 6581.72, 6567.39, 6579]
      }, {
        x: new Date(15388344e5),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      }, {
        x: new Date(15388362e5),
        y: [6575.96, 6589, 6571.77, 6588.92]
      }, {
        x: new Date(1538838e6),
        y: [6588.92, 6594, 6577.55, 6589.22]
      }, {
        x: new Date(15388398e5),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      }, {
        x: new Date(15388416e5),
        y: [6597.5, 6600, 6588.39, 6596.25]
      }, {
        x: new Date(15388434e5),
        y: [6598.03, 6600, 6588.73, 6595.97]
      }, {
        x: new Date(15388452e5),
        y: [6595.97, 6602.01, 6588.17, 6602]
      }, {
        x: new Date(1538847e6),
        y: [6602, 6607, 6596.51, 6599.95]
      }, {
        x: new Date(15388488e5),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      }, {
        x: new Date(15388506e5),
        y: [6591.02, 6603.08, 6591, 6591]
      }, {
        x: new Date(15388524e5),
        y: [6591, 6601.32, 6585, 6592]
      }, {
        x: new Date(15388542e5),
        y: [6593.13, 6596.01, 6590, 6593.34]
      }, {
        x: new Date(1538856e6),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      }, {
        x: new Date(15388578e5),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      }, {
        x: new Date(15388596e5),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      }, {
        x: new Date(15388614e5),
        y: [6596.25, 6604.2, 6590, 6602.99]
      }, {
        x: new Date(15388632e5),
        y: [6602.99, 6606, 6584.99, 6587.81]
      }, {
        x: new Date(1538865e6),
        y: [6587.81, 6595, 6583.27, 6591.96]
      }, {
        x: new Date(15388668e5),
        y: [6591.97, 6596.07, 6585, 6588.39]
      }, {
        x: new Date(15388686e5),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      }, {
        x: new Date(15388704e5),
        y: [6596.44, 6601, 6590, 6596.55]
      }, {
        x: new Date(15388722e5),
        y: [6598.91, 6605, 6596.61, 6600.02]
      }, {
        x: new Date(1538874e6),
        y: [6600.55, 6605, 6589.14, 6593.01]
      }, {
        x: new Date(15388758e5),
        y: [6593.15, 6605, 6592, 6603.06]
      }]
    }],
    title: {
      text: "CandleStick Chart",
      align: "left"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  useEffect(() => {
    const chartElement = document.querySelector('#candlestick-chart');
    const chart = new ApexCharts(chartElement, options);
    chart.render();

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="candlestick-chart"></div>;
};

// ScatterChart
const ScatterChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        enabled: true,
        type: "xy"
      }
    },
    colors: ["#4788ff", "#ff4b4b", "#37e6b0"],
    series: [{
      name: "SAMPLE A",
      data: [
        [16.4, 5.4], [21.7, 2], [10.9, 0], [10.9, 8.2],
        [16.4, 0], [16.4, 1.8], [13.6, .3], [13.6, 0],
        [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7],
        [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1],
        [10.9, 0], [8.1, 4.7]
      ]
    }, {
      name: "SAMPLE B",
      data: [
        [36.4, 13.4], [1.7, 11], [1.9, 9], [1.9, 13.2],
        [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10],
        [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7],
        [1.9, 15.2], [6.4, 16.5], [.9, 10], [4.5, 17.1],
        [10.9, 10], [.1, 14.7]
      ]
    }, {
      name: "SAMPLE C",
      data: [
        [21.7, 3], [23.6, 3.5], [28, 4], [27.1, .3],
        [16.4, 4], [13.6, 0], [19, 5], [22.4, 3],
        [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6],
        [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0],
        [32.6, 10.3], [29.7, 20.8]
      ]
    }],
    xaxis: {
      tickAmount: 5,
      labels: {
        formatter: (value) => parseFloat(value).toFixed(1)
      }
    },
    yaxis: {
      tickAmount: 5
    }
  };

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#scatter-chart"), options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="scatter-chart"></div>;
};

// RadialBarchart
const RadialBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 380,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: () => 249
            }
          }
        }
      },
      series: [44, 55, 67, 83],
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: ['#4788ff', '#ff4b4b', '#876cfe', '#37e6b0']
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div ref={chartRef} id="apex-radialbar-chart"></div>;
};

// RadarMutlipleChart
const RadarMultipleChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        }
      ],
      colors: ["#4788ff", "#ff4b4b", "#37e6b0"],
      chart: {
        height: 445,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: 'Radar Chart - Multi Series'
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      }
    };

    const chart = new ApexCharts(document.querySelector("#radar-multiple-chart"), options);
    chart.render();

    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, { dark: true });
    }

    const handleColorModeChange = (e) => {
      apexChartUpdate(chart, e.detail);
    };

    document.addEventListener('ChangeColorMode', handleColorModeChange);

    return () => {
      chart.destroy();
      document.removeEventListener('ChangeColorMode', handleColorModeChange);
    };
  }, []);

  return <div id="radar-multiple-chart"></div>;
};

const Charts = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Line Chart</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Column Charts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <ColumnChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Bubble Charts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <BubbleChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Mixed Chart</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <MixedChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Pie Charts</h4>
              </div>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-center">
              <PieChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Advanced Charts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <AdvancedChart />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Line Area Chart</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <LineAreaChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Bar Chart</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title">Candlestick Charts</h4>
            </Card.Header>
            <Card.Body>
              <CandlestickChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title">Scatter Charts</h4>
            </Card.Header>
            <Card.Body>
              <ScatterChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title">Radial Bar Charts</h4>
            </Card.Header>
            <Card.Body>
              <RadialBarChart />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title">Radar Multiple Charts</h4>
            </Card.Header>
            <Card.Body>
              <RadarMultipleChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Charts;
