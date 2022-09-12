import { Component, OnInit,Output } from '@angular/core';
import {
  ChartReadyEvent,
  ChartErrorEvent,
  ChartSelectEvent,
  ChartMouseOverEvent,
  ChartMouseOutEvent,
  RegionClickEvent,
  GoogleChartInterface,
  GoogleChartsControlInterface,
  GoogleChartsDashboardInterface,
  GoogleChartEditor,
  GoogleChartWrapper,
  GoogleChartType,
} from 'ng2-google-charts';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  states_data = [['State','COVID-Confirmed Cases']];
dataTable=[
  ['CODE','NAME', 'progress %'],
  ['SA-01','Riyadh',	10],
  ['SA-02',	'Mecca',25],
  ['SA-03', 'Medina',30],
  ['SA-05', 'AlQassim',40],
  ['SA-04', 'Hofuf',50],
  ['SA-06', 'Hayil',60],
  ['SA-07', 'Tabuk',18],
  ['SA-08', 'Al Ḥudud ash Shamaliyah',80],
  
  
  ['SA-11', 'AlBaha',90],
  ['SA-12', 'Aljwaf',79],
  ['SA-14', 'Asir ABaha',100],


 ];
  mapReady=false;
   selectEvent!: ChartSelectEvent;
   @Output() regionClickEvent!: any;



 public geoChart: GoogleChartInterface = {
    chartType: GoogleChartType.GeoChart,
    dataTable: this.dataTable,
    //dataTable: this.states_data,
    options: {
      firstRowIsData:true,
      region: 'SA', // saduia arabia
      colorAxis: {colors: ['#00F919', '#0FFFE4', '#1FA20F','#156930','#033E3B','#ffc107', '#fd7e14', '#dc3545']},
      resolution: 'provinces',
      displayMode: 'region' ,
      magnifyingGlass : {enable: true, zoomFactor: 12},
      sizeAxis: {minValue: 0,  maxSize: 200},
      height:450
      // datalessRegionColor: '#f8bbd0',
      // defaultColor: '#f5f5f5',
      // backgroundColor: '#00000',
      // datalessRegionColor: '#00000',
      // defaultColor: '#00000',
      
      // datalessRegionColor: {colors: ['#ffc107', '#fd7e14', '#dc3545']},
      // backgroundColor: '#9cf',
      // datalessRegionColor: '#f8f9fa',
      // defaultColor: '#6c757d',
    }
  };



  constructor(private chartEditor: GoogleChartEditor) {}

  ngOnInit() {
   
    this.mapReady=true;
    console.log(this.states_data);
    
  }
  
  



  public error(event: ChartErrorEvent) {
    console.error('Error: ' + event);
  }
  public ChartReadyEvent(event: ChartReadyEvent) {
    console.error('Error: ' + event);
    this.mapReady=true;
  }

  public select(event: ChartSelectEvent) {
    console.log('event select =>'+event);

    this.selectEvent = event;
  }


  public geoChartRegionClick(event: RegionClickEvent) {
 
     this.regionClickEvent= this.dataTable.find(element => element[0] === event.region);

   
    
    
  }


}
