import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Observable } from 'rxjs';
import {FormGroup,FormControl} from '@angular/forms';
import { CrudService } from 'app/Services/crud.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {
  ajouter: boolean = false;
  Clients: any;
  spinner: any;
  profileForm = new FormGroup({
    nom: new FormControl(''),
    prénom: new FormControl(''),
    adresse: new FormControl(''),
    codePostal: new FormControl(''),
    tel: new FormControl(''),
  });
  constructor(private crudservice: CrudService,private toastr: ToastrService) { }

  ngOnInit() {
    this.crudservice.getClients().subscribe(
      data => {
        console.log(data);
        this.Clients = data
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
      this.crudservice.AddClient(this.profileForm.value).subscribe(
        data => {
          setTimeout(() => {
            this.ajouter = !this.ajouter
            this.ngOnInit();
            this.spinner = false;
            this.toastr.success(
              '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Client Ajouté avec succée.</span>',
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
  sub(){}
}
