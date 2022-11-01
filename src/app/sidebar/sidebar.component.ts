import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: 'vente',     title: 'Vente',         icon:'nc-bag-16',       class: '' },
    { path: 'achat',     title: 'Achat',         icon:'nc-cart-simple',       class: '' },
    { path: 'client',     title: 'Client',         icon:'nc-single-02',       class: '' },
    { path: 'fournisseur',     title: 'Fournisseur',         icon:'nc-bus-front-12',       class: '' },
    { path: 'stock',     title: 'Stock',         icon:'nc-box',       class: '' },
    // { path: 'icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: 'maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: 'notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: 'user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: 'table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: 'typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: 'upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
