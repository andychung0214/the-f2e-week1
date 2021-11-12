import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {

  params1: string;
  params2: string;
  httpURL: string;
  detailData;

  googleMapUrl: string;

  isShowDetail: true;

  nearAPI: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$spatialFilter=nearby(25.056400299072266%2C%20121.50760650634766%2C%20600)&$format=JSON';


  constructor(private route: ActivatedRoute, public datasvc: DataService) {

    this.route.queryParams.subscribe(params => {
      this.params1 = params['id'];
      this.params2 = params['category'];
      console.log('params1=', this.params1);
    })

    console.log('params2=', this.params2);

    switch (this.params2) {
      case 'popular-destination':
        this.httpURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$filter=ID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        console.log
        break;
      case 'popular-food':
        this.httpURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taichung?$filter=ID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        break;
      case 'recent-activities':
        this.httpURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$filter=ID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        break;
      default:
        this.httpURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$filter=ID%20eq%20"+ this.params1 +"&$top=1&$format=JSON";
        break;
    }

    this.datasvc.getDetailData(this.httpURL).subscribe(result => {
      this.detailData= result;
    })

  }

  ngOnInit() {
    this.googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.587744406794!2d135.77265191541818!3d34.96694007641959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f14384c5a19%3A0x5d22970f58bfde17!2z5LyP6KaL56i76I235aSn56S-IOWNg-acrOmzpeWxhQ!5e0!3m2!1szh-TW!2stw!4v1634718270716!5m2!1szh-TW!2stw';
  }

}
