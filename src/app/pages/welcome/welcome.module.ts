import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { WeeklyReportComponent } from './weekly-report/weekly-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CityInfoComponent } from './dashboard/city-info/city-info.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzCardModule,
    NzTabsModule,
    NzIconModule,
    NzRadioModule,
    NzGridModule,
    NzProgressModule,
    NzDescriptionsModule,
    Ng2GoogleChartsModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  declarations: [WelcomeComponent, WeeklyReportComponent, DashboardComponent, CityInfoComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
