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
    {value: '熱門景點', viewValue: '熱門景點'},
    {value: '熱門美食', viewValue: '熱門美食'},
    {value: '近期活動', viewValue: '近期活動'}
  ]

  taipeiList: Area[] =[
      {value: '台北', viewValue: '台北'},
      {value: '新北', viewValue: '新北'},
      {value: '基隆', viewValue: '基隆'},
      {value: '桃園', viewValue: '桃園'},
      {value: '竹市', viewValue: '竹市'},
      {value: '竹縣', viewValue: '竹縣'},
      {value: '宜蘭', viewValue: '宜蘭'}
  ];

  centralList: Area[] =[
    {value: '苗栗', viewValue: '苗栗'},
    {value: '台中', viewValue: '台中'},
    {value: '彰化', viewValue: '彰化'},
    {value: '南投', viewValue: '南投'},
    {value: '雲林', viewValue: '雲林'}
];

southList: Area[] =[
  {value: '嘉市', viewValue: '嘉市'},
  {value: '嘉縣', viewValue: '嘉縣'},
  {value: '台南', viewValue: '台南'},
  {value: '高雄', viewValue: '高雄'},
  {value: '屏東', viewValue: '屏東'},
  {value: '澎湖', viewValue: '澎湖'}
];

eastList: Area[] =[
  {value: '花蓮', viewValue: '花蓮'},
  {value: '臺東', viewValue: '臺東'}
];

outIslandList: Area[] =[
  {value: '金門', viewValue: '金門'},
  {value: '連江', viewValue: '連江'}
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
