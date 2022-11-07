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
import { CaisseModule } from "./pages/caisse/caisse.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
// import { AchatModel } from "./pages/achat/achat.module";
import { AchatComponent } from "./pages/achat/achat.component";
import { VenteComponent } from "./pages/vente/vente.component";
import { ClientComponent } from "./pages/client/client.component";
import { FournisseurComponent } from "./pages/fournisseur/fournisseur.component";
import { StockComponent } from "./pages/stock/stock.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FinanceLayoutComponent,
    AchatComponent,
    VenteComponent,
    ClientComponent,
    FournisseurComponent,
    StockComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    CaisseModule,
    SidebarFinanceModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    CommonModule,
    // FormsModule,
    // NgModule,
    // CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
