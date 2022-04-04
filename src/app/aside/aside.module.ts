import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';



@NgModule({
  declarations: [
    RightComponent,
    LeftComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RightComponent,
    LeftComponent
  ]
})
export class AsideModule { }
