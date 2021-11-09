import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-header',
  templateUrl: './travel-header.component.html',
  styleUrls: ['./travel-header.component.scss']
})
export class TravelHeaderComponent implements OnInit {

  cities = [
    {id: '臺北市', name: 'Taipei'},
    {id: 'NewTaipei', name: '新北市'},
    {id: 'Taichung', name: '臺中市'}
  ]



  constructor() { }

  ngOnInit() {
    // this.
  }

}
