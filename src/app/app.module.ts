import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServesModule } from './server-module/servers.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServesModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
