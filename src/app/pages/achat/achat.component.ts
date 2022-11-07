import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import { CrudService } from 'app/Services/crud.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'achat.component.html',
  styleUrls: ['./achat.component.scss']
})

export class AchatComponent implements OnInit {
  ajouter: boolean = false;
  achats: any;
  spinner: any;

  // profileForm = this.fb.group({
  //   firstName: [''],
  //   lastName: ['']
  //   // address: this.fb.group({
  //   //   street: [''],
  //   //   city: [''],
  //   //   state: [''],
  //   //   zip: ['']
  //   // }),
  // });
  errorMessage = '';
  profileForm = new FormGroup({
    designation: new FormControl(''),
    reference: new FormControl(''),
    fournisseur: new FormControl(''),
    quantite: new FormControl(''),
    prix: new FormControl(''),
  });
  constructor(private crudservice: CrudService,private toastr: ToastrService) { }

  ngOnInit() {
    this.crudservice.getfacture_fournisseur().subscribe(
      data => {
        console.log(data);
        this.achats = data
      },
      err => {
        console.log(err.error);

      }
    )
  }

  onSubmit() {
    if(this.profileForm.valid){
      console.log("valid")
      this.spinner = true;
      console.log(this.profileForm.value)
      this.crudservice.AddfactFournisseur(this.profileForm.value).subscribe(
        data => {
          setTimeout(() => {
            this.ajouter = !this.ajouter
            this.ngOnInit();
            this.spinner = false;
            this.toastr.success(
              '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Achat Ajouté avec succée.</span>',
              "",
              {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-success alert-with-icon",
                positionClass: "toast-top-right"
              }
            );
          }, 1500);
        },
        err => {
          console.log("err.error");

        }
      )
    }else{
      console.log("invalid")
    } 
  }
  
  add() {
    this.ajouter = !this.ajouter
    console.log("addddddddd")
    console.log(this.ajouter)

  }
  sub() { 
    console.log("subbbbbbbb")
  }
}
