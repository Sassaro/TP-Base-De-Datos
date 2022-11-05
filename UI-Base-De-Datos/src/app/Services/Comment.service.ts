import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  async getComments() {
    const comentario$ = this.httpClient.get(`http://localhost:8080/comentarios`);
    const comentario = await lastValueFrom(comentario$)
    console.log(comentario)
  }
}
