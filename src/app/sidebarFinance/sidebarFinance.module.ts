import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarFinanceComponent } from './sidebarFinance.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarFinanceComponent ],
    exports: [ SidebarFinanceComponent ]
})

export class SidebarFinanceModule {}
