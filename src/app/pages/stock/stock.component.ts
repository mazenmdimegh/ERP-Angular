import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Chart from 'chart.js';
import { Observable } from 'rxjs';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {
  ajouter: boolean = false;
  selectedFiles: FileList;
  currentFile: File;
  fileInfos: Observable<any>;

  Patrimoines: any;
  spinner: any;
  Editt: any = false;
  selectedPartimoine: any;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  form: any = {
    titre: null,
    type: null,
    lieu: null,
    prix: null,
    description: null,
  };
  profileForm = new FormGroup({
    désignation: new FormControl(''),
    reference: new FormControl(''),
    prixV: new FormControl(''),
    quantite: new FormControl(''),
    prixE: new FormControl(''),
  });
  onSubmit() {
    if(this.profileForm.valid){
      console.log("valid")
      console.log(this.profileForm.value)
    }else{
      console.log("invalid")
    } 
  }
  ngOnInit() {
  }
  add() {
    this.ajouter = !this.ajouter
    console.log("addddddddd")
    console.log(this.ajouter)

  }
  sub(){}
}
