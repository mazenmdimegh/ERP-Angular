import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FinanceLayoutComponent } from './layouts/finance-layout/finance-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: 'Finance',
    component: FinanceLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/finance-layout/finance-layout.module').then(x => x.FinanceLayoutModule)
  }]},
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
]
