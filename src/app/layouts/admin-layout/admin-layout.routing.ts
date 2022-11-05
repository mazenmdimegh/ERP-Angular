import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AchatComponent } from 'app/pages/achat/achat.component';
import { VenteComponent } from 'app/pages/vente/vente.component';
import { ClientComponent } from 'app/pages/client/client.component';
import { StockComponent } from 'app/pages/stock/stock.component';
import { FournisseurComponent } from 'app/pages/fournisseur/fournisseur.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'achat',          component:  AchatComponent},
    { path: 'vente',          component:  VenteComponent},
    { path: 'stock',          component:  StockComponent},
    { path: 'client',          component:  ClientComponent},
    { path: 'fournisseur',          component:  FournisseurComponent},
    { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
