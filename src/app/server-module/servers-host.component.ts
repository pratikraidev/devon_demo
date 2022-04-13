import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iparams, IserverList } from './interfaces/servers.interface';
import { ServersCommonService } from './services/servers-common.service';

@Component({
  selector: 'app-serves-host',
  templateUrl: './servers-host.component.html',
  styleUrls: ['./servers-host.component.scss']
})
export class ServersHostComponent implements OnInit, OnDestroy {
  serverList: IserverList[] = [];
  subsObs!: Subscription;
  constructor(
    private readonly serversCommonService: ServersCommonService,
  ) { }

  ngOnInit(): void {
    this.listServers();
  }

  getFilteredData(event: Iparams): void {
    this.listServers(event);
  }

  listServers(params?: Iparams): void {
    this.subsObs = this.serversCommonService.getServers(params).subscribe((data) => {
      this.serverList = data.servers;
    });
  }

  ngOnDestroy(): void {
    if (this.subsObs) {
      this.subsObs.unsubscribe();
    }
  }

}
