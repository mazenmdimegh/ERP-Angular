import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FinanceLayoutComponent } from "./layouts/finance-layout/finance-layout.component";
import { SidebarFinanceModule } from "./sidebarFinance/sidebarFinance.module";
import { VenteModule } from "./pages/vente/vente.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AchatModel } from "./pages/achat/achat.module";
import { ClientModel } from "./pages/client/client.module";
import { StockModel } from "./pages/stock/stock.module";
import { FournisseurModel } from "./pages/fournisseur/fournisseur.module";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FinanceLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    SidebarFinanceModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    VenteModule,
    AchatModel,
    ClientModel,
    StockModel,
    CommonModule,
    FormsModule,
    FournisseurModel,
    // NgModule,
    // CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
