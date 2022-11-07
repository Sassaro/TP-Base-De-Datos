export class ReplicaEntity {

    idReplica!:number
    Detalle!:string
    Apodo!:string
    Replica_idReplica!:number
    Comentario_idComentario!:number

    constructor(_id:number,_detalle:string,_apodo:string,_idReplica:number,_idComentario:number){

        this.idReplica = _id
        this.Detalle = _detalle
        this.Apodo = _apodo
        this.Replica_idReplica = _idReplica
        this.Comentario_idComentario = _idComentario

    }

}

export class Replica {

    id!:number
    detalle!:string
    apodo!:string
    replicas!:Replica[]
    idComentario!:number
    idreplica!:number

    constructor(_id:number,_detalle:string,_apodo:string,_replicas:Replica[],_idComentario:number,_idReplica:number){
        this.id = _id
        this.detalle = _detalle
        this.apodo = _apodo
        this.replicas = _replicas
        this.idComentario = _idComentario
        this.idreplica = _idReplica
    }

    static fromEntity(replicaEntity:ReplicaEntity):Replica{
        return new Replica(replicaEntity.idReplica, replicaEntity.Detalle,replicaEntity.Apodo,[],replicaEntity.Comentario_idComentario,replicaEntity.Replica_idReplica)
    }

    static toEntity(replica:Replica):ReplicaEntity{
        return new ReplicaEntity(replica.id,replica.detalle,replica.apodo,replica.idreplica,replica.idComentario)
    }

}