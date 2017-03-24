import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'workHistoryDate'
})
export class WorkHistoryDatePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    return moment(value).format('MMMM YYYY');
  }

}
