import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HmacSHA1, enc } from 'crypto-js';


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

  getData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON');
  }


  constructor(private http: HttpClient) {

    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=8&$format=JSON',this._headers).subscribe(result => {
      console.log('headers=', this._headers)
      this.destinationDatas = result;
    })
    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taichung?$top=8&$format=JSON',this._headers).subscribe(result => {
      this.foodDatas = result;
    })
    http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$top=8&$format=JSON',this._headers).subscribe(result => {
      this.activitiesDatas = result;
    })
  }

  ngOnInit() {
    // this.getData().subscribe(result =>{
    //   this.data$ = this.getData();
    //   console.log(this.data$);
    // })
  }

}
