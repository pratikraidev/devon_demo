import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IDropDownList, IserverList } from '../../interfaces/servers.interface';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServersListComponent implements OnInit {
  @Input() serverList: IserverList[] = [];
  @Output() filterArray = new EventEmitter();
  options: Options = {
    stepsArray: [
      { legend: '0', value: 0 },
      { legend: '250 GB', value: 250 },
      { legend: '500 GB', value: 500 },
      { legend: '1 TB', value: 1000 },
      { legend: '2 TB', value: 2000 },
      { legend: '3 TB', value: 3000 },
      { legend: '4 TB', value: 4000 },
      { legend: '8 TB', value: 8000 },
      { legend: '12 TB', value: 12000 },
      { legend: '24 TB', value: 24000 },
      { legend: '48 TB', value: 48000 },
      { legend: '72 TB', value: 72000 },
    ],
    translate: (value: number): string => {
      let retText = ') GB';
      const val = value / 1000;
      switch (val) {
        case val: {
          if (val < 1) {
            retText = `${val * 1000}GB`;
          } else if (val >= 1) {
            retText = `${val}TB`;
          }
          break;
        }
      }
      return retText;
    },
  };
  dummyLoader = new Array(8).fill('card');
  isOpen = false;
  ramList: IDropDownList[] = [
    {
      name: '2GB',
      value: 2,
    },
    {
      name: '4GB',
      value: 4,
    },
    {
      name: '8GB',
      value: 8,
    },
    {
      name: '12GB',
      value: 12,
    },
    {
      name: '16GB',
      value: 16,
    },
    {
      name: '24GB',
      value: 24,
    },
    {
      name: '32GB',
      value: 32,
    },
    {
      name: '48GB',
      value: 48,
    },
    {
      name: '96GB',
      value: 96,
    },
  ];
  hddList: IDropDownList[] = [
    {
      name: 'SAS',
      value: 'SAS',
    },
    {
      name: 'SATA',
      value: 'SATA2',
    },
    {
      name: 'SSD',
      value: 'SSD',
    },
  ];
  filterForm!: FormGroup;
  initLoad = true;
  constructor(private readonly fb: FormBuilder) {
    this.filterForm = this.fb.group({
      range: new FormControl([0, 250]),
      ram: new FormControl([]),
      hdd: new FormControl([]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.filterArray.emit(this.filterForm.value);
    this.isOpen = false;
    this.initLoad = false;
  }
}
