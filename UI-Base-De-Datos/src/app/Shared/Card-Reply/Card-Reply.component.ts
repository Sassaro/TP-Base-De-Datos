import { Component, Input, OnInit } from '@angular/core';
import { Replica } from 'Domain/Replica';
import { ReplyService } from 'src/app/Services/Reply.service';

@Component({
  selector: 'app-Card-Reply',
  templateUrl: './Card-Reply.component.html',
  styleUrls: ['./Card-Reply.component.css']
})
export class CardReplyComponent implements OnInit {

  @Input() replica!:Replica
  @Input() idReplicaPadre!:number
  @Input() idComentarioPadre!:number
  isOn:boolean = false
  isOnAddReply:boolean = false

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

}
