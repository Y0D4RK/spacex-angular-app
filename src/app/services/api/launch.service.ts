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

  public getLaunchByFlightNumber(flight_number: number): Observable<Launch> {
    return this.http.get<Launch>(`${baseUrl}/launches/?flight_number=${flight_number}`).pipe(
      catchError(config.handleError)
    );
  }
  public getLatestLaunch(): Observable<Launch> {
    return this.http.get<Launch>(`${baseUrl}/launches/latest`).pipe(
      catchError(config.handleError)
    );
  }

   public getNextLaunch(): Observable<Launch> {
    return this.http.get<Launch>(`${baseUrl}/launches/next`).pipe(
      catchError(config.handleError)
    );
  }

  public getPastLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${baseUrl}/launches`).pipe(
      catchError(config.handleError)
    );
  }

  public getUpcomingLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${baseUrl}/launches/upcoming`).pipe(
      catchError(config.handleError)
    );
  }

  public getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${baseUrl}/launches/all`).pipe(
      catchError(config.handleError)
    );
  }

}
