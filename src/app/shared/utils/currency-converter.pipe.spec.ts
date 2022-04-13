import { CURRENCY, IPrice } from 'src/app/server-module/interfaces/servers.interface';
import { CurrencyConverterPipe } from './currency-converter.pipe';

describe('CurrencyConverterPipe', () => {
  const pipe = new CurrencyConverterPipe();
  it('create an instance', () => {
    const pipe = new CurrencyConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "USD" to "$USD"', () => {
    const val: IPrice ={
      amountCents: 2000,
      currency: CURRENCY.USD,
      currencySymbol: '$'
    }
    expect(pipe.transform(val)).toBe('$ 20');
  });
  it('transforms "EUR" to "EU"', () => {
    const val: IPrice ={
      amountCents: 2000,
      currency: CURRENCY.EUR,
      currencySymbol: '€'
    }
    expect(pipe.transform(val)).toBe('€ 20');
  });
  it('transforms "SGD" to "SGD"', () => {
    const val: IPrice ={
      amountCents: 2000,
      currency: CURRENCY.SGD,
      currencySymbol: 'S$'
    }
    expect(pipe.transform(val)).toBe('S$ 20');
  });
});
