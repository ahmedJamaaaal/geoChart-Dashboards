import { Component, OnInit,Input ,SimpleChanges, OnChanges} from '@angular/core';
import { Data } from './data';
@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit , OnChanges  {
@Input() region:any ;
basicTabs = [
  {name:"Gas Station"},
  {name:"Gas Fuel Station"},
  {name:"Liquefied Gas Station"}
];
data=Data;
charData:any =[];
info:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.region);
    
    
     console.log(this.charData);
     
     
     
  }

//   ngOnChanges(changes: any) {
   
//     ///this.doSomething(changes.categoryId.currentValue);
//     this.charData= this.data.find(element => element.cityCode === this.region[0]);
//     console.log(this.charData);
//     // You can also use categoryId.previousValue and 
//     // categoryId.firstChange for comparing old and new values
    
// }
ngOnChanges(changes: any): void {
  const searchChar:any = changes.region;
  const test= Array.isArray(searchChar.currentValue);
  if(test){
  const item:any= searchChar.currentValue[0];
  const charData:any= this.data.find(element => element.cityCode === item
    
    );
   if(charData !== null){
    this.charData  = charData.data;
    this.info  = charData;
    console.log(this.info);
    
   
  }}
    
}

}
