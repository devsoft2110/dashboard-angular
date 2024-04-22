import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  chartType: 'line' = 'line';

  chartLegend = false;
  chartPlugins = [];

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    events: ['mousemove'],
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: 'black',
        // displayColors: true,

        callbacks: {
          label: function (context: any) {
            return context.dataset.data[context.dataIndex];
          },
          labelTextColor: function (context) {
            return 'black';
          },
        },
      },
    },
    scales: {
      x: {
        display: true,

        grid: {
          display: true,
        },
        beginAtZero: true,
      },
      y: {
        display: true,
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
  };

  datasets: any = [
    {
      backgroundColor: '#08B6F0',
      borderColor: '#08B6F0',
      data: [],
      barThickness: 25,
      hoverBackgroundColor: '#08B6F0',
    },
    {
      backgroundColor: '#42D04B',
      borderColor: '#42D04B',
      data: [],
      barThickness: 25,
      hoverBackgroundColor: '#42D04B',
    },
    {
      backgroundColor: '#D04242',
      borderColor: '#D04242',
      data: [],
      barThickness: 25,
      hoverBackgroundColor: '#D04242',
    },
  ];

  data: ChartConfiguration<'line'>['data'] = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{ data: [10, 40, 25, 55, 20] }],
  };

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
}
