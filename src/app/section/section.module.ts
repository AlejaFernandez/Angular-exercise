import { NgModule } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    PrimeNgModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
