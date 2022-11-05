import { Replica } from './../../../../Domain/Replica';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Add-Reply',
  templateUrl: './Add-Reply.component.html',
  styleUrls: ['./Add-Reply.component.css']
})
export class AddReplyComponent implements OnInit {

  @Input() isOn:Boolean = false
  @Input() replyList!:Replica[]
  reply:Replica = new Replica(-1,"","",[])
  

  constructor() { }

  ngOnInit() {
  }

  saveReply(){

    if(!this.validateReply()){
      const aux = JSON.stringify(this.reply)
      const aux2:Replica = JSON.parse(aux)
      this.replyList.push(aux2)
      this.resetInputs()
    }else{
      throw new Error("No se puede ingresar un comentario sin apodo o vacio")
    }
  }

  resetInputs(){
    this.reply.apodo = ""
    this.reply.detalle = ""
  }

  validateReply(){
    return this.reply.apodo == "" || this.reply.detalle == ""
  }

}