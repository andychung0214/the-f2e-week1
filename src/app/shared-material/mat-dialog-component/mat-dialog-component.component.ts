import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

export interface Category{
  value: string;
  viewValue: string;
}

export interface Area{
  value: string;
  viewValue: string;
}

export interface iTaiwan{
  category: object;
  city: object;
}

@Component({
  selector: 'app-mat-dialog-component',
  templateUrl: './mat-dialog-component.component.html',
  styleUrls: ['./mat-dialog-component.component.scss']
})
export class MatDialogComponentComponent implements OnInit {

  selectedCategory: string;

  categoryControl = new FormControl('', Validators.required);
  taipeiControl = new FormControl('', Validators.required);
  centralControl = new FormControl('', Validators.required);
  southControl = new FormControl('', Validators.required);
  eastControl = new FormControl('', Validators.required);
  outIslandControl = new FormControl('', Validators.required);

  categoryList: Category[] = [
    { value: 'popular-destination', viewValue: '熱門景點' },
    { value: 'popular-food', viewValue: '熱門美食' },
    { value: 'recent-activities', viewValue: '近期活動' }
  ]

  taipeiList: Area[] = [
    { value: 'Keelung', viewValue: '基隆市' },
    { value: 'Taipei', viewValue: '臺北市' },
    { value: 'NewTaipei', viewValue: '新北市' },
    { value: 'Taoyuan', viewValue: '桃園市' },
    { value: 'HsinchuCounty', viewValue: '新竹縣' },
    { value: 'Hsinchu', viewValue: '新竹市' },
  ];

  centralList: Area[] = [
    { value: 'MiaoliCounty', viewValue: '苗栗縣' },
    { value: 'Taichung', viewValue: '台中市' },
    { value: 'ChanghuaCounty', viewValue: '彰化縣' },
    { value: 'NantouCounty', viewValue: '南投縣' },
    { value: 'YunlinCounty', viewValue: '雲林縣' }
  ];

  southList: Area[] = [
    { value: 'ChiayiCounty', viewValue: '嘉義縣' },
    { value: 'Chiayi', viewValue: '嘉義市' },
    { value: 'Tainan', viewValue: '臺南市' },
    { value: 'Kaohsiung', viewValue: '高雄市' },
    { value: 'PingtungCounty', viewValue: '屏東縣' }
  ];

  eastList: Area[] = [
    { value: 'YilanCounty', viewValue: '宜蘭縣' },
    { value: 'HualienCounty', viewValue: '花蓮縣' },
    { value: 'TaitungCounty', viewValue: '臺東縣' }
  ];

  outIslandList: Area[] = [
    { value: 'LienChiangCounty', viewValue: '連江縣' },
    { value: 'KinmenCounty', viewValue: '金門縣' },
    { value: 'PenghuCounty', viewValue: '澎湖縣' }
  ];


  filterList: iTaiwan[]= [
    {category: this.categoryList, city: this.categoryList }
  ]

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public taiwanData: iTaiwan
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  /**
   * 以關鍵字做查詢
   * @param keyword 關鍵字
   */
  searchByKeyword(keyword: string):void{
    console.log('this.selectedCategory=',this.selectedCategory)
    this.dialogRef.close();

  }

}
