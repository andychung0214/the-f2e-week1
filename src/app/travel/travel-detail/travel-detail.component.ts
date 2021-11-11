import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { HmacSHA1, enc } from 'crypto-js';


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

  getAuthorizationHeader() {
    var AppID = '7a3f2fb9ff044bfc90db2ea7880a4a35';
    var AppKey = '2upS4qQV2lxXNkviX2So4kpiPWQ';

    var today = new Date();
    var GMTString = today.toUTCString();
    var hmacString = HmacSHA1("x-date: " + GMTString, AppKey).toString(enc.Base64);

    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + hmacString + '\"';
    return { 'Authorization': Authorization, 'x-date': GMTString};
  }

  private _headers = { headers: this.getAuthorizationHeader() };

  constructor(private route: ActivatedRoute, private http: HttpClient) {

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

    http.get(this.httpURL ,this._headers).subscribe(result => {
      console.log('headers=', this._headers)
      this.detailData= result;
    })
  }

  ngOnInit() {
    this.googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.587744406794!2d135.77265191541818!3d34.96694007641959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f14384c5a19%3A0x5d22970f58bfde17!2z5LyP6KaL56i76I235aSn56S-IOWNg-acrOmzpeWxhQ!5e0!3m2!1szh-TW!2stw!4v1634718270716!5m2!1szh-TW!2stw';

  }

}
