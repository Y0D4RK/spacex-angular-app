import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Launch } from '../../models';
import config from './config';
import {catchError} from 'rxjs/operators';

const baseUrl = config.baseUrl;

@Injectable()
export class LaunchService {
  constructor(private http: HttpClient) { }

  public getPastLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${baseUrl}/launches`).pipe(
      catchError(config.handleError)
    );
  }

}
