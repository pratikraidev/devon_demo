import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ServersCommonService } from './servers-common.service';
import { Iparams } from '../interfaces/servers.interface';
import { of } from 'rxjs';

describe('ServersCommonService', () => {
  let service: ServersCommonService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ServersCommonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getServers with params', () => {
    const param: Iparams = {
      hdd: 'SATA',
      ram: ['2','4'],
      range: ['0','0']
    }
    spyOn(service, 'getServers').and.returnValue(of());
    service.getServers(param);
    expect(service.getServers).toHaveBeenCalled();
  });

  it('should getServers w/o params', () => {
    spyOn(service, 'getServers').and.returnValue(of());
    service.getServers();
    expect(service.getServers).toHaveBeenCalled();
  });
});
