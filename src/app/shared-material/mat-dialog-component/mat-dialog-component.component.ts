import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Animal {
  name: string;
  sound: string;
}

export interface Category{
  value: string;
  viewValue: string;
}

export interface Area{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mat-dialog-component',
  templateUrl: './mat-dialog-component.component.html',
  styleUrls: ['./mat-dialog-component.component.scss']
})
export class MatDialogComponentComponent implements OnInit {

  selectedCategory: string;

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  categoryControl = new FormControl('', Validators.required);
  taipeiControl = new FormControl('', Validators.required);
  centralControl = new FormControl('', Validators.required);
  southControl = new FormControl('', Validators.required);
  eastControl = new FormControl('', Validators.required);
  outIslandControl = new FormControl('', Validators.required);

  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'}
  ];

  categoryList: Category[] = [
    { value: '熱門景點', viewValue: '熱門景點' },
    { value: '熱門美食', viewValue: '熱門美食' },
    { value: '近期活動', viewValue: '近期活動' }
  ]

  taipeiList: Area[] = [
    { value: '基隆市', viewValue: '基隆市' },
    { value: '臺北市', viewValue: '臺北市' },
    { value: '新北市', viewValue: '新北市' },
    { value: '桃園市', viewValue: '桃園市' },
    { value: '新竹縣', viewValue: '新竹縣' },
    { value: '新竹市', viewValue: '新竹市' },
  ];

  centralList: Area[] = [
    { value: '苗栗縣', viewValue: '苗栗縣' },
    { value: '台中市', viewValue: '台中市' },
    { value: '彰化縣', viewValue: '彰化縣' },
    { value: '南投縣', viewValue: '南投縣' },
    { value: '雲林縣', viewValue: '雲林縣' }
  ];

  southList: Area[] = [
    { value: '嘉義縣', viewValue: '嘉義縣' },
    { value: '嘉義市', viewValue: '嘉義市' },
    { value: '臺南市', viewValue: '臺南市' },
    { value: '高雄市', viewValue: '高雄市' },
    { value: '屏東縣', viewValue: '屏東縣' }
  ];

  eastList: Area[] = [
    { value: '宜蘭縣', viewValue: '宜蘭縣' },
    { value: '花蓮縣', viewValue: '花蓮縣' },
    { value: '臺東縣', viewValue: '臺東縣' }
  ];

  outIslandList: Area[] = [
    { value: '連江縣', viewValue: '連江縣' },
    { value: '金門縣', viewValue: '金門縣' },
    { value: '澎湖縣', viewValue: '澎湖縣' }
  ];

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  searchByKeyword(keyword: string):void{
    console.log('this.selectedCategory=',this.selectedCategory)
    this.dialogRef.close();

  }

}
