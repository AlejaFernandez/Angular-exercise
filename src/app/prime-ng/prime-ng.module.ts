import { NgModule } from '@angular/core';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CalendarModule} from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';

@NgModule({
  
  exports: [
    BreadcrumbModule,
    CalendarModule,
    MenuModule,
    CardModule,
    CalendarModule
  ]
})
export class PrimeNgModule { }
