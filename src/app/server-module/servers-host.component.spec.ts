import { LocationStrategy } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockLocationStrategy } from '@angular/common/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MaterialModule } from '../material.module';
import { ServersListComponent } from './components/servers-list/servers-list.component';
import { Iparams, IServeRes, MemUnit, StorageType } from './interfaces/servers.interface';

import { ServersHostComponent } from './servers-host.component';
import { ServersCommonService } from './services/servers-common.service';

describe('ServesHostComponent', () => {
  let component: ServersHostComponent;
  let fixture: ComponentFixture<ServersHostComponent>;
  let service: ServersCommonService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersHostComponent, ServersListComponent ],
      providers: [ServersCommonService, { provide: LocationStrategy, useClass: MockLocationStrategy }],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule, MaterialModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersHostComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServersCommonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listServer method', fakeAsync(() => {
    spyOn(service, 'getServers').and.returnValue(of(MOCK_DATA));
    component.listServers()
    fixture.detectChanges();
    expect(service.getServers).toHaveBeenCalled();
  }));

  it('should call getFilteredData method with params', fakeAsync(() => {
    const param: Iparams = {
      hdd: 'SATA2',
      ram: ['1', '2'],
      range: ['250', '500']
    }
    spyOn(service, 'getServers').and.callThrough();
    component.getFilteredData(param)
    fixture.detectChanges();
    expect(service.getServers).toHaveBeenCalled();
  }));
});

export const MOCK_DATA: IServeRes = {
  servers: [
    {
      hdd: {
        memory: '1',
        type: MemUnit.GB,
        unit: StorageType.SSD,
        count: '2'
      },
      location: 'AmsterdamAMS',
      model: 'Dell R720XD2x Intel Xeon E5-2650',
      price: {
        amountCents: 1000,
        currency: 'USD',
        currencySymbol: '$'
      },
      ram: {
        memory: '2',
        type: MemUnit.GB,
        unit: StorageType.DDR3
      }
    }
  ]
} 
