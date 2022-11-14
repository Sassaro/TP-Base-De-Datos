
export class ReportEntity{
    Detalle!:string
    Apodo!:string
    Apodo_creador!:string
    Descripcion!:string
    idArchivo!:number
    Titulo!:string
    cantidad_replicas!:number
}

//Esta clase va a tomar los valores de la query de reporteria
//Detalle es la descripcion de la replica
//Apodo es el apodo del que hace la replica
//Apodo_Creador es el apodo del comentario
//Descripcion es la descripcion del comentario
//titulo es el titulo del archivo