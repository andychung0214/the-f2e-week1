import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  run(){
    console.log('DataService');
  }

  getKeywordData(url: string){
    return this.http.get(url)
  }

  getDestindaionData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/ScenicSpot/Taipei?$top=8&$format=JSON')
  }

  getFoodData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/Restaurant/Taichung?$top=8&$format=JSON')
  }

  getEventsData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/Activity/Taipei?$top=8&$format=JSON')
  }

  getAllDestindaionData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/ScenicSpot/Taipei?&$format=JSON')
  }

  getAllFoodData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/Restaurant/Taichung?&$format=JSON')
  }

  getAllEventsData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/Activity/Taipei?&$format=JSON')
  }

  getDetailData(url: string){
    return this.http.get(url);
  }

  getData(){
    return this.http.get(environment.basicTDX + '/v2/Tourism/ScenicSpot?$top=30&$format=JSON');
  }

}
