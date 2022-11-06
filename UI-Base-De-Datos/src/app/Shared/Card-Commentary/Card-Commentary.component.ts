import { Replica } from './../../../../Domain/Replica';
import { Comentario } from './../../../../Domain/Comentario';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Card-Commentary',
  templateUrl: './Card-Commentary.component.html',
  styleUrls: ['./Card-Commentary.component.css']
})
export class CardCommentaryComponent implements OnInit {

  @Input() comentario!:Comentario
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