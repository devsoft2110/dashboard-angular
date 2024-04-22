import { Component } from '@angular/core';
import { ChartType, ChartTypes } from './dashboard.types';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  chartTypes = ChartTypes;
  selectedChartType!: ChartType;

  show(data: any) {
    console.log(data);
  }
}
