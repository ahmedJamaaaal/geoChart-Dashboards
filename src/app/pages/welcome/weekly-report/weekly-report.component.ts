import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {
  @Input() chartsInfo:any=[  ]
  @Output() resultCreated = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.chartsInfo);

  }
  viewDetails(item:any){
    console.log(item);
    this.resultCreated.emit(item);
  }

}
