import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Date-Filter',
  templateUrl: './Date-Filter.component.html',
  styleUrls: ['./Date-Filter.component.css']
})
export class DateFilterComponent implements OnInit {

  fechaBuscada!:string
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchThis(){
    this.search.emit(this.fechaBuscada)
  }

}
