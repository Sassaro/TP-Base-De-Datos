import { Comentario } from './Comentario';

export class ContenidoEntity{

    Extension!:string
    Fecha_Publicacion!:Date
    Titulo!:string
    idArchivo!:number

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

        console.log(contenidoEntity.Fecha_Publicacion)
        let contenido = Object.assign(new Contenido(0,"","",contenidoEntity.Fecha_Publicacion,[]),contenidoEntity)
        contenido.Fecha_publicacion = new Date(contenidoEntity.Fecha_Publicacion)
        return contenido
    }

}