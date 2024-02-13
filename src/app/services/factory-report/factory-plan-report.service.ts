import { Injectable } from '@angular/core';
import { baseUrl } from '../base_url';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { httpHandler } from '../http.handler';

@Injectable({
  providedIn: 'root'
})
export class FactoryPlanReportService {

  _baseUrl() {
    return new baseUrl()._apiUrl();
  }

  private _url: string = this._baseUrl();

  constructor(private http: HttpClient) { }

  // getWaterIndexPlanReport = (month: string) => {
  //   return this.http.get(this._url + "/report/water-index?month="+ month).pipe(
  getWaterIndexPlanReport = () => {
    return this.http.get(this._url + "/report/water-index").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }
  getElectricityIndexPlanReport = () => {
    return this.http.get(this._url + "/report/electricity-index").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }
  getSteamIndexPlanReport = () => {
    return this.http.get(this._url + "/report/steam-index").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }
  getBigDowntime = () => {
    return this.http.get(this._url + "/kpi/getbigdowntime?tahun=2024").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }  
  getEnergyIndexGjKl = () => {
    return this.http.get(this._url + "/report/energy-index-gj-kl").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }  
  getProductionOutput = () => {
    return this.http.get(this._url + "/report/production-plan-report").pipe(
      catchError(new httpHandler().errorHttpHandler)
    )
  }  
}
