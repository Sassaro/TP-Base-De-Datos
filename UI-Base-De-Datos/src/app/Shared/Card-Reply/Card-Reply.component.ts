import { mostrarError } from 'Domain/GlobalErrorHandler';
import { Component, Input, OnInit } from '@angular/core';
import { Replica } from 'Domain/Replica';
import { ReplyService } from 'src/app/Services/Reply.service';
import { faTrashCan,faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-Card-Reply',
  templateUrl: './Card-Reply.component.html',
  styleUrls: ['./Card-Reply.component.css']
})
export class CardReplyComponent implements OnInit {

  @Input() replica!:Replica
  @Input() idReplicaPadre!:number
  @Input() idComentarioPadre!:number
  @Input() replyList!:Replica[]
  isOn:boolean = false
  isOnAddReply:boolean = false
  editing:boolean = false
  faTrashCan=faTrashCan
  faPen=faPen
  errors = []

  constructor(private replyService:ReplyService) { }

  ngOnInit() {

    this.getRepliesOfReplies()

  }

  async getRepliesOfReplies() {
    this.replica.replicas = await this.replyService.getRepliesByReplyId(this.replica.id)
  }

  showReplies(){
    this.isOn = !this.isOn
  }

  showAddReplyMenu(){
    this.isOnAddReply = !this.isOnAddReply
  }

  showEditReplyMenu(){
    this.editing = !this.editing
  }

  async deleteReply(){
    if(this.replica.replicas.length == 0){
      await this.replyService.deleteReply(this.replica.id)
      const index = this.replyList.indexOf(this.replica, 0);
        if (index > -1) {
      this.replyList.splice(index, 1);
      }
    }else{
      mostrarError(this,new Error("No se puede borrar una replica con replicas"))
    }
  }

  buttonText(){
    if(this.isOn){
      return "Ocultar Replicas"
    }else{
      return "Mostrar Replicas"
    }
  }

}
