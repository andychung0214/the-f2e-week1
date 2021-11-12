import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
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

  animal: string;
  name: string;

  inputKeyword: string;
  keyword: string;
  searchUrl: string;
  seacrchingInputControl = new FormControl();

  @Input()
  bgBanner: string;

  displayBanner = "url(assets/images/home-banner.png)";

  data$: Observable<any>;

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
      console.log(value);
      this.inputKeyword = value;
    })
  }


  searchByKeyword(keyword: string): void{
    let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$format=JSON'
    if (this.inputKeyword) {
      url += `&$filter=contains(Name, '${this.inputKeyword}')`;
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
