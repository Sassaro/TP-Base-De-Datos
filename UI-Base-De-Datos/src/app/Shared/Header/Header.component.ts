import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title!:string;
  @Input() url!:string;
  @Input() show:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
