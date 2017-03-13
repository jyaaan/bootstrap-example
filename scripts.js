$(function () {
  var myChart = highcharts.chart('testChart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Cohort Performance'
    },
    xAxis: {
      categories: ['2017W06', '2017W07', '2017W08']
    },
    yAxis: {
      text: 'Engagement'
    },
    series: [{
      name: 'Engaged',
      data: [13, 7, 4]
    }, {
      name: 'Cold',
      data: [34, 41, 51]
    }]
  });
});
