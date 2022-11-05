import { Comentario } from './Comentario';

export type ContenidoEntityJSON = {

    Extension:string
    Fecha_publicacion:Date
    Titulo:string
    idArchivo:number

}

export class ContenidoEntity{

    Extension!:string
    Fecha_publicacion!:Date
    Titulo!:string
    idArchivo!:number

    static fromJson(contenidoEntityJSON: ContenidoEntityJSON): ContenidoEntity {
        let contenidoEntity = Object.assign(new ContenidoEntity(), contenidoEntityJSON)
        contenidoEntity.Fecha_publicacion = new Date(contenidoEntityJSON.Fecha_publicacion)
        console.log(contenidoEntityJSON.Fecha_publicacion)
        return contenidoEntity
    }

}

export class Contenido {

    idArchivo:number
    Titulo:string
    Extension:string
    Fecha_publicacion:Date
    comentarios:Comentario[]

    constructor(_id:number,_titulo:string, _extension:string, _fecha_Publicacion:Date,_comentarios:Comentario[]){
        this.idArchivo = _id;
        this.Titulo = _titulo
        this.Extension = _extension
        this.Fecha_publicacion = _fecha_Publicacion
        this.comentarios = _comentarios
    }

    static fromEntity(contenidoEntity:ContenidoEntity):Contenido{

        let contenido = Object.assign(new Contenido(0,"","",contenidoEntity.Fecha_publicacion,[]),contenidoEntity)
        return contenido
    }

}