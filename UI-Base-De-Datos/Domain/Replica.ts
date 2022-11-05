
export class Replica {

    id!:number
    detalle!:string
    apodo!:string
    replicas!:Replica[]

    constructor(_id:number,_detalle:string,_apodo:string,_replicas:Replica[]){
        this.id = _id
        this.detalle = _detalle
        this.apodo = _apodo
        this.replicas = _replicas
    }

}