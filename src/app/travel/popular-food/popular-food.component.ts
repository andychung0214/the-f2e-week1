import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-popular-food',
  templateUrl: './popular-food.component.html',
  styleUrls: ['./popular-food.component.scss']
})
export class PopularFoodComponent implements OnInit {
  foodDatas$: Observable<any>;
  imgNotFoundURL:string;

  constructor(public datasvc: DataService) {
    this.imgNotFoundURL= 'assets/images/image-not-found.jpg';
  }

  ngOnInit() {
    this.foodDatas$ = this.datasvc.getAllFoodData();
  }

  doSearchFood(searchFoodata){
    this.foodDatas$ = searchFoodata;
  }

}
