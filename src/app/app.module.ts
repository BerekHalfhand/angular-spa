import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';

import { ImageService } from './image/image.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, FlexLayoutModule ],
  declarations: [ AppComponent, ImageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ImageService ]
})
export class AppModule { }
