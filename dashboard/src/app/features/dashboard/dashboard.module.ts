import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [DashboardComponent, LineChartComponent, BarChartComponent, PieChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgSelectModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class DashboardModule {}
