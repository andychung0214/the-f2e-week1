import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {

  params1: string;
  params2: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.params1 = params['param1'];
      console.log('params1=', this.params1);
      this.params2 = params['param2'];
      console.log('params2=', this.params2);

    })

  }

  ngOnInit() {
  }

}
