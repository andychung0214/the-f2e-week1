import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-header',
  templateUrl: './travel-header.component.html',
  styleUrls: ['./travel-header.component.scss']
})
export class TravelHeaderComponent implements OnInit {

  // cities = [
  //   {id: '臺北市', name: 'Taipei'},
  //   {id: 'NewTaipei', name: '新北市'},
  //   {id: 'Taichung', name: '臺中市'}
  // ]

  @Input()
  bgBanner: string;

  displayBanner= "url(assets/images/home-banner.png)";
  // bgURL= "color: green";



  constructor() { }

  ngOnInit() {
    if (this.bgBanner !== undefined && this.bgBanner !== "") {
      switch (this.bgBanner) {
        case 'popular-destination':
          this.displayBanner = "url(assets/images/popular-destination.png)";
          break;
        case 'popular-food':
          this.displayBanner = "url(assets/images/popular-food.png)";
          break;
        case 'recent-activities':
          this.displayBanner = "url(assets/images/recent-activities.png)";
          break;
        default:
          this.displayBanner = "url(assets/images/home-banner.png)";
          break;
      }
  }
}
}
