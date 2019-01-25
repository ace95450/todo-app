import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/fr';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(date: string): any {
    /*Permet de calculer la durée restant entre deux dates*/
    return moment(date, 'YYYY-MM-DD').fromNow();
  }

}
