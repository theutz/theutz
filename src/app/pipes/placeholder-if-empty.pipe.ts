import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholderIfEmpty'
})
export class PlaceholderIfEmptyPipe implements PipeTransform {

  transform(value: string): string {
    return !!value ? value : '--';
  }

}
