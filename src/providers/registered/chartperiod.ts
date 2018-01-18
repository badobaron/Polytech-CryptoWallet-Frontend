import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChartPeriod } from '../../entities/chartperiod';
import { CryptoWalletResponse } from '../../responses/cryptowalletresponse';

@Injectable()
export class RegisteredChartPeriodProvider {

  private readonly allChartPeriodsPath: string = "cryptowallet/registered/TOKEN/chart-period";
  private readonly getChartPeriodPath: string = "cryptowallet/registered/TOKEN/chart-period/ID";

  constructor(private http: HttpClient) {}

  public allChartPeriods(token: string): Observable<CryptoWalletResponse<Array<ChartPeriod>>> {
    return this.http.get<CryptoWalletResponse<Array<ChartPeriod>>>(this.allChartPeriodsPath.replace("TOKEN", token));
  }

  public getChartPeriod(token: string, chartPeriodId: number): Observable<CryptoWalletResponse<ChartPeriod>> {
    return this.http.get<CryptoWalletResponse<ChartPeriod>>(this.getChartPeriodPath.replace("TOKEN", token).replace("ID", chartPeriodId.toString()));
  }
}