import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersHostComponent } from './servers-host.component';
import { ServersListComponent } from './components/servers-list/servers-list.component';
import { ServeRoutingModule } from './servers-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from '../shared/utils/currency-converter.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';




@NgModule({
  declarations: [
    ServersHostComponent,
    ServersListComponent,
    CurrencyConverterPipe
  ],
  imports: [
    CommonModule,
    ServeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxSliderModule
  ],
  providers:[
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ]
})
export class ServesModule { }
