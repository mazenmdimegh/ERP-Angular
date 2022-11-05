import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FournisseurComponent } from './fournisseur.component';

@NgModule({
  imports: [ RouterModule, CommonModule, NgbModule ],
  declarations: [ FournisseurComponent ],
  exports: [ FournisseurComponent ]
})

export class FournisseurModel {}

 