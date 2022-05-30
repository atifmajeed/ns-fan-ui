import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FanState } from '../fan-state';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * This service class interacts with BE micro service to retrieve and persist fan state
 * @author Atif Majeed
 */
@Injectable({
  providedIn: 'root'
})
export class CeilingFanService {

  //URL of the backend service
  serviceUrl = environment.SERVICE_URL;
  /**
   * Constructor
   * @param http injected HTTP client to make asynchronus calls to backend service
   */
  constructor(private http: HttpClient) { }

  /**
   * This method makes a GET call to retrieve last fan state from the server
   */
  getFanState(): Observable<FanState> {
    return this.http.get<FanState>(this.serviceUrl + "/fan-state");
  }

  /**
   * This method makes a PUT call to update current fan state to the server
   * @param fanState fan state to persist to the server
   */
  updateFanState(fanState: FanState): Observable<FanState> {
    return this.http.put<FanState>(this.serviceUrl + "/fan-state", fanState);
  }
}
