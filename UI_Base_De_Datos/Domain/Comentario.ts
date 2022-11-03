import { Replica } from './Replica';

export class Comentario{

    id!:number
    apodo!:string
    descripcion!:string
    titulo!:string
    replicas:Replica[] = []

    constructor(_id:number, _apodo:string,_descripcion:string,_titulo:string,_replicas:Replica[]){
        this.id = _id
        this.apodo = _apodo
        this.descripcion = _descripcion
        this.titulo = _titulo
        this.replicas = _replicas
    }

}