import { FileService } from './../../Services/File.service';
import { Contenido, ContenidoEntity } from './../../../../Domain/Contenido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Content-Page',
  templateUrl: './Content-Page.component.html',
  styleUrls: ['./Content-Page.component.css']
})
export class ContentPageComponent implements OnInit {

  contentList:Contenido[] = [ new Contenido(-1,"Skyrim 100% real no fake",".txt",new Date(),[])]
  aux!:any 

  constructor(private contentService:FileService) { }

  ngOnInit() {

    this.getContents()

  }

  async getContents() {
    const aux = await this.contentService.getContents()
    this.contentList = aux.map( (it) => Contenido.fromEntity(it) )
    console.log(this.contentList[0].Fecha_publicacion)
  }

}
