import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { OuterComponent } from './outer/outer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { InnerComponent } from './inner/inner.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent,
    OuterComponent,
    MainContainerComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
