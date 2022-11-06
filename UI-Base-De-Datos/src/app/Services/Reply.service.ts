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


}

