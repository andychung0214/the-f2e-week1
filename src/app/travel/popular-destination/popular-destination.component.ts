import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-popular-destination',
  templateUrl: './popular-destination.component.html',
  styleUrls: ['./popular-destination.component.scss']
})
export class PopularDestinationComponent implements OnInit {
  destinationDatas$:Observable<any>;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
    this.destinationDatas$ = this.datasvc.getAllDestindaionData();

  }

  doSearchDestinationDatas(searchData){
    console.log('searchData=',searchData)
    this.destinationDatas$ = searchData;
  }

}
