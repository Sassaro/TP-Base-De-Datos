import { Contenido, ContenidoEntity } from './../../../Domain/Contenido';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {

constructor(private httpClient:HttpClient) { }

async getContents() {
  const archivos$ = this.httpClient.get<ContenidoEntity[]>(`http://localhost:8080/archivos`)
  const archivos = await lastValueFrom(archivos$)
  const aux = archivos.map( (it) => Contenido.fromEntity(it) )
  return aux
}

}
