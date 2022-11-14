import { ReportEntity } from './../../../Domain/ReportEntity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

constructor(private httpClient:HttpClient) { }

  async getReportItems(){
    const replicas$ = this.httpClient.get<ReportEntity[]>(`http://localhost:8080/reporteria`);
    const replicas = await lastValueFrom(replicas$)
    return replicas
  }

}
