import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit',
})
export class CreditPipe implements PipeTransform {
  transform(value: string): string {
    var data = value.split(/(\d{4})/);
    return data.join(' ').replaceAll('  ', '-');
  }
}
