import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

interface Animal {
  name: string;
  sound: string;
}

interface Category{
  value: string;
  name: string;
}

interface Area{
  value: string;
  name: string;
}

@Component({
  selector: 'app-mat-dialog-component',
  templateUrl: './mat-dialog-component.component.html',
  styleUrls: ['./mat-dialog-component.component.scss']
})
export class MatDialogComponentComponent implements OnInit {

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
    {value: '熱門景點', name: '熱門景點'},
    {value: '熱門美食', name: '熱門美食'},
    {value: '近期活動', name: '近期活動'}
  ]

  taipeiList: Area[] =[
      {value: '台北', name: '台北'},
      {value: '新北', name: '新北'},
      {value: '基隆', name: '基隆'},
      {value: '桃園', name: '桃園'},
      {value: '竹市', name: '竹市'},
      {value: '竹縣', name: '竹縣'},
      {value: '宜蘭', name: '宜蘭'}
  ];

  centralList: Area[] =[
    {value: '苗栗', name: '苗栗'},
    {value: '台中', name: '台中'},
    {value: '彰化', name: '彰化'},
    {value: '南投', name: '南投'},
    {value: '雲林', name: '雲林'}
];

southList: Area[] =[
  {value: '嘉市', name: '嘉市'},
  {value: '嘉縣', name: '嘉縣'},
  {value: '台南', name: '台南'},
  {value: '高雄', name: '高雄'},
  {value: '屏東', name: '屏東'},
  {value: '澎湖', name: '澎湖'}
];

eastList: Area[] =[
  {value: '花蓮', name: '花蓮'},
  {value: '臺東', name: '臺東'}
];

outIslandList: Area[] =[
  {value: '金門', name: '金門'},
  {value: '連江', name: '連江'}
];

  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  searchByKeyword(keyword: string):void{
    this.dialogRef.close();

  }

}
