import { ReportEntity } from './../../../../Domain/ReportEntity';
import { ReportService } from './../../Services/Report.service';
import { Component, OnInit } from '@angular/core';
import { faLink } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-Report-Table',
  templateUrl: './Report-Table.component.html',
  styleUrls: ['./Report-Table.component.css']
})
export class ReportTableComponent implements OnInit {

  tableItems!:ReportEntity[]
  faLink = faLink

  constructor(private reportService:ReportService) { }

  ngOnInit() {
    this.getReport()
  }

  async getReport(){
    this.tableItems = await this.reportService.getReportItems()
  }

}
