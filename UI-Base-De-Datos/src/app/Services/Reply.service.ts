import { LastIdEntity } from './../../../Domain/LastIdEntity';
import { Replica, ReplicaEntity } from './../../../Domain/Replica';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private httpClient:HttpClient) { }

  async getRepliesById(id:number) {
    const replicas$ = this.httpClient.get<ReplicaEntity[]>(`http://localhost:8080/replicas/` + id);
    const replicas = await lastValueFrom(replicas$)
    return replicas.map( (it) => Replica.fromEntity(it) )
  }

  async getRepliesByReplyId(id:number) {
    const replicas$ = this.httpClient.get<ReplicaEntity[]>(`http://localhost:8080/replicasDeReplicas/` + id);
    const replicas = await lastValueFrom(replicas$)
    return replicas.map( (it) => Replica.fromEntity(it) )
  }

  async addReply(replica:Replica){
    await lastValueFrom(this.httpClient.post('http://localhost:8080/agregarReplica', Replica.toEntity(replica)))
  }

  async updateReply(replica:Replica,id:number){
    await lastValueFrom(this.httpClient.patch('http://localhost:8080/actualizarReplica/' + id, Replica.toEntity(replica)))
  }

  async deleteReply(id:number){
    await lastValueFrom(this.httpClient.delete('http://localhost:8080/quitarReplica/' + id))
  }

  async lastId(){
    const id$ = this.httpClient.get<LastIdEntity[]>(`http://localhost:8080/ultimoId`);
    const id = await lastValueFrom(id$)
    return id
  }

}

