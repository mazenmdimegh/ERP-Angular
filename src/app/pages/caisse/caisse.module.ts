import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaisseComponent } from './caisse.component';

@NgModule({
    imports: [RouterModule, CommonModule, NgbModule],
    declarations: [CaisseComponent],
    exports: [CaisseComponent]
})

export class CaisseModule { }
