import { Component, Input, OnInit } from '@angular/core';
import { Contenido } from 'Domain/Contenido';

@Component({
  selector: 'app-Content-Card',
  templateUrl: './Content-Card.component.html',
  styleUrls: ['./Content-Card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() contenido!:Contenido

  constructor() { }

  ngOnInit() {
  }

}
