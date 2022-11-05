import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private httpClient:HttpClient) { }

  async getComments() {
    const replicas$ = this.httpClient.get(`http://localhost:8080/replicas`);
    const replicas = await lastValueFrom(replicas$)
    console.log(replicas)
  }

}

