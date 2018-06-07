import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Company } from '../../models';
import config from './config';
import {catchError} from 'rxjs/operators';

const baseUrl = config.baseUrl;

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) { }

 public getCompanyInfos(): Observable<Company> {
   return this.http.get<Company>(`${baseUrl}/info`).pipe(
     catchError(config.handleError)
   );
  }

}
