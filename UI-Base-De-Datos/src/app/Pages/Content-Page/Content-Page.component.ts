import { CommentService } from './../../Services/Comment.service';
import { FileService } from './../../Services/File.service';
import { Contenido } from './../../../../Domain/Contenido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Content-Page',
  templateUrl: './Content-Page.component.html',
  styleUrls: ['./Content-Page.component.css']
})
export class ContentPageComponent implements OnInit {

  contentList:Contenido[] = []

  constructor(private contentService:FileService, private commentService:CommentService) { }

  ngOnInit() {

    this.getContents()

  }

  async getContents() {
    this.contentList= await this.contentService.getContents()
    this.getContentsComments()
  }

  getContentsComments(){
    this.contentList.forEach( async (it) => { it.comentarios = await this.commentService.getCommentsByFileId(it.idArchivo) } )
  }

}
