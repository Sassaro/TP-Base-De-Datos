import { ReplyService } from 'src/app/Services/Reply.service';
import { Replica } from './../../../../Domain/Replica';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Add-Reply',
  templateUrl: './Add-Reply.component.html',
  styleUrls: ['./Add-Reply.component.css']
})
export class AddReplyComponent implements OnInit {

  @Input() isOn:Boolean = false
  @Input() replyList!:Replica[]
  @Input() idReplicaPadre!:number
  @Input() idComentarioPadre!:number
  @Input() edit:boolean = false
  @Input() replyToEdit!:Replica
  @Output() onClick = new EventEmitter<boolean>();
  reply:Replica = new Replica(-1,"","",[],0,0)
  

  constructor(private replyService:ReplyService) { }

  ngOnInit() {
    this.reply.idComentario = this.idComentarioPadre
    this.reply.idreplica = this.idReplicaPadre

    if(this.edit){
      this.reply = this.replyToEdit
    }

  }

  async saveReply(){

    if(!this.validateReply()){
      const replica = this.deepCopy(this.reply)

      this.replyService.addReply(this.reply)
      this.replyList.push(replica)
      
      this.resetInputs()
    }else{
      throw new Error("No se puede ingresar un comentario sin apodo o vacio")
    }
  }

  async updateReply(){
    await this.replyService.updateReply(this.reply,this.reply.id)
    this.close()
  }

  close(){
    this.onClick.emit(false)
  }

  resetInputs(){
    this.reply.apodo = ""
    this.reply.detalle = ""
  }

  validateReply(){
    return this.reply.apodo == "" || this.reply.detalle == ""
  }

  deepCopy(replica:Replica):Replica{
    const aux = JSON.stringify(replica)
    return JSON.parse(aux)
  }

}
