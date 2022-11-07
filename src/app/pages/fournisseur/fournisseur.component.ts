import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'app/Services/crud.service';
import Chart from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})

export class FournisseurComponent implements OnInit {
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
    this.crudservice.getFournisseurs().subscribe(
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
      this.crudservice.AddFournisseur(this.profileForm.value).subscribe(
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
          console.log(err.error);
          this.spinner = false;
          this.toastr.error(
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"> Lajout du client est échoué .</span>',
            "",
            {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: "toast-top-right"
            }
          );

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
}
