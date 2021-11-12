import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enc, HmacSHA1 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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

  run(){
    console.log('DataService');
  }

  getKeywordData(url: string){
    return this.http.get(url,this._headers)
  }

  getDestindaionData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=8&$format=JSON',this._headers)
  }

  getFoodData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taichung?$top=8&$format=JSON',this._headers)
  }

  getEventsData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$top=8&$format=JSON',this._headers)
  }

  getAllDestindaionData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?&$format=JSON',this._headers)
  }

  getAllFoodData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taichung?&$format=JSON',this._headers)
  }

  getAllEventsData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?&$format=JSON',this._headers)
  }

  getDetailData(url: string){
    return this.http.get(url, this._headers);
  }

  getData(){
    return this.http.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON');
  }

}
