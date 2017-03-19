import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToBr'
})
export class SpaceToBrPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(' ', '<br>');
  }

}
