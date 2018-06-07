import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Rocket } from '../../models';
import config from './config';
import {catchError} from 'rxjs/operators';

const baseUrl = config.baseUrl;

@Injectable()
export class RocketService {
  constructor(private http: HttpClient) { }

  public getRocketById(id: string): Observable<Rocket> {
    return this.http.get<Rocket>(`${baseUrl}/rockets/${id}`).pipe(
      catchError(config.handleError)
    );
  }

  public getAllRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(`${baseUrl}/rockets`).pipe(
      catchError(config.handleError)
    );
  }


}
