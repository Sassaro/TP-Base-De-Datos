import { ActivatedRoute } from '@angular/router';
import { Comentario, ComentarioEntity } from './../../../Domain/Comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  async getCommentsByFileId(id:number) {
    const comentario$ = this.httpClient.get<ComentarioEntity[]>(`http://localhost:8080/comentarios/` + id);
    const comentario = await lastValueFrom(comentario$)
    return comentario.map( (it) => Comentario.fromEntity(it))
  }
}
