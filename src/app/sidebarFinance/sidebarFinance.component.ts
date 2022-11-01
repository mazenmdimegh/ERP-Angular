import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: 'caisse',          title: 'Caisse',              icon:'nc-money-coins',      class: '' },
    { path: 'reglements',          title: 'Reglements',              icon:'nc-paper',      class: '' },
    { path: 'operation',          title: 'Operations',              icon:'nc-book-bookmark',      class: '' },
    { path: 'icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: 'maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebarFinance-cmp',
    templateUrl: 'sidebarFinance.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarFinanceComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
