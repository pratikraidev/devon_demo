import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_RESOURCES, API_URL } from '../../../environments/environment';
import { Iparams, IServeRes } from '../interfaces/servers.interface';

@Injectable({
  providedIn: 'root',
})
export class ServersCommonService {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   *
   * @description method to fetch servers list from API
   * @param params
   * @returns Observable<IServeRes>
   */
  getServers(param?: Iparams): Observable<IServeRes> {
    const url = `${API_URL.url}${API_RESOURCES.servers}`;
    if (param) {
      let params = new HttpParams();
      if (param.hdd.length) {
        params = params.set('hdd', param.hdd);
      }
      if (param.ram.length) {
        params = params.set('ram', param.ram.toString());
      }
      if (param.range.length) {
        params = params.set('storageMin', param.range[0]);
        params = params.set('storageMax', param.range[1]);
      }
      const url = `${API_URL.url}${API_RESOURCES.servers}`;
      return this.httpClient.get<IServeRes>(url, { params });
    }
    return this.httpClient.get<IServeRes>(url);
  }
}
