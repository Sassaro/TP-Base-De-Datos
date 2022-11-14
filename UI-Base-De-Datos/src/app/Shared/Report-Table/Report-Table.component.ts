import { ReportEntity } from './../../../../Domain/ReportEntity';
import { ReportService } from './../../Services/Report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Report-Table',
  templateUrl: './Report-Table.component.html',
  styleUrls: ['./Report-Table.component.css']
})
export class ReportTableComponent implements OnInit {

  tableItems!:ReportEntity[]

  constructor(private reportService:ReportService) { }

  ngOnInit() {
    this.getReport()
  }

  async getReport(){
    this.tableItems = await this.reportService.getReportItems()
  }

}
