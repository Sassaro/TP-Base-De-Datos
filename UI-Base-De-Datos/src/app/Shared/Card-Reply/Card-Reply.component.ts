import { Component, Input, OnInit } from '@angular/core';
import { Replica } from 'Domain/Replica';

@Component({
  selector: 'app-Card-Reply',
  templateUrl: './Card-Reply.component.html',
  styleUrls: ['./Card-Reply.component.css']
})
export class CardReplyComponent implements OnInit {

  @Input() replica!:Replica
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
