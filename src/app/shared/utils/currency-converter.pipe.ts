import { Pipe, PipeTransform } from '@angular/core';
import { CURRENCY, IPrice } from 'src/app/server-module/interfaces/servers.interface';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: IPrice): string {
    let retText = '';
    switch (value.currency) {
      case CURRENCY.EUR: {
        retText = `${value.currencySymbol} ${this.convertToCurr(value.amountCents).toString()}`;
        break;
      }
      case CURRENCY.SGD: {
        retText = `${value.currencySymbol} ${this.convertToCurr(value.amountCents).toString()}`;
        break;
      }
      case CURRENCY.USD: {
        retText = `${value.currencySymbol} ${this.convertToCurr(value.amountCents).toString()}`;
        break;
      }
      default: break;
    }
    return retText;
  }

  convertToCurr(cents: number): number {
    return (cents/ 100);
  }

}

