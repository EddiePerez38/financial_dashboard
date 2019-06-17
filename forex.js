/* globals Chart:false, feather:false */

function renderChart(response) {
    'use strict'
  
    feather.replace();
  
    const data = response['Realtime Currency Exchange Rate']; // { key: value }
  
    let dates = Object.keys(data);
  
    if (dates.length > 7) {
      dates = dates.slice(0, 7);
    }
  
    let forexData = [];
  
    for (let date of dates) {
      let open = data[date]['1. open'];
      forexData.push(open);
    }
  
    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: dates,
        datasets: [{
          data: forexData,
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }