import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 result :any= []
  size:string = 'small';
 @Output()
  weeklyData=[
      {
          tittle: 'The North Area',
          color: '',
          data: [
            { name: 'Oil', color:'red' , value: 27 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 37 }]},
              { name: 'Natural Gas', color:'blue' , value: 60 ,result: [ { name: 'Data Completeness', value: 80 }, { name: 'Working Team', value: 40 },{ name: 'Number Of Issues', value: 54 }] },
              {name: 'Electric', color:'green' , value: 30 ,result: [ { name: 'Data Completeness', value: 90 }, { name: 'Working Team', value: 45 },{ name: 'Number Of Issues', value: 65 }]},
              { name: 'Gas Station', color:'brown' , value: 79 ,result: [ { name: 'Data Completeness', value: 65 }, { name: 'Working Team', value: 29 },{ name: 'Number Of Issues', value: 70 }] },
              { name: 'Others', color:'yellow' , value: 67 ,result: [ { name: 'Data Completeness', value: 22 }, { name: 'Working Team', value: 87  },{ name: 'Number Of Issues', value: 20 }]}
          ],

      },
      {
          tittle: 'The West Area', color: '',
          data: [
              { name: 'Oil', color:'red' , value: 27 ,result: [ { name: 'Data Completeness', value: 90 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 59 }]},
              { name: 'Natural Gas', color:'blue' , value: 60 ,result: [ { name: 'Data Completeness', value: 50 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 64 }]},
              {name: 'Electric', color:'green' , value: 69 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 56 }]},
              { name: 'Gas Station', color:'brown' , value: 59 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 35 }]},
              { name: 'Others', color:'yellow' , value: 47 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 78 }]}
          ]

      },
      {
          tittle: 'The East Area', color: '',
          data: [
              { name: 'Oil', color:'red' , value: 60 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 100 }]},
              { name: 'Natural Gas', color:'blue' , value: 78 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 89 }] },
              {name: 'Electric', color:'green' , value: 57 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 70 }]},
              { name: 'Gas Station', color:'brown' , value: 36 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 67 }]},
              { name: 'Others', color:'yellow' , value: 37 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 57 }]}
          ],
      },
      {
          tittle: 'The South Area', color: '',
          data: [
              { name: 'Oil', color:'red' , value: 10 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 70 }]},
              { name: 'Natural Gas', color:'blue' , value: 70 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 50 }]},
              {name: 'Electric', color:'green' , value: 60 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 90 }]},
              { name: 'Gas Station', color:'brown' , value: 29 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 70 }]},
              { name: 'Others', color:'yellow' , value: 47 ,result: [ { name: 'Data Completeness', value: 70 }, { name: 'Working Team', value: 60 },{ name: 'Number Of Issues', value: 30 }]}
          ],
      },
      {
          tittle: 'The Middle Area', color: '',
          data: [
              { name: 'Oil', color:'red' , value: 25 ,result: [ { name: 'Data Completeness', value: 25 }, { name: 'Working Team', value: 65 },{ name: 'Number Of Issues', value: 78 }]},
              { name: 'Natural Gas', color:'blue' , value: 36,result: [ { name: 'Data Completeness', value: 37 }, { name: 'Working Team', value: 66 },{ name: 'Number Of Issues', value: 37 }] },
              {name: 'Electric', color:'green' , value: 64 ,result: [ { name: 'Data Completeness', value: 45 }, { name: 'Working Team', value: 67 },{ name: 'Number Of Issues', value: 30 }]},
              { name: 'Gas Station', color:'brown' , value: 59 ,result: [ { name: 'Data Completeness', value: 75 }, { name: 'Working Team', value: 68 },{ name: 'Number Of Issues', value: 80 }]},
              { name: 'Others', color:'yellow' , value: 77 ,result: [ { name: 'Data Completeness', value: 79 }, { name: 'Working Team', value: 69 },{ name: 'Number Of Issues', value: 35 }]}
          ],

      }];






  constructor() { }

  ngOnInit() {
  }
  onResultCreated(event:any){
    console.log(event);

    this.result  =event
  }

}
