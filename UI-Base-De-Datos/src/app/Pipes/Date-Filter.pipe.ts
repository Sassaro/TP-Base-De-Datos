import { Contenido } from './../../../Domain/Contenido';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(contenidos: Contenido[], fecha: string): Contenido[] {
    if(fecha){
      return contenidos.filter(contenido => contenido.Fecha_publicacion.toLocaleDateString() == this.correctorDeFecha(fecha) );
    }else{
      return contenidos
    }
  }
  //Por alguna razon, el calendario tira un dia menos de lo que deberia ser, con esta funcion lo arreglo
  correctorDeFecha(fecha:string):string{
    const aux = new Date(fecha)
    aux.setDate(aux.getDate() + 1)
    return aux.toLocaleDateString()
  }

}
