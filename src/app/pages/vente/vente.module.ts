import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenteComponent } from './vente.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ VenteComponent ],
    exports: [ VenteComponent ]
})

export class VenteModule {}
