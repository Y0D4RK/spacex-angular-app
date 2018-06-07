import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {

  static formatDate(str: string): any {
    const parsedDate = Date.parse(str);
    return moment(parsedDate).locale('fr').format('LLL');
  }

}
