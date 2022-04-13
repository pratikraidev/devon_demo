export interface IserverList {
  model: string;
  ram: IUnit;
  location: string;
  hdd: IUnit;
  price: IPrice;
}

export interface IServeRes {
    servers: IserverList[];
}

interface IUnit {
  memory: string;
  unit: StorageType;
  type: MemUnit;
  count?: string;
}

export interface IPrice {
  currency: string;
  currencySymbol: string;
  amountCents: number;
}

export enum StorageType {
  DDR3 = 'DDR3',
  SATA2 = 'SATA2',
  SSD = 'SSD',
  DDR4 = 'DDR4',
}

export enum MemUnit {
  GB = 'GB',
  TB = 'TB ',
}

export enum CURRENCY {
    USD = 'USD',
    EUR = 'EUR',
    SGD = 'SGD'
}

export interface Iparams {
    ram: string[];
    hdd: string;
    range: string[];
}

export interface IDropDownList {
    name: string;
    value: number | string;
}
