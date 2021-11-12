import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';


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


  constructor(public datasvc: DataService) {

    this.datasvc.getDestindaionData().subscribe(result => {
      this.destinationDatas = result;
    })

    this.datasvc.getFoodData().subscribe(result => {
      this.foodDatas = result;
    })

    this.datasvc.getEventsData().subscribe(result => {
      this.activitiesDatas = result;
    })
  }

  ngOnInit() {}

  doSearchDestinationDatas(searchData){
    this.destinationDatas = searchData;
  }

  doSearchFood(searchFoodata){
    this.foodDatas = searchFoodata;
  }

  doSearchActivity(searchActivityData){
    this.activitiesDatas = searchActivityData;
  }

}
