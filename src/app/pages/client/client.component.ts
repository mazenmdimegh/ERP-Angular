import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Observable } from 'rxjs';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {
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

  ngOnInit() {
  }
  add() {
    this.ajouter = !this.ajouter
    console.log("addddddddd")
    console.log(this.ajouter)

  }
  sub(){}
}
