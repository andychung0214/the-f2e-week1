import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss']
})
export class RecentActivitiesComponent implements OnInit {
  activitiesDatas$: Observable<any>;
  imgNotFoundURL:string;

  constructor(public datasvc: DataService) {
    this.imgNotFoundURL= 'assets/images/image-not-found.jpg';
  }

  ngOnInit() {
    this.activitiesDatas$ = this.datasvc.getAllEventsData();
  }

  doSearchActivity(searchActivityData){
    this.activitiesDatas$ = searchActivityData;
  }

}
