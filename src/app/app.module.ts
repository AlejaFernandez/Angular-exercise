import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavModule } from './nav/nav.module';
import { SectionModule } from './section/section.module';
import { AsideModule } from './aside/aside.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    SectionModule,
    BrowserAnimationsModule,
    AsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
