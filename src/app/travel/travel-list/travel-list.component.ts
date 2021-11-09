import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  data$ : Observable<any>;

  destinationDatas;
  foodDatas;
  activitiesDatas;



  destinationList = [];

  getData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON');
  }


  constructor(private http: HttpClient) {
    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=8&$format=JSON').subscribe(result => {
      this.destinationDatas = result;
    })
    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taichung?$top=8&$format=JSON').subscribe(result => {
      this.foodDatas = result;
    })
    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$top=8&$format=JSON').subscribe(result => {
      this.activitiesDatas = result;
    })
  }

  ngOnInit() {
    // this.getData().subscribe(result =>{
    //   this.data$ = this.getData();
    //   console.log(this.data$);
    // })
  }

}
