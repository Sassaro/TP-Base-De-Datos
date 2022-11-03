import { Replica } from './../../../../Domain/Replica';
import { Comentario } from './../../../../Domain/Comentario';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Card-Commentary',
  templateUrl: './Card-Commentary.component.html',
  styleUrls: ['./Card-Commentary.component.css']
})
export class CardCommentaryComponent implements OnInit {

  @Input() comentario:Comentario = new Comentario(1,"Jose","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Critica Constructiva",[respuesta1,respuestaConRespuestas2,respuestaConRespuestas])
  isOn:boolean = false
  isOnAddReply:boolean = false

  constructor() { }

  ngOnInit() {
  }

  showReplies(){
    this.isOn = !this.isOn
  }

  showAddReplyMenu(){
    this.isOnAddReply = !this.isOnAddReply
  }

}

const respuesta1 = new Replica(1,"Lorem ipsum dolor sit amet, consectetur","Pedro",[])
const respuesta2 = new Replica(1,"Lorem ipsum dolor sit amet, consectetur","Pepe",[])
const respuesta3 = new Replica(1,"Lorem ipsum dolor sit amet, consectetur","Tomas",[])
const respuestaConRespuestas = new Replica(1,"Lorem ipsum dolor sit amet, consectetur","Zack",[respuesta1,respuesta2,respuesta3])
const respuestaConRespuestas2 = new Replica(1,"Lorem ipsum dolor sit amet, consectetur","Zack",[respuesta1,respuesta2,respuesta3,respuestaConRespuestas])