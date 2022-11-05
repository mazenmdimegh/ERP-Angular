import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockComponent } from './stock.component';

@NgModule({
  imports: [ RouterModule, CommonModule, NgbModule ],
  declarations: [ StockComponent ],
  exports: [ StockComponent ]
})

export class StockModel {}

 