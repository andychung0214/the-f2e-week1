import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {

  params1: string;
  params2: string;
  params3: string;
  city: string;
  httpURL: string;
  detailData;

  googleMapUrl: string;

  isShowDetail: true;

  nearAPI: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$spatialFilter=nearby(25.056400299072266%2C%20121.50760650634766%2C%20600)&$format=JSON';

  imgNotFoundURL:string;


  constructor(private route: ActivatedRoute, public datasvc: DataService) {
    this.imgNotFoundURL= 'assets/images/image-not-found.jpg';

    this.route.queryParams.subscribe(params => {
      this.params1 = params['id'];
      this.params2 = params['category'];
      this.params3 = params['city'];
      console.log('params1=', this.params1);
    })

    console.log('params2=', this.params2);

    this.city = this.GetCityByName(this.params3);

    switch (this.params2) {
      case 'popular-destination':
        this.httpURL = environment.basicTDX + "/v2/Tourism/ScenicSpot/"+ this.city +"?$filter=ScenicSpotID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        console.log
        break;
      case 'popular-food':
        this.httpURL = environment.basicTDX + "/v2/Tourism/Restaurant/"+ this.city +"?$filter=RestaurantID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        break;
      case 'recent-activities':
        this.httpURL = environment.basicTDX + "/v2/Tourism/Activity/"+ this.city +"?$filter=ActivityID%20eq%20'"+ this.params1 +"'&$top=1&$format=JSON";
        break;
      default:
        this.httpURL = environment.basicTDX + "/v2/Tourism/ScenicSpot/"+ this.city +"?$filter=ScenicSpotID%20eq%20"+ this.params1 +"&$top=1&$format=JSON";
        break;
    }

    this.datasvc.getDetailData(this.httpURL).subscribe(result => {
      this.detailData= result;
    })

  }

  ngOnInit() {
    this.googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.587744406794!2d135.77265191541818!3d34.96694007641959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f14384c5a19%3A0x5d22970f58bfde17!2z5LyP6KaL56i76I235aSn56S-IOWNg-acrOmzpeWxhQ!5e0!3m2!1szh-TW!2stw!4v1634718270716!5m2!1szh-TW!2stw';
  }

  /**
   * 藉由名稱取得城市
   * @param cityName 城市名稱
   * @returns
   */
  GetCityByName(cityName:string){
    let cityEnName = '';
    switch (cityName) {
      case '基隆市':
        cityEnName = 'Keelung';
        break;
      case '臺北市':
        cityEnName = 'Taipei';
        break;
      case '新北市':
        cityEnName = 'NewTaipei';
        break;
      case '桃園市':
        cityEnName = 'Taoyuan';
        break;
      case '新竹縣':
        cityEnName = 'HsinchuCounty';
        break;
      case '新竹市':
        cityEnName = 'Hsinchu';
        break;
      case '苗栗縣':
        cityEnName = 'MiaoliCounty';
        break;
      case '台中市':
        cityEnName = 'Taichung';
        break;
      case '彰化縣':
        cityEnName = 'ChanghuaCounty';
        break;
      case '南投縣':
        cityEnName = 'NantouCounty';
        break;
      case '雲林縣':
        cityEnName = 'YunlinCounty';
        break;
      case '嘉義縣':
        cityEnName = 'ChiayiCounty';
        break;
      case '嘉義市':
        cityEnName = 'Chiayi';
        break;
      case '臺南市':
        cityEnName = 'Tainan';
        break;
      case '高雄市':
        cityEnName = 'Kaohsiung';
        break;
      case '屏東縣':
        cityEnName = 'PingtungCounty';
        break;
        case '南投縣':
        cityEnName = 'NantouCounty';
        break;
      case '雲林縣':
        cityEnName = 'YunlinCounty';
        break;
      case '宜蘭縣':
        cityEnName = 'YilanCounty';
        break;
      case '花蓮縣':
        cityEnName = 'HualienCounty';
        break;
      case '連江縣':
        cityEnName = 'LienChiangCounty';
        break;
      case '金門縣':
        cityEnName = 'KinmenCounty';
        break;
      case '澎湖縣':
        cityEnName = 'PenghuCounty';
        break;
      default:
        break;
    }
    return cityEnName;
  }


  getActivityId(item: any): string {
    return item.ActivityID || item.ScenicSpotID || item.RestaurantID;
  }

}
