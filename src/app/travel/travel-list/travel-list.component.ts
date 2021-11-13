import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';


@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})

export class TravelListComponent implements OnInit {

  data$ : Observable<any>;
  imgNotFoundURL:string;


  destinationDatas$:Observable<any>;
  foodDatas$: Observable<any>;
  activitiesDatas$: Observable<any>;

  constructor(public datasvc: DataService) {
    this.imgNotFoundURL= 'assets/images/image-not-found.jpg';

  }

  ngOnInit() {

    this.destinationDatas$ = this.datasvc.getDestindaionData();
    this.foodDatas$ =   this.datasvc.getFoodData();
    this.activitiesDatas$ = this.datasvc.getEventsData();
  }


  doSearchDestinationDatas(searchData){
    this.destinationDatas$ = searchData;
  }

  doSearchFood(searchFoodata){
    this.foodDatas$ = searchFoodata;
  }

  doSearchActivity(searchActivityData){
    this.activitiesDatas$ = searchActivityData;
  }

}
