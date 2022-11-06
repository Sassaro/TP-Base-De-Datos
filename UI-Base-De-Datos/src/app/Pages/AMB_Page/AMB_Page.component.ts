import { ReplyService } from './../../Services/Reply.service';
import { CommentService } from './../../Services/Comment.service';
import { Comentario } from './../../../../Domain/Comentario';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AMB_Page',
  templateUrl: './AMB_Page.component.html',
  styleUrls: ['./AMB_Page.component.css']
})
export class AMB_PageComponent implements OnInit {

  commentList:Comentario[] = []

  constructor(private commentService:CommentService,private replyService:ReplyService , private route:ActivatedRoute ) { }

  ngOnInit() {
    this.getComments()
  }

  async getComments(){
    this.commentList = await this.commentService.getCommentsByFileId(this.getFileId())
    this.getCommentsReplies()
  }

  getCommentsReplies(){
    this.commentList.forEach( async (it) => { it.replicas = await this.replyService.getRepliesById(it.id) } )
  }

  getFileId(){
    return parseInt(this.route.snapshot.paramMap.get('id')!!)
  }

}
