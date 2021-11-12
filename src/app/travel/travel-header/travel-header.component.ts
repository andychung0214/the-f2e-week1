import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MatDialogComponentComponent } from './../../shared-material/mat-dialog-component/mat-dialog-component.component';
import { Observable } from 'rxjs';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-travel-header',
  templateUrl: './travel-header.component.html',
  styleUrls: ['./travel-header.component.scss']
})
export class TravelHeaderComponent implements OnInit {

  data$: Observable<any>;

  destinationDatas;
  foodDatas;
  activitiesDatas;

  animal: string;
  name: string;

  inputKeyword: string;
  keyword: string;
  searchUrl: string;
  seacrchingInputControl = new FormControl();

  @Input()
  bgBanner: string;

  @Output()
  searchDestinationKeyword = new EventEmitter<any>();

  @Output()
  searchFoodKeyword = new EventEmitter<any>();

  @Output()
  searchActivityKeyword = new EventEmitter<any>();

  displayBanner = "url(assets/images/home-banner.png)";


  constructor(public dialog: MatDialog, public datasvc: DataService) { }

  ngOnInit() {
    if (this.bgBanner !== undefined && this.bgBanner !== "") {
      switch (this.bgBanner) {
        case 'popular-destination':
          this.displayBanner = "url(assets/images/popular-destination.png)";
          break;
        case 'popular-food':
          this.displayBanner = "url(assets/images/popular-food.png)";
          break;
        case 'recent-activities':
          this.displayBanner = "url(assets/images/recent-activities.png)";
          break;
        default:
          this.displayBanner = "url(assets/images/home-banner.png)";
          break;
      }
    }

    this.seacrchingInputControl.valueChanges.subscribe((value) => {
      // console.log(value);
      this.inputKeyword = value;
    })
  }


  searchByKeyword(keyword: string): void{
    let destinatioUrl = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON'
    let foodUrl = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON'
    let activitiesUrl = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON'

    if (this.inputKeyword) {
      destinatioUrl += `&$filter=contains(Name, '${this.inputKeyword}')`;
      this.datasvc.getKeywordData(destinatioUrl).subscribe(result => {
        this.destinationDatas = result;
      })

      foodUrl += `&$filter=contains(Name, '${this.inputKeyword}')`;
      this.datasvc.getKeywordData(foodUrl).subscribe(fResult => {
        this.foodDatas = fResult;
      })

      activitiesUrl += `&$filter=contains(Name, '${this.inputKeyword}')`;
      this.datasvc.getKeywordData(activitiesUrl).subscribe(aResult => {
        this.activitiesDatas = aResult;
      })

      this.searchDestinationKeyword.emit(this.destinationDatas);
      this.searchFoodKeyword.emit(this.foodDatas);
      this.searchActivityKeyword.emit(this.activitiesDatas);
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponentComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
